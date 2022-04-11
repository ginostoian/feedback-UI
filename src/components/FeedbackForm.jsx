import { useState, useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm() {
    const { addFeedback } = useContext(FeedbackContext)
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    function handleTextChange(e) {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Review must be atleast 10 characters long.')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    function resetForm() {
        setText('')
        setRating(10)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            addFeedback(newFeedback)
            resetForm()
        }
    }

    return (
        <Card reverse={false}>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service?</h2>
                <RatingSelect defaultRating={rating} select={(rating) => { setRating(rating) }} />
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review" />
                    <Button type="submit" version='primary' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
