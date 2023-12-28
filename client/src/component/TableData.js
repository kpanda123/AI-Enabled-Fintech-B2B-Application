import React, { useState, useEffect } from "react";
import axios from "axios";
//import "./styles.css";
import { CircularProgress } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from '@material-ui/core/Checkbox';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#283A46",
    color: "#97A1A9",
  },
  body: {
      fontSize: 14,
      color: "#FFFFFF",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#283A46",
        },
      "&:nth-of-type(even)": {
      backgroundColor:"#273D49CC",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
       // minWidth: 700,
      //color: "#FFFFFF",
       width: '100%',
    },
    container: {
        maxHeight: 400,
        overflowX: "initial"
  },
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function ascendingComparator(a, b, orderBy) {
  if (b[orderBy] > a[orderBy]) {
    return -1;
  }
  if (b[orderBy] < a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}



function TableData() {
  const classes = useStyles();
  let [responseData, setResponseData] = React.useState([]);
  let [isNext, isNextFunc] = React.useState(false);
  let [pageCount, setCount] = React.useState(1);
  const fetchData = () => {
    axios.get(
        //`https://picsum.photos/v2/list?page=${pageCount}&limit=10`
        `http://localhost:8082/1806026/PracServlet?page=${pageCount}&limit=10`,
       // {
      //      params:{
      //          _limit: 10,
      //          _page:pageCount,
      //      }
      //  }
        )
      .then((response) => {
        setResponseData([...responseData, ...response.data]);
      })
      
      .catch((error) => {
        console.log(error);
      });
  };
  function fetchMoreData() {
    setCount(pageCount + 1);
    if(pageCount >= 7)
    {
      isNextFunc(false);
    }
    fetchData();
  }

  useEffect( () =>{
    isNextFunc(true);
    fetchMoreData();
  },[])

  // console.log("h2h",responseData.length);
  // console.log("h2h1",isNext);
  // console.log("h2h2",pageCount);
  return (
    <Paper className={classes.table}>
      {/* <input
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      /> */}

      {/* {product
        .filter((item) => {
          if (search == "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return (
            <p>
              {item.name} - {item.price}
            </p>
          );
        })} */}
        <InfiniteScroll
        dataLength={responseData.length}
        next={fetchMoreData}
        hasMore={isNext}
        loader={
          // <div
          //   style={{ height: "80%", paddingLeft: "35%", overflow: "hidden" }}
          // >
          //   Loading More data Please
            <CircularProgress />
          // </div>
        }
      >

      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead >
            <TableRow >
              <StyledTableCell>Customer Name</StyledTableCell>
              <StyledTableCell>Customer #</StyledTableCell>
              <StyledTableCell>Invoice #</StyledTableCell>
              <StyledTableCell>Invoice Amount</StyledTableCell>
              <StyledTableCell>Due Date</StyledTableCell>
               <StyledTableCell>Predicted Payment Date</StyledTableCell>
                <StyledTableCell>Predicted Aging Bucket</StyledTableCell>
                <StyledTableCell>Notes</StyledTableCell>
            </TableRow>
          </TableHead>
          {/* <InfiniteScroll
        dataLength={responseData.length}
        next={fetchMoreData}
        hasMore={isNext}
        loader={
          // <div
          //   style={{ height: "80%", paddingLeft: "35%", overflow: "hidden" }}
          // >
          //   Loading More data Please
            <CircularProgress />
          // </div>
        }
      > */}
          <TableBody>
            {responseData
              // .filter((item) => {
              //   if (search == "") {
              //     return item;
              //   } else if (
              //     item.name.toLowerCase().includes(search.toLowerCase())
              //   ) {
              //     return item;
              //   }
              // })
              .map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {item.name_customer}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.cust_number}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.invoice_id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.total_open_amount}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.due_in_date}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {"-"}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                      {"-"}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                      {"-"}
                    </StyledTableCell>
                    {/* <StyledTableCell align="row">
                      {item.author}
                    </StyledTableCell> */}
                  </StyledTableRow>
                );
              })}
            </TableBody>
           
        </Table>
      </TableContainer>
      </InfiniteScroll>
    </Paper>
  );
}
export default TableData;