
import { Button, FlexBox, Title } from '@/styled-components'
import { MenuItems } from './components'
import { useAlergens } from '@/hooks/useAlergens';
import { getEnterpriseId } from '@/utility';


export const Home = () => {

    const { startClosingAlergens, startingOpenAlergens, isOpen } = useAlergens(getEnterpriseId())

    return (
        <div>
            <Title>
                4Link Menú
            </Title>
            <FlexBox>
                {/* 
                    Le puedes pasar un boolean para activarlo y cambiarle el background color
                */}
                <Button isActive={isOpen} onClick={() => startingOpenAlergens()}>
                    CON ALERGENOS
                </Button>
                <Button isActive={isOpen === false ? true : false} onClick={() => startClosingAlergens()}>
                    SIN ALERGENOS
                </Button>
            </FlexBox>
            <MenuItems />
        </div>
    )
}
