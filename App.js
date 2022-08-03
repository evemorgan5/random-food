import React from "react";
const axios = require("axios");
// import "./App.css";

const App = () => {
    const showFoodChoice = async () => {

    resp = await axios.get("https://wwww.themealdb.com/api/json/v1/1/random")
    console.log(resp.data)

    alert("This is my food choice...");
    }
    return <button onClick={showFoodChoice}>Show
    alert</button>;
}

export default App;
