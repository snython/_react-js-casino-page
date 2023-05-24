import React,{Component} from 'react';
import axios from "axios";
import './gamelist.css';
import Game from "../../component/game/game"

class Gamelists extends Component {
    state = {
        gameList: [],
        selectedGameId:null,
        error: false,
        isShown: false
    }

    componentDidMount() {
        axios.get('http://stage.whgstage.com/front-end-test/games.php').then((response) => {
            console.log(response.data);
            const list = response.data;
            this.setState({gameList:list});
        },
        (error) => {
            console.log(error);
            this.setState({error: true});
        });
    }

    gameSelectedHandler = (id) => {
        this.setState({selectedGameId: id});
    }

    setIsShown = (val) => {
        this.setState({isShown: val});
    }

    render() {
        let games = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            games = this.state.gameList.map(game => {
                return <Game 
                    key={game.id}
                    title={game.name} 
                    ids={game.id} 
                    category={game.category}
                    isShown={this.state.isShown}
                    image={game.image}
                    clicked={() => this.gameSelectedHandler(game.id)}
                    onMouseEnter={() => this.setIsShown(true)}
    onMouseLeave={() => this.setIsShown(false)} />;
            });
        }
        return (<div className="wrapper">
            {games}
        </div>);
    }
}

export default Gamelists;