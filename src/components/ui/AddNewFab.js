import { useDispatch } from "react-redux"
import { eventClearActive } from "../../actions/events";
import { uiOpenModal } from "../../actions/ui";

export const AddNewFab = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(eventClearActive());
        dispatch(uiOpenModal());

    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={handleClick}
        >
            <i className="fa fa-plus"></i>
        </button>
    )
}
