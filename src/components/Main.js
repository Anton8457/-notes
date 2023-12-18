import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import CreateTusk from "./CreateTusk";
import TuskList from "./TuskList";
export default function Main() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("savedList")) ?? [];
  });
  useEffect(() => {
    localStorage.setItem("savedList", JSON.stringify(list));
  }, [list]);
  const addTusk = (tusk) => {
    // console.log("Задача в main", tusk);

    const newTusk = {
      id: nanoid(),
      text: tusk,
      isComplete: false,
    };

    setList((list) => [...list, newTusk]);
  };

  const deleteTusk = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList([...newList]);
  };

  const completeTusk = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      } else {
        return item;
      }
    });
    setList([...newList]);
  };

  return (
    <div className="main">
      <h3 className="title">Список задач</h3>
      <CreateTusk addTusk={addTusk} />
      <TuskList
        list={list}
        deleteTusk={deleteTusk}
        completeTusk={completeTusk}
      />
    </div>
  );
}
