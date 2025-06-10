import React, { useState } from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import ListaVagas from "./components/ListaVagas";
import FormVagas from "./components/FormVagas";

const App = () => {
  const [vagas, setVagas] = useState<string[]>([]);

  const addVaga = (novaVaga: string) => {
    setVagas((prevVagas) => [...prevVagas, novaVaga]);
  };

  return (
    <>
      <Header />
      <Hero />
      <FormVagas addVaga={addVaga} />
      <ListaVagas vagas={vagas} onDelete={undefined} />
    </>
  );
};

export default App;