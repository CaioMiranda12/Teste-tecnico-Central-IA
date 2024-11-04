import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: 150px;
  background-color: #242498;
  min-height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 30px 0;
    gap: 30px;
  }

  a {
    color: #fff;
    font-size: 20px;
    text-decoration: none;

    @media (max-width: 1000px) {
      font-size: 15px;
    }

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }

  div {
    display: flex;
    gap: 15px;
  }
`;
