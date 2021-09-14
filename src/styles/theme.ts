import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "dark": "#3E3E3E",
            "medium": "#717171",
            "light": "#F7F7F7",
        },
        red: {
            "primary": "#EA1D2C",
        },
        green: {
            "primary": "#B6D048",
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.dark'
            }
        }
    }
})