import React from 'react';
import HOC from "../../Common/HOC.jsx"
import "../../Pages/AdmissionEnquiry/AdminsionEnquiry.css"

//material ui data table
import { Card, Grid, Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

import { useNavigate } from 'react-router-dom';
//dialog box
import {

    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
} from "@material-ui/core";
import { useState } from 'react';


function SetupFrontOffice(props) {
    const [EditDailogOpen, setEditDailogOpen] = useState("")
    const navigate = useNavigate();
    const classes = useStyles();

    const filterData = [
        {
            name: "Admission",
           
         
        },
        // {
        //     name: "Tarun singh",
        //     phone: "12345678",
        //     source: "21-12-2021	",
        //     Enquirydate: "21-12-2021	",
        //     Lastdate: "Outgoing",
         
        // },
        // {
        //     name: "arun singh",
        //     phone: "12345678",
        //     source: "21-12-2021	",
        //     Enquirydate: "21-12-2021	",
        //     Lastdate: "Incoming",
         
        // },
    ];

    // for pagination hadler 
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
        window.scrollTo(0, 0);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <div className="Page_width content_padding" >
                {/* <div className="pl-1 mr-3" >
                    <div className="Content_topHeading">
                        <h3> Add Visitor</h3>
                    </div>
                </div> */}
                <div>

                    <div className='Criteria_class'>

                        <Grid className="Component_main_grid">
                        <Grid item md={2} className="p-2">
                             <div class="form-group">
                                            <label >Purpose</label>
                                          
                                        </div>
                                        <div class="form-group">
                                            <label >Complain Type</label>
                                          
                                        </div>
                                        <div class="form-group">
                                            <label >Source</label>
                                          
                                        </div>
                                        <div class="form-group">
                                            <label >Reference</label>
                                          
                                        </div>
                            </Grid>
                            <Grid item md={3} className="p-2">
                                <h3> Add Purpose</h3>
                                <Grid className="Component_main_grid">
                                  
                                  
                                  
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label >Purpose *</label>
                                            <input  type="text" class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label >Description</label>
                                            <input type="text" class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                  
                                </Grid>

                            </Grid>

                            <Grid item md={7} className="p-2">
                                <h4>Purpose List</h4>
                                <div className="mb-3">
                                    <Card className="p-2 Card_shadow mt-2 card_height">

                                        <Grid className="Component_main_grid">
                                            <Grid item md={3} className="p-2">
                                                <input
                                                    type="text"
                                                    placeholder="Search..."
                                                    className="form-control"
                                                />
                                            </Grid>
                                            <Grid item md={7} className="p-3"></Grid>
                                        </Grid>
                                        <TableContainer component={Paper}>
                                            <Table
                                                className={classes.table}
                                                aria-label="customized table"

                                            >
                                                <TableHead>
                                                    <TableRow>
                                                        <StyledTableCell
                                                            align="left"
                                                            className="table_header"
                                                        >
                                                          Purpose
                                                        </StyledTableCell>
                                                       
                                                    </TableRow>
                                                </TableHead>
                                                {filterData.length > 0 ? (  <TableBody>
                                                    {(rowsPerPage > 0
                                                        ? filterData.slice(
                                                            page * rowsPerPage,
                                                            page * rowsPerPage +
                                                            rowsPerPage
                                                        )
                                                        : filterData
                                                    ).map((row) => (
                                                        <StyledTableRow>
                                                            <StyledTableCell
                                                                align="left"
                                                            >
                                                                {row.name}
                                                            </StyledTableCell>
                                                          
                                                            <StyledTableCell
                                                                align="right"
                                                            >
                                                                <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                                                 
                                                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                                    <i class="fa fa-times" aria-hidden="true"></i>
                                                                </div>
                                                            </StyledTableCell>

                                                        </StyledTableRow>
                                                    ))}
                                                </TableBody>) : (<span className="text-danger mt-3 pt-3">No data available in table</span>)}
                                              
                                            </Table>
                                            <TablePagination
                                                true
                                                rowsPerPageOptions={false}
                                                component="div"
                                                count={filterData.length}
                                                rowsPerPage={rowsPerPage}
                                                page={page}
                                                onChangePage={handleChangePage}
                                                onChangeRowsPerPage={
                                                    handleChangeRowsPerPage
                                                }
                                            />
                                        </TableContainer>
                                    </Card>
                                </div>
                            </Grid>
                        </Grid>
                    </div>





                </div>
             

            </div>


        </>
    )
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },

});

export default HOC(SetupFrontOffice)
