import React from "react";
import { Card, JobTitle, DeleteButton } from "./styles";

export default function Vaga({ vaga, onDelete }) {
    return (
    <Card>
        <JobTitle>{vaga}</JobTitle>
        <DeleteButton onClick={() => onDelete(vaga)}>Excluir</DeleteButton>
    </Card>
    );
}