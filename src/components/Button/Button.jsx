import PropTypes from 'prop-types';
import c from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button className={c.Button} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
