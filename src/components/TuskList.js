import React from "react";

export default function TuskList(props) {
  return (
    <ul className="list">
      {props.list.map((item) => (
        <li className="tusk" key={item.id}>
          <p
            onClick={() => props.completeTusk(item.id)}
            className={item.isComplete ? "complete" : "notcomplete"}
          >
            {item.text}
          </p>
          <button
            type="button"
            className="btnlist"
            onClick={() => props.deleteTusk(item.id)}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}
