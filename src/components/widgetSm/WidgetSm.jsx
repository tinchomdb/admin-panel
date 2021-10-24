import { Visibility } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { userRequest } from "../../redux/requestMethods";
import "./WidgetSm.css";

function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <h3 className="widgetSmTitle">New Joined Members</h3>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user.username}>
            <img
              src={
                user.img ||
                "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.username}</span>
              <span className="widgetSmUserTitle">Web Developer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSm;
