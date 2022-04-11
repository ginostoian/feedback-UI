import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from "./components/AboutIconLink"
import { FeedbackProvider } from "./context/FeedbackContext"

import About from "./pages/About"

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                    <AboutIconLink />
                                </>
                            }
                        />

                        <Route path='/about' element={<About />} />
                    </Routes>

                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App