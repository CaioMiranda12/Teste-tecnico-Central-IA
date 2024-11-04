import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px 80px;
  gap: 20px;

  @media (max-width: 600px) {
    padding: 20px 10px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    justify-content: start;
    gap: 10px;
  }
`;

export const TopLeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    gap: 3px;
  }

  h1 {
    font-size: 35px;
    margin-right: 20px;

    @media (max-width: 600px) {
      font-size: 20px;
      margin-right: 5px;
    }
  }

  div {
    display: flex;
    gap: 30px;

    @media (max-width: 600px) {
      gap: 8px;
    }

    a {
      color: #666667;
      text-decoration: none;
      font-size: 17px;

      @media (max-width: 600px) {
        font-size: 13px;
      }

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

  a {
    color: #666667;
    text-decoration: none;
    font-size: 17px;

    @media (max-width: 600px) {
      font-size: 13px;
    }

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

    @media (max-width: 600px) {
      padding: 5px 15px;
      font-size: 12px;
      max-width: 80px;
    }

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }
`;

export const InfoUser = styled.div`
  display: flex;
  gap: 10px;
`;

export const TopInputContainer = styled.div`
  padding: 8px;
  background: #f0f0f0;
  display: ${(props) => (props.mobileMode ? 'none' : 'flex')};
  align-items: center;
  gap: 5px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;

  @media (max-width: 900px) {
    display: none;
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
    line-height: 200%;

    a {
      color: #666667;
      text-decoration: none;
      font-size: 17px;

      @media (max-width: 900px) {
        font-size: 10px;
      }

      &:hover {
        opacity: 0.8;
      }

      &:active {
        opacity: 0.6;
      }
    }
  }
`;

export const InputSearch = styled.input`
  border: none;
  background: #f0f0f0;
  outline: none;
`;
