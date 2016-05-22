import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

const mapStateToProps = state => ({
  courses: state.courses
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(courseActions, dispatch)
});

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    let courseTitle;
    const {actions: {createCourse}, courses} = this.props;
    const saveCourse = event => {
      event.preventDefault();
      createCourse({title: courseTitle.value});
      courseTitle.value = '';
    };
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          ref={node => {
            courseTitle = node;
          }}
        />
        <input
          type="submit"
          value="Save"
          onClick={saveCourse}
        />
        {courses.map(this.courseRow)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
