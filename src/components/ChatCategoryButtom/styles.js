import styled from 'styled-components';

export const Container = styled.div`
  .css-1mirf4-MuiButtonBase-root-MuiButton-root {
    gap: 10px;
    height: 48px;
    background-color: #fff;
    border: 1px solid gray;
    height: 48px;
    text-align: left;

    @media (max-width: 600px) {
      height: 90px;
    }

    div {
      display: flex;
      flex-direction: column;

      font-size: 14px;
      color: #000;
      text-transform: none;

      span {
        color: gray;
      }

      p {
        font-weight: 500;
      }
    }

    img {
      width: 24px;
      border-radius: 8px;
    }
  }
`;
