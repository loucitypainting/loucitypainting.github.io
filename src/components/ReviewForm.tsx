import { useState } from 'react';
import { Star } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  rating: number;
  review: string;
}

// To configure EmailJS:
// 1. Go to your EmailJS dashboard → Email Templates
// 2. Create a new template with ID 'template_review'
// 3. Use this email template content:
//    Subject: New Review - {{rating}} stars from {{from_name}}
//    Body: Hi {{to_name}}, You received a new review:
//          Customer: {{from_name}} ({{from_email}})
//          Rating: {{rating}} stars
//          Review: {{message}}

const ReviewForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    rating: 5,
    review: ''
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_9t5fgey';
      const templateId = 'template_fd73mji';
      const publicKey = 'blLa8yNwhr4Sg24rl';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        rating: formData.rating,
        message: formData.review,
        to_name: 'Lou City Painting Team'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        rating: 5,
        review: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 lg:p-10">
      <header className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-800">Leave a Review</h2>
        <p className="text-gray-600 leading-relaxed">We'd love to hear about your experience with our painting services!</p>
      </header>
      
      <form 
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 focus:outline-none hover:border-gray-400 transition-all duration-300 text-base"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 focus:outline-none hover:border-gray-400 transition-all duration-300 text-base"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Rating
          </label>
          <div className="flex gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="focus:outline-none transition-transform hover:scale-110 focus:ring-2 focus:ring-primary-200 rounded"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoveredRating || formData.rating)
                      ? 'fill-primary-800 text-primary-800'
                      : 'fill-gray-300 text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500">Click to rate your experience</p>
          <input type="hidden" name="rating" value={formData.rating} />
        </div>

        <div>
          <label htmlFor="review" className="block text-sm font-semibold text-gray-700 mb-2">
            Your Review
          </label>
          <textarea
            id="review"
            name="review"
            required
            rows={5}
            value={formData.review}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 focus:outline-none hover:border-gray-400 transition-all duration-300 text-base resize-none"
            placeholder="Tell us about your experience with our painting services..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className={`group w-full py-4 px-6 font-semibold rounded-xl transition-all duration-300 text-lg border-2 transform hover:scale-[1.02] hover:-translate-y-0.5 shadow-soft hover:shadow-medium ${
            isSubmitted 
              ? 'bg-green-50 border-green-500 text-green-700 cursor-default'
              : isSubmitting
              ? 'bg-gray-50 border-gray-400 text-gray-500 cursor-not-allowed'
              : 'bg-white border-primary-800 text-primary-800 hover:bg-primary-50 hover:border-primary-900'
          }`}
        >
          {isSubmitted ? 'Submitted!' : isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </section>
  );
}

export default ReviewForm;