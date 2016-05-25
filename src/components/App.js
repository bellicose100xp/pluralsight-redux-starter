import React from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  loading: state.ajaxCalls > 0
});

class App extends React.Component {
    render(){
        return (
          <div className="container-fluid">
            <Header loading={this.props.loading}/>
            {this.props.children}
          </div>
        );
    }
}

export default connect(mapStateToProps)(App);
