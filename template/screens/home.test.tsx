import {expect, it} from '@jest/globals';
import renderer from 'react-test-renderer';
import { Home2 } from './home2';

it('lala', () => {
    const tree = renderer.create(<Home2 />).toJSON();
    expect(tree).toMatchSnapshot();
} )