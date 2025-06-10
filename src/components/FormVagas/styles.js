import styled from "styled-components";

export const FormWrapper = styled.form`
    max-width: 400px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    padding: 10px;
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Button = styled.button`
    padding: 10px;
    background: #282c34;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;

&:hover {
    background: #3c3f47;
}
`;