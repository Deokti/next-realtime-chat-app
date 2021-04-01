import React from 'react';
import Button, { TButton } from '../Button';
import { shallow, ShallowWrapper } from 'enzyme';

const button = (props?: TButton) => shallow(<Button {...props}>{props?.children}</Button>)

const props: TButton = {
  children: 'Тестовая кнопка',
  width: 250,
  height: 45,
  border: '1px solid #000',
  cursor: 'pointer',
  backgroundColor: '#fcfc',
  color: '#000',
  fontSize: 14,
  fontWeight: 500,
  borderRadius: 4,
  type: 'button',
  isLoading: false,
  disabled: false,
}

describe('Button component', () => {
  let component: ShallowWrapper<any, Readonly<{}> | React.Component<{}, {}, any>>
  beforeEach(() => component = button());

  it('should Button component containg one button tag', () => {
    expect(component.find('button').length).toEqual(1);
  });

  it('should Button component contais text - Аутентификация', () => {
    component = button({ children: 'Аутентификация' });
    expect(component.find('button').text()).toEqual('Аутентификация');
  });

  it('should render Button component', () => {
    component = button(props);
    expect(component).toMatchSnapshot();
  });

  it('should Button contain isLoading class if transferred isLoading prop', () => {
    component = button({ isLoading: true });
    expect(component.find('button.isLoading').length).toEqual(1);
  });

  it('should Button contain disabled class if transferred disabled prop', () => {
    component = button({ disabled: true });
    expect(component.find('button.disabled').length).toEqual(1);
  });
});