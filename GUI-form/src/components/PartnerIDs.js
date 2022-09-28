import Stats from "./Stats";
import { Grid, FormControlLabel, Checkbox } from '@mui/material';
import { validPartnerIds } from '../utils';
import {useGlobalState} from "../context";
import orderBy from 'lodash/orderBy';

const PartnerIDs = ({ ...props }) => {

    const [posts] = useGlobalState("posts");
    const [working] = useGlobalState("working");
    const [isChecked, setIsChecked] = useGlobalState("isChecked");

 
    var _ = require('lodash');


    const handleSingleCheck = (e, id) => {
        setIsChecked({ ...isChecked, [id]: { ...isChecked[id],
            visible:!isChecked[id].visible}
        });
      };

      const expected =  posts.reduce((acc, current) => {
        const found = validPartnerIds.find(b => b.partnerID === current.partnerID)
        if (found) {
            acc.push(found)
        }
        return acc
        }, []);

    return (
        <>
            <h3>{props.title}</h3>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                p={2}
                gap={2}
            >
                {
                     working ? (
                        _.orderBy(expected, ['id'], ['asc']).map(p => {
                            return <FormControlLabel key={p.partnerID}
                                control={<Checkbox checked={isChecked[(p.id)-1]?.visible} />}
                                label={p.name}
                                onChange={(e) => handleSingleCheck(e,(p.id)-1)} />
                        })
                        
                    ): <p>wrong credentials</p>
                    }
                
            </Grid>

            <Stats step={2} {...props} />
        </>
    );
};

export default PartnerIDs;