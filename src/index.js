import React from "react";
import ReactDOM from "react-dom";
import MyImage from './assets/reactLogo.png';


const App = () => {
  return (
    <div>
        <div>Welcomedfdf to my-webpackdfdff-react-starter</div>
        <img src={MyImage} />

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));