import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders array', () => {
  const { getAllByText } = render(<App />)
  const items = getAllByText(/from/)
  expect(items.length).toBeGreaterThan(0)
  //doesnt work because the array data is being fetched and is therefore asynchronous and there's nothing in the training kit material that explains how the fuck im supposed to deal with that in tests and every google solution looks ridiculously convoluted
});

it('renders blah', () => {
  const { getByText } = render(<App />)
  getByText(/blah/);

});

it('button increments when clicked', () => {
  const { getByText } = render(<App />)
  const button = getByText(/0/);
  fireEvent.click(button)
  getByText(/1/)

});