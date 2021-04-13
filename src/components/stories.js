import styled from "styled-components";
import StoryCard from "./storyCard";

const media = {
    desktop: `@media(min-width: 991px)`
}

const stories = {
    latest: [
        {
            id: 0,
            author: "Jon Snow",
            title: "How I Survived Death"

        },
        {
            id: 2,
            author: "Jon Snow",
            title: "One dat i woke up, and I realized that I was dead for a bit."

        },
        {
            id: 3,
            author: "Jon Snow",
            title: "How I survived death again!"

        }
    ],

    editorsPick: [
        {
            id: 0,
            author: "Jon Snow",
            title: "How I Survived Death"

        },
        {
            id: 2,
            author: "Jon Snow",
            title: "One dat i woke up, and I realized that I was dead for a bit."

        },
        {
            id: 3,
            author: "Jon Snow",
            title: "How I survived death again!"

        }

    ]
};

const StyledHeader = styled.div`
  height: 100px;
  background-color: #1C1C1C;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  color: #E4E5E6;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 40px;

  ${media.desktop}{
    padding-top: 125px;
    height: 250px;
    font-size: 40px;
  }
`;

const StyledStoryContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const Stories = () => {
    return (
        <div>
            <StyledHeader>
                Stories
            </StyledHeader>
            <div>
                <div>
                    Latest
                </div>
                <StyledStoryContainer>
                    {stories.latest.map( story => <StoryCard story={story}/>)}
                </StyledStoryContainer>
            </div>
            <div>
                <div>
                    Editor's Pick
                </div>
                <StyledStoryContainer>
                    {stories.editorsPick.map( story => <StoryCard story={story}/>)}
                </StyledStoryContainer>
            </div>

        </div>
    )
}

export default Stories;