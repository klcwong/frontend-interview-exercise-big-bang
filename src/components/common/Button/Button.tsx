import { ReactNode } from "react";
import { Action } from "../../GameArea/GameArea";

interface Props {
    children: ReactNode;
    className?: string;
    title?: string;
    actionType?: Action;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

function Button(props: Props) {
    return (
        <button
            className={`button ${props.className}`}
            title={props.title}
            data-action-type={props.actionType}
            onClick={props.onClick}
        >{props.children}</button>
    )
}

export default Button