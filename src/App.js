import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signin/>}/>
                <Route path='/Layout' element={<Layout />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
