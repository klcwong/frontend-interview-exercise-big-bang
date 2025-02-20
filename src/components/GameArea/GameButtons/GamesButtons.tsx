import ActionIcon from "../../common/ActionIcon/ActionIcon"
import GameButton from "../../common/GameButton/GameButton"
import { Action } from "../GameArea"
import "./GameButtons.css"

interface Props {
    actions: Action[]
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

function GameButtons(props: Props) {
    return (
        <div className="game-buttons">
            {props.actions.map((action, index) => {
                return (
                    <GameButton
                        title="Rock"
                        onClick={props.onClick}
                        actionType={action}
                        key={`game-button-${index}`}
                    >
                        <ActionIcon action={action} />
                    </GameButton>
                )
            })}
        </div>
    )
}

export default GameButtons