import { logErrorWithLocation } from "./errorManagement";
const localStorageDataIdentifier = "CVAppData";

const saveDataToLocalStorage = (data) => {
  try {
    localStorage.setItem(localStorageDataIdentifier, JSON.stringify(data));
  } catch (error) {
    logErrorWithLocation("saveDataToLocalStorage", error);
  }
};

const getDataFromLocalStorage = (validKeys = []) => {
  let retrievedData = localStorage.getItem(localStorageDataIdentifier);
  if (!retrievedData) {
    throw new Error("No data in local storage");
  } else {
    retrievedData = JSON.parse(retrievedData);
    return eliminateExtraKeys(validKeys, retrievedData);
  }
};

const eliminateExtraKeys = (validKeys, objectToClean) => {
  if (validKeys.length === 0) {
    return objectToClean;
  }
  try {
    const cleanedObject = {};
    validKeys.forEach((key) => {
      cleanedObject[key] = objectToClean[key];
    });
    return { ...cleanedObject };
  } catch (e) {
    logErrorWithLocation("eliminateExtraKeys", e);
    return objectToClean;
  }
};

export { saveDataToLocalStorage, getDataFromLocalStorage };
