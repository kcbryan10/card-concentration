import React from "react";

const Board = ({player, score}) => {
    return (
        <div id="container">
            <div class="row">
                <div class="name">Player: {player.username}</div> <div class="score"> Score: {score}</div>
            </div>
        </div>
    );
}

export default Board;