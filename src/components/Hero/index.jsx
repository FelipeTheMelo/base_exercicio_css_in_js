import styled from 'styled-components'

const HeroContainer = styled.section`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsl(var(--hero-overlay));
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

const HeroContent = styled.div`
  position: relative;
  color: hsl(var(--hero-text));
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Hero = () => (
  <HeroContainer>
    <HeroContent>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </HeroContent>
  </HeroContainer>
)

export default Hero