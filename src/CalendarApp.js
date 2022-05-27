import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";

import { Provider } from 'react-redux';
import './style.css';

export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
