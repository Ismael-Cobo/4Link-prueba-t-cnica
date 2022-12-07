import { Alergen } from '@/models'

export const AlergenItem = (
    {
        alergen
    }: { alergen: Alergen }
) => {
    return (
        <span>{alergen.name}, </span>
    )
}
