import 'babel-polyfill';
import dva from 'dva';
import axios from 'axios';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
// import createHistory from 'history/createHashHistory';
import { message } from 'antd';
import './assets/css/common.less';

// =======================
// 1. Initialize
// =======================
const app = dva({
  history: createHistory(),
  onError(e, dispatch) {
    message.error(e.message, 3);
  },
});

// =======================
// 2. Plugins
// =======================
app.use( createLoading() );

// =======================
// 3. Model
// =======================
// Moved to router.js

// =======================
// 4. Router
// =======================
app.router( require('./Router') );

// =======================
// 5. Start
// =======================
app.start('#app');
