import styled from '@emotion/styled';

export const SectionStatList = styled.section`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
export const StatListItem = styled.li`
  margin: 0;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
