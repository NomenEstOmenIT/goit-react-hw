import React, { Component } from 'react';
import PropTypes from 'prop-types';
import petsDb from '../../services/pets.json';
import styles from './Pet.module.css';

class Pet extends Component {
  state = {
    filterPet: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const newPet = petsDb.find(el => el.id === match.params.id);
    this.setState({
      filterPet: newPet,
    });
  }

  onClickBack = () => this.props.history.goBack();

  render() {
    const { filterPet } = this.state;
    return (
      <>
        <div className={styles.petContainer}>
          <button
            className={styles.petReturnBtn}
            onClick={this.onClickBack}
            type="button"
          >
            <i className="material-icons">reply</i>
            Return
          </button>
          <div>
            <h2 className={styles.petTitle}>All about {filterPet.name}</h2>
            <div className={styles.petCardContainer}>
              <img src={filterPet.image} alt="" />
              <div>
                <p>
                  <span>Age:</span> {filterPet.age}
                </p>
                <p>
                  <span>Gender:</span> {filterPet.gender}
                </p>
                <p>
                  <span>Color:</span> {filterPet.color}
                </p>
                <p>
                  <span>Breed:</span> {filterPet.breed}
                </p>
              </div>
            </div>
            <p className={styles.petDescription}>{filterPet.description}</p>
          </div>
        </div>
      </>
    );
  }
}

Pet.propTypes = {
  match: PropTypes.objectOf(PropTypes.shape).isRequired,
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Pet;
