import { useMenuItems } from '@/hooks';
import { PlatoType } from '@/models/Plato';
import { AlergenItems } from '../AlergensItems/AlergenItems';
import { MenuItem } from '../MenuItem/MenuItem';
import { MenuItemsWrapper, MenuItemWrapper } from './menuItems.styled';

export const MenuItems = () => {

    const { alergens, menu, isOpen } = useMenuItems()

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
                                            ? <AlergenItems alergen={alergens[i][`${item.idProduct} alergens`]} />
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
