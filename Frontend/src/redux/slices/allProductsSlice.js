import {createSlice} from '@reduxjs/toolkit'
const allProductsSlice = createSlice({
    name:"allProducts",
    initialState:{
        allProducts:null,
        isFetching:false,
        error:false
    },
    reducers:{
        allProductsStart : (state) => {
            state.isFetching = true;
            state.error = false;
        },
        allProductsSuccess: (state, action) => {
            state.isFetching = false;
            state.allProducts = action.payload;
            state.error = false;
        },
        allProductsFailure : (state) => {
            state.isFetching = false;
            state.error = true;
        },
        }
    })

export const {allProductsStart, allProductsSuccess, allProductsFailure} = allProductsSlice.actions;
export default allProductsSlice.reducer;   