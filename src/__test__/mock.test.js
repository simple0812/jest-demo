import React, { Component } from 'react';
import { render, mount } from 'enzyme';
import Promise from 'bluebird';
import mockModule from './mockModule'; 
import axios from 'axios';

//mock module
jest.mock('./mockModule');

var api = {
  foo:(p) => {console.log('foo=>' + p)},
  bar:function(p){
    this.foo(p)
  }
}

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
/*
  mockCallback:
   {_isMockFunction: true,
   getMockImplementation: [Function],
   mock: [Getter/Setter],
   mockClear: [Function],
   mockReset: [Function],
   mockReturnValueOnce: [Function],
   mockResolvedValueOnce: [Function],
   mockRejectedValueOnce: [Function],
   mockReturnValue: [Function],
   mockResolvedValue: [Function],
   mockRejectedValue: [Function],
   mockImplementationOnce: [Function],
   mockImplementation: [Function],
   mockReturnThis: [Function],
   mockName: [Function],
   getMockName: [Function],
   mockRestore: [Function] }

   mockCallback.mock:
    { calls: [ [ 0 ], [ 1 ] ],
   instances: [ undefined, undefined ],
   timestamps: [ 1520566082736, 1520566082736 ] }
*/
describe('mock test', () => {
  it('spyOn', () => {
    var spy = jest.spyOn(api, 'foo');
    api.bar('bar');
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('bar');

    spy.mockReset();
    spy.mockRestore();
  });

  it('mock callback', () => {
    const mockCallback = jest.fn();
    forEach([0, 1], mockCallback);
    // 此模拟函数被调用了两次
    expect(mockCallback.mock.calls.length).toBe(2);

    // 第一次调用函数时的第一个参数是 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // 第二次调用函数时的第一个参数是 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  })

  it('mock inject data', () => {
    const myMock = jest.fn();
    expect(myMock()).toBeUndefined();

    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce('x')
      .mockReturnValue(true);

    expect(myMock()).toBe(10);
    expect(myMock()).toBe('x');
    expect(myMock()).toBeTruthy();
    expect(myMock()).toBeTruthy();
  })

  it('mock module', () => {
    const resp = 'x';
    mockModule.get.mockResolvedValue(resp);
    return expect(mockModule.get()).resolves.toEqual('x');
  })
});
