import { Alergen } from './Alergen'

export interface Alergens {
  [key: number]: { [key: string]: Alergen[] }
}
