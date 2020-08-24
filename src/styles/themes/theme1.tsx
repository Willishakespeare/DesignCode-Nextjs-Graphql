import { Theme } from '../styled';

const text: Theme['colors']['text'] = {
  primary: '#FFFFFFCC',
  secondary: '#201F1E',
  acent: '#C5C5C5CC',
  blurPrimary: '#E4E4E4CC',
  blurSecondary: '#BABABACC',
  blurAcent: '#C5C5C5CC'
};

const theme1: Theme = {
  name: 'theme1',
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

export default theme1;
