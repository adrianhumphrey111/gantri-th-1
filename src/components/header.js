import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import {useState} from "react";
import useViewport from "../utils/useViewPort";
import SignUp from "./signup";
import {makeStyles} from "@material-ui/core/styles";


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

const StyledHeader2Label = styled.h2`
  font-size: 25px;
  margin-left: 20px;
  
  ${media.desktop}{
    font-size: 30px;
  }
`;

const StyledSignUpButton = styled.a`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #159F9E;
`;

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
    },
}));


const FloatingHeader = () => {
    const classes = useStyles();
    const { width } = useViewport();
    const breakpoint = 991;
    const isDesktop = width > breakpoint;
    const [open, setOpen] = useState(false);

    const desktopModalStyle = {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    }

    const mobileModalStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
    }

    const desktopSignUpModal = (
        <div style={desktopModalStyle} className={classes.paper}>
            <SignUp setOpen={setOpen}/>
        </div>
    );

    const mobileSignUpOverlay = (
        <div style={mobileModalStyle} className={classes.paper}>
            <SignUp setOpen={setOpen}/>
        </div>
    )


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <StyledFloatingHeader>
            <StyledHeader2Label>
                LearnStart
            </StyledHeader2Label>
            <StyledSignUpButton onClick={handleOpen}>
                Sign Up
            </StyledSignUpButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {isDesktop ? desktopSignUpModal : mobileSignUpOverlay}
            </Modal>
        </StyledFloatingHeader>
    )
};

export default FloatingHeader;