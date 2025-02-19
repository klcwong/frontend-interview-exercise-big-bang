import { ReactNode } from "react";
import "./GameButton.css"

interface Props {
  children: ReactNode;
  title: string;
};

function GameButton(props: Props) {
    return (
        <div className="game-button" title={props.title}>
            {props.children}
        </div>
    )
}

export default GameButton