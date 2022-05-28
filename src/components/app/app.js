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
        { name: 'Ivan', salary: 1500, increase: true, rise: true, id: 1 },
        { name: 'liza', salary: 500, increase: false, rise: false, id: 2 },
        { name: 'anya', salary: 150, increase: false, rise: false, id: 3 },
      ],
      term: '',
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
      rise: false,
      id: Math.floor(Math.random() * 100),
    }
    this.setState(({ data }) => {
      return {
        data: [...data, newObj],
      }
    })
  }
  filterItem = (str) => {
    this.setState({ term: str })
  }
  onToggleIncrease = (id) => {
    this.setState({
      data: this.state.data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase }
        }
        return item
      }),
    })
  }
  onToggleRise = (id) => {
    this.setState({
      data: this.state.data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise }
        }
        return item
      }),
    })
  }
  searchTerm = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1
    })
  }

  render() {
    const { data, term } = this.state
    const numOfEmp = data.length
    const numOfEmpRise = data.filter((item) => item.increase).length
    const visibleItems = this.searchTerm(data, term)
    return (
      <div className='app'>
        <AppInfo numOfEmp={numOfEmp} numOfEmpRise={numOfEmpRise} />

        <div className='search-panel'>
          <SearchPanel filterItem={this.filterItem} />
          <AppFilter />
        </div>
        <EmployeesList
          data={visibleItems}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAddItem={this.addItem} />
      </div>
    )
  }
}

export default App
