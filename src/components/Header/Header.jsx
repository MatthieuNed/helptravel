import React, {useState} from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = ({setCoordinates}) => {
    const classes = useStyles();
    const [autocomplete, setAutoComplete] = useState(null)

    const onLoad = (autoC) => setAutoComplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates ({lat, lng});
    }
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Help Travel
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Discover new places Around You!
                    </Typography>                    
                </Box>
            </Toolbar>

        </AppBar>
    );
}

export default Header;