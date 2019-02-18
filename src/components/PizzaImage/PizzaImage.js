import React from 'react';
import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpeg';

const pizzaImage = props => (
  <div className={classes.pizzaImage}>
    <img src={PizzaImage} className={classes.PizzaImg} alt="Kowabunga!" />
  </div>
);
