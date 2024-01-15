// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract cryptomayne is ERC721 {
   uint256 public mintPrice;
    uint256 public maxSupply;
    uint256 public totalSupply;
    uint256 public maxPerwallet;
    bool public isPublicMintEnabled;
    string public baseTokenURI;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;

        constructor() payable ERC721("cryptomayne", "CM") {
        mintPrice = 0.05 ether;
        maxSupply = 10000;
        toalSupply = 0;
        maxPerwallet = 20;
        }

        function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner {
        isPublicMintEnabled = isPublicMintEnabled_;
        }
        function setBaseTokenURI(string memory baseTokenURI_) external onlyOwner {
            baseTokenURI = baseTokenURI_;
        }
        

    // gic hereAdd your contract lo
}

