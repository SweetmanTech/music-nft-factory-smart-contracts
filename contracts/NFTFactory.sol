// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {Album} from "./Album.sol";

contract NFTFactory {
    function createAlbum() public returns (address) {
        Album newDrop = new Album("sweetman", "SWTS");
        return address(newDrop);
    }
}
