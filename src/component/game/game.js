import React from 'react';
import './game.css';

const Game = (props) => (
    <article blink className="Game" onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}>
        {props.isShown && (<p  className="title">{props.title}</p>)}
        <div className="Info" >
            {/* <div className="Author">{props.author}</div> */}
            <img
                key={props.key}
                alt ={props.name}
                src={props.image}
                style={{ width: '100%', height: '100%' }}
              />
              {props.isShown && (<div className="details">
              <button className="btn" onClick={props.clicked}>Play</button>
              </div>)}
        </div>
    </article>
);

export default Game;