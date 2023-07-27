import { allProductsStart, allProductsSuccess, allProductsFailure } from "./slices/allProductsSlice";
import { userListStart, userListSuccess, userListFailure } from "./slices/userListSlice";
import axios from "axios";
import { apiDomain } from "../utils/utils";

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