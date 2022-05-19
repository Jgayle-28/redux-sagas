import { Container, Statistic } from 'semantic-ui-react';
import './App.css';
import CashFlowHeader from './components/common/CashFlowHeader';
import ExpenseItem from './components/common/ExpenseItem';
import MainHeader from './components/common/MainHeader';
import AddTransactionForm from './components/forms/AddTransactionForm';

function App() {
  return (
    <Container>
      {/* Balance */}
      <MainHeader title='Budget Calculator' />
      <Statistic size='small'>
        <Statistic.Label>Your Balance: </Statistic.Label>
        <Statistic.Value>10,500.53</Statistic.Value>
      </Statistic>

      {/* Cash Flow */}
      <CashFlowHeader incomeValue='13,250' expenseValue='4,250' />

      {/* Add Form */}
      <MainHeader title='Add New Transaction' type='h3' />
      <AddTransactionForm />

      {/* History */}
      <MainHeader title='History' type='h3' />
      <ExpenseItem
        type='expense'
        expenseName='DJI Mavic Air 2'
        expenseValue='800'
      />
      <ExpenseItem
        type='deposit'
        expenseName='Function Direct Deposit'
        expenseValue='7,120'
      />
    </Container>
  );
}

export default App;
