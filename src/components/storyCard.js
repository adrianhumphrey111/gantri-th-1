
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        display: "inline-block"
    },
    media: {
        background: "gray",
        height: "300px",
        width: "300px",
    },
    author: {
        padding: "5px"
    }
});

const StyledAuthorContainer = styled.div`
  display: flex;
`;

const StyledGrayImage = styled.span`
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`;

const StoryCard = ({story}) => {
    const classes = useStyles();
    const handleClick = () => {};

    return (
            <Card
                className={classes.root}
                key={story.id}
                style={{ margin: '20px' }}
            >
                <CardActionArea onClick={handleClick}>
                    <CardMedia
                        data-card-media={`detail.title`}
                        className={classes.media}
                        image={""}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            {story.title}
                        </Typography>
                        <StyledAuthorContainer>
                            <StyledGrayImage src=""/>
                            <Typography className={classes.author} style={{ wordWrap: 'break-word' }} gutterBottom variant='caption' component='h2'>
                                {story.author}
                            </Typography>
                        </StyledAuthorContainer>


                    </CardContent>
                </CardActionArea>
            </Card>
    )
}

export default StoryCard;