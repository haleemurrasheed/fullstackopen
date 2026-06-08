//Create a Header component that receives the course name as a prop and shows it in an <h1>
const Header = (props) => {
  return (<h1>{props.course}</h1>
    ) 
}

//Creade a Content component that receives the parts and exercises as props and shows them as paragraphs
const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  ) 
}

//Create a Total component that receives exercises counts and shows the sum
const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}
// App.jsx — everything in one block (this is what you start with)
const App = () => {
  console.log('Hello from component')
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
 return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} />
      <Content part2={part2} exercises2={exercises2} />
      <Content part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>

 )
  
}
export default App