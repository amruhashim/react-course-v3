import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(12);
  const [hobby, setHoby] = useState("Singing");

  const displayPerson = () => {
    setHoby("haha");
    setAge(12);
    setName("name2");
  };

  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{hobby}</h2>
      <button type="button" onClick={displayPerson}>
        Hi{" "}
      </button>
    </>
  );
};

export default UseStateObject;
