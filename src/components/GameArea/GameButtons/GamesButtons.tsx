import GameButton from "../../common/GameButton/GameButton"
import Lizard from "../../svg/Lizard/Lizard"
import Paper from "../../svg/Paper/Paper"
import Rock from "../../svg/Rock/Rock"
import Scissors from "../../svg/Scissors/Scissors"
import Spock from "../../svg/Spock/Spock"
import "./GameButtons.css"

function GameButtons() {
    return (
        <div className="game-buttons">
            <GameButton title="rock">
                <Rock />
            </GameButton>
            <GameButton title="paper">
                <Paper />
            </GameButton>
            <GameButton title="scissors">
                <Scissors />
            </GameButton>
            <GameButton title="lizard">
                <Lizard />
            </GameButton>
            <GameButton title="spock">
                <Spock />
            </GameButton>
        </div>
    )
}

export default GameButtons