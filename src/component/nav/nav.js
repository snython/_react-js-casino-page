import React,{Component} from 'react';
import './nav.css';
// import { Link } from 'react-router-dom';


class Navs extends Component {
    state={
        activeLink: '',
        menuItems:[{
            name:'Top Games',
            id:1
        },{
            name:'New Games',
            id:2  
        },{
            name:'Slots',
            id:3  
        },{
            name:'Jackpots',
            id:4  
        },{
            name:'Live',
            id:5  
        },{
            name:'Blackjacks',
            id:6  
        },{
            name:'Roulette',
            id:7
        },{
            name:'Table',
            id:8 
        },{
            name:'Poker',
            id:9  
        },{
            name:'Others',
            id:10 
        }],
        active:null
    }

    _handleClick(menuItem) { 
        this.setState({ active: menuItem });
        localStorage.setItem('link',menuItem);
      }
    
    render() {
        const activeStyle = { background: '#8DC63F',color:'' };
        return (
            <header className="all">
                <nav className="navs">
                    <div className="nav_items">
                        <ul>{this.state.menuItems.map((items, index) => {
                            return <li style={this.state.active === items.name ? activeStyle : {}} 
                            onClick={this._handleClick.bind(this, items.name)} key={items.id}><a><b>{items.name}</b></a></li>
                        })}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navs;