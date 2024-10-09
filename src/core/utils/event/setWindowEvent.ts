import { CustomEventDetail } from '../types/setWindowEvent';

export const sendWindowEvent = <K extends string, T>(
  eventName: K,
  payload?: T
) => {
  const action: CustomEventDetail<T> = { detail: payload ?? undefined };

  window.dispatchEvent(new CustomEvent(eventName, action));
};
