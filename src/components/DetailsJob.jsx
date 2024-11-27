import { useLoaderData, useParams } from "react-router-dom";

const DetailsJob = () => {
  const details = useLoaderData();
  const { jobId } = useParams();
  const item = details.find((detail) => detail.id == jobId);

  return (
    <div>
      <h1>{item.company_name}</h1>
    </div>
  );
};

export default DetailsJob;
