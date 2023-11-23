import '@coreui/coreui/dist/css/coreui.min.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

function App() {

    return (
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>
    )
}

export default App;
