import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px 15px;

  button {
    padding: 15px 0;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: #293c70;
    color: #fff;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }
`;

export const TitleCard = styled.span`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

export const DescriptionCard = styled.p`
  color: #422f2f;
`;

export const MoneyContainer = styled.div``;

export const TextMoney = styled.p`
  span {
    font-size: 25px;
    font-weight: bold;
  }
`;

export const TextCredits = styled.p`
  background-color: #d3dbff;
  padding: 10px;
  border: 1px solid #000;
  font-size: 15px;
  border-radius: 8px;
  margin-top: 10px;
  text-align: center;
  color: #000;
  font-weight: bold;
`;

export const ListBenefics = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 5px;

  li {
    display: flex;
    gap: 10px;
  }
`;
