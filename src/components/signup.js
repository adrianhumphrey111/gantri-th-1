import styled from "styled-components";

const media = {
    desktop: `@media(min-width: 991px)`
}

const StyledFloatingHeader = styled.div`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    background-color: #F4F4F4;
    position: fixed; 
    top: 0; 
    width: 100%;
  z-index: 1;
  
  ${media.desktop}{
    //height: 60px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const StyledInputContainer = styled.div`
display: flex;
  flex-direction: column;
  width: 50%;
`;

const SignUp = ({setOpen}) => {

    const handleClose  = () => {
        setOpen(false);
    }

    return (
        <Container>
            <div>
                Sign Up
            </div>
            <StyledInputContainer>
                <input/>
                <input/>
            </StyledInputContainer>

            <button>
                Continue
            </button>
            <div onClick={handleClose}>
                exit
            </div>
        </Container>
    )
};

export default SignUp;