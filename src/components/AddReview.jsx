import { useAddReview } from "../hooks/useAddReview"

const AddReview = ({setReviews}) => {

  const { formData, handleChange, handleAddReview } = useAddReview(setReviews)

  return (
    <form onSubmit={handleAddReview} className="flex flex-col justify-center gap-2 text-white mt-2">
      <input
        name="reviewerName"
        value={formData.reviewerName}
        onChange={handleChange}
        type="text"
        placeholder="Your name"
        className="border-[1px] bg-transparent border-gray-500  rounded p-2"
      />
      <input
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        type="text"
        placeholder="Your review"
        className="border-[1px] bg-transparent border-gray-500  rounded p-2"
      />
      <div className="flex items-center gap-2">
        <label htmlFor="star" className="text-white">Star:</label>  
        <select
          name="rating"
          id="star"
          value={formData.rating}
          onChange={handleChange}
          className="border-[1px]  border-gray-500 text-black rounded "
        >
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </div>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
        Add Review
      </button>
    </form>
  )
}

export default AddReview