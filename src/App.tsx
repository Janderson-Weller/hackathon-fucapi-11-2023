import '@coreui/coreui/dist/css/coreui.min.css';
import { Provider } from 'react-redux';
import store from './store/store';
import InitialPage from './pages';

function App() {

    return (
        <Provider store={store}>
            <InitialPage />
        </Provider>
    )
}

export default App;
