import React from 'react';
import './game.css';

const Game = (props) => (
    <article className="Game" data-src={props.image} onClick={props.clicked}>
        <h3>{props.title}</h3>
        <div className="Info" >
            {/* <div className="Author">{props.author}</div> */}
            <img
                // key={props.name}
                alt ={props.name}
                src={props.image}
                style={{ width: '100%', height: '100%' }}
              />
        </div>
    </article>
);

export default Game;