import { useAppDispatch } from '../../Hooks/useAppDispatch';
import { useAppSelector } from '../../Hooks/useAppSelector';
import {
  addUser,
  removeUser,
  toggleRole,
} from '../../Reducers/userSlice';
import { Table } from '../../Components/UI/Table/Table';
import styles from './Styles.module.scss';

export const ReduxComponent = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);

  const handleAddUser = () => {
    dispatch(addUser());
  };

  const handleToggleRole = (id: string) => {
    dispatch(toggleRole(id));
  };

  const handleRemoveUser = (id: string) => {
    dispatch(removeUser(id));
  };

  return (
    <div className={styles.container}>
      <h2>Пользователей в системе: {users.length}</h2>
      <button onClick={handleAddUser}>Добавить пользователя</button>
      <Table
        users={users}
        onToggleRole={handleToggleRole}
        onRemove={handleRemoveUser}
      />
    </div>
  );
};