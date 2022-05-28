import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import es from 'date-fns/locale/es'

import { CalendarEvent } from './CalendarEvent'
import { Navbar } from "../ui/Navbar"
import { messages } from '../../helpers/calendar-messages-es'

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react'
import { CalendarModal } from './CalendarModal'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'
import { eventSetActive } from '../../actions/events'
import { AddNewFab } from '../ui/AddNewFab'

const locales = {
  'es': es,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const CalendarScreen = () => {

  const dispatch = useDispatch();

  const { events } = useSelector(state=>state.calendar)

  const [lastView, setLastView] = useState(localStorage.getItem('lastView')|| 'month');

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#367cf7',
      borderRadius: '0px',
      opacity: 0.8,
      displat: 'block',
      color: 'white'
    };

    return {
      style
    }
  }

  const onDoubleClick = (e) => {
    console.log('Double click event',e);
    dispatch(uiOpenModal());
  }

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  }

  const onViewChange = (e) => {
    console.log(e);
    setLastView(e);
    localStorage.setItem('lastView', e);
  }

  return (
    <div className='big-calendar'>
      <Navbar />

      <Calendar
        components={ {event: CalendarEvent} }
        culture={'es'}
        localizer={localizer}
        messages={messages}
        events={events}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent = { onDoubleClick }
        onSelectEvent = { onSelectEvent }
        onView = { onViewChange }
        view = { lastView }
      />

      <AddNewFab />

      <CalendarModal />
    </div>
  )
}
 