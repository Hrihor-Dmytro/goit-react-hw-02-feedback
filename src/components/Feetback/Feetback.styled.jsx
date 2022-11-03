import styled from '@emotion/styled';

export const SectionList = styled.section`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
`;

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-top: 10px;
`;

export const ButtonListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Buttons = styled.button`
  border: 2px solid #531600;
  border-radius: 3px;

  background-color: #c24c07;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    background-color: #09b7de;
    border: 2px solid black;
    color: #f9fdfc;
    transition: background-color 250ms ease-in, border 250ms ease-in,
      color 250ms ease-in;
  }
`;
