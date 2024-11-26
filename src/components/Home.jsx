import Banner from "./Banner";
import FeaturedJobs from "./FeaturedJobs";
import JobCategoryList from "./JobCategoryList";

const Home = () => {
  return (
    <div>
      <Banner />
      <JobCategoryList />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
