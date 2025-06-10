import React, { useState } from "react";

interface FormProps {
    addVaga: (novaVaga: string) => void;
}

const Form: React.FC<FormProps> = ({ addVaga }) => {
    const [novaVaga, setNovaVaga] = useState("");

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novaVaga.trim()) return;
    addVaga(novaVaga);
    setNovaVaga("");
};

return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Digite o nome da vaga"
        value={novaVaga}
        onChange={(e) => setNovaVaga(e.target.value)}/>
        <button type="submit">Adicionar vaga</button>
    </form>
);
};

export default Form;