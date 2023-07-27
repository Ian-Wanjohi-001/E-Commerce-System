import { allProductsStart, allProductsSuccess, allProductsFailure } from "./slices/allProductsSlice";
import { userListStart, userListSuccess, userListFailure } from "./slices/userListSlice";
import { loginStart, loginSuccess, loginFailure, logOut } from "./slices/userSlice";
import axios from "axios";
import { apiDomain } from "../utils/utils";
import { toast } from 'react-toastify';

//get products by title
export const getAllProducts = async (dispatch) => {
    dispatch(allProductsStart());
    console.log(`${apiDomain}/products`)
    try {
      const {data} = await axios.get(`${apiDomain}/products`);
   
      console.log(data);
      dispatch(allProductsSuccess(data));
    } catch (error) {
      console.log(error)
      dispatch(allProductsFailure());
    }
  }

  //get all users
  export const getAllUsers = async (dispatch) => {
    dispatch(userListStart());
   
    try {
      const {data} = await axios.get(`${apiDomain}/auth/users`);
     
      console.log(data);
      dispatch(userListSuccess(data));
    } catch (error) {
      console.log(error)
      dispatch(userListFailure());
    }
  }

//login user
export const loginUser = async(dispatch,userData)=>{
    
   
    console.log(userData,dispatch);
dispatch(loginStart());
    try{
const {data} = await axios.post(`${apiDomain}/auth/login`,userData);
dispatch(loginSuccess(data));
toast.info('Welcome back', {
position:'top-center'
})
// alert('logged in succesfully');
return true;


    } catch(err) {
console.log(err)
console.log(err.response)
toast.warning(err.response.data.error, {
    position:'top-center'
})

dispatch(loginFailure());
return false;
    }

}

//logout user
export const logOutuser = async(dispatch)=>{
    console.log(dispatch);
dispatch(logOut())
}