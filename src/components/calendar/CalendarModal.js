import { useState } from "react";
import DateTimePicker from "react-datetime-picker/dist/DateTimePicker";
import Modal from "react-modal/lib/components/Modal";

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { addHours } from "date-fns";

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
    const [isOpenModal, setIsOpenModal] = useState(true);

    const [startDate, setStartDate] =useState(new Date(now));
    const [endDate, setEndDate] = useState(new Date(nowPlusOne));

    const closeModal = (e) => {
        console.log(e);
        setIsOpenModal(false);
    }

    const handleStartDateChange = (e) => {
        console.log(e);
        setStartDate(e);
    }

    const handleEndDateChange = (e) => {
        console.log(e);
        setEndDate(e);
    }

    return (
        <Modal
            className="modal"
            closeTimeoutMS ={200}
            isOpen={isOpenModal}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            overlayClassName="modal-fondo"
            style={customStyles}
        >

            <h1> Nuevo evento </h1>
            <hr />
            <form className="container">

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
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
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
