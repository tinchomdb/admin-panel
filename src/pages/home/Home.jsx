import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <div className="chartContainer">
        <Chart data={userData} title="Sales Analytics" dataKey="sales" />
      </div>
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
