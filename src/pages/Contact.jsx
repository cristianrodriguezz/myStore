import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

  }

  return (
    <section className="max-w-4xl mx-auto p-6 text-white rounded-lg shadow-md mt-1">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {submitted && <p className="text-green-500 mb-4">Thank you for your message! We will get back to you soon.</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border-[1px] border-gray-700 rounded-lg bg-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 border-[1px] border-gray-700 rounded-lg bg-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-4 py-2 border-[1px] border-gray-700 rounded-lg bg-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border-[1px] border-gray-700 rounded-lg bg-transparent"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact
