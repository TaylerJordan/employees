import './app-info.css'

function AppInfo(props) {
  const { numOfEmp, numOfEmpRise } = props
  return (
    <div className='app-info'>
      <h1>Учет сотрудников в компании: N</h1>
      <h2>Общее число сотрудников: {numOfEmp}</h2>
      <h2>Премию получат: {numOfEmpRise}</h2>
    </div>
  )
}

export default AppInfo
