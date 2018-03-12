import React, { Component } from 'react';
import { render, mount } from 'enzyme';

/*
  beforeAll、afterAll、beforeEach、afterEach使用作用域的 
  如果包含再分组(describe)中则只影响当前的分组
  如果包含分组外则影响当前文档
*/
describe('global test', () => {
  beforeAll(() => {
    console.log('beforeAll')
  })

  afterAll(() => {
    console.log('afterAll')
  })

  beforeEach(() => {
    console.log('beforeEach')
  })

  afterEach(() => {
    console.log('afterEach')
  })

  it('2+2=4', () => {
    expect(2+2).toBe(4);
  });
  
});

/*
  https://facebook.github.io/jest/docs/en/expect.html
*/
describe('common test', () => {
  it('0 == false', () => {
    expect(0).toBeFalsy();
  });

  it('"" == false', () => {
    expect('').toBeFalsy();
  });

  it('"" !== null', () => {
    expect('').not.toBeNull();
  });

  it('undefined !== null', () => {
    expect(undefined).not.toBeNull();
  });
  it('undefined !== null', () => {
    expect(null).not.toBeUndefined();
  });

  it('"x" == true', () => {
    expect('x').toBeTruthy();
  });

  it('deep equal', () => {
    expect({x:{y:1}}).toEqual({x:{y:1}});
  });

  it('deep not equal', () => {
    expect({x:{y:1}}).not.toEqual({x:{y:2}});
  });
});
