import { ReactNode } from "react";
import "./GameButton.css"
import { Action } from "../../GameArea/GameArea";

interface Props {
  children: ReactNode;
  title: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  actionType: Action;
};

function GameButton(props: Props) {
  return (
    <div
      className="game-button"
      title={props.title}
      onClick={props.onClick}
      data-action-type={props.actionType}
    >
      {props.children}
    </div>
  )
}

export default GameButton;
