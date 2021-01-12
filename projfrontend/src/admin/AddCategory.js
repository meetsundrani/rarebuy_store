import React,{useState} from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import {isAutheticated} from "../auth/helper/index"
const AddCategory = () => {
const [name,setName]=useState("initialState");
const [error,setError]=useState(false);
const [success, setSuccess] = useState(false);

const {user,token}=isAutheticated();

const myCategoryForm=()=>(
  <form>
  <div className="form-group">
    <p className="lead">Enter the category</p>
    <input type="text" className="form-control my-3" autoFocus required placeholder="For Ex. Summer"/>
    <button className="btn btn-outline-info">Create Category</button>
  </div>
  
  </form>)


  return (
    <Base
      title="Create a Category"
      description="Add a new Category for a new tshirts"
      className="container bg-info p-4"
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          <h1>Hello</h1>
        </div>
      </div>
    </Base>
  );
};
export default AddCategory;
