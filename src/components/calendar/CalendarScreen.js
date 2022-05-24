import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import es from 'date-fns/locale/es'
import { addHours } from 'date-fns/esm'

import { Navbar } from "../ui/Navbar"
import { messages } from '../../helpers/calendar-messages-es'

import 'react-big-calendar/lib/css/react-big-calendar.css';

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

const events = [
  {
    title: 'Cumpleaños del jefe',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgcolor: '#fafafa'
  }
]

export const CalendarScreen = () => {

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

  return (
    <div className='big-calendar'>
      <Navbar />

      <Calendar
        culture={'es'}
        localizer={localizer}
        messages={messages}
        events={events}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
      />
    </div>
  )
}
 