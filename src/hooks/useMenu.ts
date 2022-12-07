import { loadAllMenu } from '@/redux'
import { useAppSelector, useAppDispatch } from './redux'
import { MenuInt } from '../models/Menu'
import { getMenuApi } from '@/utility'

export const useMenu = (entepreiseId: number, lang: string) => {
  const dispatch = useAppDispatch()
  const { menu } = useAppSelector((state) => state.menu)

  const startingGetAllMenu = async (): Promise<void> => {
    try {
      const resp = await fetch(`${getMenuApi()}${lang}/${entepreiseId}`)
      const data: MenuInt = await resp.json()
      dispatch(loadAllMenu(data['MENÚ SUCCULENT']))
    } catch (error) {
      console.log(error)
      throw new Error('Error')
    }
  }

  return {
    menu,

    startingGetAllMenu,
  }
}
