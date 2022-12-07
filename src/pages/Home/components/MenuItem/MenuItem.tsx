import { PlatoType } from "@/models"

export const MenuItem = (
    {
        idProduct,
        productDescription,
    }: PlatoType
) => {

    return (
        <p>{idProduct}: {productDescription}</p>
    )
}
