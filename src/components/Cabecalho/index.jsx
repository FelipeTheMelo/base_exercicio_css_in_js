import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: hsl(var(--secondary));
  padding: 24px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const HeaderContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

const Title = styled.h1`
  font-family: Gloock, serif;
  font-size: 32px;
  color: hsl(var(--primary));
  text-align: center;
  margin: 0;
`

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Title>EBAC Jobs</Title>
    </HeaderContent>
  </HeaderContainer>
)

export default Header