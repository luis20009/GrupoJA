const Title =({course}) =>{
  return(
    <>
     <h1>{course}</h1>
    
    </>
  );
};
const Course =({parts})=>{
  return(
  <>
    <p>{parts[0].name} {parts[0].exercises} ejrcicios</p>
     <p>{parts[1].name} {parts[1].exercises} ejrcicios</p>
     <p>{parts[2].name} {parts[2].exercises} ejrcicios</p>
  </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Title course={course}/>
      <Course parts={parts} />
      
    </div>
  );
}
export default App;