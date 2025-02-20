import { ReactNode } from "react";
import { Action } from "../../GameArea/GameArea.type";
import Button from "../Button/Button";
import "./GameButton.css"

interface Props {
  children: ReactNode;
  title: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  actionType: Action;
};

function GameButton(props: Props) {
  return (
    <Button
      className="game-button"
      title={props.title}
      onClick={props.onClick}
      actionType={props.actionType}
    >
      {props.children}
    </Button>
  )
}

export default GameButton;
