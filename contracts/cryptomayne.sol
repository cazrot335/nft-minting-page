// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract cryptomayne is ERC721 , Ownable{
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
        maxSupply = 1000;
        toalSupply = 0;
        maxPerwallet = 10;
        }

        function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner {
        isPublicMintEnabled = isPublicMintEnabled_;
        }
        function setBaseTokenURI(string memory baseTokenURI_) external onlyOwner {
            baseTokenURI = baseTokenURI_;
        }
        function tokenURI(uint256 tokenId_) public view override returns (string memory) {
            return (_exists(tokenId_), 'Token does not exist');
            return string(abi.encodePacked(baseTokenURI, Strings.toString(tokenId_), ".json"));
        }
        function withdraw() external onlyOwner {
           (bool success, ) = withdrawWallet.call{value: address(this).balance}('');
           require(success, 'Withdrawal failed');

        }

        function mint (uint256 quantity_) public payable {
            require(isPublicMintEnabled, 'Public mint is not enabled');
            require(msg.value == mintPrice * quantity_, 'Insufficient funds');
            require (totalSupply + quantity_ <= maxSupply, 'sold out');
            require(walletMints[msg.sender] + quantity_ <= maxPerwallet, 'Exceeds max per wallet');

            for(uint256 i = 0; i < quantity_; i++) {
               uint256 newTokenId = totalSupply + 1;
               totalSupply ++;
               _safeMint(msg.sender, newTokenId);
            }
        }

    // gic hereAdd your contract lo
}

