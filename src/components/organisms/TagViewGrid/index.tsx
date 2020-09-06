import React from 'react';
import TagView from '@Molecules/TagView';
import styled from '@Styles/styled';
import LoadContext from '@Assets/hooks/LoadContext';

const StyledTagViewGrid = styled.div`
  z-index: 1;
  height: max-content;
  width: calc(100vw / 2);
  overflow-x: scroll;
  display: flex;
  @media (max-width: 1023px) {
    display: none;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => `${theme.colors.fill.primary}33`};
    filter: blur(20px);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.fill.primary};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.fill.secondary};
  }
`;

const TagViewGrid: React.FC = () => {
  const { setLoad } = React.useContext(LoadContext);
  return (
    <StyledTagViewGrid id="viewsContainerID">
      <TagView
        name="code"
        color="#455AC9"
        background="/assets/images/back1.png"
        hover={() => {
          localStorage.setItem('theme', 'theme1');
          setLoad(false);
        }}
      />
      <TagView
        name="mobile"
        color="#E07495"
        background="/assets/images/back2.png"
        hover={() => {
          setLoad(false);
          localStorage.setItem('theme', 'theme2');
        }}
      />
      <TagView
        name="industrial"
        color="#BFA44E"
        background="/assets/images/back3.png"
        hover={() => {
          setLoad(false);
          localStorage.setItem('theme', 'theme3');
        }}
      />
      <TagView
        name="art"
        color="#579365"
        background="/assets/images/back4.png"
        hover={() => {
          setLoad(false);
          localStorage.setItem('theme', 'theme4');
        }}
      />
      <TagView
        name="iot"
        color="#83B6CA"
        background="/assets/images/back5.png"
        hover={() => {
          setLoad(false);
          localStorage.setItem('theme', 'theme5');
        }}
      />
    </StyledTagViewGrid>
  );
};

export default TagViewGrid;
