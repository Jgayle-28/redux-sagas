import { Form } from 'semantic-ui-react';
import ButtonGroup from './components/ButtonGroup';

const AddTransactionForm = () => {
  return (
    <>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon='tags'
            width={12}
            label='Description'
            placeholder='New Shiny Thing'
          />
          <Form.Input
            icon='dollar'
            iconPosition='left'
            width={4}
            label='Amount'
            placeholder='100.00'
          />
        </Form.Group>
        <ButtonGroup hasOr cancelLabel='Cancel' acceptLabel='Save' />
      </Form>
    </>
  );
};

export default AddTransactionForm;
