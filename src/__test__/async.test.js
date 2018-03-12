import React, { Component } from 'react';
import { render, mount } from 'enzyme';
/*三种方式测试异步代码
  1.使用回调函数(需要使用done)
  2.使用promise ()
*/

function fetchData(cb) {
  setTimeout(cb.bind(null, 'peanut butter'), 10)
}

function fetchDataPromise(time) {
  time = time || 0;
  return new Promise((resolve, reject) => {
    if(time > 1000) {
     reject(new Error('timeout'));
    } 

    setTimeout(function() {
      resolve('peanut butter')
    }, time)
  })
}

describe('async test', () => {
  test('the data is peanut butter by callback', done => {
    function callback(data) {
      expect(data).toBe('peanut butter');
      done();
    }

    fetchData(callback);
  });

  test('the data is peanut butter by promise', () => {
    //assertions(1)代表的是在当前的测试中至少有一个断言是被调用的，否则判定为失败。
    expect.assertions(1);
    return expect(fetchDataPromise()).resolves.toBe('peanut butter');

    // return fetchDataPromise().then(data => {
    //   expect(data).toBe('peanut butter');
    // });
  });

  test('the data is peanut butter by promise', () => {
    //assertions(1)代表的是在当前的测试中至少有一个断言是被调用的，否则判定为失败。
    expect.assertions(1);

    // return fetchDataPromise(10000).then(data => {
    //   expect(data).toBe('peanut butter');
    // }).catch(err => {
    //   expect(err).toBeDefined();
    // });

    return expect(fetchDataPromise(10000)).rejects.toBeDefined();
  });

  test('the data is peanut butter by async/await', async () => {
    expect.assertions(1);
    var ret = await fetchDataPromise();
    expect(ret).toBe('peanut butter');
  });

  test('the data is timeout by async/await', async () => {
    expect.assertions(1);
    var ret = await fetchDataPromise(10000).catch(err => err);
    expect(ret.message).toBe('timeout');
  });


});
