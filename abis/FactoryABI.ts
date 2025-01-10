export const FactoryABI = [
    {
      "anonymous": false,
      "inputs": [
        { "indexed": false, "internalType": "address", "name": "_oldGovernor", "type": "address" },
        { "indexed": false, "internalType": "address", "name": "_newGovernor", "type": "address" }
      ],
      "name": "GovernorUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": false, "internalType": "uint256", "name": "nonce", "type": "uint256" },
        { "indexed": true, "internalType": "address", "name": "lp", "type": "address" },
        { "indexed": false, "internalType": "enum IFactory.Stage", "name": "stage", "type": "uint8" },
        {
          "components": [
            { "internalType": "address", "name": "lp", "type": "address" },
            { "internalType": "address", "name": "viewer", "type": "address" },
            { "internalType": "address", "name": "swapper", "type": "address" },
            { "internalType": "address", "name": "receiver", "type": "address" },
            { "internalType": "address", "name": "priceHelper", "type": "address" },
            { "internalType": "address", "name": "lpManager", "type": "address" },
            { "internalType": "address", "name": "doubleTracker", "type": "address" },
            { "internalType": "address", "name": "singleTrackerZero", "type": "address" },
            { "internalType": "address", "name": "singleTrackerOne", "type": "address" },
            { "internalType": "address", "name": "compounder", "type": "address" },
            { "internalType": "address", "name": "router", "type": "address" }
          ],
          "indexed": false,
          "internalType": "struct IFactory.LPContracts",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "LPManagerCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": false, "internalType": "address", "name": "_newOperator", "type": "address" }
      ],
      "name": "OperatorAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": false, "internalType": "address", "name": "_operator", "type": "address" }
      ],
      "name": "OperatorRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" },
        { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" },
        { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" },
        { "indexed": true, "internalType": "address", "name": "account", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" },
        { "indexed": true, "internalType": "address", "name": "account", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": false, "internalType": "bool", "name": "toggle", "type": "bool" }
      ],
      "name": "Toggle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "lp", "type": "address" },
        { "indexed": false, "internalType": "enum IFactory.Stage", "name": "oldStage", "type": "uint8" },
        { "indexed": false, "internalType": "enum IFactory.Stage", "name": "newStage", "type": "uint8" }
      ],
      "name": "UpdateStage",
      "type": "event"
    }
  ] as const;