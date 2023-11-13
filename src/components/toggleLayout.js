import React from "react";
import styled from "styled-components";
import { useTheme } from "../store/themeProvider";
import { FlexContainer } from "../them/styles";
import Toggle from "../components/toggle";
import Header from "../components/header";

const ToggleLayout = ({ children }) => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <WrapContainer>
      {/* <Header /> */}
      <Toggle toggle={toggleTheme} mode={ThemeMode}>
        DarkMode
      </Toggle>
      <div>{children}</div>
    </WrapContainer>
  );
};
export default ToggleLayout;

const WrapContainer = styled.main``;
