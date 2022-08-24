// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Election {
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    struct Votes {
        string name;
        uint256 voteStartingDate;
        uint256 voteEndingDate;
        uint256 candidateNumber;
        uint256 voterNumber;
    }

    mapping(uint256 => Votes) public votes;
    mapping(uint256 => mapping(address => bool)) voters;
    mapping(uint256 => mapping(uint256 => Candidate)) candidates;
    uint256 public voteId;

    function addVote(
        string calldata _name,
        uint256 startDate,
        uint256 endDate
    ) public {
        voteId++;
        Votes storage vote = votes[voteId];
        vote.name = _name;
        vote.voteStartingDate = startDate;
        vote.voteEndingDate = endDate;
    }

    function addCandidate(string calldata _name, uint256 _voteId) public {
        require(block.timestamp >= votes[_voteId].voteStartingDate);
        votes[_voteId].candidateNumber++;
        candidates[_voteId][votes[_voteId].candidateNumber] = Candidate(
            _name,
            0
        );
    }

    function voting(uint256 _candidateId, uint256 _voteId) public {
        require(voters[_voteId][msg.sender]);
        require(
            _candidateId > 0 && _candidateId <= votes[_voteId].candidateNumber
        );
        require(block.timestamp >= votes[_voteId].voteStartingDate);
        voters[voteId][msg.sender] = true;
        candidates[_voteId][_candidateId].voteCount++;
    }

    function getVotes() public view returns (Votes[] memory) {
        Votes[] memory ret = new Votes[](voteId);
        for (uint256 i = 0; i < voteId; i++) {
            ret[i] = votes[i];
        }
        return ret;
    }

    function getCandidate(uint256 _voteid)
        public
        view
        returns (Candidate[] memory)
    {
        Candidate[] memory ret = new Candidate[](
            votes[_voteid].candidateNumber
        );

        for (uint256 i = 0; i < votes[_voteid].candidateNumber; i++) {
            ret[i] = candidates[_voteid][i];
        }
        return ret;
    }
}
