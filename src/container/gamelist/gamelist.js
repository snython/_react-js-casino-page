import React,{Component} from 'react';
import axios from "axios";
import './gamelist.css';
import Game from "../../component/game/game"

class Gamelists extends Component {
    state = {
        gameList: [],
        selectedGameId:null,
        error: false
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

    render() {
        let games = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            games = this.state.gameList.map(game => {
                return <Game 
                    key={game.id} 
                    title={game.name} 
                    author={game.category}
                    image={game.image}
                    clicked={() => this.gameSelectedHandler(game.id)} />;
            });
        }
        return (<div className="wrapper">
            {games}
        </div>);
    }
}

export default Gamelists;