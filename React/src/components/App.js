import React, { Component } from 'react';
import UserCard from './UserCard/UserCard';
import Stats from './Stats/Stats';
import pricingPlanItems from './PricingPlan/pricing-plan';
import PricingPlan from './PricingPlan/PricingPlan';
import trans from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

class App extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      user: {
        name: 'Jacques Gluke',
        tag: '@jgluke',
        location: 'Ocho Rios, Jamaica',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
        stats: {
          followers: 5603,
          views: 4827,
          likes: 1308,
        },
      },
      stats: [
        { id: 'id-1', label: '.docx', percentage: 22 },
        { id: 'id-2', label: '.pdf', percentage: 4 },
        { id: 'id-3', label: '.mp3', percentage: 17 },
        { id: 'id-4', label: '.psd', percentage: 47 },
        { id: 'id-5', label: '.pdf', percentage: 10 },
      ],
    };
  }

  render() {
    return (
      <>
        <UserCard {...this.state.user} />
        <Stats title="Upload stats" stats={this.state.stats} />
        <PricingPlan plan={pricingPlanItems} />
        <TransactionHistory trans={trans} />
      </>
    );
  }
}

export default App;
