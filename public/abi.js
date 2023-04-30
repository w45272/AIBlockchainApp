export const abi = [
	{
		"inputs": [],
		"name": "AlreadyCommitted",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "AlreadyPaidWager",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "AlreadyRevealed",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "AnswerDoesntMatch",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "GameDoesntExist",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "GameFull",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "HostCannotWager",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MustWaitForCommits",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MustWaitForReveals",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MustWaitForWagers",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NonParticipant",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotEnoughValue",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TooMuchValue",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_a1",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_a2",
				"type": "uint8"
			}
		],
		"name": "answerDistance",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameID",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "_commit",
				"type": "bytes32"
			}
		],
		"name": "commit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "createGame",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameID",
				"type": "uint256"
			}
		],
		"name": "payWager",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameID",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "_answer",
				"type": "uint8"
			}
		],
		"name": "reveal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameID",
				"type": "uint256"
			}
		],
		"name": "rewardWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]