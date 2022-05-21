import {ITheme, typeOfCar} from "./styleInterfaces/ITheme";


const baseTheme : ITheme = {
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

}

export const bmwTheme = {
    ...baseTheme,
    type: typeOfCar.bmw,
   background: {
    bg: 'url("https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/5-series/2020/highlight1.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1641295515778.jpg") center/cover fixed  no-repeat ',
   },
    logo: {
        src: "https://www.bmw.in/etc.clientlibs/ds2-webcomponents/clientlibs/clientlib/resources/img/BMW_White_Logo.svg"
    }

}

export const mercedesTheme = {
    ...baseTheme,
    type: typeOfCar.mercedes,
    background: {
        bg: 'url("https://img.mercedes-benz-kiev.com/data/news/106-mercedes-amg-a-35-4matic-saloon-2019/mercedes-amg-a-35-1.jpg")center/cover fixed  no-repeat ',
    },
    logo: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mercedes-Benz_Star_2022.svg/1200px-Mercedes-Benz_Star_2022.svg.png"
    }

}

export default baseTheme;