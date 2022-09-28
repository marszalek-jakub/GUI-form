import Stats from "./Stats";
import {Grid, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, TextField, Checkbox} from '@mui/material';
import {useGlobalState} from "../context";

const CountryCode =({title, ...props}) => {
    const [countryCode, setCountryCode] = useGlobalState("countryCode");
    const [purpose, setPurpose] = useGlobalState("purpose");
    const [multicountry, setMulticountry] = useGlobalState("multicountry");
    const [dataCenter, setDataCenter] = useGlobalState("dataCenter");

    return (
        <>
            <h3>{title}</h3>
              

                <FormControl component="fieldset">
                <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                p={2}
                gap={2}
            >
                    <FormLabel component="legend">Choose data center</FormLabel>
                    <RadioGroup  row aria-label="Data Center" name="row-radio-buttons-group" defaultValue="us" className="radio-flex" >
                        <FormControlLabel value="us" control={<Radio />} label="us"  onChange={(e)=>setDataCenter(e.target.value)} />
                        <FormControlLabel value="eu" control={<Radio />} label="eu" onChange={(e)=>setDataCenter(e.target.value)} />
                    </RadioGroup>

                    <FormLabel component="legend">Complete Country code</FormLabel>
                    <TextField 
                                id="CountryCode" 
                                label="Country Code/multicountry code" 
                                variant="outlined" 
                                onChange={(e)=>setCountryCode(e.target.value)} 
                                value={countryCode}/>

                    <FormControlLabel
                                control={<Checkbox />}
                                label="multicountry"
                                onChange={(e)=>setMulticountry(e.target.value)} 
                                value={!multicountry} />

                    <FormLabel component="legend">Complete purpose</FormLabel>
                    <TextField 
                                id="Purpose" 
                                label="Purpose" 
                                variant="outlined" 
                                onChange={(e)=>setPurpose(e.target.value)} 
                                value={purpose}/>

                    </Grid>
                </FormControl>
            <Stats step={3} {...props} />
        </>
    )
};

export default CountryCode;