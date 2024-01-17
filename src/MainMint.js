import { useState } from "react";
const ethers = require("ethers");
const BigNumber = require('ethers');

import cryptoMayne from './cryptoMayne.json';

const cryptoMayneAddress = " "; // Replace this with the actual address

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
        <div>
            <h1>cryptoMayne</h1>
            <p>do kodika paisa nahi hai aur NFT banayenge madarchod</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount} readOnly />

                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={handleMint}>Mint Now</button>
                </div>
            ) : (
                <p>NFT chaiye to tera account connect kar ! </p>
            )}
        </div>
    )
}

export default MainMint;

