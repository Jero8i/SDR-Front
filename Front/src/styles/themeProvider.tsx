import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#BC6C25',
            light: '#FEFAE0',
        },
        secondary: {
            main: '#DDA15E',
        },
        success: {
            main: '#283618', 
            light: '#606C38'
        },
        error: {
            main: '#7d1400',
        },
        info: {
            main: '#312926',
        }
    },
    typography:{
        fontFamily: [
            'Josefin Sans, sans-serif',
            'Roboto Slab, serif',
        ].join(','),
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    
                }
            }
        }
    }
});