---
layout: post
title: How to vote on a CCS proposal.
---

#### Note: Read the [What is the CCS and What Are Its Rules and Expectations](/what-is-ccs) page before continuing!

The CCS utilizes Github and Particl's on-chain voting system to reach consensus on proposals that require it. This quickstart guide will guide you through the process of voting for a proposal with clear step-by-step instructions.

## Table of Contents
- [Step-by-step Instructions](#step-by-step-instructions)
- [Important Notes](#important-notes-and-considerations)

## Requirements

- Any number of PART coins
- A staking node running Partyman

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