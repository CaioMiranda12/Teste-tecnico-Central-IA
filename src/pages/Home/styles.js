import styled from 'styled-components';

export const MainBackground = styled.div`
  background-color: #3d5eff;
  height: 45vh;

  display: flex;
  justify-content: center;
  padding-top: 60px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    color: #fff;
    text-align: center;
  }
`;

export const MainInputContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 5px;

  width: 70%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  input {
    outline: none;
    padding: 15px 0;
    padding-left: 10px;
    width: 75%;
    border: none;
    background-color: transparent;

    font-size: 16px;
  }
`;

export const SearchButton = styled.button`
  padding: 0 20px;
  color: #fff;
  background-color: #1d49c1;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const MainMostSearchs = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  color: #fff;
`;

export const MostSearchItem = styled.a`
  display: flex;
  gap: 5px;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;

  transition: 400ms;

  color: #fff;
  text-decoration: none;

  &:hover {
    color: #3d5eff;
    background-color: #fff;
  }
`;

export const AdvancedSearchItem = styled.a`
  display: flex;
  gap: 5px;
  padding: 5px;
  cursor: pointer;

  font-weight: bold;
  color: #fff;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const SectionIAs = styled.div`
  padding: 20px 0 100px 0;
  display: grid;
  grid-template-columns: repeat(3, 25%);
  gap: 50px;
  justify-content: center;
`;

export const MostAcessIAContainer = styled.div`
  background-color: #fff;
  padding: 10px;

  position: relative;
  bottom: 100px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.32);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.32);

  h3 {
    border-bottom: 1px solid #000;
  }

  li {
    list-style: none;
    display: flex;
    margin-bottom: 20px;
    gap: 10px;

    img {
      width: 40px;
      border-radius: 8px;
    }

    span {
      font-weight: bold;
    }

    p {
      color: gray;
    }
  }

  button {
    padding: 10px 0;
    background-color: transparent;
    border: 1px solid #000;
    cursor: pointer;
    border-radius: 8px;

    transition: 500ms;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

export const SectionInfoCentralIA = styled.div`
  /* height: 60vh; */
  background-color: #3d5eff;
  margin: 0 50px;
  border-radius: 16px;
`;

export const InfoTopContainer = styled.div`
  background-color: #3030ff;
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 16px;

  position: relative;
  bottom: 100px;

  h2 {
    color: #d2d2d2;
  }
`;

export const InfoTopItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20%);
  justify-content: space-around;
`;

export const InfoTopText = styled.p`
  margin-bottom: 20px;
  color: #d2d2d2;
`;

export const InfoTopSubtitle = styled.span`
  color: #fff;
  font-size: 35px;
  font-weight: bold;
`;

export const InfoMidText = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 30px;
  width: 70%;
  margin: 0 auto;

  span {
    font-weight: bold;
  }
`;

export const InfoBottomContainer = styled.div`
  background-color: #3d9cff;
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 16px;

  position: relative;
  top: 50px;
`;

export const InfoBottomIconContainer = styled.div`
  display: flex;
  gap: 20px;

  position: relative;
  bottom: 35px;
`;

export const TextInfoBottom = styled.div`
  background: ${(props) => (props.isAnual ? '#fff' : '#293c70')};
  padding: 15px 25px;
  border-radius: 16px;
  color: ${(props) => (props.isAnual ? '#000' : '#fff')};
  font-weight: ${(props) => props.isAnual && 'bold'};
`;

export const InfoBottomCardItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20%);
  justify-content: space-around;
`;
