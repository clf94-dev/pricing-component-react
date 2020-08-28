import React, {useState} from 'react'
import {Switch, FormControlLabel, Grid} from '@material-ui/core/';

function Pricing() {
    const [checked,
        setCheck] = useState(false);

    const handleClick = () => {
        console.log(checked);
        setCheck(!checked);
    }
    return (
        <div>
            <div className="pricing-section">
                <div className="pricing-wrapper">
                    <h1 className="pricing-heading">
                        Pricing
                    </h1>
                    <FormControlLabel
                        label="Monthly"
                        control={< Switch checked = {
                        checked
                    }
                    onClick = {
                        handleClick
                    }
                    name = 'check' />}
                        label="Yearly"/>

                    <Grid component="label" container alignItems="center" spacing={1}>
                        <Grid item>Monthly</Grid>
                        <Grid item>
                            <Switch checked={checked}              onClick = {
                        handleClick
                    } name="checked"/>
                        </Grid>
                        <Grid item>Yearly</Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Pricing;
