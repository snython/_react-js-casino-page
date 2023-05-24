import React from 'react';
import './game.css';

const Game = (props) => (
    <article className="Game" onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}>
        {props.isShown && (<p  className="title">{props.title}</p>)}
        <div className="info" >
            {/* <div className="Author">{props.author}</div> */}
            <img
                key={props.ids}
                alt ={props.name}
                src={props.image}
                style={{ width: '100%', height: '100%' }}
              />
        </div>
        {props.isShown && (<div className="details">
              <button className="btn" onClick={props.clicked}>Play</button>
              </div>)}
    </article>
);

export default Game;