import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media only screen and (min-width: 1440px) {
    position: relative;
    flex-direction: row;
    top: -22rem;

    height: 50vh;
    margin-top: 50vh;
  }
`;