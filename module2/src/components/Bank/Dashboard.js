import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import Controls from './Controls';
import Balance from './Balance';
import TransactionHistory from './TransactionHistory';
import styles from './Bank.module.css';

class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
    sumDeposit: 0,
    sumWithdraw: 0,
    userInput: '',
  };

  onHandelClick = e => {
    const newHist = {
      id: uuidv4(),
      type: e.target.textContent,
      ammount: Number(this.state.userInput),
      date: new Date().toISOString(),
    };
    if (Number(this.state.userInput) === 0) {
      return (() => {
        this.setState(() => ({
          userInput: '',
        }));
        alert('Введите сумму для проведения операции!');
      })();
    }

    if (newHist.type === 'Deposit') {
      return this.setState(prevState => ({
        history: [...prevState.history, newHist],
        sumDeposit: prevState.sumDeposit + Number(prevState.userInput),
        balance: prevState.balance + Number(prevState.userInput),
        userInput: '',
      }));
    }
    if (this.state.balance >= this.state.userInput) {
      return this.setState(prevState => ({
        history: [...prevState.history, newHist],
        sumWithdraw: prevState.sumWithdraw + Number(prevState.userInput),
        balance: prevState.balance - Number(prevState.userInput),
        userInput: '',
      }));
    }

    return (() => {
      this.setState(() => ({
        userInput: '',
      }));
      alert('На счету недостаточно средств для проведения операции!');
    })();
  };

  onHandelChange = e => {
    this.setState({
      userInput: e.target.value,
    });
  };

  render() {
    const { history, balance, sumDeposit, sumWithdraw, userInput } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls
          onClick={this.onHandelClick}
          handelChange={this.onHandelChange}
          voidI={userInput}
        />
        <Balance
          balance={balance}
          sumDeposit={sumDeposit}
          sumWithdraw={sumWithdraw}
        />
        <TransactionHistory history={history} />
      </div>
    );
  }
}

export default Dashboard;
