import { PropTypes } from 'prop-types';
import { Messege } from 'components/Notification/Notification.styled';

export const Notification = ({ message }) => {
  return <Messege>{message}</Messege>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
