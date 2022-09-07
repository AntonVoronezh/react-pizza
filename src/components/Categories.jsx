import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCateg } from "../redux/slices/filterSlice";

const cat = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

export function Categories() {
  const categ = useSelector((state) => state.filter.categ);
  const dispatch = useDispatch();

  const onCatClick = (i) => dispatch(setCateg(i));

  return (
    <div className="categories">
      <ul>
        {cat.map((el, i) => {
          return (
            <li
              key={i}
              onClick={() => onCatClick(i)}
              className={i === categ ? "active" : ""}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
