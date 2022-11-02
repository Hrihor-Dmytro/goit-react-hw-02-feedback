import { PropTypes } from 'prop-types';

export const Statistics = ({ good, neutral, bad }) => {
  return (
    <section>
      Statistics
      <ul>
        <li>good: {good}</li>
        <li>neutral: {neutral}</li>
        <li>bad: {bad}</li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
