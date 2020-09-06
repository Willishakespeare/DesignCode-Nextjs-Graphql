import { Theme } from '../styled';

const text: Theme['colors']['text'] = {
  primary: '#FFFFFF',
  secondary: '#201F1E',
  acent: '#C5C5C5CC',
  blurPrimary: '#E4E4E4CC',
  blurSecondary: '#BABABACC',
  blurAcent: '#C5C5C5CC'
};

const theme2: Theme = {
  name: 'theme2',
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
  },
  title: {
    primaryText: ['DESIGN', 'DESIGN', 'GET BEST MOBILE APP FOR YOUR'],
    secondatyText: ['YOUR APP WITH', 'CODE']
  },
  description: {
    text: [
      'Lorem ipsum dolor sit amet sed, consectetur adipiscing elit, sed elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor.'
    ]
  }
};

export default theme2;
