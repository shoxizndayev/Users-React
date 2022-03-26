
import React from 'react'
import useToken from '../../Hooks/useToken';

const UnauthenticatedApp = () =>{
    const [setIsLoggedIn] = useToken(true);
    const handleSubmit = async (evt) =>{
        evt.preventDefault();

        const{email, password} = evt.target.elements;

        const res = await fetch("https://reqres.in/api/login",{
 
        method:'POST',
        headers:{'content-type':'application/json',},
         body:JSON.stringify({
             email:email.value.trim(),
             password:password.value.trim(),
         }),
        });

        const data = await res.json();

        if (data?.token) {
            setIsLoggedIn(data?.token);
        }

    };
    return(
        <form onSubmit={handleSubmit}>
      <input type='email' placeholder='email' defaultValue='eve.holt@reqres.in' />
      <input
        placeholder='password'
        type='password'
        defaultValue='cityslicka' 
      />


      <button type='submit'>submit</button>
      
    </form>
    );
};


export default UnauthenticatedApp;