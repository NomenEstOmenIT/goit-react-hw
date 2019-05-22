import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import publications from '../publication.json';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';
import Publication from '../Publication/Publication';

// const AsuncPublication = () => import('../Publication/Publication');

class Reader extends Component {
  state = {
    pub: publications,
  };

  //

  handleHistory = count => {
    const { history, location } = this.props;
    history.push(`${location.pathname}?page=${count}`);
  };

  onIncrement = () => {
    const { location } = this.props;
    const count = +queryString.parse(location.search).page;
    if (count < this.state.pub.length) this.handleHistory(count + 1);
  };

  onDecrement = () => {
    const { location } = this.props;
    const count = +queryString.parse(location.search).page;

    if (count > 1) this.handleHistory(count - 1);
  };

  render() {
    const { pub } = this.state;
    const { location } = this.props;
    const count = queryString.parse(location.search).page;
    return (
      <div className={styles.reader}>
        <h2 className={styles.taskTitle}>Task 01</h2>
        <Publication {...pub[count - 1]} />
        <Counter count={count} length={publications.length} />
        <Controls
          onDecrement={this.onDecrement}
          onIncrement={this.onIncrement}
        />
      </div>
    );
  }
}

Reader.propTypes = {
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
};

export default Reader;
