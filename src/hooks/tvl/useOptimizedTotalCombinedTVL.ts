import { useMemo } from 'react'
import { ChainId } from '@conedex/conedex-sdk'
import useLpPoolTVL from './useLpPoolTVL'
import { useBlockNumber } from '../../state/application/hooks'

export default function useOptimizedTotalCombinedTVL(chainId: ChainId | undefined): Record<string, any> | undefined {
  const latestBlockNumber = useBlockNumber()
  const lpPoolTVL = useLpPoolTVL()
  const validTvlData = lpPoolTVL !== undefined

  return useMemo(() => {
    if (!validTvlData) return undefined
    return {
      stakingPoolTVL: lpPoolTVL ? lpPoolTVL : undefined,
      totalCombinedTVL: lpPoolTVL && undefined
    }
  }, [chainId, latestBlockNumber, validTvlData])
}
