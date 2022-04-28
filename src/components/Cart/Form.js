import React from 'react'
import { ButtonContainer } from '../Button'
export default function Form() {
  return (
    <div>
  <form name='contact v1' method='post' data-netlify="true" onSubmit="submit">

 <input type="hidden" name="form" value="contact v1" />

     <div>
       <label>Full Name <br />
         <input type="text" name="first-name" />
         </label> 

     </div>

     <div>
       <label htmlFor='email'>
         Email 
       </label> <br/>
       <input id='email' type="email" name="email"/>
     </div>

     <div>
       <label htmlFor='number'>Phone Number</label> <br />
       <input id='number' type="number" name='number' />
     </div>
 <div>
   <label>Current Address</label> <br />
   <textarea name='address' >
     
   </textarea>
 </div>
    <ButtonContainer type='submit'>submit</ButtonContainer>

  </form>

    </div>
  )
}
