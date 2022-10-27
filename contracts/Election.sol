// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Election {
    struct Candidate {
        string name;
        string description;
        string imageUrl;
        uint256 voteCount;
    }

    struct Votes {
        string name;
        uint256 maxVoter;
        uint256 voteStartingDate;
        uint256 voteEndingDate;
        uint256 candidateNumber;
        string description;
        string imageUrl;
    }

    mapping(uint256 => Votes) public votes;
    mapping(uint256 => mapping(address => bool)) voters;
    mapping(uint256 => mapping(uint256 => Candidate)) candidates;
    uint256 public voteId;

    function addVote(
        string calldata _name,
        uint256 maxVoter,
        uint256 startDate,
        uint256 endDate,
        string calldata description,
        string calldata imageUrl,
        Candidate[] calldata candidate
    ) public {
        voteId++;
        uint256 id = voteId;
        Votes storage vote = votes[id];
        vote.name = _name;
        vote.voteStartingDate = startDate;
        vote.voteEndingDate = endDate;
        vote.maxVoter = maxVoter;
        vote.imageUrl = imageUrl;
        vote.description = description;
        vote.candidateNumber = candidate.length;
        for (uint256 i = 0; i < candidate.length; i++) {
            addCandidate(
                candidate[i].name,
                candidate[i].description,
                candidate[i].imageUrl,
                id
            );
        }
    }

    function addCandidate(
        string calldata _name,
        string calldata description,
        string calldata imageUrl,
        uint256 _voteId
    ) public {
        require(block.timestamp <= votes[_voteId].voteStartingDate);
        votes[_voteId].candidateNumber++;
        candidates[_voteId][votes[_voteId].candidateNumber] = Candidate(
            _name,
            description,
            imageUrl,
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
        for (uint256 i = 1; i <= voteId; i++) {
            ret[i - 1] = votes[i];
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
            ret[i] = candidates[_voteid][i + 1];
        }
        return ret;
    }

    function getVote(uint256 _voteid) public view returns (Votes memory) {
        //  Votes memory ret = new Votes()
        //  ret = votes[_voteid];
        //  return ret;
        return votes[_voteid];
    }
}
