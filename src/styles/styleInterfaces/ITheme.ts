export enum typeOfCar {
    bmw = "bmw",
    mercedes = "mercedes"
}

export interface ITheme {
    colors: {
        primary: string,
        secondary: string
    },
    media: {
        phone: string,
        tablet: string,
    },
    background: {
        bg: string
    },
}