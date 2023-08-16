import Cookies from "js-cookie";

export const saveToken = async (token) => {
  try {
    Cookies.set("Bearer", token);
  } catch (error) {
    console.log("error saving token", error);
  }
};
