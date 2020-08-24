import { Theme } from './styled';

const text: Theme['colors']['text'] = {
  primary: '#FFFFFFCC',
  secondary: '#201F1E',
  acent: '#C5C5C5CC',
  blurPrimary: '#E4E4E4CC',
  blurSecondary: '#BABABACC',
  blurAcent: '#C5C5C5CC'
};

export const theme1: Theme = {
  name: 'blueTheme',
  background: '/assets/images/back1.png',
  colors: {
    fill: {
      primary: '#455AC9',
      secondary: '#3249C2',
      acent: '#275C8B'
    },
    blur: {
      primary: '#5339BB4D',
      secondary: '#5339BB4D',
      acent: '#275D904D'
    },
    text
  }
};

export const theme2: Theme = {
  name: 'redTheme',
  background: '/assets/images/back2.png',
  colors: {
    fill: {
      primary: '#E07495',
      secondary: '#CD5479',
      acent: '#A63054'
    },
    blur: {
      primary: '#E483A14D',
      secondary: '#BA40664D',
      acent: '#A630544D'
    },
    text
  }
};

export default { theme1, theme2 };
