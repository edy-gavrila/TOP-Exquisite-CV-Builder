import { logErrorWithLocation } from "./errorManagement";
const localStorageDataIdentifier = "CVAppData";

const saveDataToLocalStorage = (data) => {
  try {
    localStorage.setItem(localStorageDataIdentifier, JSON.stringify(data));
  } catch (error) {
    logErrorWithLocation("saveDataToLocalStorage", error);
  }
};

const getDataFromLocalStorage = () => {
  const retreivedData = localStorage.getItem(localStorageDataIdentifier);
  if (!retreivedData) {
    throw new Error("No data in local storage");
  } else {
    return JSON.parse(retreivedData);
  }
};

export { saveDataToLocalStorage, getDataFromLocalStorage };
