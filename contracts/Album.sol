// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Album is ERC721 {
    // The tokenId of the token to be minted.
    uint256 private _tokenId;

    constructor(string memory name_, string memory symbol_)
        payable
        ERC721(name_, symbol_)
    {
        _tokenId = 0;
    }

    function mint() public returns (uint256) {
        _tokenId += 1;
        _mint(msg.sender, _tokenId);
        return _tokenId;
    }
}
