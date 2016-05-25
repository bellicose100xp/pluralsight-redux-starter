import React from 'react';
import CourseListRow from './CourseListRow';

export default ({courses}) =>
  <table className="table">
    <thead>
    <tr>
      <th>&nbsp;</th>
      <th>Title</th>
      <th>Author</th>
      <th>Category</th>
      <th>Length</th>
    </tr>
    </thead>
    <tbody>
    {courses.map(course => <CourseListRow key={course.id} course={course}/>)}
    </tbody>
  </table>;