import GameButton from "../../common/GameButton/GameButton"
import Lizard from "../../svg/Lizard/Lizard"
import Paper from "../../svg/Paper/Paper"
import Rock from "../../svg/Rock/Rock"
import Scissors from "../../svg/Scissors/Scissors"
import Spock from "../../svg/Spock/Spock"
import { Action } from "../GameArea"
import "./GameButtons.css"

interface Props {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

function GameButtons(props: Props) {
    return (
        <div className="game-buttons">
            <GameButton
                title="Rock"
                onClick={props.onClick}
                actionType={Action.Rock}
            >
                <Rock />
            </GameButton>
            <GameButton
                title="Paper"
                onClick={props.onClick}
                actionType={Action.Paper}
            >
                <Paper />
            </GameButton>
            <GameButton
                title="Scissors"
                onClick={props.onClick}
                actionType={Action.Scissors}
            >
                <Scissors />
            </GameButton>
            <GameButton
                title="Lizard"
                onClick={props.onClick}
                actionType={Action.Lizard}
            >
                <Lizard />
            </GameButton>
            <GameButton
                title="Spock"
                onClick={props.onClick}
                actionType={Action.Spock}
            >
                <Spock />
            </GameButton>
        </div>
    )
}

export default GameButtons