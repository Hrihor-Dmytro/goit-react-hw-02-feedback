import { PropTypes } from 'prop-types';

export const FeedbackOptions = ({ options, incrementFeetback }) => {
  return (
    <section title="Please leave feetback">
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button type="button" onClick={() => incrementFeetback(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  increment: PropTypes.func,
};
