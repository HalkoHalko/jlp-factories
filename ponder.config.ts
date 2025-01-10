import { createConfig } from "ponder";
import { http } from "viem";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config();

// import Pool addresses
import { ArbitrumAddresses } from "./factories/Arbitrum";

// import ABIs
import { FactoryABI } from "./abis/FactoryABI";
import { ApechainAddresses } from "./factories/Apechain";
import { BaseAddresses } from "./factories/Base";
import { BlastAddresses } from "./factories/Blast";
import { BerachainAddresses } from "./factories/Berachain";

export default createConfig({
  networks: {
    arbitrum: {
      chainId: 42161,
      transport: http(process.env.PONDER_RPC_URL_42161),
      pollingInterval: 300000,
    },
    apechain: {
      chainId: 33139,
      transport: http(process.env.PONDER_RPC_URL_33139),
      pollingInterval: 300000,
    },
    blast: {
      chainId: 81457,
      transport: http(process.env.PONDER_RPC_URL_81457),
      pollingInterval: 300000,
    },
    base: {
      chainId: 8453,
      transport: http(process.env.PONDER_RPC_URL_8453),
      pollingInterval: 300000,
    },
    berachain: {
      chainId: 80084,
      transport: http(process.env.PONDER_RPC_URL_80084),
      pollingInterval: 300000,
    },
  },
  contracts: {
    ArbJLPFactory: {
      network: "arbitrum",
      abi: FactoryABI,
      address: ArbitrumAddresses,
      startBlock: 224429900,
    },
    ApeJLPFactory: {
      network: "apechain",
      abi: FactoryABI,
      address: ApechainAddresses,
      startBlock: 1,
    },
    BaseJLPFactory: {
      network: "base",
      abi: FactoryABI,
      address: BaseAddresses,
      startBlock: 23000000,
    },
    BlastJLPFactory: {
      network: "blast",
      abi: FactoryABI,
      address: BlastAddresses,
      startBlock: 8000000,
    },
    BeraJLPFactory: {
      network: "berachain",
      abi: FactoryABI,
      address: BerachainAddresses,
      startBlock: 7700000,
    },
  },
});