import { Component } from 'react'
import './employees-add-form.css'

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      salary: '',
    }
  }
  gubu = (e) => {
    const big = e.target.value.toUpperCase()
    this.setState({
      [e.target.name]: big,
    })
  }
  render() {
    const { name, salary } = this.state

    return (
      <div className='app-add-form'>
        <h3>Добавьте нового сотрудника</h3>
        <form className='add-form d-flex'>
          <input
            type='text'
            className='form-control new-post-label'
            placeholder='Как его зовут?'
            value={name}
            name='name'
            onChange={this.gubu}
          />
          <input
            type='number'
            className='form-control new-post-label'
            placeholder='З/П в $?'
            value={salary}
            name='salary'
            onChange={this.gubu}
          />

          <button type='submit' className='btn btn-outline-light'>
            Добавить
          </button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm
