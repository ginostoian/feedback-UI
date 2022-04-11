import { v4 as uuidv4 } from 'uuid'

import { createContext, useState } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This feedback is from context',
            rating: 10
        }
    ])

    function handleDelete(id) {
        console.log(id)
        const newFeedback = feedback.filter(item => item.id !== id)
        console.log(newFeedback)
        setFeedback(newFeedback)
    }

    function addFeedback(newFeedback) {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return <FeedbackContext.Provider value={{
        feedback,
        handleDelete,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext