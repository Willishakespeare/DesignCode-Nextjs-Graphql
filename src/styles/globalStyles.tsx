import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import FontLoad from './fontLoad';

const GlobalStyles = () => (
  <>
    <FontLoad />
    <Global
      styles={css`
        ${emotionNormalize}
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          font-size: 16px;
        }

        html body {
          width: 100vw;
          height: 100vh;
          background-color: #000;
        }
        .fade-enter {
          opacity: 0;
        }
        .fade-enter-active {
          opacity: 1;
          transition: opacity 0.5s;
        }
        .fade-exit {
          opacity: 1;
        }
        .fade-exit-active {
          opacity: 0;
          transition: opacity 0.5s;
        }
        .changeBackground-enter {
          opacity: 0;
        }
        .changeBackground-enter-active {
          opacity: 1;
          animation: fadeout 0.8s ease;
        }
        .changeBackground-exit {
          opacity: 1;
        }
        .changeBackground-exit-active {
          opacity: 0;
          animation: fadein 0.8s ease;
        }
        @keyframes fadeout {
          0% {
            transform: translateX(-20px);
            opacity: 0;
          }
          100% {
            transform: translateX(0px);
            opacity: 1;
          }
        }
        @keyframes fadein {
          0% {
            opacity: 1;
            transform: translateX(0px);
          }
          100% {
            transform: translateX(-20px);
            opacity: 1;
          }
        }
      `}
    />
  </>
);

export default GlobalStyles;
