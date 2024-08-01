import { useState } from "react"

export const useAddReview = (setReviews) => {
  const [formData, setFormData] = useState({
    reviewerName: '',
    comment: '',
    rating: '5'
  })
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleAddReview = (e) => {
    e.preventDefault()
    const review = {
      reviewerName: formData.reviewerName,
      comment: formData.comment,
      rating: formData.rating,
      date: new Date()
    }
    setReviews(prev => [...prev, review])

    setFormData({
      reviewerName: '',
      comment: '',
      rating: '5'
    })
  }

  return {
    formData,
    handleChange,
    handleAddReview
  } 
}   