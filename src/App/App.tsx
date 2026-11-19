import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { userStore } from '../Stores/userStore';
import { UserContext, IUser } from '../Contexts/UserContext';
import { ContextComponent } from '../Pages/ContextComponent';
import { ReduxComponent } from '../Pages/ReduxComponent';

const user: IUser = {
  id: '1',
  username: 'Анисья Марушич',
  role: 'admin',
};

function App() {
  return (
    <Provider store={userStore}>
      <UserContext.Provider value={{ user }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ReduxComponent />} />
            <Route path="/context" element={<ContextComponent />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;