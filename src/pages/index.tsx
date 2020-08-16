import Button from '@Atoms/Button';
import styled from '@Styles/styled';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: max-content;
  height: max-content;
`;
export default function Home() {
  return (
    <StyledDiv>
      <Button text="CONTACT" variant="fill" />
      <Button text="PORTFOLIO" variant="fill" />
      <Button text="DESIGNS" variant="fill" />
      <Button text="PROJECTS" variant="fill" />
      <Button text="HOME" variant="fill" icon="home" active />
    </StyledDiv>
  );
}
