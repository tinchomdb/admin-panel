import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { productRows } from "../../dummyData";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../../redux/requestMethods";

function ProductList() {
  const [data, setData] = useState(productRows);
  const [products, setProducts] = useState([]);
  /* const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
    console.log(products);
  }, [dispatch]); */

  const getProducts = async () => {
    try {
      const res = await publicRequest.get("/products");
      setProducts(res.data);
    } catch {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id);
    getProducts();
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListproduct">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 150 },

    {
      field: "price",
      headerName: "Price",
      width: 240,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="datagrid">
        {products && (
          <DataGrid
            rows={products}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={15}
            rowsPerPageOptions={[15]}
            checkboxSelection
          />
        )}
      </div>
    </div>
  );
}

export default ProductList;
