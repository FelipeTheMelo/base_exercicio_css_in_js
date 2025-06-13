import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    gap: 8px;
    justify-content: center;
    margin: 20px 0;
`

export const Input = styled.input`
    padding: 10px;
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

export const Button = styled.button`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`