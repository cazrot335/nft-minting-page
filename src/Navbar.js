
import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
        console.log(window.ethereum)
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        setAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Ethereum provider (window.ethereum) not found.");
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
        <Button onClick={connectAccount}>Connect</Button>
      )}
    </Flex>
  );
};

export default NavBar;
