//1.2 Props
const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p> {props.partNumber} {props.exerciseNumber}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using preops to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (

    //1.2 code refactor
    <div>
      <Part partNumber={part1} exerciseNumber={exercises1}/>
      <Part partNumber={part2} exerciseNumber={exercises2}/>
      <Part partNumber={part3} exerciseNumber={exercises3}/>
    </div>
  )
}

export default App
