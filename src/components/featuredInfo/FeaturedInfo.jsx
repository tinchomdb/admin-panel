import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { userRequest } from "../../redux/requestMethods";
import "./FeaturedInfo.css";

function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("/orders/income");
        setIncome(res.data.sort((a, b) => (a._id > b._id ? 1 : -1)));
        setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  return (
    <>
      {income.length > 0 && (
        <div className="featured">
          <div className="featuredItem">
            <h3 className="featuredTitle">Revenue</h3>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">${income[1].total}</span>
              <span className="featuredMoneyRate">
                %{Math.floor(percentage)}
                {percentage > 0 ? (
                  <ArrowUpward className="featuredIcon " />
                ) : (
                  <ArrowDownward className="featuredIcon negative" />
                )}
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
      )}
    </>
  );
}

export default FeaturedInfo;
