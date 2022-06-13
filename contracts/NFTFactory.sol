// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "./ETH_ERC721.sol";

contract NFTFactory {
    event AlbumCreated(address _creator, address _album);

    address implementation;
    address zoraERC721TransferHelper;
    address zoraReserveAuctionFindersEth;

    constructor(
        address _implementation,
        address _zoraERC721TransferHelper,
        address _zoraReserveAuctionFindersEth
    ) {
        implementation = _implementation;
        zoraERC721TransferHelper = _zoraERC721TransferHelper;
        zoraReserveAuctionFindersEth = _zoraReserveAuctionFindersEth;
    }

    function createMintSongsClone(string memory _name, string memory _symbol)
        public
        returns (address)
    {
        address clone = Clones.clone(implementation);
        emit AlbumCreated(msg.sender, address(clone));
        ETH_ERC721 album = ETH_ERC721(address(clone));
        album.initialize(
            _name,
            _symbol,
            zoraERC721TransferHelper,
            zoraReserveAuctionFindersEth
        );
        return address(clone);
    }
}
