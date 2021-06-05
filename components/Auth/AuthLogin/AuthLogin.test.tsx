import React from 'react';
import { shallow } from 'enzyme';
import AuthLogin from './index';
import { TComponentTest } from '../../../types/testins';

describe('AuthLogin component', () => {
  let wrapper: TComponentTest;
  beforeEach(() => {
    wrapper = shallow(<AuthLogin />);
  });

  it('AuthLogin component render', () => {
    expect(wrapper).not.toBeNull();
  });
});