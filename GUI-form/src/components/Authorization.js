import Stats from "./Stats";
import {TextField, Grid} from '@mui/material';




const Authorization = ({title, userKey, secretKey, setSecretKey, setUserKey, ...props}) => {


    return (
        <>
            <h3>{title}</h3>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                p={2}
                gap={2}
            >
                <TextField id="userKey" label="User key" variant="outlined" onChange={(e)=>setUserKey(e.target.value)} type="password" value={userKey}/>
                <TextField id="secretKey" label="Secret key" variant="outlined" onChange={(e)=>setSecretKey(e.target.value)} type="password" value={secretKey} />
            </Grid>
            <Stats step={1} {...props} />
        </>
    );
}

export default Authorization;