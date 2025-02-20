import { useEffect, useRef, useState } from "react"
import Button from "../../../common/Button/Button"
import { GameState } from "../../GameArea"
import "./Username.css"

interface Props {
    gameState: GameState
    updateUsername: (newUsername: string) => void
}

function Username(props: Props) {
    const { gameState, updateUsername } = props;

    
    const [inputValue, setInputValue] = useState(gameState.username)

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        const newUserName = inputRef.current?.value
        if (newUserName === undefined) {
            console.error("Cannot get the username");
            return
        }
        updateUsername(newUserName)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    }

    useEffect(() => {
            setInputValue(gameState.username);
    }, [gameState])

    return (
        <div className="username">
            <input
                className="username-input"
                value={inputValue}
                onChange={handleInputChange}
                ref={inputRef}
            />
            <Button
                className="username-button"
                onClick={handleClick}
            >Change</Button>
        </div>
    )
}

export default Username