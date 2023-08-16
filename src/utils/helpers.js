import Cookies from "js-cookie";

export const saveToken = async (token) => {
  try {
    Cookies.set("Bearer", token);
  } catch (error) {
    console.log("error saving token", error);
  }
};

export const isLogged = () => {
  try {
    let token = Cookies.get("Bearer");
    console.log(token);
    return token;
  } catch (error) {
    console.log("error saving token", error);
  }
};

export const hasUser = () => {
  try {
  } catch (error) {
    console.log("error saving token", error);
  }
};
