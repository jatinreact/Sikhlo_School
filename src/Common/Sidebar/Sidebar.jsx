import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import {
    faFile,
    faLaptopHouse,
    faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
    const navigate = useNavigate();
    return (
        <>

            <div className="sidebar_in_mobile_view">
                <ProSidebar collapsed={props.isloading}>
                    <Menu iconShape="circle">
                        <SubMenu title="Front Office" icon={<FontAwesomeIcon icon={faPeopleArrows} />}>
                            <MenuItem onClick={() => navigate("/enquiry")}>Admission Enquiry</MenuItem>
                            <MenuItem onClick={() => navigate("/visitor-book")}>Visitor Book</MenuItem>
                            <MenuItem onClick={() => navigate("/phone-call-log")}>Phone Call Log</MenuItem>
                            <MenuItem onClick={() => navigate("/dispatch")}>Postal Dispatch</MenuItem>
                            <MenuItem onClick={() => navigate("/receive")}>Postal Receive</MenuItem>
                            <MenuItem onClick={() => navigate("/complain")}>Complain</MenuItem>
                            <MenuItem onClick={() => navigate("/visitorspurpose")}>Setup Front Office</MenuItem>

                        </SubMenu>

                        <SubMenu title="Student Information" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Student Details</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Student Admission</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Online Admission</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Disabled Students</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Multi Class Student</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Bulk Delete</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Student Categories</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Student House</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Disable Reason</MenuItem>

                        </SubMenu>



                        <SubMenu title="Fees Collection" icon={<FontAwesomeIcon icon={faPeopleArrows} />}>
                            <MenuItem onClick={() => navigate("#")}>Collect Fees</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Search Fees Payment</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Search Due Fees</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Fees Master</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Fees Group</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Fees Type</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Fees Discount</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Fees Carry Forward</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Fees Reminder</MenuItem>

                        </SubMenu>


                        <SubMenu title="Income" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Add Income</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Search Income</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Income Head</MenuItem>


                        </SubMenu>

                        <SubMenu title="Expenses" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Add Expense</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Search Expense</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Expense Head</MenuItem>


                        </SubMenu>

                        <SubMenu title="Attendance" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Student Attendance</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Attendance By Date</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Approve Leave</MenuItem>


                        </SubMenu>
                        <SubMenu title="Examinations" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Exam Group</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Exam Schedule</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Exam Result</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Design Admit Card</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Print Admit Card</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Design Marksheet</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Print Marksheet</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Marks Grade</MenuItem>


                        </SubMenu>

                        <SubMenu title="Examinations" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Exam Group</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Exam Schedule</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Exam Result</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Design Admit Card</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Print Admit Card</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Design Marksheet</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Print Marksheet</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Marks Grade</MenuItem>


                        </SubMenu>

                        <SubMenu title="Online Examinations" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Online Exam</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Question Bank</MenuItem>

                        </SubMenu>
                        <SubMenu title="Lesson Plan" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Manage Lesson Plan</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Manage Syllabus Status</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Lesson</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Topic</MenuItem>

                        </SubMenu>
                        <SubMenu title="Academics" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Class Timetable</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Teachers Timetable</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Assign Class Teacher</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Promote Students</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Subject Group</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Subjects</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Class</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Sections</MenuItem>

                        </SubMenu>
                        <SubMenu title="Human Resource" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Staff Directory</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Staff Attendance</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Payroll</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Approve Leave Request</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Apply Leave</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Teachers Rating</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Department</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Designation</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Disabled Staff</MenuItem>

                        </SubMenu>

                        <SubMenu title="Communicate" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Notice Board</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Send Email</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Send SMS</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Email / SMS Log</MenuItem>


                        </SubMenu>

                        <SubMenu title="Zoom Live Classes" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Live Classes</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Live Meeting</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Live Classes Report</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Live Meeting Report</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Setting</MenuItem>


                        </SubMenu>
                        <SubMenu title="Gmeet Live Classes" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Live Classes</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Live Meeting</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Live Classes Report</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Live Meeting Report</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Setting</MenuItem>


                        </SubMenu>

                        <SubMenu title="Download Center" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Upload Content</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Assignments</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Study Material</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Syllabus</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Other Downloads</MenuItem>


                        </SubMenu>
                        <SubMenu title="Homework" icon={<FontAwesomeIcon icon={faFile} />}>


                            <MenuItem onClick={() => navigate("#")}> Add Homework</MenuItem>
                        </SubMenu>

                        <SubMenu title="Library" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Book List</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Issue Return</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Add Student</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Add Staff Member</MenuItem>

                        </SubMenu>

                        <SubMenu title="Inventory" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Issue Item</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Add Item Stock</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Add Item</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Item Category</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Item Store</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Item Supplier</MenuItem>

                        </SubMenu>
                        <SubMenu title="Transport" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Routes</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Vehicles</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Assign Vehicle</MenuItem>
                           

                        </SubMenu>
                        <SubMenu title="Certificate" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Student Certificate</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Generate Certificate</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Student ID Card</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Generate ID Card</MenuItem>
                           

                        </SubMenu>
                        <SubMenu title="Front CMS" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Event</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Gallery</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>News</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Media Manager</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Pages</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Menus</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Banner Images</MenuItem>
                           

                        </SubMenu>
                        <SubMenu title="Alumni" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Manage Alumni</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Events</MenuItem>
                          
                        </SubMenu>
                        <SubMenu title="Reports" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Student Information</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Finance</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Attendance</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Examinations</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Online Examinations</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Lesson Plan</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Human Resource</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Library</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Inventory</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Transport</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Alumni</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>User Log</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Audit Trail Report</MenuItem>
                          
                        </SubMenu>
                        <SubMenu title="System Settings" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>General Setting</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Session Setting</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Notification Setting</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>SMS Setting</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Email Setting</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Payment Methods</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Print Header Footer</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Front CMS Setting</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Roles Permissions</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Backup / Restore</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Languages</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Users</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Modules</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Custom Fields</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>System Fields</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Student Profile Update</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>System Update</MenuItem>
                            
                           
                          
                        </SubMenu>




                    </Menu>
                </ProSidebar>
            </div>

        </>
    );
}

export default Sidebar;
