import { Theme } from '../styled';

const text: Theme['colors']['text'] = {
  primary: '#FFFFFFCC',
  secondary: '#201F1E',
  acent: '#C5C5C5CC',
  blurPrimary: '#E4E4E4CC',
  blurSecondary: '#BABABACC',
  blurAcent: '#C5C5C5CC'
};

const theme4: Theme = {
  name: 'theme4',
  background: '/assets/images/back4.png',
  colors: {
    fill: {
      primary: '#579365',
      secondary: '#3D5E45',
      acent: '#A63054'
    },
    blur: {
      primary: '#41774E4D',
      secondary: '#2857334D',
      acent: '#A630544D'
    },
    text
  },
  title: {
    primaryText: ['ILLUSTRATIONS', 'DESIGN', 'GET BEST MOBILE APP FOR YOUR'],
    secondatyText: ['AND REBRANDINGS WITH', 'CODE']
  },
  description: {
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor.'
    ]
  }
};

export default theme4;
