import { Button } from 'semantic-ui-react';

const ButtonGroup = ({
  cancelLabel,
  onCancel,
  acceptLabel,
  onAccept,
  hasOr = false,
}) => {
  return (
    <>
      <Button.Group style={{ marginTop: 20 }}>
        <Button>{cancelLabel}</Button>
        {hasOr && <Button.Or />}

        <Button primary>{acceptLabel}</Button>
      </Button.Group>
    </>
  );
};

export default ButtonGroup;
