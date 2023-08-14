export const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem("@token", token);
  } catch (error) {
    console.log("error saving token", error);
  }
};
