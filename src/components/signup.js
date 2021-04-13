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


const SignUp = ({setOpen}) => {

    const handleClose  = () => {
        setOpen(false);
    }

    return (
        <div>
            <div>
                Sign Up
            </div>
            <input/>
            <input/>
            <button>
                Continue
            </button>
            <div onClick={handleClose}>
                exit
            </div>
        </div>
    )
};

export default SignUp;