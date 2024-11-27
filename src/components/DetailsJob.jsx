import { useLoaderData, useParams } from "react-router-dom";

const DetailsJob = () => {
  const details = useLoaderData();
  const { jobId } = useParams();
  console.log(jobId);
  const item = details.find((detail) => detail.id == jobId);

  return (
    <div>
      <h1>{item.company_name}</h1>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="border md:col-span-3">
          <h2 className="text-2xl">Details coming soon</h2>
        </div>
        <div className="border">
          <h2 className="text-2xl">Side things</h2>
          <button className="btn btn-primary w-full">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsJob;
