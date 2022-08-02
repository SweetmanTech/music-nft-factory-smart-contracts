// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "./Album.sol";

contract NFTFactory {
    event AlbumCreated(address creator, address indexed contractAddress);

    address implementation;

    constructor(address _implementation) {
        implementation = _implementation;
    }

    function createMusicNft(string memory _name, string memory _symbol)
        public
        returns (address)
    {
        address clone = Clones.clone(implementation);
        emit AlbumCreated(msg.sender, address(clone));
        Album(address(clone)).initialize(_name, _symbol, msg.sender);
        return address(clone);
    }
}
