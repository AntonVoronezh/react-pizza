import React, { useState } from "react";

const cat = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

export function Categories() {
  const [categ, setCateg] = useState(0);

  const onCatClick = (i) => setCateg(i);

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
