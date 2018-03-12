import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;

function cutWord(len, text, record, index) {
  text = text || '';
  return <span title={text}>
      {text.length > len ? text.slice(0,len) + '...' : text}
    </span>
}

function cutWordByPercentWidth(percent, text, record, index) {
  var xWidth = 700;
  var a = document.getElementsByClassName('ant-table-wrapper table');

  if(a.length) {
    xWidth = a[0].clientWidth;
  }

  var width = xWidth * percent / 100 - 17;

  width = width < 20 ? 20 : width;

  text = text || '';
  return <div className='ellipsis' title={text} style={{width}}>
    {text}
  </div>
}

function cutWordByWidth(width, text, record, index) {
  width -= 17;
  width = width < 20 ? 20 : width;

  text = text || '';
  return <div className='ellipsis' title={text} style={{width}}>
    {text}
  </div>
}

function getScrollWidthByPercent(percent, text, record, index) {
  var xWidth = 846;
  var a = document.getElementsByClassName('ant-table-wrapper table');

  if(a.length) {
    xWidth = a[0].clientWidth;
  }

  return xWidth;
}


function convertEnum (enumObj, text, record, index) {
  text = text;
  if(enumObj && enumObj[text + '']) {
    text = enumObj[text + '']
  }
 
  return <span title={text}>
      {text}
  </span>
}

function enumRenderWithSelect(enumObj) {
  var xopts = [];

  if(!enumObj) return;

  for(var key in enumObj) {
    xopts.push(
      <Option key={key} title={enumObj[key]} value={key}>{enumObj[key]}</Option>
    )
  }

  return xopts;
}

function getScrollHeight() {
  const h = document.body.clientHeight - 270;
  return h < 100 ? 100 : h;
}

function getScrollWidth(columns) {
  var wArr = columns.map(each => parseInt(each.width));
  var scrollWidth = 0;
  wArr.forEach(each => {
    scrollWidth += each;
  })
  return scrollWidth;
}

export {
  cutWord,
  cutWordByPercentWidth,
  cutWordByWidth,
  convertEnum,
  enumRenderWithSelect,
  getScrollHeight,
  getScrollWidth,
  getScrollWidthByPercent,
}