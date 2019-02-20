import React from 'react';
import { shallow, mount } from 'enzyme';
import HomePage from './';

function setup(setupProps) {
  const defaultProps = {  };

  const props = { ...setupProps, ...defaultProps };
  const wrapperMount = mount(<HomePage {...props} />);

  return { props, wrapperMount };
}

describe('Home page test', () => {
  it('Home page renders without crashing', () => {
    const { wrapperMount } = setup();

    expect(wrapperMount.exists()).toEqual(true);
  });
});
