//Create a Header component that receives the course name as a prop and shows it in an <h1>
const Header = (props) => {
  return (<h1>{props.course}</h1>
    ) 
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  
  )
}
//Creade a Content component that receives the parts and exercises as props and shows them as paragraphs
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  ) 
}

//Create a Total component that receives exercises counts and shows the sum
const Total = (props) => {
  return (
    <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
  )
}
// App.jsx — everything in one block (this is what you start with)
const App = () => {
  console.log('Hello from component')
  const course = 'Half Stack application development'
  const part1 = {'name': 'Fundamentals of React', 'exercises': 10}
  const part2 = {'name': 'Using props to pass data', 'exercises': 7}
  const part3 = {'name': 'State of a component', 'exercises': 14}
 return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>

 )
  
}
export default App