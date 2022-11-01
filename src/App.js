import "./App.css";
import Header from "./components/Header/Header";
import LoginScreen from "./screens/LoginScreen";
import {  Route, Routes, Outlet, useNavigate,  } from "react-router-dom";
import { Container } from "react-bootstrap";
import Homescreen from "./screens/Homescreen";
import Page404 from "./screens/Page404";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Layout = () => {
  return (
    <div className="App">
      <div>
        <Container><Outlet/></Container>
      </div>
    </div>
  );
};


const App = () => {
  const {accessToken,loading} = useSelector(state=>state.auth)
  const navigate = useNavigate()
  useEffect(()=>{
      if(!loading && !accessToken){
            navigate('/auth')
      }
  },[accessToken,loading,navigate])
  return (
    
      <Routes>
        <Route element={<Layout/>}>
        <Route exact path='/' element={<Homescreen/>}/>
        <Route exact path='/error' element={<Page404/>}/>
        </Route>
        
        <Route path='/auth' element={<LoginScreen />} />
        <Route path='/*' element={<Page404/>} />
      </Routes>
    
  );
};

export default App;
