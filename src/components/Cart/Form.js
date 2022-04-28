import React from 'react';
import { ButtonContainer } from '../Button';
import CartTotals from './CartTotals';

export default function Form() {
  return (
    <form name="contact" netlify>
    <p>
      <label>Name <br/> <input type="text" name="name" />
      
      </label>
    </p>
    <p>
      <label htmlFor='email'>Email <br /> <input type="email" name="email" /></label>
    </p>
    <p>
      <ButtonContainer
      onClick={CartTotals}
      type="submit">Submit</ButtonContainer>
    </p>
  </form>
  )
}
