import { CurrencyAmount, JSBI, Token, TokenAmount, Pair } from '@conedex/conedex-sdk'
import { useMemo } from 'react'
import { useActiveWeb3React } from '../../hooks'
import { tryParseAmount } from '../swap/hooks'
import useFilterDefaultStakingPoolInfos from '../../hooks/staking/pools/useFilterDefaultStakingPoolInfos'
import getBlocksPerYear from '../../utils/getBlocksPerYear'
import { DefaultStakingPool } from './types'
import useStakingSettings from '../../hooks/useStakingSettings'

export const STAKING_GENESIS = 6502000

export const REWARDS_DURATION_DAYS = 60

// gets the staking info from the network for the active chain id
export function useDefaultStakingPools(
  active: boolean | undefined = undefined,
  pairToFilterBy?: Pair | null
): DefaultStakingPool[] {
  const { chainId } = useActiveWeb3React()

  const stakingSettings = useStakingSettings()

  const defaultStakingPoolInfos = useFilterDefaultStakingPoolInfos(chainId, active, pairToFilterBy)

  const blocksPerYear = getBlocksPerYear(chainId)

  const pids = useMemo(() => defaultStakingPoolInfos.map(({ pid }) => pid), [defaultStakingPoolInfos])

  //const poolLength = useSingleCallResult(masterBreederContract, 'poolLength')
  const startBlock = stakingSettings ? stakingSettings.startBlock : 10183471
  const lockedRewardsPercentageUnits = stakingSettings ? stakingSettings.lockRewardsRatio : 95
  const unlockedRewardsPercentageUnits = stakingSettings ? stakingSettings.unlockedRewardsRatio : 5

  //const rewardPerBlock = useSingleCallResult(masterBreederContract, 'REWARD_PER_BLOCK')

  return useMemo(() => {
    if (!chainId) return []

    return pids.reduce<DefaultStakingPool[]>((memo: any, pid: number, index: number) => {
      const stakingInfoData = defaultStakingPoolInfos[index]
      const active = stakingInfoData.active || stakingInfoData.allocPoints > 0
      //const pendingReward = pendingRewards[index]

      const stakingInfo = {
        pid: pid,
        order: stakingInfoData.order,
        allocPoints: stakingInfoData.allocPoints,
        tokens: stakingInfoData.tokens,
        bgToken: stakingInfoData.bgToken,
        startBlock: startBlock,
        blocksPerYear: blocksPerYear,
        lockedRewardsPercentageUnits: lockedRewardsPercentageUnits,
        unlockedRewardsPercentageUnits: unlockedRewardsPercentageUnits,
        pairAddress: stakingInfoData.pairAddress,
        active: active
      }

      memo.push(stakingInfo)

      return memo
    }, [])
  }, [chainId, defaultStakingPoolInfos, pids])
}

// based on typed value
export function useDerivedStakeInfo(
  typedValue: string,
  stakingToken: Token | undefined,
  userLiquidityUnstaked: TokenAmount | undefined
): {
  parsedAmount?: CurrencyAmount
  error?: string
} {
  const { account } = useActiveWeb3React()

  const parsedInput: CurrencyAmount | undefined = stakingToken ? tryParseAmount(typedValue, stakingToken) : undefined

  const parsedAmount =
    parsedInput && userLiquidityUnstaked && JSBI.lessThanOrEqual(parsedInput.raw, userLiquidityUnstaked.raw)
      ? parsedInput
      : undefined

  let error: string | undefined
  if (!account) {
    error = 'Connect Wallet'
  }
  if (!parsedAmount) {
    error = error ?? 'Enter an amount'
  }

  return {
    parsedAmount,
    error
  }
}

// based on typed value
export function useDerivedUnstakeInfo(
  typedValue: string,
  stakingAmount: TokenAmount | undefined
): {
  parsedAmount?: CurrencyAmount
  error?: string
} {
  const { account } = useActiveWeb3React()

  const parsedInput: CurrencyAmount | undefined = stakingAmount
    ? tryParseAmount(typedValue, stakingAmount.token)
    : undefined

  const parsedAmount =
    parsedInput && stakingAmount && JSBI.lessThanOrEqual(parsedInput.raw, stakingAmount.raw) ? parsedInput : undefined

  let error: string | undefined
  if (!account) {
    error = 'Connect Wallet'
  }
  if (!parsedAmount) {
    error = error ?? 'Enter an amount'
  }

  return {
    parsedAmount,
    error
  }
}
