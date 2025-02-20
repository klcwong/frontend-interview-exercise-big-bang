import { GameState } from "../GameArea"
import Username from "./Username/Username"
import "./ScoreBoard.css"

interface Props {
    gameState: GameState
    updateUsername: (newUsername: string) => void
}

function ScoreBoard(props: Props) {
    const {gameState, updateUsername} = props;
    
    return (
        <div className="score-board">
            <h2>{`Score: ${gameState.score}`}</h2>
            <Username gameState={gameState} updateUsername={updateUsername}/>
        </div>
    )
}

export default ScoreBoard