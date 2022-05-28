import './employees-list.css'
import EmployeesListItem from '../employees-list-item/employees-list-item'

function EmployeesList({ data, onDelete }) {
  const element = data.map((item) => {
    return (
      <EmployeesListItem
        key={item.id}
        name={item.name}
        salary={item.salary}
        increase={item.increase}
        onDelete={() => {
          onDelete(item.id)
        }}
      />
    )
  })
  return <ul className='app-list list-group'>{element}</ul>
}

export default EmployeesList
