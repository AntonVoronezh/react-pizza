import React, { useRef } from "react";
import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Sceleton";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import { useEffect, useState } from "react";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilters } from "../redux/slices/filterSlice";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categ, sort } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const isFirst = useRef(false);

  useEffect(() => {
    fetch("https://631605e033e540a6d38ab6c6.mockapi.io/items")
      .then((res) => res.json())
      .then((items) => {
        setItems(items.filter((el) => !!el.price));
        setIsLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const query = qs.parse(window.location.search.substring(1));
    dispatch(setFilters(query));
  }, []);

  useEffect(() => {
    const query = qs.stringify({
      categ,
      sort,
    });

    // if (!isFirst.current) {
      navigate("?" + query);
    // }

    isFirst.current = true;
  }, [categ, sort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <br />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })}
      </div>
    </div>
  );
};

export default Home;
