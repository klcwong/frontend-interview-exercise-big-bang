import { GameState } from "../GameArea"
import Username from "./Username/Username"
import "./ScoreBoard.css"
import ResetButton from "./ResetButton/ResetButton"

interface Props {
    gameState: GameState
    updateUsername: (newUsername: string) => void
    resetHandler: () => void
}

function ScoreBoard(props: Props) {
    const {gameState, updateUsername, resetHandler} = props;
    
    return (
        <div className="score-board">
            <h2>{`Score: ${gameState.score}`}</h2>
            <Username gameState={gameState} updateUsername={updateUsername}/>
            <ResetButton resetHandler={resetHandler} />
        </div>
    )
}

export default ScoreBoard