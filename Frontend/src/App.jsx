import './App.css'
import Chat from './components/Chat'
import Message from './components/Message/Message'
import MessageContainer from './components/Message/MessageContainer'
import Sendbar from './components/SendBar/Sendbar'
import { RxHamburgerMenu } from "react-icons/rx";
import Search from './components/sidebar/Search'
import Sidebar from './components/sidebar/Sidebar'
import True  from "./components/True/True";
import StudentList from './components/sidebar/StudentList'
import { CiChat2 } from "react-icons/ci";
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import Header from './components/Header/Header'
import { BrowserRouter as Router,Routes,Route } from'react-router-dom'
import HeaderA from './components/Header/HeaderA'
import Layout from './components/layout/Layout'
import Course from './components/Class/Course'
import Loader from './components/loader/Loader'
import { useAuthContext } from './context/AuthContext'
import PreExams from './pages/preExams/PreExams'

function App() {


  return (
    <>
    {/* <True/> */}
    <Layout/>
    {/* <PreExams/> */}
    {/* <Loader/> */}
    {/* <Home/> */}
      {/* <Header/> */}
    
    {/* <Login/>
    <SignUp/>
    <Chat/> */}
    </>
  )
}

export default App
