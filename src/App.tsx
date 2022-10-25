import React from "react";

import "./App.scss";
import ButtonDislike from "./components/Buttons/ButtonDislike";
import ButtonLike from "./components/Buttons/ButtonLike";
import ButtonPrimary from "./components/Buttons/ButtonPrimary";
import ButtonSecondary from "./components/Buttons/ButtonSecondary";
import ButtonSecondary2 from "./components/Buttons/ButtonSecondary2";
import ButtonWithIcon from "./components/Buttons/ButtonWithIcon";

function App() {
  const logGritting = (): void => {
    console.log("hello world");
  };

  return (
    <div className="App">
      <h1>Buttons </h1>
      <div className="btns">
        <ButtonPrimary name="Primary" logGritting={logGritting} />
        <ButtonSecondary name="Secondary" logGritting={logGritting} />
        <ButtonSecondary2 name="Secondary 2" logGritting={logGritting} />
        <ButtonWithIcon name="Button with icon" logGritting={logGritting} />
        <ButtonDislike logGritting={logGritting} />
        <ButtonLike logGritting={logGritting} />
      </div>
    </div>
  );
}

export default App;
