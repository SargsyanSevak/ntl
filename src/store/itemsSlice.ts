import { createSlice } from "@reduxjs/toolkit";
import {
  addNewItemThunk,
  deleteItemThunk,
  getLoadThunk,
  getUserLoadsThunk,
  updateNewItemThunk,
} from "./asyncThunk";
//
let initialState: any = {
  load: [
    // {
    //   id: "",
    //   age: "",
    //   date: "",
    //   truckType: "",
    //   loadType: "",
    //   pickup: "",
    //   delivery: "",
    //   distance: null,
    //   customerInfo: { companyName: "", email: "", phoneNumber: "" },
    //   subCustomerInfo: { email: "", phoneNumber: "" },
    //   length: null,
    //   weight: null,
    //   rate: null,
    //   status: "",
    //   commodity: "",
    //   comment: "",
    // },
  ],
  userLoads: [
    // {
    //   id: "",
    //   age: "",
    //   date: "",
    //   truckType: "",
    //   loadType: "",
    //   pickup: "",
    //   delivery: "",
    //   distance: null,
    //   customerInfo: { companyName: "", email: "", phoneNumber: "" },
    //   subCustomerInfo: { email: "", phoneNumber: "" },
    //   length: null,
    //   weight: null,
    //   rate: null,
    //   status: "",
    //   commodity: "",
    //   comment: "",
    // },
  ],
  isLoading: true,
  isEmpty: false,
};

const itemSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state) => {
      state.load = [
        {
          id: "",
          age: "",
          date: "",
          truckType: "",
          loadType: "",
          pickup: "",
          delivery: "",
          distance: null,
          customerInfo: { companyName: "", email: "", phoneNumber: "" },
          subCustomerInfo: { email: "", phoneNumber: "" },
          length: null,
          weight: null,
          rate: null,
          status: "",
          commodity: "",
          comment: "",
        },
      ];
      state.userLoad = [
        {
          id: "",
          age: "",
          date: "",
          truckType: "",
          loadType: "",
          pickup: "",
          delivery: "",
          distance: null,
          customerInfo: { companyName: "", email: "", phoneNumber: "" },
          subCustomerInfo: { email: "", phoneNumber: "" },
          length: null,
          weight: null,
          rate: null,
          status: "",
          commodity: "",
          comment: "",
        },
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLoadThunk.fulfilled, (state, { payload }) => {
      state.load = payload.data;
      if (payload.request.status === 200) {
        if (!payload.data?.length) {
          state.isEmpty = true;
        }
        state.isLoading = false;
      } else {
        state.isLoading = true;
      }
    });
    builder.addCase(getUserLoadsThunk.fulfilled, (state, { payload }) => {
      state.userLoads = payload.data;
    });
    builder.addCase(addNewItemThunk.fulfilled, (state, { payload }) => {
      state.userLoads.push(payload);
    });
    builder.addCase(updateNewItemThunk.fulfilled, (state, { payload }) => {
      state.userLoads = state.userLoads.map(
        (el: any) =>{
          if(el._id === payload._id){
            return payload
          }else{
            return el
          }
        }
      );
    });
    builder.addCase(deleteItemThunk.fulfilled, (state, { payload }) => {
      const deletedItemId = payload.id;
      state.userLoads = state.userLoads.filter(
        (el: any) => el._id !== deletedItemId
      );
    }); 
  },
});

export const { removeUser } = itemSlice.actions;

export default itemSlice.reducer;
