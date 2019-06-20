import React from 'react';
import { Router } from "react-router";
import { shallow } from 'enzyme';
import App from '../components/App';
import Sidebar from "../components/Sidebar/Sidebar"
import Body from "../components/Body/Body"

describe('App component test with Enzyme', () => {
    it('renders without crashing', () => {
       shallow(<App />);
     });

     it('DOM elements of App', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(".app__container")).toHaveLength(1);
        expect(wrapper.find(Sidebar)).toHaveLength(1);
        expect(wrapper.find(Body)).toHaveLength(1);
        expect(wrapper.find(Router)).toHaveLength(1);
    
     });

     it('check routes of App', () => {
         const wrapper = shallow(<App />);
         const instance = wrapper.instance();
         instance.routes.forEach( elem => {
             expect(typeof elem.name === 'string').toBe(true);
             expect(typeof elem.path === 'string').toBe(true);
             expect(elem.Component instanceof Function).toBe(true);
         })
     })
 });