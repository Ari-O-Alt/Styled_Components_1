import "./App.css";
import React from "react";
import styled, { css } from "styled-components";

// creating styles for the first component
const HeaderOne = styled.h1`
  color: red;
  font-size: 80px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "red")};
`;

// creating styles for the second component
const HeaderTwo = styled.h2`
  ${(props) =>
    props.primary &&
    css`
      color: tomato;
      text-decoration: underline;
      cursor: pointer;
    `}
`;

// extending styles and overriding the font-size
const HeaderThree = styled(HeaderOne)`
  font-size: 65px;
`;

// setting styles dinamically based on a state change
const SubmitButton = styled.button`
  ${(props) =>
    props.primary &&
    css`
      border-radius: 10px;
      color: white;
      background-color: black;
      border: none;
      cursor: pointer;
    `}
`;

const App = () => {
  const [buttonPrimary, setButtonPrimary] = React.useState(false);

  const handleChangeButtonStyles = () => {
    setButtonPrimary(!buttonPrimary);
  };
  return (
    <div className="App">
      <HeaderOne color={"green"}>Hello there</HeaderOne>
      <HeaderTwo primary>This is just an example!</HeaderTwo>
      <HeaderThree>This will extend the props of HeaderTwo</HeaderThree>
      <SubmitButton primary={buttonPrimary} onClick={handleChangeButtonStyles}>
        SUBMIT
      </SubmitButton>
    </div>
  );
};

export default App;
