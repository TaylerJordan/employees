import { Component } from 'react'
import './search-panel.css'

class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
    }
  }
  filterFunc = (e) => {
    const term = e.target.value
    this.setState({ term })
    this.props.filterItem(term)
  }
  render() {
    return (
      <input
        onChange={this.filterFunc}
        value={this.state.term}
        type='text'
        className='form-control search-input'
        placeholder='найти сотрудника'
      />
    )
  }
}
export default SearchPanel
