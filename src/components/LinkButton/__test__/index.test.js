import React from 'react';
import renderer from 'react-test-renderer';
import { render, mount, shallow } from 'enzyme';
import LinkButton from '../LinkButton';
/*
  1.react-test-renderer为react原生测试工具
  2.enzyme为第三方封装的测试工具 需要安装依赖
  3.shallow是虚拟dom，可以访问react api(state(), props()等)
  4.mount会实际渲染dom，可以访问react api，
    一般在组件需要调用DOM API或者组件被其他组件包裹的时候使用
    需要注意的是使用完后 需要使用.unmount()或者其他方法清理该组件
  5.render是静态渲染，不可以访问react api 可以使用Cheerio(类似jquery)访问
*/
describe('<LinkButton/>', () => {
  it('Snapshot', () => {
    const component = renderer.create(<LinkButton/>);
 
    let snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
 
    snapshot.props.onClick();
    snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
 
    snapshot.props.onClick();
    snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot()
  });

  it('enzyme mount Snapshot', () => {
    const wrapper = mount(
      <LinkButton />
    );
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.state().liked).toBeFalsy();
    wrapper.simulate('click');

    expect(wrapper.state().liked).toBeTruthy();
    wrapper.unmount();
  });

  it('enzyme shallow Snapshot', () => {
    const wrapper = shallow(
      <LinkButton />
    );
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.state().liked).toBeFalsy();
    wrapper.simulate('click');

    expect(wrapper.state().liked).toBeTruthy();
  });

  it('enzyme render Snapshot', () => {
    const wrapper = render(
      <LinkButton />
    );
    expect(wrapper.text()).toMatchSnapshot();
  });
});