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
  autoChangeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  submitFormAddNewItem = (e) => {
    e.preventDefault()
    if (this.state.name.length > 3 && this.state.salary !== '') {
      this.props.onAddItem(this.state.name, this.state.salary)
      this.setState({
        name: '',
        salary: '',
      })
    }
  }
  render() {
    const { name, salary } = this.state

    return (
      <div className='app-add-form'>
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={this.submitFormAddNewItem} className='add-form d-flex'>
          <input
            type='text'
            className='form-control new-post-label'
            placeholder='Как его зовут?'
            value={name}
            name='name'
            onChange={this.autoChangeState}
          />
          <input
            type='number'
            className='form-control new-post-label'
            placeholder='З/П в $?'
            value={salary}
            name='salary'
            onChange={this.autoChangeState}
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
