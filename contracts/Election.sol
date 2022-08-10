// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Election {
    uint256 public voteStartingDate;
    uint256 public voteEndingDate;

    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    mapping(address => bool) public voters;
    mapping(uint256 => Candidate) public candidates;
    uint256 public candidateNumber;

    constructor() {}

    function setDate(uint256 startDate, uint256 endDate)
        public
        returns (bool success)
    {
        require(startDate == 0 || endDate == 0, "Date already setted");
        voteStartingDate = startDate;
        voteEndingDate = endDate;
        return true;
    }

    function addCandidate(string calldata _name) public {
        candidateNumber++;
        candidates[candidateNumber] = Candidate(candidateNumber, _name, 0);
    }

    function voting(uint256 _candidateId) public {
        require(!voters[msg.sender]);
        require(_candidateId > 0 && _candidateId <= candidateNumber);
        voters[msg.sender] = true;
        candidates[_candidateId].voteCount++;
    }
}
