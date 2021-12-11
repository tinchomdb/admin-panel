import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Product.css";
import { productData } from "../../dummyData";
import Chart from "../../components/chart/Chart";
import { Publish } from "@material-ui/icons";
import { userRequest, publicRequest } from "../../redux/requestMethods";

function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [stats, setStats] = useState([]);

  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getStats = async () => {
    try {
      const res = await userRequest.get(`/orders/income?pid=${productId}`);
      res.data.map((item) =>
        setStats((prev) => [
          ...prev,
          { name: MONTHS[item._id - 1], Sales: item.total },
        ])
      );
    } catch {}
  };

  const getProduct = async () => {
    try {
      const res = await publicRequest.get(`/products/find/${productId}`);
      setProduct(res.data);
    } catch {}
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    getStats();
  }, []);

  console.log("rerender");
  console.log("stats: ", stats);

  return (
    <>
      {product && (
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">{product.title}</h1>
            <Link to="/newproduct">
              <button className="productAddButton">Create</button>
            </Link>
          </div>

          <div className="productTop">
            <div className="productTopLeft">
              <Chart data={stats} title="Sales Analytics" dataKey="sales" />
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src={product.img} alt="" className="productInfoImg" />
                <h3 className="productName">{product.title}</h3>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id:</span>
                  <span className="productInfoValue">{product._id}</span>
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
                  <span className="productInfoValue">{product.inStock}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="productBottom">
            <form action="" className="productForm">
              <div className="productFormLeft">
                <label htmlFor="">Title</label>
                <input type="text" placeholder={product.title} />
                <label htmlFor="">Price</label>
                <input type="text" placeholder={product.price} />
                <label htmlFor="">Description</label>
                <textarea placeholder={product.description} />
                <label htmlFor="">In Stock</label>
                <select name="inStock" id="idStock">
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img src={product.img} alt="" className="productUploadImg" />
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
      )}
    </>
  );
}

export default Product;
