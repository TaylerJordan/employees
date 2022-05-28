import './employees-list.css'
import EmployeesListItem from '../employees-list-item/employees-list-item'

function EmployeesList({ data, onDelete, onToggleIncrease, onToggleRise }) {
  const element = data.map((item) => {
    return (
      <EmployeesListItem
        key={item.id}
        name={item.name}
        salary={item.salary}
        increase={item.increase}
        rise={item.rise}
        onDelete={() => {
          onDelete(item.id)
        }}
        onToggleIncrease={() => onToggleIncrease(item.id)}
        onToggleRise={() => onToggleRise(item.id)}
      />
    )
  })
  return <ul className='app-list list-group'>{element}</ul>
}

export default EmployeesList
