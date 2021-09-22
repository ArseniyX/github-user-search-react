import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 31px 24px;
`;

const Logo = styled.h1`
  font-family: Space Mono;
  font-weight: bold;
  font-size: 26px;
  line-height: 39px;
`;

const ModeButton = styled.button`
  font-family: Space Mono;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 2.5px;
  border: none;
  padding: 0;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

const lightMode = (
  <>
    <span>light</span>
    <img src={sun} alt="sun" />
  </>
);

const darkMode = (
  <>
    <span>dark</span>
    <img src={moon} alt="moon" />
  </>
);

const App = () => {
  const checkTheme = (bool) => {
    if (bool) {
      return theme === "light" ? darkMode : lightMode;
    } else {
      return theme === "light" ? lightTheme : darkTheme;
    }
  };

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={checkTheme(false)}>
      <>
        <GlobalStyles />
        <>
          <Header>
            <Logo>devfinder</Logo>
            <ModeButton onClick={themeToggler}>{checkTheme(true)}</ModeButton>
          </Header>
          Search GitHub username... Search Joined Repos Followers Following
        </>
      </>
    </ThemeProvider>
  );
};

export default App;
