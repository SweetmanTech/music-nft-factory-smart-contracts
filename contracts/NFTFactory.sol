// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ETH_ERC721} from "./ETH_ERC721.sol";

contract NFTFactory {
    event AlbumCreated(address _creator, address _album);

    function createAlbum(string memory name_, string memory symbol_)
        public
        returns (address)
    {
        Album newAlbum = new ETH_ERC721(name_, symbol_);
        emit AlbumCreated(msg.sender, address(newAlbum));
        return address(newAlbum);
    }
}
