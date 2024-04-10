import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/slices/userSlice';
import './App.css';


function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log('state-', state);
  const getUsers = () => {
    console.log('getting all users');
    dispatch(fetchUsers());
  };

  return (
    <div className="App">
      <button onClick={getUsers}>Get Users</button>
    </div>
  );
};

export default App;
