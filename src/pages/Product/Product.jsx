import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { productData } from "../../dummyData";
import Chart from "../../components/chart/Chart";
import { Publish } from "@material-ui/icons";

function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} title="Sales Analytics" dataKey="sales" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://www.nintendocostarica.com/web/image/product.image/45330/image_128/Consola%20Sony%20PlayStation%205?unique=a8a2924"
              alt=""
              className="productInfoImg"
            />
            <h3 className="productName">Playstation 5</h3>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">1</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock: </span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form action="" className="productForm">
          <div className="productFormLeft">
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
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://www.nintendocostarica.com/web/image/product.image/45330/image_128/Consola%20Sony%20PlayStation%205?unique=a8a2924"
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
