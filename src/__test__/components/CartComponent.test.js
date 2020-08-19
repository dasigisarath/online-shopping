import React from 'react';
import { mount } from 'enzyme';
import axios from 'axios';
import viewCartData from '../../components/viewcart/Cartdata';


describe("Given Component: ", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<viewCartData />);
  })
  it("Should render the component", () => {
    expect(wrapper).toHaveLength(1);
  });
  it("should render text", () => {
    expect(wrapper.find("h1")).toHaveLength(0);
    expect(wrapper.find("table"));
    expect(wrapper.find("tr"));
    expect(wrapper.find("td"))
  });
})