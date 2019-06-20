import React from 'react';
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency, use it to generate a DOM tree and then turn it into JSON

import App from './App';

describe('<App />', () => {
  it('runs tests', () => {
    expect(true).toBe(true);
  });

  // 2. write this test
  // it('matches snapshot', () => {
  //   const tree = renderer.create(<App flag={'no'} />); // generates a DOM tree

  //   // snapshots are a JSON representation of the DOM tree
  //   expect(tree.toJSON()).toMatchSnapshot();
  // });

  it('matches snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot(); //works the same as renderer but is relying on react-testing-library
  });
});
