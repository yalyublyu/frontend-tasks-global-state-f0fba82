import { IUser } from '../../../Reducers/userSlice';
import styles from './Styles.module.scss';

interface TableProps {
  users: IUser[];
  onToggleRole: (id: string) => void;
  onRemove: (id: string) => void;
}

export const Table = ({ users, onToggleRole, onRemove }: TableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Роль</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.role === 'admin' ? 'Администратор' : 'Пользователь'}</td>
            <td>
              <button onClick={() => onToggleRole(user.id!)}>
                Сменить роль
              </button>
              <button onClick={() => onRemove(user.id!)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};