import { FaTimes } from 'react-icons/fa'

import Card from "./shared/Card"

function FeedbackItem(props) {

    return (
        <Card reverse={false}>
            <div className="num-display">{props.item.rating}</div>
            <button onClick={() => props.handleDelete(props.item.id)} className="close">
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{props.item.text}</div>
        </Card>
    )
}

export default FeedbackItem
