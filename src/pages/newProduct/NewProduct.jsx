import { Publish } from "@material-ui/icons";
import React from "react";
import "./NewProduct.css";

function NewProduct() {
  return (
    <div className="newProduct">
      <form action="" className="addProductForm">
        <div className="addProductForm">
          <div className="addProductUpload">
            <img
              src="https://www.nintendocostarica.com/web/image/product.image/45330/image_128/Consola%20Sony%20PlayStation%205?unique=a8a2924"
              alt=""
              className="addProductUploadImg"
            />
            <label htmlFor="file">
              <Publish />
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </div>

          <label htmlFor="">Product Name</label>
          <input type="text" placeholder="Playstation 5" />
          <label htmlFor="">In Stock</label>
          <select name="inStock" id="idStock">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label htmlFor="">Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button className="addProductButton">Create</button>
        </div>
      </form>
    </div>
  );
}

export default NewProduct;
