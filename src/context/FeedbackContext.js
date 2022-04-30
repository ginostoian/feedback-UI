import { createContext, useState, useEffect } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([])

    // Fetch feedback from Json Server
    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }

        })
        const data = await response.json()
        setFeedback(data)
    }

    useEffect(() => {
        fetchFeedback()
    }, [])

    async function handleDelete(id) {
        await fetch(`/feedback/${id}`, {
            method: 'DELETE'
        })

        const newFeedback = feedback.filter(item => item.id !== id)
        setFeedback(newFeedback)
    }

    async function addFeedback(newFeedback) {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()
        setFeedback([data, ...feedback])
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