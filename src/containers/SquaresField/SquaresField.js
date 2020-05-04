import React from 'react';
import PropTypes from 'prop-types';

//styles
import { field } from './SquaresField.module.css';

//components
import SquaresFieldRow from '../../components/SquaresFieldRow';

const SquaresField = ({ rowsState }) => {
  return (
    <div className={field}>
      {
      rowsState.map(item => {
        return(
          <SquaresFieldRow {...item} />
        )
      })
      }
    </div>
  );
};

SquaresField.propTypes = {
  rowsState: PropTypes.array,
}

export default SquaresField;
