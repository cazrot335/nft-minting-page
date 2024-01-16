import React from "react";

const NavBar = ({accounts , setAccounts}) => {
  const isConnected = Boolean(accounts[0]);
  
  async function connectAccount() {
    if(window.ethereum){
        const accounts = await window.ethereum.request({
           method:"eth_requestAccounts", 
        });
        setAccounts(accounts);
    }
  }

return(
    <div>
       {/* left side of  Nav bar containing social media icons  */}
        <div>facebook</div>
        <div>Twitter</div>
        <div>Email</div>
    
    {/* right side of  Nav bar containing sections and connect  */}
    
    <div>About</div>
    <div>Mint</div>
    <div>Team</div>

    {/*connect button  */}
    {isConnected ? (
        <p>Connected</p>
    ) :(
        <button onClick={connectAccount}> Connect</button>
    )}


    </div>
)
};

export default NavBar;