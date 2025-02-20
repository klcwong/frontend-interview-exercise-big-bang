import { GameState } from "../GameArea"
import "./GameResult.css"

interface Props {
    gameState: GameState
}

function GameResult(props: Props) {
    return (
        <div className="game-result">
            {props.gameState.isPlayed && 
            (<><h1>You: {props.gameState.player1Action}</h1>
                <h1>Computer: {props.gameState.player2Action}</h1>
                <h1>Result: {props.gameState.result}</h1>
            </>)
            }
        </div>
    )
}

export default GameResult