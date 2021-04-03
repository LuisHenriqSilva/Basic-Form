import React, { useState } from "react";

import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function RegisterForm({ formData, cpfValidation }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [newsletter, setNewsletter] = useState(true);
  const [err, setErr] = useState({ cpf: { valid: true, text: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        formData({ name, lastName, cpf, promotions, newsletter });
      }}
    >
      <TextField
        valeu={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        valeu={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        id="lastName"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        valeu={cpf}
        id="CPF"
        fullWidth
        label="CPF"
        margin="normal"
        variant="outlined"
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={() => {
          const isValid = cpfValidation(cpf);
          setErr({
            cpf: isValid,
          });
        }}
        error={!err.cpf.valid}
        helperText={err.cpf.text}
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            color="primary"
            name="promotions"
            checked={promotions}
            onChange={(event) => {
              setPromotions(event.target.checked);
            }}
          />
        }
      />
      <FormControlLabel
        label="newsletter"
        control={
          <Switch
            color="primary"
            name="newsletter"
            checked={newsletter}
            onChange={(event) => {
              setNewsletter(event.target.checked);
            }}
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default RegisterForm;
