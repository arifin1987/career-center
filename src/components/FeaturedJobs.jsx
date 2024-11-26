import { useEffect, useState } from "react";
import SectiionTitle from "./SectiionTitle";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <SectiionTitle
        heading={"Featured Jobs"}
        subHeading={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      />
      <h1>Featured Jobs: {jobs.length}</h1>
      <div className="grid md:grid-cols-2 gap-6 my-4 mx-2">
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
