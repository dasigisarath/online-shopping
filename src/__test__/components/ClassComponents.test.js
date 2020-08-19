import React from 'react'
import { mount } from 'enzyme';
import viewProductsData from '../../components/dashboard/dashboard';
import viewCartData from '../../components/viewcart/Cartdata';
import OrderHistory from "../../components/orderhistory/OrderHistory";
import viewProducts from '../../components/viewproducts/Productsdata';
import Register from '../../components/register/Register';
import Login from '../../components/login/Login';

describe("given component", () => {
    let wrapper;
    describe("class component", () => {
        it("should render component", () => {
            wrapper = mount(<viewProductsData />);
            expect(wrapper).toHaveLength(1);
        })
    });
    describe("class component", () => {
        it("should render component", () => {
            wrapper = mount(<viewCartData />);
            expect(wrapper).toHaveLength(1);
        })
    });
    describe("class component", () => {
        it("should render component", () => {
            wrapper = mount(<viewProducts />);
            expect(wrapper).toHaveLength(1);
        })
    });
    describe("class component", () => {
        it("should render component", () => {
            wrapper = mount(<OrderHistory />);
            expect(wrapper).toHaveLength(1);
        });
    });
    describe("class component",()=>{
        it("should render component",() => {
        wrapper= mount(<Register/>);
            expect(wrapper).toHaveLength(1);
        });
    })
    describe("class component",()=>{
        it("should render component",() => {
        wrapper= mount(<Login/>);
            expect(wrapper).toHaveLength(1);
        });
    })
})