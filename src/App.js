import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCats } from "./actions/catActions";
import CatList from "./CatList"

class App extends Component {   
  componentDidMount() {
    console.log(this.props);
    this.props.fetchCats();
  }
  
  render() {
    console.log(this.props.catPics);
    return (
      <div>
        <h1>CatBook</h1>
        {this.props.loading ? <img style={{width:"200px", height:"200px"}} src="https://i.pinimg.com/originals/97/e9/42/97e942ce7fc4e9d4ea6d844a382f251f.gif"/> : 
          <CatList catPics = {this.props.catPics}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
