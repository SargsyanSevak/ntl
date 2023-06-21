import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { mapSLice } from "../store/slice";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(mapSLice.actions, dispatch);
};
