import { connect } from 'dva';
import Menu from '../components/Menu';


const mapStateToProps = (state) => {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(Menu);
