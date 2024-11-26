import img from "../../public/assets/images/user.png";

const Banner = () => {
  return (
    <div className="md:flex justify-between items-center ">
      <div>
        <h1 className="text-4xl font-semibold">
          One Step Closer To Your <br />{" "}
          <span className="text-blue-500">Dream Job</span>{" "}
        </h1>
        <p>
          Explore thousands of job opportunities with all the information <br />{" "}
          you need. Its your future. Come find it. Manage all your <br /> job
          application from start to finish.
        </p>
        <button className="bg-blue-500 px-2 py-4 rounded-md text-white">
          Get Started
        </button>
      </div>

      <img className="w-1/2 " src={img} alt="" />
    </div>
  );
};

export default Banner;
