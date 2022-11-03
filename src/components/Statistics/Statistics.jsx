import { PropTypes } from 'prop-types';
import { SectionStatList, StatList, StatListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <SectionStatList>
      Statistics
      <StatList>
        <StatListItem>good: {good}</StatListItem>
        <StatListItem>neutral: {neutral}</StatListItem>
        <StatListItem>bad: {bad}</StatListItem>
        <StatListItem>Total: {totalFeedback} </StatListItem>
        <StatListItem>Positive feetback: {positivePercentage}%</StatListItem>
      </StatList>
    </SectionStatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
