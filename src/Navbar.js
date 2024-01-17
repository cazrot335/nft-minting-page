import React from "react";
import { Box , Button, Flex ,Image,Link,Spacer} from '@chakra-ui/react'



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
    <Flex justify="space-between" align="center" padding="30px">
      
       {/* left side of  Nav bar containing social media icons  */}
        <Flex justify="space-around" width="40%" padding="0 75px">
        <Link href="https://www.facebook.com">
        <image src='./assets/social-media-icons/facebook_32x32.png' boxsize="42px" margin="0 15px" />
        </Link>
        <Link href="https://www.twitter.com">
        <image src="./assets/social-media-icons/twitter_32x32.png" boxsize="42px" margin="0 15px" />
        </Link>
        <Link href="https://www.gamil.com">
        <image src='./assets/social-media-icons/email_32x32.png' boxsize="42px" margin="0 15px" />
        </Link>
        </Flex>
       
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


    </Flex>
)
};

export default NavBar;