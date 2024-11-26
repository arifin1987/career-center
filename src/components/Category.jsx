const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="bg-blue-100 p-4 mr-4 rounded">
      <img className="w-10 mb-6" src={logo} alt="" />
      <h1>{category_name}</h1>
      <p>{availability}</p>
    </div>
  );
};

export default Category;
