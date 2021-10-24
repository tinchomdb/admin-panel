import { format } from "timeago.js";
import React, { useEffect, useState } from "react";
import { userRequest } from "../../redux/requestMethods";
import "./WidgetLg.css";

function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((item) => (
          <tr className="widgetLgTr" key={item._id}>
            <td className="widgetLgUser">
              <img
                src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">{item.userId}</span>
            </td>
            <td className="widgetLgDate">{format(item.createdAt)}</td>
            <td className="widgetLgAmount">{item.amount}</td>
            <td className="widgetLgStatuse">
              <Button type={item.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default WidgetLg;
