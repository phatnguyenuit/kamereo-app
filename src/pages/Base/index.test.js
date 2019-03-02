import { mount, shallow } from "enzyme";

import React from "react";
import ViewBuyer from "./";

function setup(setupProps) {
  const defaultProps = {};

  const props = { ...setupProps, ...defaultProps };
  const wrapperMount = mount(<ViewBuyer {...props} />);

  return { props, wrapperMount };
}

describe("Home page test", () => {
  it("Home page renders without crashing", () => {
    const { wrapperMount } = setup();

    expect(wrapperMount.exists()).toEqual(true);
  });
});
