
import './App.css';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';

function App() {

  const [enteredCourse, setEnteredCourse] = useState(
    [
      {id : 'g1', content : "Learn React!"},
      {id : 'g2', content : "Finish the course!"}
    ]
  )

  const addNewCourseHandler = (enteredInput) => {
    setEnteredCourse(prevCourse => {
      const updateCourse = [...prevCourse];
      updateCourse.unshift({id: Math.random().toString(), content : enteredInput});
      return updateCourse;
    })
  }

  const deleteCourseHandler = (courseId) => {
      setEnteredCourse(prevCourse => {
        const updateCourse = prevCourse.filter(course => course.id !== courseId);
        return updateCourse;
      })
  }

  let content = <h2>Course Item not found</h2>
  if(enteredCourse.length > 0)
  {
    content = <CourseGoalList  item={enteredCourse} onClick={deleteCourseHandler}/>
  }

  return (
    <div className="App">
      <section id='goal-form'>
        <CourseInput addNewCourse={addNewCourseHandler}/>
      </section>
      <section id='goals'>
      {content}
      </section>
      
    </div>
  );
}

export default App;
