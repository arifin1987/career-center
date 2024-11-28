// Local Storage store value as a string
// If we want to use local storage data then we have to parse the data using JSON.parse;
// We need to find if any item is available with that name in the local storage. If available
// then we will parse the value. If not available it will give a empty string;

// then we will save those id which is not already exist in the cart

const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }

  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplications = getStoredJobApplication();
  const exists = storedJobApplications.find((jobId) => jobId === id);
  if (!exists) {
    storedJobApplications.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplications)
    );
  }
};

export { getStoredJobApplication, saveJobApplication };
