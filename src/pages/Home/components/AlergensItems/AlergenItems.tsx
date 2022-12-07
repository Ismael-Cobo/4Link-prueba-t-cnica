
import { PlatoType } from '@/models';
import { AlergenItem } from '../AlergenItem';

export const AlergenItems = (
    {
        alergen
    }: { alergen: any }
) => {

    return (
        <p>
            ALERGENS:  {
                // Recorro todos los alergens del producto
                // El linter da error porque aun no soy muy bueno con las interfaces complicadas
                alergen.map((item): PlatoType => <AlergenItem key={item.allergenId} alergen={item} />)
            }
        </p>
    )
}
