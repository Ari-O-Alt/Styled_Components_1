import "./App.css";
import React from "react";
import styled, { css, ThemeProvider } from "styled-components";

// creating styles for the first component
const HeaderOne = styled.h1`
  color: red;
  font-size: 80px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : theme.primary.baseColor)};
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

// we create a theme for our page; we can access any property on it inside any component nested inside the ThemeProvider component
const theme = {
  primary: {
    baseColor: "#888",
  },
};

const App = () => {
  const [buttonPrimary, setButtonPrimary] = React.useState(false);

  const handleChangeButtonStyles = () => {
    setButtonPrimary(!buttonPrimary);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HeaderOne color={"green"}>Hello there</HeaderOne>
        <HeaderTwo primary>This is just an example!</HeaderTwo>
        <HeaderThree>This will extend the props of HeaderTwo</HeaderThree>
        <SubmitButton
          primary={buttonPrimary}
          onClick={handleChangeButtonStyles}
        >
          SUBMIT
        </SubmitButton>
      </div>
    </ThemeProvider>
  );
};

export default App;
