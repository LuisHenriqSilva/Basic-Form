import React from "react";

import { Container, Typography } from "@material-ui/core";

import RegisterForm from "./components/RegisterForm/RegisterForm";

import "fontsource-roboto";
import "./App.css";

function App() {
  const formData = (data) => {
    console.log(data);
  };

  const cpfValidation = (cpf) => {
    if (cpf.length !== 11) {
      return { valid: false, text: "CPF deve ter 11 dígitos." };
    } else {
      return { valid: true, text: "" };
    }
  };

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Registre-se
      </Typography>
      <RegisterForm formData={formData} cpfValidation={cpfValidation} />
    </Container>
  );
}

export default App;
