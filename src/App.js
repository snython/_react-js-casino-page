import React, { Component } from 'react';
import Navs from './component/nav/nav'
import './App.css';
import Gamelists from './container/gamelist/gamelist';
// import { useState } from 'react';

class App extends Component {

  state = {
    contentWidth: undefined,
    selectedmenu:null
}

  handleResize = () => this.setState({
    contentWidth: window.innerWidth
});

componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
}

componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
}

getSelectedMenuHandler = () => {
  let val = localStorage.getItem('link')
  this.setState({selectedmenu: val.toString});
  console.log(this.state.selectedmenu);
}
render() {
  console.log(this.state.contentWidth);
  return (
             <div className="ALL">
             <Navs selMenu={()=>this.getSelectedMenuHandler}/>
            <Gamelists/>
      </div>


  );
}
}

export default App;
