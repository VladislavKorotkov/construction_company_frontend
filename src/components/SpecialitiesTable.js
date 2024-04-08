import {Table, Button} from 'react-bootstrap'

const SpecialitiesTable = ({ specialities, onUpdate}) => {
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {specialities.map((speciality) => (
            <tr key={speciality.id}>
              <td>{speciality.id}</td>
              <td>{speciality.name}</td>
              <td>
                {/* <Button variant='warning' onClick={() => onUpdate(speciality.id)}>
                  Изменить
                </Button> */}
                <Button variant='danger' className='ms-2' onClick={() => onUpdate(speciality.id)}>
                  Удалить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };
  
  export default SpecialitiesTable;