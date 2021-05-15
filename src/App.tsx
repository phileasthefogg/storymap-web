import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./configs/theme";
import styled from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.colors.white};
`;

const Link = styled.a`
  color: #61dafb;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper className="App">
        <Header className="App-header">
          <h1>Welcome to your new Side Project</h1>
          <p>
            Get started by editing <code>src/App.tsx</code>
          </p>
          <Link
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </Header>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
