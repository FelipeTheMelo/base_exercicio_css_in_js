import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #0d6efd;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.h1`
  font-size: 22px;
  margin: 0;
`

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`
