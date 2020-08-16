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
  colors: {
    fill: {
      primary: '#3380C7',
      secondary: '#1F6CB2',
      acent: '#275C8B'
    },
    blur: {
      primary: '#519CE04D',
      secondary: '#519CE04D',
      acent: '#275D904D'
    },
    text
  }
};

export const theme2: Theme = {
  name: 'redTheme',
  colors: {
    fill: {
      primary: '#E07495',
      secondary: '#CD5479',
      acent: '#2B5072'
    },
    blur: {
      primary: '#E483A14D',
      secondary: '#BA40664D',
      acent: '#2B5072'
    },
    text
  }
};
