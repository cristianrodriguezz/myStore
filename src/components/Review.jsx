import { getTimeAgo } from "../utils/formatDate"
import Star from "./Star"


const Review = ({review} ) => {
  return (
    <div key={review.reviewerEmail} className="review border-b border-gray-200 pb-2 mb-1">
      <p><strong>{review?.reviewerName}</strong></p>
      <div className="flex flex-col ml-5">
        <Star rating={review?.rating} />
      </div>
      <div className="ml-5">
        <p>{review?.comment}</p>
        <p className="text-sm font-light text-gray-500 mt-5">{getTimeAgo(new Date(review?.date))}</p>
      </div>
    </div>
  )
}

export default Review