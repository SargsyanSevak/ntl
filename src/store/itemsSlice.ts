import { createSlice } from "@reduxjs/toolkit";
import { addNewItemThunk, deleteItemThunk, getLoadThunk, getUserLoadsThunk } from "./asyncThunk";
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
  isEmpty:false
};

const loadSlice = createSlice({
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

      state.load = payload.data
      if(payload.request.status === 200){
        if(!payload.data?.length){
          state.isEmpty = true
        }
        state.isLoading = false
      }else{
        state.isLoading = true
      }
    });
    builder.addCase(getUserLoadsThunk.fulfilled, (state, { payload }) => {
      state.userLoads = payload.data;
    });
    builder.addCase(addNewItemThunk.fulfilled, (state, { payload }) => {
      state.userLoads.push(payload);
    });
    builder.addCase(deleteItemThunk.fulfilled, (state, { payload }) => {
      console.log(payload)

      state.userLoads= state.userLoads.filter((el:any)=> el._id != payload.id)
      
      console.log(payload)
    });
  },
});

export const { removeUser } = loadSlice.actions;

export default loadSlice.reducer;
