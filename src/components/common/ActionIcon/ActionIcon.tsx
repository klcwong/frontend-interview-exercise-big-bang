import { Action } from "../../GameArea/GameArea.type"
import Lizard from "../../svg/Lizard/Lizard"
import Paper from "../../svg/Paper/Paper"
import Rock from "../../svg/Rock/Rock"
import Scissors from "../../svg/Scissors/Scissors"
import Spock from "../../svg/Spock/Spock"

interface Props {
    action: Action
}

function ActionIcon(props: Props) {
    return (
        <>
            {props.action === Action.Rock && <Rock />}
            {props.action === Action.Paper && <Paper />}
            {props.action === Action.Scissors && <Scissors />}
            {props.action === Action.Lizard && <Lizard />}
            {props.action === Action.Spock && <Spock />}
        </>
    )
}

export default ActionIcon