import React from 'react';
import PropTypes from 'prop-types';
// styles
import { field } from './SquaresField.module.css';
// components
import SquaresFieldRow from '../../components/SquaresFieldRow';

const SquaresField = ({ rowsState }) => (
  <div className={field}>
    {
      rowsState.map((item) => (
        <SquaresFieldRow {...item} />
      ))
      }
  </div>
);

SquaresField.propTypes = {
  rowsState: PropTypes.array,
};

export default SquaresField;
