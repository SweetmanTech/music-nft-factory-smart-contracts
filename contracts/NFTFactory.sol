// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {Album} from "./Album.sol";

contract NFTFactory {
    event AlbumCreated(address _creator, address _album);

    function createAlbum(string memory name_, string memory symbol_)
        public
        returns (address)
    {
        Album newAlbum = new Album(name_, symbol_);
        emit AlbumCreated(msg.sender, address(newAlbum));
        return address(newAlbum);
    }
}
