import React, { useState } from "react";

export default function CreateTusk(props) {
  const [tusk, setTusk] = useState("");
  const handleSumbit = (event) => {
    event.preventDefault();
    if (tusk === "") {
      alert("Поле треба заповнити! (⊙_⊙)？");
      return;
    }
    if (tusk.length > 20) {
      alert("Поле вміщає максимум 20 символів");
      return;
    }
    // console.log(tusk);
    props.addTusk(tusk);
    setTusk("");
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        value={tusk}
        type="text"
        placeholder="Напишіть план"
        onChange={(event) => setTusk(event.target.value)}
      ></input>
      <button className="btn" type="sumbit">
        Додати план
      </button>
    </form>
  );
}
