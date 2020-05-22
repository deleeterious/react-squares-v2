import React from 'react';
import PropTypes from 'prop-types';
// styles
import { button } from './SquaresButton.module.css';

const SquaresButton = ({
  className, onMouseOver, onMouseOut, onClick, position, cellSize, icon,
}) => (
  <button
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
    className={`${button} ${className}`}
    onClick={onClick}
    style={{ ...position, width: cellSize, height: cellSize }}
  >
    {icon}
  </button>
);

SquaresButton.propTypes = {
  className: PropTypes.string,
  cellSize: PropTypes.number,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onClick: PropTypes.func,
  position: PropTypes.object,
  squaresState: PropTypes.arrayOf(PropTypes.array),
  icon: PropTypes.element,
};

export default SquaresButton;
