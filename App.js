import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1 className="heading">Hello</h1>;
};

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="heading">Hello, JSX!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);