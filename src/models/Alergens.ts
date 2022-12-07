import { Alergen } from './Alergen'

export interface Alergens {
  [key: number]: { ['`${string} alergens`']: Alergen[] }
}
