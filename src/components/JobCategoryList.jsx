import { useEffect, useState } from "react";
import SectiionTitle from "./SectiionTitle";
import Category from "./Category";

const JobCategoryList = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <SectiionTitle
        heading={"Job Category List"}
        subHeading={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      />
      <h1>Categories: {categories.length}</h1>
      <div className="grid md:grid-cols-4 gap-4 m-4">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default JobCategoryList;
