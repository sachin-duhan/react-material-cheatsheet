import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./routes";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider>
          <Navbar />
          <Container maxWidth="sm">
            <Routes /> {/* <BottomNaigation /> */}{" "}
          </Container>
        </ThemeProvider>{" "}
      </div>
    );
  }
}

export default App;
