import React from 'react';
import { mount } from 'enzyme';
import axios from 'axios';
import Register, { Logout } from '../../components/register/Register';
jest.mock('axios');


describe("Given Component: ", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Register />);
    })
    it("Should render the component", () => {
        expect(wrapper).toHaveLength(1);
    });
    it("Should render content", () => {
        expect(wrapper.find("h3").text()).toBe("Sign up Form");
        expect(wrapper.find("h4").text()).toBe("Welcome to Online Shopping");
        expect(wrapper.find("a").text()).toBe(" Have account ? Login");


    });
    describe("when onChange event is not triggered on input field", () => {
        it("should have default value", () => {
            expect(wrapper.state().name).toBe("");
            expect(wrapper.state().userEmail).toBe("");
            expect(wrapper.state().password).toBe("");
            expect(wrapper.state().number).toBe("");
            expect(wrapper.state().address).toBe("");

        });
    });

    describe("when  onChange event is triggered on input field", () => {
        let handleChangeSpy;
        beforeEach(() => {
            handleChangeSpy = jest.spyOn(wrapper.instance(), 'handleChange');
            (wrapper.find("#name")).simulate('change', { target: { name: "name", value: "sarath" } });
            (wrapper.find("#userEmail")).simulate('change', { target: { name: "userEmail", value: "sarath@gmail.com" } });
            (wrapper.find("#password")).simulate('change', { target: { name: "password", value: "sarath123" } });
            (wrapper.find("#number")).simulate('change', { target: { name: "number", value: "12345" } });
            (wrapper.find("#address")).simulate('change', { target: { name: "address", value: "vizag" } });
            const users = [{ name: 'sarath', email: 'sarath@gmail.com', password: 'sarath123', number: '9025932512', address: 'vizag' }];
            const resp = { data: users };
            axios.get.mockResolvedValue(resp);


        })
        it("should have specified value", () => {
            expect(wrapper.state().name).toBe("sarath");
            expect(wrapper.state().userEmail).toBe("sarath@gmail.com");
            expect(wrapper.state().password).toBe("sarath123");
            expect(wrapper.state().number).toBe("12345");
            expect(wrapper.state().address).toBe("vizag");
        });
        it("should have called handleChange event", () => {
            expect(handleChangeSpy).toHaveBeenCalled()
        });

    });
    describe("when  onsubmit event is triggered on input field", () => {
        let handleSubmitSpy;
        beforeEach(() => {
            handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmit');
            (wrapper.find("#name")).simulate('change', { target: { name: "name", value: "sarath" } });
            (wrapper.find("#userEmail")).simulate('change', { target: { name: "userEmail", value: "sarath@gmail.com" } });
            (wrapper.find("#password")).simulate('change', { target: { name: "password", value: "sarath123" } });
            (wrapper.find("#number")).simulate('change', { target: { name: "number", value: "12345" } });
            (wrapper.find("#address")).simulate('change', { target: { name: "address", value: "vizag" } });
            let fakeEvent = { preventDefault: () => { console.log("preventDefault") } }
            wrapper.find("button").simulate('click', fakeEvent);
        })
        it("should have specified value", () => {
            expect(wrapper.state().name).toBe("sarath");
            expect(wrapper.state().userEmail).toBe("sarath@gmail.com");
            expect(wrapper.state().password).toBe("sarath123");
            expect(wrapper.state().number).toBe("12345");
            expect(wrapper.state().address).toBe("vizag");
            const users = [{ name: 'sarath', userEmail: 'sarath@gmail.com', password: 'sarath123', number: '9025932512', address: 'vizag' }];
            const resp = { data: users };
            axios.get.mockResolvedValue(resp);

        });

        it("should have called handleChange event", () => {
            expect(handleSubmitSpy).toHaveBeenCalled()
        });



    });


})