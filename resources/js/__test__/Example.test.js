import React from 'react';
import { shallow } from 'enzyme';
import Example from '../components/App';


describe('Example component test with Enzyme', () => {
    it('renders without crashing', () => {
       shallow(<Example />);
     });
 });