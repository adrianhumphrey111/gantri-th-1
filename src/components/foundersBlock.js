import styled from "styled-components";

const media = {
    desktop: `@media(min-width: 991px)`
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 15px;
  background: #F4F4F4;
`;

const StyledHeader = styled.h1`
  color: #1C1C1C;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 30px;

  ${media.desktop} {
    font-size: 40px;
  }
`;

const StyledParagraph = styled.p`
  color: #8F8E8B;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;

  ${media.desktop} {
    font-size: 25px;
  }
`;

const FoundersBlock = () => {
    return (
        <Container>
            <StyledHeader>
                Smart tools for founders.
            </StyledHeader>
            <StyledParagraph>
                LearnStart is the simplest way for startup founders to discover inspiring stories from startup founders from all over the world, all in once place
            </StyledParagraph>
        </Container>
    )
};

export default FoundersBlock;

