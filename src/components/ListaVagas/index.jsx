import React from "react";
import { List } from "./styles";
import Vaga from "../Vaga";

export default function ListaVagas({ vagas, onDelete }) {
    return (
    <List>
        {vagas.map((v) => (
        <Vaga key={v} vaga={v} onDelete={onDelete} />
        ))}
    </List>
    );
}