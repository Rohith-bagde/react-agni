
import ReactDOM from "react-dom/client";

/*
Header 
-Logo
-Nav Items
Body
-Search
-Restaurant Container
- Restaurant Card
    -rating
    -name   
    -cuisines
    -cost for two
    -delivery time
Footer
-Links
-Contact
-Copyright
-Address
*/

const Header = () => {
  return (
    <div className="header">
        <div className="logo-container">
            <img 
            className="logo" 
            src="https://i.pinimg.com/736x/6c/8f/ac/6c8fac06bf158a157a3123d48635c582.jpg"
            />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  );
};


const RestaurantCard = () => {
    return (
        <div className="res-card" style={{ backgroundColor: "pink" }}>
            <img className="res-logo" src="https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350" alt="res-logo" />
            <h3>La Grande Maison</h3>
            <h4>Italian, Continental</h4>
            <h4>4.5 stars</h4>
            <h4>₹800 for two</h4>
            <h4>ETA-30 mins</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="res-container">
                {/* Restaurant cards will go here */}
                <RestaurantCard />
            </div>
        </div>
    );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);