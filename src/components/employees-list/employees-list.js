import './employees-list.css'
import EmployeesListItem from '../employees-list-item/employees-list-item'

function EmployeesList({ data }) {
  const element = data.map((item) => {
    return (
      <EmployeesListItem
        key={item.id}
        name={item.name}
        salary={item.salary}
        increase={item.increase}
      />
    )
  })
  return <ul className='app-list list-group'>{element}</ul>
}

export default EmployeesList
