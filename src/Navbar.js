
import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';

import styled from "styled-components";
const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    try {
      if (window.ethereum) {
        console.log("Ethereum provider detected:", window.ethereum);
  
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        
        console.log("Connected accounts:", accounts);
        setAccounts(accounts);
      } else {
        console.error("Ethereum provider (window.ethereum) not found.");
      }
    } catch (error) {
      console.error("Error connecting account:", error);
    }
  }
  

  return (
    <Flex justify="space-between" align="center" padding="30px">
      {/* left side of Nav bar containing social media icons */}
      <Flex justify="space-around" width="40%" padding="0 75px">
        <Link href="https://www.facebook.com">
          <Image src='./assets/social-media-icons/facebook_32x32.png' boxSize="42px" margin="0 15px" />
        </Link>
        <Link href="https://www.twitter.com">
          <Image src="./assets/social-media-icons/twitter_32x32.png" boxSize="42px" margin="0 15px" />
        </Link>
        <Link href="https://www.gamil.com">
          <Image src='./assets/social-media-icons/email_32x32.png' boxSize="42px" margin="0 15px" />
        </Link>
      </Flex>

      {/* right side of Nav bar containing sections and connect */}
      <div>About</div>
      <div>Mint</div>
      <div>Team</div>

      {/* connect button */}
      {isConnected ? (
        <p>Connected</p>
      ) : (
        <Button className=" connect" 
        backgroundColor={"#D6517D"}
        borderRadius={"5px"}
        boxShadow={"0px 2px 2px 1px #0F0F0F"}
        color={"white"}
        cursor={"pointer"}
        fontFamily={"inherit"}
        padding={"15px"}
        margin={"0 15px"}
        onClick={connectAccount}>Connect</Button>
      )}
    </Flex>
  );
};



export default NavBar;
