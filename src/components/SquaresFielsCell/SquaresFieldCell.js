import React from 'react';

import { fieldCell } from './SquaresFieldCell.module.css';

const SquaresFieldCell = ({ changeMinusPosition, onMouseOut, cellSize }) => (
  <div
    className={fieldCell}
    style={{ width: cellSize, height: cellSize }}
    onMouseOver={changeMinusPosition}
    onMouseOut={onMouseOut}
  />
);

export default SquaresFieldCell;
