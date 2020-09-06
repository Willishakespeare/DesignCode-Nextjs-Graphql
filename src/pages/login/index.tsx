import React from 'react';
import styled from '@Styles/styled';
import LoginPageTemplate from '@Templates/LoginPageTemplate';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  color: white;
  background-color: black;
  z-index: 2;
`;

const ProjectsPage: React.FC = () => {
  return (
    <LoginPageTemplate>
      <StyledLogin>
        <form>
          <div>
            <label htmlFor="email">
              Email
              <input id="email" type="email" placeholder="email Usuario" />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              password
              <input id="password" type="password" placeholder="password Usuario" />
            </label>
          </div>
          <input type="submit" value="iniciar Secion" />
        </form>
      </StyledLogin>
    </LoginPageTemplate>
  );
};

export default ProjectsPage;
