import { useCallback, useLayoutEffect, useState } from 'react';
import useWindowEvent from '../../hooks/useWindowEvent';
import { sendWindowEvent } from '../event/setWindowEvent';
import { DialogState, HasDialogId } from '../types/dialog';
import {
  WINDOW_CLOSE_POPUP_EVENT,
  WINDOW_OPEN_POPUP_EVENT,
  WindowActionEvent
} from '../types/setWindowEvent';
import { useNavigation } from 'react-router';
import ReactModal from 'react-modal';

export const openDialog = (state: DialogState) => {
  sendWindowEvent<WindowActionEvent, DialogState>('window_open_popup', {
    ...state
  });
};
export const closeDialog = (dialogId: string) => {
  sendWindowEvent<WindowActionEvent, HasDialogId>('window_close_popup', {
    dialogId
  });
};

type State = DialogState;

const Dialog = () => {
  const navigation = useNavigation();
  const [dialogs, setDialogs] = useState<State[]>([]);

  useLayoutEffect(() => {
    setDialogs([]);
  }, [navigation.location?.pathname]);

  useWindowEvent(WINDOW_OPEN_POPUP_EVENT, (state: State) => {
    setDialogs((prevAlerts) => [...prevAlerts, state]);
  });

  useWindowEvent(WINDOW_CLOSE_POPUP_EVENT, (state: State) => {
    if (state.dialogId) {
      close(state.dialogId);
    }
  });

  const close = useCallback((dialogId: string) => {
    setDialogs((prevDialogs) =>
      prevDialogs.filter((prevState) => prevState.dialogId !== dialogId)
    );
  }, []);

  return (
    <div id="dialogs">
      {dialogs.map((state, idx) => {
        return (
          <ReactModal
            id={state.dialogId}
            key={idx}
            isOpen={true}
            onRequestClose={(event) => {
              console.log('### event: ', event);
              closeDialog(state.dialogId);
            }}
            style={{
              content: {
                opacity: 1,
                transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1)',
                inset: undefined
              },
              overlay: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(5px)',
                backgroundColor: 'rgba(0, 0, 0, 0.2)'
              }
            }}
            // {...state.dialogProps}
          >
            {state.content && state.content()}
          </ReactModal>
        );
      })}
    </div>
  );
};

export default Dialog;