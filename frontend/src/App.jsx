import './App.css'
import LoginPage from './pages/LoginPage'
import SignUpPage  from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import CreatePage from './pages/createPage'
import MyProducts from './pages/myProduct'
import {Routes,Route,BrowserRouter} from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path='/create-product' element={<CreatePage/>}/>
        <Route path="/my-products" element={<MyProducts/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
