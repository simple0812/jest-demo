import React from 'react';
import PropTypes from 'prop-types';
import dva, { connect } from 'dva';
import { Icon } from 'antd';
import './less/contentPage.less';
import welcome from '../../sprite/welcome.jpg';

class ContentPage extends React.Component {

  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state ={
      id:'',      
      fullName:'',      
      title:'',      
      pathname:'',      
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUpdate() {
  }

  handleSaveFav = () => {
    if(this.props.location.query && this.props.location.query.moduleId) {
      this.props.dispatch({type:'publicLayout/reqSaveFav', payload:this.props.location.query});
    }
  }

  componentDidUpdate() {
  
  }

  render() {
    return (
      <div className='workflow-container'>
        <img src={welcome} style={{width: 297, margin: '100px auto 0px', display: 'block'}} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {  };
}

export default connect(mapStateToProps)(ContentPage);
