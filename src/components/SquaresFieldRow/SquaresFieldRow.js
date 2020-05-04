import React from 'react';
import PropTypes from 'prop-types';

//styles
import {fieldRow} from './SquaresFieldRow.module.css';

//componetns
import SquaresFieldCell from '../SquaresFielsCell';

const SquaresFieldRow = ({cols}) => {
    return (
    <div className={fieldRow}>
      {cols.map(item => {
        return(
        <SquaresFieldCell {...item}/>)
      })}
    </div>
  );
};

SquaresFieldRow.propTypes = {
  cols: PropTypes.array,
}

export default SquaresFieldRow;
