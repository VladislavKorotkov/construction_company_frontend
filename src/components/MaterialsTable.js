import {Table, Button} from 'react-bootstrap'

const MaterialsTable = ({ materials, onUpdate, onDelete}) => {
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Доступен</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.id}>
              <td>{material.id}</td>
              <td>{material.name}</td>
              <td>{material.cost}</td>
              <td>{material.isAvailable?"Да": "Нет"}</td>
              <td>
                <Button variant='warning' onClick={() => onUpdate(material.id)}>
                  Изменить
                </Button>
                <Button variant='danger' className='ms-2' onClick={() => onDelete(material.id)}>
                  Удалить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };
  
  export default MaterialsTable;