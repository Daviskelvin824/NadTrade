/* eslint-disable react-refresh/only-export-components */
import SIMPLE_DEX_ABI_JSON from "./SIMPLE_DEX_ABI.json";
import ERC20_ABI_JSON from "./ERC20_ABI.json";

export const SIMPLE_DEX_ABI = SIMPLE_DEX_ABI_JSON;
export const ERC20_ABI = ERC20_ABI_JSON;

// Contract addresses (update dengan alamat yang sudah deployed)
export const CONTRACTS = {
  SIMPLE_DEX: "0x833822Fa82d9eeEd1A6ab0160Fa3D51916745606",
  CAMPUS_COIN: "0x79389E83B8A69c04443Cc6470dE56cc22580A94a",
  MOCK_USDC: "0x7AF171A28490386433205059e4fcBEc10cc775b8",
} as const;

// Token configurations
export const TOKENS = {
  CAMP: {
    address: CONTRACTS.CAMPUS_COIN,
    symbol: "CAMP",
    name: "Campus Coin",
    decimals: 18,
    logo: "🏛️",
  },
  USDC: {
    address: CONTRACTS.MOCK_USDC,
    symbol: "USDC",
    name: "Mock USDC",
    decimals: 6,
    logo: "💵",
  },
} as const;

// DEX configuration
export const DEX_CONFIG = {
  FEE_PERCENT: 0.3, // 0.3%
  SLIPPAGE_TOLERANCE: 0.5, // 0.5%
  DEADLINE: 20, // 20 minutes
} as const;
