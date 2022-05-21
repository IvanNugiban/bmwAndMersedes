import 'styled-components';
import {ITheme, typeOfCar} from "./styles/styleInterfaces/ITheme";

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme extends ITheme{
        type: typeOfCar
    }
}