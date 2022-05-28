import { useDispatch } from "react-redux"
import { eventDelete } from "../../actions/events";

export const DeleteEventFab = () => {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(eventDelete());
    }
    
  return (
    <button
        className="btn btn-danger fab fab--danger"
        onClick={handleClick}
    >
        <i className="fa fa-trash"></i>
    </button>
  )
}
