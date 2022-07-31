// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

contract Album is ERC721Upgradeable {
    // The tokenId of the token to be minted.
    uint256 private _tokenId;

    function initialize(string memory name_, string memory symbol_)
        public
        initializer
    {
        __ERC721_init(name_, symbol_);
    }

    function mint() public returns (uint256) {
        _tokenId += 1;
        _mint(msg.sender, _tokenId);
        return _tokenId;
    }
}
