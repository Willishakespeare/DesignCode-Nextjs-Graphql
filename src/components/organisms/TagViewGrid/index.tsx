import React, { useEffect } from 'react';
import UserContext from '@Assets/hooks/ThemeContext';
import TagView from '@Molecules/TagView';
import styled from '@Styles/styled';
import Themes from '@Styles/theme';

const StyledTagViewGrid = styled.div`
  height: 100%;
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
    background: ${({ theme }) => theme.colors.fill.primary};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.fill.secondary};
  }
`;

const TagViewGrid: React.FC = () => {
  const { setTheme } = React.useContext(UserContext);

  function init(e) {
    new SmoothScroll(e, 70, 30);
  }

  function SmoothScroll(target, speed, smooth) {
    let moving = false;
    let pos = target.scrollLeft;
    const frame = target;

    target.addEventListener('mousewheel', scrolled, false);
    target.addEventListener('DOMMouseScroll', scrolled, false);

    function scrolled(e) {
      e.preventDefault(); // disable default scrolling

      const delta = normalizeWheelDelta(e);

      pos += -delta * speed;
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientLeft)); // limit scrolling

      if (!moving) update();
    }

    function normalizeWheelDelta(e) {
      if (e.detail) {
        if (e.wheelDelta) return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
        // Opera
        return -e.detail / 3; // Firefox
      }
      return e.wheelDelta / 120; // IE,Safari,Chrome
    }

    function update() {
      moving = true;

      const delta = (pos - target.scrollLeft) / smooth;

      target.scrollLeft += delta;

      if (Math.abs(delta) > 0.5) requestFrame(update);
      else moving = false;
    }

    var requestFrame = (function () {
      // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    })();
  }
  useEffect(() => {
    init(document.getElementById('viewsContainerID'));
  }, []);
  return (
    <StyledTagViewGrid id="viewsContainerID">
      <TagView
        name="code"
        color="#455AC9"
        background="/assets/images/back1.png"
        hover={() => {
          localStorage.setItem('theme', 'theme1');
          setTheme(Themes.theme1);
        }}
      />
      <TagView
        name="mobile"
        color="#E07495"
        background="/assets/images/back2.png"
        hover={() => {
          localStorage.setItem('theme', 'theme2');
          setTheme(Themes.theme2);
        }}
      />
      <TagView
        name="industrial"
        color="#BFA44E"
        background="/assets/images/back3.png"
        hover={() => {
          localStorage.setItem('theme', 'theme3');
          setTheme(Themes.theme3);
        }}
      />
      <TagView
        name="art"
        color="#579365"
        background="/assets/images/back4.png"
        hover={() => {
          localStorage.setItem('theme', 'theme4');
          setTheme(Themes.theme4);
        }}
      />
      <TagView
        name="iot"
        color="#83B6CA"
        background="/assets/images/back5.png"
        hover={() => {
          localStorage.setItem('theme', 'theme5');
          setTheme(Themes.theme5);
        }}
      />
    </StyledTagViewGrid>
  );
};

export default TagViewGrid;
