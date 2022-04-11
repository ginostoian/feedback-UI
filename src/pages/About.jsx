import { Link } from 'react-router-dom'

import Card from "../components/shared/Card"

function About() {
    return (
        <Card reverse={false}>
            <div className="about">
                <h1>About this project</h1>
                <p>This is a react application enabling you to leave feedback for a product or service!</p>
                <p>Version: 1.0.0</p>
                <Link to='/'>Go to Reviews</Link>
            </div>
        </Card>
    )
}

export default About
