import "./scss/app.scss";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { Sort } from "./components/Sort";
import { PizzaBlock } from "./components/PizzaBlock/PizzaBlock";
import { useEffect, useState } from "react";
import { Skeleton } from "./components/PizzaBlock/Sceleton";
import Home from "./pages/Home";

function App() {


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
<Home />
        </div>
      </div>
    </div>
  );
}

export default App;
