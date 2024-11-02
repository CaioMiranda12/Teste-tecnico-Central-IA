import styled from 'styled-components';

export const Container = styled.div`
  background-color: #2e67f8;
  padding: 10px 20px 20px 20px;
  border-radius: 16px;

  span {
    color: #fff;
    font-weight: bold;
    font-size: 25px;
  }

  p {
    color: #d2d2d2;
    font-weight: 500;
    margin: 15px 0;
  }

  a {
    color: #d2d2d2;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;

export const IconContainer = styled.div`
  width: max-content;
  background-color: darkblue;
  padding: 10px;
  color: #fff;
  border-radius: 8px;

  position: relative;
  bottom: 20px;
`;
