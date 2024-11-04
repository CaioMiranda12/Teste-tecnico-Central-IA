import styled from 'styled-components';

export const Container = styled.div`
  .css-1mirf4-MuiButtonBase-root-MuiButton-root {
    gap: 10px;
    height: 48px;
    background-color: #fff;
    border: 1px solid gray;

    @media (max-width: 600px) {
      height: 90px;
    }

    div {
      display: flex;
      align-items: center;
      gap: 5px;

      font-size: 14px;
      color: #000;
      text-transform: none;
      font-weight: 400;
    }

    img {
      width: 24px;
      border-radius: 8px;
    }
  }
`;
