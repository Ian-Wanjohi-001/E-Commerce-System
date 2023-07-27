import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/apiCall";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  CircularProgress,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Customers() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList?.userList);
  const loading = useSelector((state) => state.userList?.loading);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllUsers(dispatch);
  }, [dispatch]);

  const handleDeleteUser = (userId) => {
    // Implement your logic to delete the user here
    console.log("Delete user with ID:", userId);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedUsers = userList.slice(startIndex, endIndex);

  return (
    <div style={{width:'60vw', margin:'10px auto'}}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
        <h2 style={{margin:'0 300px 10px', fontSize:'30px', color:"blue", fontWeight:'bold'}}>Customer Details</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                <TableCell>User ID</TableCell> 
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedUsers.map((user) => (
                  <TableRow key={user.UserID}>
                    <TableCell>{user.UserID}</TableCell>
                    <TableCell>{user.Username}</TableCell>
                    <TableCell>{user.Email}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="delete"
                        color="secondary"
                        onClick={() => handleDeleteUser(user.UserID)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div style={{display:'flex',justifyContent:'space-between', marginTop:"20px"}}>
            <Button
              variant="contained"
              color="primary"
              disabled={currentPage === 1}
              onClick={handlePreviousPage}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={endIndex >= userList.length}
              onClick={handleNextPage}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Customers;
