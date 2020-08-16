import { Global, css } from '@emotion/core';

const FontLoad = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'MohrRounded';
        font-weight: 200;
        src: url('./assets/fonts/MohrRounded/MohrRounded-Thin.ttf');
      }
      @font-face {
        font-family: 'MohrRounded';
        font-weight: 300;
        src: url('./assets/fonts/MohrRounded/MohrRounded-Light.ttf');
      }
      @font-face {
        font-family: 'MohrRounded';
        font-weight: 400;
        src: url('./assets/fonts/MohrRounded/MohrRounded-Regular.ttf');
      }
      @font-face {
        font-family: 'MohrRounded';
        font-weight: 500;
        src: url('./assets/fonts/MohrRounded/MohrRounded-Medium.ttf');
      }
      @font-face {
        font-family: 'MohrRounded';
        font-weight: 600;
        src: url('./assets/fonts/MohrRounded/MohrRounded-SemiBold.ttf');
      }
      @font-face {
        font-family: 'MohrRounded';
        font-weight: 700;
        src: url('./assets/fonts/MohrRounded/MohrRounded-Bold.ttf');
      }
      @font-face {
        font-family: 'MohrRounded';
        font-weight: 800;
        src: url('./assets/fonts/MohrRounded/MohrRounded-Black.ttf');
      }
      @font-face {
        font-family: 'MohrRounded';
        font-weight: 900;
        src: url('./assets/fonts/MohrRounded/MohrRounded-Heavy.ttf');
      }
    `}
  />
);

export default FontLoad;
