import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { Box, Button, Flex, Text, Link, Spacer,Input } from '@chakra-ui/react';
const ethers = require("ethers");
const BigNumber = require('ethers');

const styled = require('styled-components');

const cryptoMayne =  require('./cryptoMayne.json');

const cryptoMayneAddress = "0xa7701898ec491EfA1C74a49Bdf63453Ab01f2C37 "; // Replace this with the actual address

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                cryptoMayneAddress,
                cryptoMayne.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
            } catch (error) {
                console.log("error", error)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 10) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify={"center"} align={"center"} height={"100vh"} paddingBottom={"150px"}>
            <Box width={"520px"}>
<div>
<Text fontSize="48px" textShadow={"0 5px #000000"}>cryptoMayne</Text>
            <Text fontSize={"30px"} letterSpacing={"-5.5%"}
            fontFamily={"VT323"}
            textShadow={"0 2px 2px #000000"}>Hi !! cryptoMayne is here to solve modern possesion issues</Text>
           
</div>
            
            <div>
                    <div>
                        <Button
                         backgroundColor={"#D6517D"}
                         borderRadius={"5px"}
                         boxShadow={"0px 2px 2px 1px #0F0F0F"}
                         color={"white"}
                         cursor={"pointer"}
                         fontFamily={"inherit"}
                         padding={"15px"}
                         marginTop={"15px"}
                        className="decreament" onClick={handleDecrement}>-</Button>
                        <Input 
                       fontFamily={"inherit"}
                       width={"100px"}
                       height={"40px"}
                       textAlign={"center"}
                       paddingLeft={"19px"}
                       marginTop={"10px"}
                       type={"number"}
        

                        className="input"  value={mintAmount} readOnly />

                        <Button
                         backgroundColor={"#D6517D"}
                         borderRadius={"5px"}
                         boxShadow={"0px 2px 2px 1px #0F0F0F"}
                         color={"white"}
                         cursor={"pointer"}
                         fontFamily={"inherit"}
                         padding={"15px"}
                        marginTop={"15px"}
                        className="increament" onClick={handleIncrement}>+</Button>
                    </div>
                    <Button 
                     backgroundColor={"#D6517D"}
                     borderRadius={"5px"}
                     boxShadow={"0px 2px 2px 1px #0F0F0F"}
                     color={"white"}
                     cursor={"pointer"}
                     fontFamily={"inherit"}
                     padding={"15px"}
                     margin={"0 15px"}
                    className="mint" onClick={handleMint}>Mint Now</Button>
                </div>
           
               
            
                <p>PLease Connect Your account </p>
            </Box>
            
           
            
        </Flex>
    )
}


export default MainMint;

