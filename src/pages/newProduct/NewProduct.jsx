import { Publish } from "@material-ui/icons";
import React, { useState } from "react";
import "./NewProduct.css";

function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCategories = (e) => {
    setCategories(e.target.value.split(","));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    
  }

  return (
    <div className="newProduct">
      <form action="" className="addProductForm">
        <div className="addProductForm">
          <h2>New Product</h2>

          <div className="addProductUpload">
            <label htmlFor="addProductUploadImg">Image</label>
            <img
              src="https://www.nintendocostarica.com/web/image/product.image/45330/image_128/Consola%20Sony%20PlayStation%205?unique=a8a2924"
              alt=""
              className="addProductUploadImg"
            />
            <label htmlFor="file">
              <Publish />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files)[0]}
              style={{ display: "none" }}
            />
          </div>

          <label htmlFor="">Product Name</label>
          <input
            type="text"
            name="title"
            placeholder="Playstation 5"
            onChange={handleChange}
          />
          <label htmlFor="">Price</label>
          <input
            type="number"
            name="price"
            placeholder="123"
            onChange={handleChange}
          />
          <label htmlFor="">Categories</label>
          <input
            type="text"
            placeholder="Playstation 5"
            onChange={handleCategories}
          />
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            placeholder="Playstation 5"
            onChange={handleChange}
          />
          <label htmlFor="">In Stock</label>
          <select name="inStock" id="idStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewProduct;
