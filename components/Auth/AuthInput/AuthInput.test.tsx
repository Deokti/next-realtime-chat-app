import React from 'react';
import { shallow } from 'enzyme';
import AuthInput, { AuthInputProps } from './index';
import { TComponentTest } from '../../../types/testins';

const TEST_PROPS: AuthInputProps = {
  onChange: jest.fn(),
  placeholder: "Тестовый инпут"
}

describe('AuthInput component', () => {
  let component: TComponentTest
  beforeEach(() => {
    component = shallow(<AuthInput {...TEST_PROPS} />)
  })

  it('shallow component contains only first LABEL tag', () => {
    expect(component.find('label').length).toEqual(1);
  });

  it('shallow component contains only first INPUT tag', () => {
    expect(component.find('input').length).toEqual(1);
  });

  it('shallow component contains only first SPAN tag', () => {
    expect(component.find('span').length).toEqual(1);
  });

  it('shallow component NOT contains active class for (and with) empty value', () => {
    expect(component.find('span.actvie').length).toEqual(0);
  });

  it('shallow component contains active class for (and with) empty value', () => { });

});


