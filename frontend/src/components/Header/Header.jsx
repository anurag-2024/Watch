import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import "./style.scss";
import ContentWrapper from "../ContentWrapper/ContentWrappper";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate=useNavigate();
    const gotoHome = () => {
        navigate("/");
    };
    const token=localStorage.getItem('token');
    const handlelogout=()=>{
      localStorage.removeItem('token');
      navigate('/');
    }
    return (
        <header className="header"> 
          <ContentWrapper>
            <div className="logo">
              <img src={logo} alt="" onClick={gotoHome} />
            </div>
            <ul className="menuItems">
             {token?(<li className="menuItem" onClick={handlelogout}>Logout</li>):(
              <>
              <li className="menuItem" onClick={()=>navigate("/login")}>Login</li>
              <li className="menuItem" onClick={()=>navigate("/register")} >Register</li></>)
             }
              <li className="menuItem"><HiOutlineSearch/></li>
            </ul>
          </ContentWrapper>
        </header>
    );
};
export default Header;