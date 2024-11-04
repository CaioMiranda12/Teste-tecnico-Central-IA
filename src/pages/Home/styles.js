import styled from 'styled-components';

export const MainBackground = styled.div`
  background-color: #3d5eff;
  height: 45vh;

  display: flex;
  justify-content: center;
  padding-top: 60px;

  @media (max-width: 400px) {
    height: 60vh;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    color: #fff;
    text-align: center;

    @media (max-width: 900px) {
      width: 70%;
      margin: 0 auto;
    }

    @media (max-width: 600px) {
      font-size: 13px;
    }
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

  @media (max-width: 1000px) {
    width: 90%;
  }

  input {
    outline: none;
    padding: 15px 0;
    padding-left: 10px;
    width: 75%;
    border: none;
    background-color: transparent;

    font-size: 16px;

    @media (max-width: 1000px) {
      padding: 10px 0;
      font-size: 13px;
    }
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
  justify-content: center;

  color: #fff;

  @media (max-width: 1000px) {
    gap: 0;
  }

  span {
    @media (max-width: 1000px) {
      font-size: 12px;
      padding: 0 10px;
    }
  }
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

  @media (max-width: 1000px) {
    font-size: 10px;
  }

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

  @media (max-width: 1000px) {
    font-size: 12px;
  }

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

  @media (max-width: 600px) {
    gap: 30px;
  }
`;

export const MostAcessIAContainer = styled.div`
  background-color: #fff;
  padding: 10px;

  position: relative;
  bottom: 100px;

  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;

  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.32);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.32);

  @media (max-width: 600px) {
    font-size: 14px;
  }

  h3 {
    border-bottom: 1px solid #000;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;

    img {
      width: 40px;
      border-radius: 8px;
    }

    span {
      font-weight: bold;

      @media (max-width: 600px) {
        font-size: 10px;
      }
    }

    p {
      color: gray;

      @media (max-width: 600px) {
        font-size: 10px;
      }
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

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
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

  display: flex;
  align-items: center;
`;

export const InfoBottomCardItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20%);
  justify-content: space-around;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;
