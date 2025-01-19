import React from 'react'

const Navbar = () => {
  const total = 2500;
  const token= false;
  
    return (
        <nav>
        <button style={{backgroundColor:"grey", borderRadius:"10px"}}>🍕 Home</button>
        {token ? (
          <>
            <button style={{backgroundColor:"grey", borderRadius:"10px"}}>🔓 Profile</button>
            <button style={{backgroundColor:"grey", borderRadius:"10px"}}>🔒 Logout</button>
          </>
        ) : (
          <>
            <button style={{backgroundColor:"grey", borderRadius:"10px"}} >🔐 Login</button>
            <button  style={{backgroundColor:"grey", borderRadius:"10px"}}>🔐 Register</button>
          </>
        )} 
        <button style={{backgroundColor:"grey", borderRadius:"10px"}}>🛒. Total:${total}</button>
    </nav>
  );
};

export default Navbar;