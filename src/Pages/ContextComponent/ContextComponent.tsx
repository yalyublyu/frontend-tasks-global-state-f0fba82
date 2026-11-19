import { useContext } from 'react';
import { UserContext } from '../../Contexts/UserContext';

const roleMap: Record<string, string> = {
  admin: 'Администратор',
  user: 'Пользователь',
};

export const ContextComponent = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Данные пользователя из Context</h1>
      <p>Имя пользователя: {user.username ?? 'Не задано'}</p>
      <p>Роль: {user.role ? roleMap[user.role] : 'Не задана'}</p>
    </div>
  );
};