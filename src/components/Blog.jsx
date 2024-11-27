import { useContext } from "react";
import { AuthContext } from "./ContextApi";

const Blog = () => {
  const something = useContext(AuthContext);

  return (
    <div>
      <h1>{something.name}</h1> <p>{something.age}</p>
    </div>
  );
};

export default Blog;
