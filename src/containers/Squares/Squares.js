import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

//styles
import { squares } from './Squares.module.css';

//conteiners
import SquaresField from '../SquaresField';
import Buttons from '../Buttons';

//constants
const DEFAULT_PADDING = 52;
const DEFAULT_CELL_SIZE = 50;
const DEFAULT_WIDTH = 4;
const DEFAULT_HEIGHT = 4;
const INDENT = 2;

let id = 0;

let timeoutID = null;
const Squares = ({initialWidth, initialHeight, cellSize}) => {

  useEffect(() => {
    return () => {
      clearTimeout(timeoutID);
    }
  }, []);

  const cellSizing = cellSize || DEFAULT_CELL_SIZE;
  const [delColBtnPos, setDelColBtnPos] = useState({left: 0});
  const [delRowBtnPos, setDelRowBtnPos] = useState({top: 0});

  const [delColIndex, setDelColIndex] = useState(null);
  const [delRowIndex, setDelRowIndex] = useState(null);

  const [delColBtnVisible, setDelColBtnVisible] = useState(false);
  const [delRowBtnVisible, setDelRowBtnVisible] = useState(false);

  const changeMinusPosition = (e) => {
    clearTimeout(timeoutID);
    setDelColBtnVisible(true);
    setDelRowBtnVisible(true);

    const posCol = [...e.target.parentElement.children].indexOf(e.target);
    setDelColIndex(posCol);
    const posRow = [...e.target.parentElement.parentElement.children].indexOf(
      e.target.parentElement);
    setDelRowIndex(posRow);

    const left = e.target.offsetLeft;
    setDelColBtnPos({left: left});
    const top = e.target.offsetTop;
    setDelRowBtnPos({top: top});
  };
  const onMouseOut = () => {
    timeoutID = setTimeout(() => {
      setDelColBtnVisible(false);
      setDelRowBtnVisible(false);
    }, 300);
  };
  const onButtonOver = () => {
    clearTimeout(timeoutID);
  };

  const initCols = () => {
    const cols = [];
    const width = initialWidth || DEFAULT_WIDTH;

    for (let i = 0; i < width; i++) {
      cols.push({
          key: 'cols' + id,
          cellSize: cellSizing,
          changeMinusPosition: changeMinusPosition,
          onMouseOut: onMouseOut,
        });
        id++;
    }
    return cols;
  };
  const initRows = () => {
    const rows = [];
    const height = initialHeight || DEFAULT_HEIGHT;
    for (let i = 0; i < height; i++) {
      rows.push({
        key:'rows' + id,
        cols: colsState
      });
      id++;
    }
    return rows;
  };

  const [colsState, setColsState] = useState(initCols());
  const [rowsState, setRowsState] = useState(initRows());

  const addCol = () => {
    const newCols = [...colsState];
    newCols.push({
      key: 'cols' + id++,
      cellSize: cellSizing,
      changeMinusPosition: changeMinusPosition,
      isVisible: onMouseOut,
    });
    setColsState(newCols);
    const newRows = rowsState.map(
      () => ({
        key: 'rows' + id++,
        cols: newCols
      }));
    setRowsState(newRows);
  };
  const addRow = () => {
    const newRows = [...rowsState];
    newRows.push({
      key: 'rows'+ id++,
      cols: colsState
    });
    setRowsState(newRows);
  };
  const delCol = () => {
    const newCols = [...colsState];

    newCols.splice(delColIndex, 1);

    setColsState(newCols);

    const newRows = rowsState.map(
      () => ({
        key: 'cols' + id--,
        cols: newCols
      }));
    setRowsState(newRows);

    setDelColBtnVisible(false);
    setDelRowBtnVisible(false);
  };
  const delRow = () => {
    const newRows = [...rowsState];

    newRows.splice(delRowIndex, 1);

    setRowsState(newRows);

    setDelColBtnVisible(false);
    setDelRowBtnVisible(false);
  };

  return (
    <div className={squares} style={{ padding: cellSizing + INDENT || DEFAULT_PADDING}}>
      <Buttons
        cellSize={cellSizing}
        onMouseOut={onMouseOut}
        onMouseOver={onButtonOver}
        onClick={{
          addCol: addCol,
          addRow: addRow,
          delRow: delRow,
          delCol: delCol,
        }}
        position={[delColBtnPos, delRowBtnPos]}
        visibility={[delColBtnVisible, delRowBtnVisible]}
        squaresState={[colsState, rowsState]}
      />

      <SquaresField rowsState={rowsState}/>
    </div>
  );
};

Squares.propTypes = {
  initialWidth: PropTypes.number,
  initialHeight: PropTypes.number,
  cellSize: PropTypes.number,
}

export default Squares;
