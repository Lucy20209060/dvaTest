import dva from 'dva';
import './index.css';
import browserHistory from 'history/createBrowserHistory';
import router from './router';

import IndexModel from './pages/IndexPage/model';
import AboutModel from './pages/AboutPage/model';

// 1. Initialize
const app = dva({
    history: browserHistory()
});

// 2. Plugins
app.use({});

// 3. Model
const models = [
    IndexModel,
    AboutModel
];
models.map(m => { app.model(m) });

// 4. Router
app.router(router);

// 5. Start
app.start('#root');