import React, { useState } from 'react';

//material ui appbar
import { AppBar, Toolbar } from "@material-ui/core";
import sikhlo from "../../Components/images/sikhlo_logo.png"
import sikhlo2 from "../../Components/images/siklo_logo2.png"

//css file
import "./Header.css";
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate();
    console.log("header props", props)

    /*local state */
    const [Sidebar, setSidebar] = useState(false);

    /*function to open a sidebar */
    const setLoadingnewside = () => {
        document.getElementById("mySidenav").style.width = "250px";
        setSidebar(true)
    };

    /*function to close a sidebar */
    const Closesidebar = () => {
        document.getElementById("mySidenav").style.width = "0px";
        setSidebar(false)
    }
    return (
        <div className="topheader">
            <AppBar position="fixed" className="MainHeader">
                <Toolbar className="header_padding">
                        
                    <div className="d-flex">
                    <span className='pr-3'><img src={sikhlo} alt="" height="50" /></span>
                        <span className="toggle_button_sidebar mt-2">
                            <i class="fa fa-bars mr-2"
                                onClick={() => {
                                    props.setLoading();
                                }}>
                            </i></span>
                        <span className='pl-3 mt-1' style={{color:"#b0dd36"}}><h4>Sikhlo (Demo) School</h4></span>
                    </div>

                    <div className="header_grow" />
                    <div className="header_links">
                        <span className="d-flex " >
                       
                        <div className='pr-4'>
                        <div className='search_pcaceholder'>
                              <input form='form-control ' type="pcaceholder" placeholder='Search By Student Name'/><i class="fa fa-search search_barclass" ></i>
                            </div>
                            </div>
                            <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="calendar">
                            <div  className='pr-4 '>
                           
                            <i class="fa fa-calendar calander"></i>
                            </div>
                            </span>

                            <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Chat">
                            <div  className='pr-4 '>
                           
                            <i class="fa fa-whatsapp whatapp_header"></i>
                            </div>
                            </span>

                           
                          

                            <div class="dropdown ">
                                <div data-toggle="dropdown"><img src={sikhlo} alt="" height="40" className='hover_cursor' />
                                </div>
                                <div class="dropdown-menu animate slideIn dopdown_formatting">
                                    <div className="dropdownLinks p-2" onClick={() => navigate("/change-password")}>
                                        <span><i className="fa fa-cog mr-3" />Change Password</span>
                                    </div>
                                    <hr />
                                    <div className="dropdownLinks p-2 mt-1" onClick={() => navigate("/")}>
                                        <span><i className="fa fa-sign-out mr-3" />LogOut</span>
                                    </div>

                                </div>
                            </div>
                        </span>

                    </div>
                    <div className="mobile_Burger_Menu">
                        <span
                            className="logout_Pointer_cursor mr-3 text-right mt-2"
                            onClick={!Sidebar ? setLoadingnewside : Closesidebar}
                        >
                            <i class="fa fa-bars"></i>
                        </span>

                        <div id="mySidenav" className="sidenav">
                            <div className="cross_icon_style">
                                <i
                                    class="fa fa-times cursor"
                                    onClick={() => {
                                        document.getElementById("mySidenav").style.width =
                                            "0px";
                                        setSidebar(false);
                                    }}
                                ></i>
                            </div>
                            <div className="text-center">
                                <img src={sikhlo} alt="" />
                            </div>
                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/")}>
                                Dashboard
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                Admin User
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                User Manage
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                Leader Manage
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                Manage Created Template
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                Group List
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                Video List
                            </span>


                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                Change Password
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/")}>
                                Log Out
                            </span>

                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
