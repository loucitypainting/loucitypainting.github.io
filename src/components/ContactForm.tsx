import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'

/*
 * EmailJS config — shared with the review form's account.
 * QUOTE_TEMPLATE defaults to the existing working template so quote requests
 * send out of the box. For nicer formatting, create a dedicated template in
 * the EmailJS dashboard (fields: from_name, from_email, message, to_name) and
 * drop its ID here.
 */
const EMAILJS = {
  serviceId: 'service_9t5fgey',
  publicKey: 'blLa8yNwhr4Sg24rl',
  quoteTemplate: 'template_fd73mji',
}

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
  service?: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service type'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details (at least 10 characters)'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const serviceLabel =
        formData.service.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

      const message =
        `New quote request from the website.\n\n` +
        `Service: ${serviceLabel}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n\n` +
        `Message:\n${formData.message}`

      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.quoteTemplate,
        {
          from_name: formData.name,
          from_email: formData.email,
          message,
          to_name: 'Lou City Painting Team',
        },
        EMAILJS.publicKey,
      )

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
      setErrors({})
    } catch (error) {
      console.error('Quote request failed to send:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = (fieldName: keyof FormErrors) => `
    w-full px-4 py-3 border transition-all duration-200 font-sans text-sm text-ink bg-white outline-none
    ${errors[fieldName]
      ? 'border-red-400 focus:border-red-500'
      : 'border-ink/[0.12] focus:border-sienna hover:border-ink/30'
    }
  `

  return (
    <section className="bg-white border border-ink/[0.08] p-6 lg:p-10">
      <header className="mb-8">
        <p className="label-tag mb-3">Get in Touch</p>
        <h2 className="font-display font-black text-2xl lg:text-3xl text-ink mb-3 leading-tight">
          Request a Free Quote
        </h2>
        <p className="font-sans font-light text-slate text-sm leading-relaxed">
          Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
        </p>
      </header>
      
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block font-sans font-semibold text-xs uppercase tracking-widest text-ink/60 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={!!errors.name}
              className={inputClasses('name')}
              placeholder="John Doe"
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-red-600 flex items-center" role="alert">
                <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.name}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block font-sans font-semibold text-xs uppercase tracking-widest text-ink/60 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
              className={inputClasses('email')}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-600 flex items-center" role="alert">
                <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.email}
              </p>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block font-sans font-semibold text-xs uppercase tracking-widest text-ink/60 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-ink/[0.12] focus:border-sienna hover:border-ink/30 transition-all duration-200 font-sans text-sm text-ink bg-white outline-none"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="service" className="block font-sans font-semibold text-xs uppercase tracking-widest text-ink/60 mb-2">
              Service Type *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              aria-describedby={errors.service ? "service-error" : undefined}
              aria-invalid={!!errors.service}
              className={inputClasses('service')}
            >
              <option value="">Select a service</option>
              <option value="residential-interior">Residential - Interior Painting</option>
              <option value="residential-exterior">Residential - Exterior Painting</option>
              <option value="residential-cabinet">Residential - Cabinet Refinishing</option>
              <option value="commercial-office">Commercial - Office Painting</option>
              <option value="commercial-retail">Commercial - Retail Painting</option>
              <option value="commercial-medical">Commercial - Medical Facility</option>
              <option value="other">Other (please specify)</option>
            </select>
            {errors.service && (
              <p id="service-error" className="mt-2 text-sm text-red-600 flex items-center" role="alert">
                <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.service}
              </p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block font-sans font-semibold text-xs uppercase tracking-widest text-ink/60 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={!!errors.message}
            className={`${inputClasses('message')} resize-none`}
            placeholder="Please tell us about your painting project, property size, and preferred timeline..."
          ></textarea>
          {errors.message && (
            <p id="message-error" className="mt-2 text-sm text-red-600 flex items-center" role="alert">
              <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.message}
            </p>
          )}
        </div>
        
        {submitStatus === 'success' && (
          <div className="bg-green-50 border-l-4 border-green-500 text-green-800 px-5 py-4 anim-fade-in" role="alert">
            <p className="font-sans font-semibold text-sm">Thank you for your inquiry!</p>
            <p className="font-sans text-xs mt-0.5">We'll get back to you within 24 hours.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-800 px-5 py-4 anim-fade-in" role="alert">
            <p className="font-sans font-semibold text-sm">Something went wrong.</p>
            <p className="font-sans text-xs mt-0.5">Please try again or contact us directly.</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 font-sans font-semibold text-sm uppercase tracking-widest text-white transition-all duration-200 ${
            isSubmitting
              ? 'bg-slate cursor-not-allowed'
              : 'bg-sienna hover:bg-sienna-light'
          }`}
        >
          {isSubmitting ? 'Sending…' : 'Send Message →'}
        </button>
      </form>

      <footer className="mt-5">
        <p className="font-sans text-xs text-slate-light">
          * Required fields. We respect your privacy and will never share your information.
        </p>
      </footer>
    </section>
  )
}

export default ContactForm