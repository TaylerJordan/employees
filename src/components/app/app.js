import { Component } from 'react'

import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'Ivan', salary: 1500, increase: true, id: 1 },
        { name: 'liza', salary: 500, increase: false, id: 2 },
        { name: 'anya', salary: 150, increase: false, id: 3 },
      ],
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      }
    })
  }
  addItem = (name, salary) => {
    const newObj = {
      name: name,
      salary: salary,
      increase: false,
      id: Math.floor(Math.random() * 100),
    }
    this.setState(({ data }) => {
      return {
        data: [...data, newObj],
      }
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className='app'>
        <AppInfo />

        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAddItem={this.addItem} />
      </div>
    )
  }
}

export default App
