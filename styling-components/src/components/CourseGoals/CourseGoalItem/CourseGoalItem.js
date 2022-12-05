
import './CourseItem.css'

const CourseGoalItem = (props) => {
    
    const deleteHandler = () => {
        props.onDeleted(props.id);
    }


    return <li className="goal-item" onClick={deleteHandler}>
        {props.children}    
    </li>

}

export default CourseGoalItem;