import styled, { CreateStyled } from '@emotion/styled';

interface ITextTitle {
  primaryText: [string, string, string];
  secondatyText: [string, string];
}
interface ITextDescription {
  text: [string, string];
}

interface IText {
  primary: string;
  secondary: string;
  acent: string;
  blurPrimary: string;
  blurSecondary: string;
  blurAcent: string;
}
interface IColor {
  primary: string;
  secondary: string;
  acent: string;
}
interface IColorVariant {
  fill: IColor;
  blur: IColor;
  text: IText;
}
export type Theme = {
  name: string;
  colors: IColorVariant;
  background: string;
  title: ITextTitle;
  description: ITextDescription;
};

export default styled as CreateStyled<Theme>;
