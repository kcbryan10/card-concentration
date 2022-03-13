
import React, { useState } from "react";
const Board = ({ score }) => {

    return (
        <div id="container">
            <div class="row">
                <div class="name">Player: {}</div> <div class="score"> Score: {score}</div>
            </div>
        </div>
    );
}

export default Board;