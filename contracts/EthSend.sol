//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract EthSend {
    address payable public recipient;

    // Set recipient at deployment
    constructor(address payable _recipient) {
        recipient = _recipient;
    }

    // Function to send ETH to the recipient
    function sendETH() public payable {
        require(msg.value > 0, "Must send some ETH");
        recipient.transfer(msg.value);
    }

    // Function to change the recipient
    function updateRecipient(address payable _newRecipient) public {

   require(msg.sender == recipient, "Only current recipient can change");

   recipient = _newRecipient;
    }
}