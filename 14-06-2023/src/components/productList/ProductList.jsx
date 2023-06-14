import Card from "../Card";
import { todos } from "../../mock/mock";
import "./index.css";

const ProductList = ({ emoji }) => {
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <Card data={todo} emoji={emoji} />
      ))}
    </div>
  );
};

export default ProductList;
