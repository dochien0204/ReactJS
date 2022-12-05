import React from 'react';
import '../CourseGoalList/CourseGoalList.css';
import CouseGoalItem from '../CourseGoalItem/CourseGoalItem'

const CourseGoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.item.map((courseItem) => (
        <CouseGoalItem
          key={courseItem.id}
          id={courseItem.id}
          onDeleted={props.onClick}
        >
          {courseItem.content}
        </CouseGoalItem>
      ))}
    </ul>
  );
}

export default CourseGoalList;