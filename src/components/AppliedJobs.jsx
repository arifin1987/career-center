import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    console.log(storedJobIds);
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));

      setAppliedJobs(jobsApplied);
      console.log(jobsApplied);
    }
  }, []);

  return <div>{appliedJobs.length}</div>;
};

export default AppliedJobs;
