export type CustomEventDetail<T> = Partial<Pick<CustomEvent<T>, 'detail'>>;

const WindowActionEventValues = [
  'window_open_popup',
  'window_close_popup'
] as const;

export type WindowActionEvent = (typeof WindowActionEventValues)[number];

export const WINDOW_OPEN_POPUP_EVENT: WindowActionEvent = 'window_open_popup';
export const WINDOW_CLOSE_POPUP_EVENT: WindowActionEvent = 'window_close_popup';
export type ActionEvent<T> = Partial<CustomEventDetail<T>> & Event;
