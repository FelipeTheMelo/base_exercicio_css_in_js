import styled from 'styled-components'

export const Container = styled.section`
    padding: 40px 20px;
    text-align: center;
    background: ${({ theme }) => theme.colors.background};
`

export const Title = styled.h2`
    font-size: 32px;
    margin-bottom: 10px;
`

export const Subtitle = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.secondaryText};
`