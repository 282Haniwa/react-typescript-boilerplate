import * as React from 'react';
import { shallow } from 'enzyme';
import { Hello } from './Hello';

describe('Hello.tsx', () => {
  test('Hello component test', () => {
    const hello = shallow(<Hello compiler="TypeScript" framework="React" />);

    // Interaction demo
    expect(hello.text()).toEqual('Hello from TypeScript and React!');

    // Snapshot demo
    expect(hello).toMatchSnapshot();
  });
});
