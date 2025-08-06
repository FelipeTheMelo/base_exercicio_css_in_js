import { FormEvent, useState } from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    background-color: hsl(var(--form-background));
    padding: 32px;
    border-radius: 12px;
    margin-top: 40px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    `

    const SearchInput = styled.input`
    padding: 12px 16px;
    border: 2px solid hsl(var(--border));
    border-radius: 6px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: hsl(var(--form-border));
        box-shadow: 0 0 0 3px hsla(var(--form-border), 0.1);
    }

    &::placeholder {
        color: hsl(var(--muted-foreground));
    }
    `

    const SearchButton = styled.button`
    background-color: hsl(var(--button-primary));
    border: 1px solid hsl(var(--button-primary));
    color: hsl(var(--button-primary-foreground));
    height: 48px;
    padding: 0 24px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: hsl(var(--button-primary));
        transform: translateY(-2px);
        box-shadow: 0 4px 12px hsla(var(--button-primary), 0.3);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        height: 48px;
    }
    `

    type Props = {
    aoPesquisar: (termo: string) => void
    }

    const FormVagas = ({ aoPesquisar }: Props) => {
    const [termo, setTermo] = useState<string>('')

    const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        aoPesquisar(termo.toLocaleLowerCase())
    }

    return (
        <FormContainer onSubmit={aoEnviarForm}>
        <SearchInput
            placeholder="Front-end, fullstack, node, design"
            onChange={(e) => setTermo(e.target.value)}
            type="search"
            value={termo}
        />
        <SearchButton type="submit">
            Pesquisar
        </SearchButton>
        </FormContainer>
        )
    }

    export default FormVagas