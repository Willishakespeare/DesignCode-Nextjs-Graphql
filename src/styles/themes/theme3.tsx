import { Theme } from '../styled';

const text: Theme['colors']['text'] = {
  primary: '#FFFFFF',
  secondary: '#201F1E',
  acent: '#C5C5C5CC',
  blurPrimary: '#E4E4E4CC',
  blurSecondary: '#BABABACC',
  blurAcent: '#C5C5C5CC'
};

const theme3: Theme = {
  name: 'theme3',
  background: '/assets/images/back3.png',
  colors: {
    fill: {
      primary: '#BFA44E',
      secondary: '#8E772E',
      acent: '#275C8B'
    },
    blur: {
      primary: '#A5882D4D',
      secondary: '#A5882D4D',
      acent: '#275D904D'
    },
    text
  },
  title: {
    primaryText: ['IMPROVE', 'DESIGN', 'GET BEST SOLUTION FOR YOUR BUSINESS'],
    secondatyText: ['YOUR BUSINESS WITH', 'CODE']
  },
  description: {
    text: [
      'Lorem ipsum dolor sit amet sed, consectetur adipiscing elit, sed elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor.'
    ]
  }
};

export default theme3;
