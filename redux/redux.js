import { Provider } from 'react-redux';
import storeConfig from  './storeConfig/store';

const store = storeConfig();


ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('app')
);