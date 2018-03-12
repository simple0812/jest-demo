import React from 'react';
import PropTypes from 'prop-types';
import dva, { connect } from 'dva';
import { Icon } from 'antd';
import './less/iframePage.less';

class IframePage extends React.Component {

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
    var query = this.props.location.query || {};
    return (
      <div className='contentpage-body'>
          <iframe 
            src={query.urlAddress}></iframe>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {  };
}

export default connect(mapStateToProps)(IframePage);
