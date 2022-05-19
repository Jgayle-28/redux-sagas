import { Grid, Icon, Segment } from 'semantic-ui-react';

const ExpenseItem = ({ type, expenseName, expenseValue, onEdit, onDelete }) => {
  return (
    <>
      <Segment color={type === 'expense' ? 'red' : 'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>
              ${expenseName}
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              ${expenseValue}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default ExpenseItem;
