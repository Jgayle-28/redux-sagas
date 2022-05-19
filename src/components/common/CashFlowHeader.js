import { Grid, Segment, Statistic } from 'semantic-ui-react';

const CashFlowHeader = ({
  textPlacement = 'center',
  incomeValue = '0.00',
  expenseValue = '0.00',
}) => {
  return (
    <>
      <Segment textAlign={textPlacement}>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{ textAlign: 'left' }}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>${incomeValue}</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='tiny' color='red'>
                <Statistic.Label style={{ textAlign: 'left' }}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>${expenseValue}</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default CashFlowHeader;
