import React from 'react';
import PropTypes from 'prop-types';
import dva, { connect } from 'dva';
import { Icon, Select, Input, Button, Table, Modal, Radio,
  message, Popconfirm, DatePicker, Spin, LocaleProvider } from 'antd';

import './less/default.less';
import zhCN from 'antd/lib/locale-provider/zh_CN';

class DefaultTemplate extends React.Component {
  static propTypes = {
  }
  
  constructor(props) {
    super(props);
  }


  componentWillMount() {
  }

  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <div className='workflow-container'>
          <div className='workflow-container-header'>
            <div className='workflow-container-search'>
              {this.props.placeholder0}
            </div>
            <div className='workflow-container-cmd'>
              {this.props.placeholder4}
              <Button.Group>
                {this.props.placeholder1}
              </Button.Group>
            </div>
          </div>
          <div className='workflow-container-content'>
            <div className='app-module-nav-content'>
                {this.props.placeholder2}
            </div>
          </div>
          {this.props.placeholder3}
        </div>
      </LocaleProvider>
    );
  }
}

export default DefaultTemplate;
