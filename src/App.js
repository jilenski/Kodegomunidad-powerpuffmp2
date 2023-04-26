import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SinglePost from "./components/singlePost/SinglePost";
import Create from "./Create";
import {
BrowserRouter as Router,
Routes,
Route,
Link
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Profile from "./pages/profile/Profile";
import RegisterForm from "./pages/registerForm/RegisterForm";
import { useMediaQuery } from 'react-responsive';


function App() {

  //const isDesktopOrLaptop = useMediaQuery({
    //query: '(min-width: 1224px)'
   // })
   // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
   // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
   // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    //const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const user =false;

  return (
  
    <Router>
      <TopBar/>

      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="/register" element = {<Register/>}/>
        <Route exact path="/login" element = {<Login/>}/>
        <Route exact path="/write" element = {<Write/>}/>
        <Route exact path="/singlepost" element = {<SinglePost/>}/>
        <Route exact path="/settings" element = {<Settings/>}/>
        <Route exact path="/single" element = {<Single/>}/>
        <Route exact path="/create" element = {<Create/>}/>
        <Route exact path ="/profile" element ={<Profile/>}/>
        <Route exact path = "/registerform" element = { <RegisterForm />} />
     
        
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
