import {Table, Button} from 'react-bootstrap'

const UsersTable = ({ users, onToggleBlock}) => {
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Роль</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Номер телефона</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <Button variant={user.isBlocked ? 'danger' : 'success'} onClick={() => onToggleBlock(user.id)}>
                  {user.isBlocked ? 'Разблокировать' : 'Заблокировать'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };
  
  export default UsersTable;