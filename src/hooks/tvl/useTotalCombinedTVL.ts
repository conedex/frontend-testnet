import { useMemo } from 'react'
import { DefaultStakingPool } from '../../state/stake/types'
import useTotalTVL from './useTotalTVL'

export default function useTotalCombinedTVL(stakingInfos: DefaultStakingPool[]): Record<string, any> {
  const totalStakingPoolTVL = useTotalTVL(stakingInfos)

  return useMemo(() => {
    return {
      stakingPoolTVL: totalStakingPoolTVL ? totalStakingPoolTVL : undefined
    }
  }, [stakingInfos, totalStakingPoolTVL])
}
