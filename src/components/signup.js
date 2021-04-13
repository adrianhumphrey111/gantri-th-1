import styled from "styled-components";
import {useState} from "react";

const media = {
    desktop: `@media(min-width: 991px)`
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-top: 90px;
`;

const StyledInputContainer = styled.div`
display: flex;
  flex-direction: column;
  width: 50%;
`;

const StyledInput = styled.input`
  height: 30px;
  background: #F4F4F4;
  border: 1px solid #E4E5E6;

`;
const StyledButton = styled.button`
  background-color: #159F9E;
  border: none;
  height: 37px;
  width: 50%;
`;

const SignUp = ({setOpen}) => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("")

    const handleClose  = () => {
        setOpen(false);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    return (
        <Container>
            <div>
                Sign Up
            </div>
            <StyledInputContainer>
                <StyledInput onChange={handleEmailChange} value={email} name={"email"}/>
                <StyledInput onChange={handlePasswordChange} value={password} name={"password"}/>
            </StyledInputContainer>

            <StyledButton>
                Continue
            </StyledButton>
            <div onClick={handleClose}>
                exit
            </div>
        </Container>
    )
};

export default SignUp;