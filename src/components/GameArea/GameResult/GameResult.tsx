import { useEffect, useState } from "react"
import ActionIcon from "../../common/ActionIcon/ActionIcon"
import { GameState, Result } from "../GameArea"
import "./GameResult.css"

interface Props {
    gameState: GameState
}



function GameResult(props: Props) {
    const { gameState } = props;

    const [resultState, setResultState] = useState({
        literal: "",
        icon: "",
    })

    useEffect(() => {
        let newLiteral = "";
        let newIcon = "";
        switch (gameState.result) {
            case Result.Win:
                newLiteral = "You Win";
                newIcon = "😄";
                break;
            case Result.Lose:
                newLiteral = "You Lose";
                newIcon = "😢";
                break;
            case Result.Tie:
                newLiteral = "Tie";
                newIcon = "👔";
                break;
            default:
                break;
        }
        setResultState((state) => ({
            ...state,
            literal: newLiteral,
            icon: newIcon,
        }))
    }, [gameState])

    return (
        <div className="game-result">
            {props.gameState.isPlayed && 
            (<><h2>{resultState.literal} {resultState.icon} </h2>
                <h4>You: <ActionIcon action={gameState.player1Action}/></h4>
                <h4>Computer: <ActionIcon action={gameState.player2Action}/></h4>
            </>)
            }
        </div>
    )
}

export default GameResult