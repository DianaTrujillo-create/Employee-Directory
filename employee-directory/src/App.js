import React from "react";
import './App.css';
import Header from "./components/header.js";
import Directory from "./pages/directory";
import { Container } from "reactstrap";

function App() {
  return (
    <Container>
      <Header title="Employee Directory"/>
    </Container>
  );
}

export default App;
