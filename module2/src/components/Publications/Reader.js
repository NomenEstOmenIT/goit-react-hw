import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication';
import Controller from './Controller';
import Counter from './Counter';
import styles from './Publication.module.css';

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, items: props.items };
  }

  onIncrement = () => {
    if (this.state.count < this.state.items.length - 1)
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
  };

  onDecrement = () => {
    if (this.state.count > 0)
      this.setState(prevState => ({
        count: prevState.count - 1,
      }));
  };

  render() {
    const { count, items } = this.state;

    return (
      <div className={styles.reader}>
        <Publication {...items[count]} />
        <Counter count={count} items={items} />
        <Controller increment={this.onIncrement} decrement={this.onDecrement} />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Reader;
