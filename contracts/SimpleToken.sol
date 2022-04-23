// contracts/SimpleToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleToken is ERC20 {
 
 uint256 initialSupply=100000000000000000000;
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
      _mint(msg.sender, initialSupply);
      //balanceOf(msg.sender);

    }
}