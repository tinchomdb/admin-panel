import React from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <h1 className="logo">Your Store</h1>
        </div>
        <div className="topRight">
          <div className="topbarIconCOntainer">
            <Language />
          </div>
          <div className="topbarIconCOntainer">
            <Settings />
          </div>
          <div className="topbarIconCOntainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <img
            src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default topbar;
