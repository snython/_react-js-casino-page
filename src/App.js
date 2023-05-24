import React, { Component } from 'react';
import Navs from './component/nav/nav'
import './App.css';
import Gamelists from './container/gamelist/gamelist';

class App extends Component {

  state = {
    contentWidth: undefined
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
render() {
  console.log(this.state.contentWidth);
  return (
             <div className="ALL">
             <Navs/>
            <Gamelists/>
      </div>


  );
}
}

export default App;
