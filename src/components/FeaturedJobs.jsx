import { useEffect, useState } from "react";
import SectiionTitle from "./SectiionTitle";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

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
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary text-white"
        >
          View All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
