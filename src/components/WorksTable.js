import {Table, Button} from 'react-bootstrap'

const WorksTable = ({ works, onUpdate, onDelete}) => {
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Статус</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {works.map((work) => (
            <tr key={work.id}>
              <td>{work.id}</td>
              <td>{work.name}</td>
              <td>{work.cost}</td>
              <td>{work.isAvailable?"Доступна": "Не доступна"}</td>
              <td>
                <Button variant='warning' onClick={() => onUpdate(work.id)}>
                  Изменить
                </Button>
                <Button variant='danger' className='ms-2' onClick={() => onDelete(work.id)}>
                  Удалить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };
  
  export default WorksTable;