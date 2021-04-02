import React from "react";

import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

const RegisterForm = () => {
  let nome = "";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(nome);
      }}
    >
      <TextField
        onChange={(e) => {
          nome = e.target.value;
        }}
        id="nome"
        label="nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="sobrenome"
        label="sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
};

export default RegisterForm;
