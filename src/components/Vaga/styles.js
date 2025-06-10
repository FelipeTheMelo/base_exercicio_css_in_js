import styled from "styled-components";

export const Card = styled.div`
    background: white;
    border: 1px solid #ddd;
    padding: 16px;
    margin: 10px 0;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
`;

export const JobTitle = styled.span`
    font-weight: bold;
`;

export const DeleteButton = styled.button`
    background: transparent;
    border: none;
    color: #e74c3c;
    cursor: pointer;
`;