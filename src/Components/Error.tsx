import { FC, useEffect } from 'react';
import cn from 'classnames';

interface Props {
  message: string;
  onClose: () => void;
}

export const Error: FC<Props> = ({ message, onClose }) => {
  useEffect(() => {
    const timeOut = setTimeout(onClose, 3000);

    return () => clearTimeout(timeOut);
  }, [message, onClose]);

  return (
    <div
      data-cy="ErrorNotification"
      className={cn('notification is-danger is-light has-text-weight-normal', {
        hidden: !message,
      })}
    >
      <button data-cy="HideErrorButton" type="button" className="delete" />
      {message}
    </div>
  );
};
