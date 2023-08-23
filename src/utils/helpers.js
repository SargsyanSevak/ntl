import Cookies from "js-cookie";

export const saveToken = (token) => {
  try {
    Cookies.set("Bearer", token);
  } catch (error) {
    console.log("error saving token", error);
  }
};

export const isLogged = () => {
  try {
    let token = Cookies.get("Bearer");
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

export const LogOutUser = (token) => {
  try {
    Cookies.remove("Bearer", token);

  } catch (error) {
    console.log("error saving token", error);
  }
};

export const recoverToken = (token) => {
  try {
    Cookies.set("token", token);
  } catch (error) {
    console.log("error saving token", error);
  }
};

export const recoverVerifyToken = (token) => {
  try {
    Cookies.set("verifyToken", token);
  } catch (error) {
    console.log("error saving token", error);
  }
};

export const getTokens = () => {
  try {
    let token = Cookies.get("token");
    let verifyToken = Cookies.get("verifyToken");

    return {
      token,
      verifyToken,
    };
  } catch (error) {
    console.log("error saving token", error);
  }
};
