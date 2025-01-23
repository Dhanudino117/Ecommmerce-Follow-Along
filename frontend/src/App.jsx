import './App.css'
import LoginPage from './pages/LoginPage'
import SignUpPage  from './pages/SignUpPage'
import {Routes,Route,BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
