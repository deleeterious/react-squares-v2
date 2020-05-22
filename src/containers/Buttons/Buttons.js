/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
// icons
import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';
// styles
import {
  buttonAddRow, buttonAddCol, buttonDelRow, buttonDelCol,
} from './Buttons.module.css';
// components
import SquaresButton from '../../components/SquaresButton';
// constants

const INDENT = 5;

const Buttons = ({
  cellSize, onMouseOut, onMouseOver, onClick, position, visibility, squaresState,
}) => {
  const {
    addCol, addRow, delCol, delRow,
  } = onClick;
  const [delColBtnPos, delRowBtnPos] = position;
  const [delColBtnVisible, delRowBtnVisible] = visibility;
  const [colsState, rowsState] = squaresState;


  return (
    <div className="squares__buttons">
      <SquaresButton
        cellSize={cellSize}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onClick={addCol}
        className={buttonAddCol}
        position={{ top: cellSize + INDENT }}
        icon={<Plus />}
      />

      <SquaresButton
        cellSize={cellSize}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onClick={addRow}
        className={buttonAddRow}
        position={{ left: cellSize + INDENT }}
        icon={<Plus />}
      />

      {
        delColBtnVisible
        && colsState.length !== 1
        && (
        <SquaresButton
          cellSize={cellSize}
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
          onClick={delCol}
          className={buttonDelCol}
          position={delColBtnPos}
          icon={<Minus />}
        />
        )
      }

      {
        delRowBtnVisible
        && rowsState.length !== 1
        && (
        <SquaresButton
          cellSize={cellSize}
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
          onClick={delRow}
          className={buttonDelRow}
          position={delRowBtnPos}
          icon={<Minus />}
        />
        )
      }
    </div>
  );
};

Buttons.propTypes = {
  cellSize: PropTypes.number,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onClick: PropTypes.objectOf(PropTypes.func),
  position: PropTypes.arrayOf(PropTypes.object),
  visibility: PropTypes.arrayOf(PropTypes.bool),
  squaresState: PropTypes.arrayOf(PropTypes.array),
};

export default Buttons;
