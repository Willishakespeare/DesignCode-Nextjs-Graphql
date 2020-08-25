import { Theme } from '../styled';

const text: Theme['colors']['text'] = {
  primary: '#FFFFFF',
  secondary: '#201F1E',
  acent: '#C5C5C5CC',
  blurPrimary: '#E4E4E4CC',
  blurSecondary: '#BABABACC',
  blurAcent: '#C5C5C5CC'
};

const theme5: Theme = {
  name: 'theme5',
  background: '/assets/images/back5.png',
  colors: {
    fill: {
      primary: '#83B6CA',
      secondary: '#3E8FB0',
      acent: '#A63054'
    },
    blur: {
      primary: '#519CE04D',
      secondary: '#6AA8C24D',
      acent: '#A630544D'
    },
    text
  },
  title: {
    primaryText: ['INTERNET OF THINGS', 'HAND', 'GET BEST MOBILE APP FOR YOUR'],
    secondatyText: ['AT REACH OF YOUR', '']
  },
  description: {
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor.'
    ]
  }
};

export default theme5;
