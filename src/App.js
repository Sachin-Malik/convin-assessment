
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header'
import DashBoard from './components/DashBoard';

import store from './redux/store';



function App() {
  return (
    <Provider store={store}>
      <div className="container">
         <Header />
         <DashBoard />
      </div>
    </Provider>
  );
}

export default App;
