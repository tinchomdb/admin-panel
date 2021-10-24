import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useState } from "react";
import "./FeaturedInfo.css";

function FeaturedInfo() {

  const [income, setIncome] = useState([])

  return (
    <div className="featured">
      <div className="featuredItem">
        <h3 className="featuredTitle">Revenue</h3>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3,578</span>
          <span className="featuredMoneyRate">
            2.5 <ArrowUpward className="featuredIcon " />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <h3 className="featuredTitle">Sales</h3>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            11.4 <ArrowUpward className="featuredIcon " />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <h3 className="featuredTitle">Cost</h3>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$5,766</span>
          <span className="featuredMoneyRate">
            -3.6 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
