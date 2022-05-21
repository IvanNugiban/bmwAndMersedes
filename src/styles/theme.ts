import {ITheme, typeOfCar} from "./styleInterfaces/ITheme";
import {DefaultTheme} from "styled-components";


const baseTheme: ITheme = {
    colors: {
        primary: "white",
        secondary: "black"
    },
    media: {
        phone: "(max-width: 425px)",
        tablet: "(max-width: 900px) and (min-width: 425px)"
    },
    background: {
        bg: "black"
    },
    logo: {
        big: "https://www.bmw.in/etc.clientlibs/ds2-webcomponents/clientlibs/clientlib/resources/img/BMW_White_Logo.svg",
        small: "https://w7.pngwing.com/pngs/995/480/png-transparent-bmw-car-logo-bmw-logo-trademark-logo-car.png"
    }
}

export const bmwTheme: DefaultTheme = {
    ...baseTheme,
    type: typeOfCar.bmw,
    background: {
        bg: 'url("https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/5-series/2020/highlight1.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1641295515778.jpg") center/cover fixed  no-repeat ',
    },
    logo: {
        big: "https://www.bmw.in/etc.clientlibs/ds2-webcomponents/clientlibs/clientlib/resources/img/BMW_White_Logo.svg",
        small: "https://w7.pngwing.com/pngs/995/480/png-transparent-bmw-car-logo-bmw-logo-trademark-logo-car.png"
    }

}

export const mercedesTheme: DefaultTheme = {
    ...baseTheme,
    type: typeOfCar.mercedes,
    background: {
        bg: 'url("https://img.mercedes-benz-kiev.com/data/news/106-mercedes-amg-a-35-4matic-saloon-2019/mercedes-amg-a-35-1.jpg")center/cover fixed  no-repeat ',
    },
    logo: {
        big: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mercedes-Benz_Star_2022.svg/640px-Mercedes-Benz_Star_2022.svg.png",
        small: "https://w7.pngwing.com/pngs/336/180/png-transparent-mercedes-benz-car-logo-brand-mercedes-benz-angle-emblem-trademark.png"
    }

}

export default baseTheme;