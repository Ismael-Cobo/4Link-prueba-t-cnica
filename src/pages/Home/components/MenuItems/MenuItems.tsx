import { useMenu } from '@/hooks'
import { useEffect } from 'react'
import { MenuItem } from '../MenuItem/MenuItem'
import { MenuItemsWrapper, MenuItemWrapper } from './menuItems.styled'
import { PlatoType } from '@/models/Plato';
import { AlergenItems } from '../AlergensItems/AlergenItems';
import { useAlergens } from '@/hooks/useAlergens';
import { getEnterpriseId } from '@/utility';

export const MenuItems = () => {
    const { startingGetAllMenu, menu } = useMenu(getEnterpriseId(), "esp")
    const { alergens, isOpen, startingLoadingAllAlergens } = useAlergens(getEnterpriseId())

    useEffect(() => {
        startingGetAllMenu()
    }, [])

    useEffect(() => {
        if (menu.length <= 0) return
        startingLoadingAllAlergens()
    }, [menu])


    return (
        <MenuItemsWrapper>
            {
                menu
                    ? menu.map((item: PlatoType, i) => {
                        return (
                            <MenuItemWrapper key={item.idProduct} >
                                <MenuItem {...item} />
                                {
                                    isOpen &&
                                    (
                                        alergens
                                            // Le paso el id del producto y el alergen
                                            ? <AlergenItems alergen={alergens[i]} id={`${item.idProduct} alergens`} />
                                            : <p>Loading...</p>
                                    )

                                }
                            </MenuItemWrapper>
                        )
                    }
                    )
                    : <p>Loading...</p>
            }


        </MenuItemsWrapper>
    )
}
