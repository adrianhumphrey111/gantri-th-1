import styled from "styled-components";
import { useHistory } from "react-router-dom";

const media = {
    desktop: `@media(min-width: 991px)`
}

const StyledWelcomeContainer = styled.div`
  height: 600px;
  background-color: #1C1C1C;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  ${media.desktop}{
    align-items: flex-start;
    justify-content: center;
  }
`;

const StyledHeaderLabel = styled.h1`
  font-size: 30px;
  margin-left: 20px;
  
  ${media.desktop}{
    font-size: 40px;
  }
`;

const StyledHeader1Label = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 30px;
  color: #E4E5E6;
  margin: 0px;
  
  ${media.desktop}{
    font-size: 40px;
  }
`;

const StyledHeader3Label = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  color: #8F8E8B;
  margin: 0px;
  
  ${media.desktop}{
    font-size: 25px;
  }
`;

const StyledButton = styled.button`
  background: #159F9E;
  border: none;
  width: 270px;
  height: 50px;
`;


const Welcome = () => {
    const history = useHistory();

    const handleOnClick = () => {
        history.push("/stories");
    }

    return (
        <StyledWelcomeContainer>
            <div>
                <StyledHeader1Label>
                    Stay hungry.
                </StyledHeader1Label>
                <StyledHeader1Label>
                    Stay foolish.
                </StyledHeader1Label>
            </div>
            <StyledHeader3Label>
                Learn From the hottest start ups in the world.
            </StyledHeader3Label>
            <StyledButton onClick={handleOnClick}>
                <h3>Read now</h3>
            </StyledButton>
        </StyledWelcomeContainer>
    )
};

export default Welcome;