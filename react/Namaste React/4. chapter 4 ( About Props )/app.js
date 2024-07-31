import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ReastaurantCard = ({ resName, cusine, rating, dTime, imgUrl }) => {
  return (
    <div className="res-card">
      <img className="res-cardImg" src={imgUrl} />
      <h3>{resName}</h3>
      <h4>{cusine}</h4>
      <h4>{rating}</h4>
      <h4>{dTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ReastaurantCard
          imgUrl="https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          resName="Brownies"
          cusine="North Indian, South Indian"
          rating="4.5 star"
          dTime="38 min"
        />
        <ReastaurantCard
          imgUrl="https://images.pexels.com/photos/9609859/pexels-photo-9609859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          resName="Chatwal"
          cusine="North Indian, South Indian"
          rating="4.5 star"
          dTime="38 min"
        />
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
