import "./Home.scss";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout"></div>
        <Category />
      </div>
    </div>
  );
};

export default Home;
