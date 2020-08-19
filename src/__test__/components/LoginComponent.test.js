import React from 'react';
import { mount } from 'enzyme';
import Login from '../../components/login/Login';
import axios from 'axios';
jest.mock('axios');

describe("Given Component: ", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Login />);
    })
    it("Should render the component", () => {
        expect(wrapper).toHaveLength(1);
    });
    it("Should render content", () => {
        expect(wrapper.find("h3").text()).toBe("LOGIN");
        expect(wrapper.find("h4").text()).toBe("Welcome to Online Shopping");

    });

    describe("when onChange event is not triggered on input field", () => {
        it("should have default value", () => {
            expect(wrapper.state().userEmail).toBe("");
            expect(wrapper.state().password).toBe("");
        });
    });

    describe("when  onChange event is triggered on input field", () => {
        let handleChangeSpy;
        beforeEach(() => {
            handleChangeSpy = jest.spyOn(wrapper.instance(), 'handleChange');
            (wrapper.find("#userEmail")).simulate('change', { target: { name: "userEmail", value: "sarath@gmail.com" } });
            (wrapper.find("#password")).simulate('change', { target: { name: "password", value: "sarath123" } });
        })
        it("should have specified value", () => {
            expect(wrapper.state().userEmail).toBe("sarath@gmail.com");
            expect(wrapper.state().password).toBe("sarath123");
        });
        it("should have called handleChange event", () => {
            expect(handleChangeSpy).toHaveBeenCalled()
        });
    });

    describe("when  onsubmit event is triggered on input field", () => {
        let handleSubmitSpy;
        beforeEach(() => {
            handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmit');
            (wrapper.find("#userEmail")).simulate('change', { target: { name: "userEmail", value: "sarath@gmail.com" } });
            (wrapper.find("#password")).simulate('change', { target: { name: "password", value: "sarath123" } });
            let fakeEvent = { preventDefault: () => { console.log("preventDefault") } }
            wrapper.find("button").simulate('click', fakeEvent);
        })
        it("should have specified value", () => {
            expect(wrapper.state().userEmail).toBe("sarath@gmail.com");
            expect(wrapper.state().password).toBe("sarath123");
        });
        it("should have called submit event", () => {
            expect(wrapper.state().submit);
        });
        it("should have called handleChange event", () => {
            expect(handleSubmitSpy).toHaveBeenCalled()
        });
    });

    test('should fetch users', () => {
        const users = [{ userEmail: 'sarath@gmail.com', password: 'sarath123' }];
        const resp = { data: users };
        axios.get.mockResolvedValue(resp);

    });


    describe("when  onSubmit event is triggered on input field", () => {
        let handleChangeSpy, handleSubmitSpy;
        jest.mock('axios');
        beforeEach(() => {
            handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmit');
            const getSpy = jest.spyOn(axios, 'get');
            (wrapper.find("#userEmail")).simulate('change', { target: { name: "userEmail", value: "sarath@gmail.com" } });
            (wrapper.find("#password")).simulate('change', { target: { name: "password", value: "sarath123" } });
            (wrapper.find("button")).simulate('click', getSpy);
        })
        it("should have specified value", () => {
            expect(wrapper.state().data.userEmail).toBe("sarath@gmail.com");
            expect(wrapper.state().data.password).toBe("sarath123");
        })
        it("should have called handleSubmit event", () => {

            expect(handleSubmitSpy).toHaveBeenCalled();
        })
    })
})
