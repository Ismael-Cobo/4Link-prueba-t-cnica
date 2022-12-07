import { useEffect } from 'react'
import { useMenu } from './useMenu'
import { getEnterpriseId } from '../utility/getVariables'
import { useAlergens } from './useAlergens'
export const useMenuItems = () => {
  const { startingGetAllMenu, menu } = useMenu(getEnterpriseId(), 'esp')
  const { alergens, isOpen, startingLoadingAllAlergens } = useAlergens(getEnterpriseId())

  useEffect(() => {
    startingGetAllMenu()
  }, [])

  useEffect(() => {
    if (menu.length <= 0) return
    startingLoadingAllAlergens()
  }, [menu])

  return {
    alergens,
    isOpen,
    menu,
  }
}
