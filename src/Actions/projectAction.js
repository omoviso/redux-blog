export const CreateProject = project => {
  return (dispatch, getState) => {
    //MAKE ASYNCHRONOUS CALL
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
