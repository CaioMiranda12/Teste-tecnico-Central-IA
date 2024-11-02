import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px 80px;
  gap: 20px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TopLeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 35px;
    margin-right: 20px;
  }

  div {
    display: flex;
    gap: 30px;

    a {
      color: #666667;
      text-decoration: none;
      font-size: 17px;

      &:hover {
        opacity: 0.8;
      }

      &:active {
        opacity: 0.6;
      }
    }
  }
`;

export const TopRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  div {
    padding: 8px;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 500;
  }

  input {
    border: none;
    background: #f0f0f0;
    outline: none;
  }

  a {
    color: #666667;
    text-decoration: none;
    font-size: 17px;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }

  button {
    padding: 10px 25px;
    border: none;
    border-radius: 12px;
    color: #fff;
    background-color: black;
    font-size: 15px;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    gap: 30px;

    a {
      color: #666667;
      text-decoration: none;
      font-size: 17px;

      &:hover {
        opacity: 0.8;
      }

      &:active {
        opacity: 0.6;
      }
    }
  }
`;
