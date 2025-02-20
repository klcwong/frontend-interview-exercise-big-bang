import Button from "../../../common/Button/Button"
import "./ResetButton.css"

interface Props {
    resetHandler: () => void
}

function ResetButton(props: Props) {
    const {resetHandler} = props;

    return (
        <Button className="reset-button" onClick={resetHandler}>
            Reset
        </Button>
    )
}

export default ResetButton