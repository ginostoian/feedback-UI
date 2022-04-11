import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext)

    //calculate average of ratings
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating {average >= 1 ? average : '- No ratings'}</h4>
        </div>
    )
}

export default FeedbackStats
