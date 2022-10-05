// SPDX-Licence-Identifier: MIT

pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract FirstToken is ERC20, ERC20Detailed {
    constructor() ERC20Detailed("First", "FRT", 18) public {
        _mint(msg.sender, 1);
    }
}