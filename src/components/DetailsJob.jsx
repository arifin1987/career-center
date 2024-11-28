import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../utility/localstorage";

const DetailsJob = () => {
  const details = useLoaderData();
  const { jobId } = useParams();
  const intId = parseInt(jobId);
  console.log(intId);
  const item = details.find((detail) => detail.id === intId);
  const handleApplyJob = () => {
    saveJobApplication(intId);
  };

  return (
    <div>
      <h1>{item.company_name}</h1>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="border md:col-span-3">
          <h2 className="text-2xl">Details coming soon</h2>
        </div>
        <div className="border">
          <h2 className="text-2xl">Side things</h2>
          <button onClick={handleApplyJob} className="btn btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsJob;
