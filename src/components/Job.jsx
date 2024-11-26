import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = job;
  return (
    <div className="border-2 p-4">
      <img src={logo} alt="" />
      <h2>{job_title}</h2>
      <p>{company_name}</p>
      <button className="border-2 border-blue-500 text-blue-500 px-2 mr-2 rounded-sm">
        {remote_or_onsite}
      </button>
      <button className="border-2 border-blue-500 text-blue-500 px-2 mr-2 rounded-sm">
        {job_type}
      </button>
      <div className="flex gap-6">
        <p>{location}</p>
        <p>{salary}</p>
      </div>

      <button className="bg-blue-600 text-white p-2 rounded">
        <Link to={`/featured/${id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default Job;
