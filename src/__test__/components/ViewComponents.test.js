import React from 'react';
import {mount} from 'enzyme';
import DisplayItems from '../../components/viewproducts/DisplayProducts';
import  DisplayProductsInCart  from '../../components/viewcart/DisplayCart';
import  Displayorders  from '../../components/orderhistory/Displayorders';
import OrderHistoryData from '../../components/orderhistory/OrderHistory';


describe('<DisplayProducts /> with no props', () => {
    const container = mount(<DisplayItems />);
    it('should match the snapshot', () => {
        expect(wrapper.find("tr")).toHaveLength(1);
        expect(wrapper.find("td")).toHaveLength(6);
        let fakeEvent;
        wrapper.find("button").simulate('click', fakeEvent);
      
    });
})

describe('<Login /> with no props', () => {
    const container = mount(<DisplayProductsInCart />);
    it('should match the snapshot', () => {
        expect(wrapper.find("tr")).toHaveLength(1);
        expect(wrapper.find("td")).toHaveLength(6);
        let fakeEvent;
        wrapper.find("button").simulate('click', fakeEvent);
      
    });
})

describe('<Login /> with no props', () => {
    const container = mount(<Displayorders />);
    it('should match the snapshot', () => {
        expect(wrapper.find("tr")).toHaveLength(1);
        expect(wrapper.find("td")).toHaveLength(6);
        let fakeEvent;
        wrapper.find("button").simulate('click', fakeEvent);
      
    });
})


describe("Given Component: ",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=mount(<OrderHistoryData/>);
    })
    it("Should render the component",()=>{
        expect(wrapper.find("h1").text()).toBe("Order History");

        // expect(wrapper).toHaveLength();
    });
   
})