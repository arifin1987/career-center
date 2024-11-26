const SectiionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-4">
      <h1 className="text-4xl font-semibold mb-2">{heading}</h1>
      <p>{subHeading}</p>
    </div>
  );
};

export default SectiionTitle;
