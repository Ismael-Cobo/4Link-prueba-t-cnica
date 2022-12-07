import { closeAlergens, loadAllAlergens, openAlergens } from '@/redux'
import { useAppDispatch, useAppSelector } from './redux'
import { PlatoType } from '../models/Plato'
import { getAlergensApi } from '@/utility'

// Hago este hook para tenerlo todo centralizado
// , para no tener que hacer todo el rato las mismas importaciones
// y poder manejar las llamadas asincronas sin la necesidad de utilizar un thunk
export const useAlergens = (entepreiseId: number) => {
  const dispatch = useAppDispatch()
  const { alergens, isOpen } = useAppSelector((state) => state.alergens)
  const { menu } = useAppSelector((state) => state.menu)

  const startingOpenAlergens = () => {
    dispatch(openAlergens())
  }

  const startClosingAlergens = () => {
    dispatch(closeAlergens())
  }

  const startingLoadingAllAlergens = async () => {
    try {
      let urls = menu.map((item: PlatoType) => fetch(`${getAlergensApi()}${entepreiseId}/${item.idProduct}`))
      const resp = Promise.all(urls)
        .then((responses) => responses)
        .then((responses) => Promise.all(responses.map((r) => r.json())))

      const data = await resp
      dispatch(loadAllAlergens(data))
    } catch (error) {
      console.log(error)
      throw new Error('error')
    }
  }

  return {
    alergens,
    isOpen,

    startingOpenAlergens,
    startClosingAlergens,
    startingLoadingAllAlergens,
  }
}
