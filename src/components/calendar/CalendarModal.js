import { useState } from "react";
import DateTimePicker from "react-datetime-picker/dist/DateTimePicker";
import Modal from "react-modal/lib/components/Modal";

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { addHours, compareAsc } from "date-fns";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../../actions/ui";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
    
Modal.setAppElement('#root');

const now = addHours(new Date(), 1).setMinutes(0, 0);
const nowPlusOne = addHours(now, 1); 

export const CalendarModal = () => {
    const state = useSelector(state=>state);

    const { ui } = state;

    const [startDate, setStartDate] =useState(new Date(now));
    const [endDate, setEndDate] = useState(new Date(nowPlusOne));
    const [formValues, setFormValues] = useState({
        title: 'Event',
        notes: '',
        start: startDate,
        end: endDate
    });
    const [isTitleValid, setIsTitleValid] = useState(true);

    const {title, notes} = formValues;

    const dispatch = useDispatch();

    const closeModal = (e) => {
        dispatch(uiCloseModal());
    };

    const handleStartDateChange = (e) => {
        setStartDate(e);
        setFormValues({
            ...formValues,
            start: e
        })
    };

    const handleEndDateChange = (e) => {
        setEndDate(e);
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(compareAsc(endDate, startDate)<=0){
            return Swal.fire({
                title: 'Error',
                text: 'End date must be greater than start date',
                icon: 'error'
            });
        }

        if(title.trim().length < 2){
            setIsTitleValid(false);
            return;
        }

        setIsTitleValid(true);
        closeModal();
    
    }

    return (
        <Modal
            className="modal"
            closeTimeoutMS ={200}
            isOpen={ui.modalOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            overlayClassName="modal-fondo"
            style={customStyles}
        >

            <h1> Nuevo evento </h1>
            <hr />
            <form
                className="container"
                onSubmit={handleFormSubmit}
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        className="form-control" 
                        onChange={handleStartDateChange}
                        value={startDate}
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        className="form-control"
                        minDate = {startDate} 
                        onChange={handleEndDateChange}
                        value={endDate}
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={ isTitleValid ? 'form-control' : 'form-control is-invalid'}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={title}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        onChange={handleInputChange}
                        value={notes}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

        </Modal>
    )
}
