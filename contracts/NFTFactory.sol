// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {Album} from "./Album.sol";

contract NFTFactory {
    function createAlbum(string memory name_, string memory symbol_)
        public
        returns (address)
    {
        Album newDrop = new Album(name_, symbol_);
        return address(newDrop);
    }
}
