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
      {/* <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} /> */}
      {props.parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  ) 
}

//Create a Total component that receives exercises counts and shows the sum
const Total = (props) => {
  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>Number of exercises {totalExercises}</p>
 //     <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>

    
  )
}
// App.jsx — everything in one block (this is what you start with)
const App = () => {
  console.log('Hello from component')
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
    }

 return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>

 )
  
}
export default App