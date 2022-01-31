const logErrorWithLocation = (location, error) => {
  console.log({
    errorLocation: location,
    error: error.message,
  });
};

export { logErrorWithLocation };
