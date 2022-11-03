import { PropTypes } from 'prop-types';
import {
  ButtonList,
  SectionList,
  ButtonListItem,
  Buttons,
} from './Feetback.styled';

export const FeedbackOptions = ({ options, incrementFeetback }) => {
  return (
    <SectionList>
      Please leave feetback
      <ButtonList>
        {options.map((option, index) => (
          <ButtonListItem key={index}>
            <Buttons type="button" onClick={() => incrementFeetback(option)}>
              {option}
            </Buttons>
          </ButtonListItem>
        ))}
      </ButtonList>
    </SectionList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  increment: PropTypes.func,
};
