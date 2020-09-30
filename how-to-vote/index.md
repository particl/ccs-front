---
layout: post
title: How to vote on a CCS proposal
---

The CCS utilizes Github and Particl's on-chain voting system to reach consensus on proposals that require input from the community. This quickstart guide will guide you through the process of voting for a proposal with clear step-by-step instructions.

## Table of Contents
- [Requirements](#requirements)
- [How Particl Voting Works](#how-particl-voting-works)
- [Step-by-step Instructions](#step-by-step-instructions)
- [Important Notes](#important-notes-and-considerations)

## Requirements

- Any number of PART coins
- A staking node running Partyman

## How Particl Voting Works

Particl has an on-chain voting system that can determine consensus among the community. It works using a combination of the Particl blockchain, the Partyman cold staking application, the CCS framework, and Github. Voting power is determined by the number of coins a voter is staking on the Particl network.

Proposals that require the community to vote are added to the X page for all to see. To be picked up by the network, they are also added to the `metadata.txt` file located in Particl's `particl-proposals` repository. This is the file that the Particl network reads to find out about any new proposal that needs to be put up for voting. In that file, each proposal has a set of attributes which are as follows.

- `proposalid`: Unique ID of a proposal
- `network`: On which network is the vote being held (typically on mainnet)
- `blockheight_start`: At which block on the Particl blockchain does the voting period starts
- `blockheight_end`: At which block on the Particl blockchain does the voting period ends
- `link`: A URL that links to the CCS proposal
- `name`: The name or title of the proposal

Don't worry, you won't have to broadcast your proposal on the Particl network yourself. To submit a proposal for community voting, simply go through the normal process of submitting a proposal which can be found [here](#how-to-ccs). The CCS framework and the Particl team will take care of moving your proposal to a state where it can be voted on once a loose consensus about your proposal is reached in the community.

## Step-by-step Instructions

In some cases, CCS proposals may require a community vote before they can be set into motion. Typically, these proposals are related to protocol changes and movement of funds but can also include other proposals that may require consensus from the community.

To see if there's any proposal that requires a vote or that is about to be voted on, simply head to the X page and look for the voting date of each proposal listed on there. If there's no proposal in the page, that's because there is no proposal that requires a community vote.

If there's a proposal that's currently undergoing community voting and you want to cast a vote for it, there are two ways you can go about it.

### Using the Partyman Cold Staking App (Recommended)

1. Find a proposal you want to vote for in the X page 
2. Note the Proposal ID of the proposal you want to cast your vote for.
3. Note the Voting Option number of the vote you want to cast (i.e. Yes = 1, No = 2)
4. Log into your staking node (Partyman app). If you don't have one setup already, then follow this [step-by-step guide](https://github.com/dasource/partyman/blob/master/README.md).
5. Type the following command to cast your vote by replacing **{ID}** by the ID number of the proposal you’re voting for and **{Vote option}** by the number representing your vote:
`cd ~ && partyman/partyman vote {ID} {Vote option}`
6. You're done. Now you just need to wait until the voting period ends. Your vote will be officially tallied on the last block of the voting period.
7. If at any time you want to change your vote, then simply go back to Step 6 and type the same command, but with a different voting option. This will replace your previous voting option.

_**Note:** For your vote to be counted, your staking node needs to be actively staking on the last block of the voting period. If you have voted for any option but aren't staking at that moment, your vote will be ignored._

### Using Particl Desktop or Particl-Qt

1. Find a proposal you want to vote for in the X page 
2. Note the Proposal ID of the proposal you want to cast your vote for.
3. Note the Voting Option number of the vote you want to cast (i.e. Yes = 1, No = 2)
4. Go to the wallet that is staking (either Particl Desktop or Particl-Qt) and open up the Core debug console.
5. Type the following command to cast your vote by replacing **{ID}** by the ID number of the proposal you’re voting for and **{Vote option}** by the number representing your vote:
setvote {ID} {Vote option}
6. You're done. Now you just need to wait until the voting period ends. Your vote will be officially tallied on the last block of the voting period.
7. If at any time you want to change your vote, then simply go back to Step 6 and type the same command, but with a different voting option. This will replace your previous voting option.

_**Note:** For your vote to be counted, your wallet needs to be open and actively staking on the last block of the voting period. If you have voted for any option but aren't staking at that moment, your vote will be ignored._

## Important Notes and Considerations

Particl's CCS system works using Particl's on-chain voting mechanism. Therefore, there are some important information about the voting system that you need to be aware of before you cast your vote.

- Your voting power is directly proportional to your staking weight. In other words, the more coins you stake on the Particl network, the more voting power you get.
- You can't use the voting power of any coin you can't stake. That means you can't vote using coins held on exchanges or third-party applications that don't let you stake.
- Staking on a staking pool delegates your voting power to the pool owner. **Always take into consideration the voting preferences (if any) of a pool before delegating your staking (and voting) power to it.**
- A proposal cannot be modified or amended once it is put up for community voting. 
- By design, only one proposal can be voted on by the community at the same time.
- A proposal needs to have been discussed by the community for a minimum of two weeks for a vote to be considered. The discussion phase of a proposal can be much longer than that, however, if necessary. The exact duration of the discussion phase of a proposal is determined by the Particl team.
- The voting period of any proposal has to be of a minimum of two weeks. Voting periods can last longer than two weeks if necessary. The exact duration of a voting period is pre-determined by the Particl team and cannot be changed once the voting starts.
- All votes are permanently recorded on the blockchain and publicly auditable.