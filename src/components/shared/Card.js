import PropTypes from 'prop-types'

function Card(props) {
    return (
        <div className={`card ${props.reverse ? 'reverse' : null}`}>
            {props.children}
        </div>
    )
}

Card.defaultProps = {
    reverse: true
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card
