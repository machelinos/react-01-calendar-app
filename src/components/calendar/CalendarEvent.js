export const CalendarEvent = ({ event }) => {
    console.log(event);
    const { title, user } = event;
  return (
    <div>
        <strong>{title}</strong>
        <p>- {user.name}</p>
    </div>
  )
}
