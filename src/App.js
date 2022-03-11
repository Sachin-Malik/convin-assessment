
import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header'
import UserDetail from './components/UserDetail';

import store from './redux/store';



function App() {
  return (
    <Provider store={store}>
      <div className="container">
         <Header />
         <Dashboard />
         <UserDetail />
      </div>
    </Provider>
  );
}

export default App;
