import React from 'react';
import {mount} from 'enzyme';

import Squares from '../Squares';
import SquaresFieldRow from '../../components/SquaresFieldRow';
import SquaresFieldCell from '../../components/SquaresFielsCell';

test('initialWidth, initialHeight props component size', () => {
  const wrapper = mount(<Squares initialWidth={5} initialHeight={5}/>);
  expect(wrapper.find(SquaresFieldRow)).toHaveLength(5);
  expect(wrapper.find(SquaresFieldCell)).toHaveLength(25);
});

test('add new cols, rows', () => {
  const wrapper = mount(<Squares/>);
  expect(wrapper.find('.squares__buttons .buttonAddRow')
    .simulate('click'));
  expect(wrapper.find(SquaresFieldRow)).toHaveLength(5);

  expect(wrapper.find('.button .buttonAddCol')
    .simulate('click'));
  expect(wrapper.find(SquaresFieldCell)).toHaveLength(25);
});

test('del cols, rows', () => {
  const wrapper = mount(<Squares/>);
  expect(wrapper.find(SquaresFieldCell).first().simulate('mouseover'));
  expect(wrapper.find('.button .buttonDelRow')
    .simulate('click'));
  expect(wrapper.find(SquaresFieldRow)).toHaveLength(3);

  expect(wrapper.find(SquaresFieldCell).first().simulate('mouseover'));
  expect(wrapper.find('.button .buttonDelCol')
    .simulate('click'));
  expect(wrapper.find(SquaresFieldCell)).toHaveLength(9);
});

test('no del last cols, rows', () => {
  const wrapper = mount(<Squares initialWidth={1} initialHeight={1}/>);
  expect(wrapper.find(SquaresFieldCell).simulate('mouseover'));
  expect(wrapper.find('.squares__button .squares__button--del-row')).toHaveLength(0);
  expect(wrapper.find('.squares__button .squares__button--del-col')).toHaveLength(0);;
});
