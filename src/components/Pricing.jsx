import React, {useState} from 'react'
import {Switch, Grid} from '@material-ui/core/';
import {Button} from './Button';
import './styles/button.css'
import {useLovelySwitchStyles} from '@mui-treasury/styles/switch/lovely';
import './styles/App.css'

export default function Pricing() {
    const [checked,
        setCheck] = useState(false);
    const lovelyStyles = useLovelySwitchStyles();

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

                    <Grid
                        className='switch'
                        component="label"
                        container
                        alignItems="center"
                        spacing={1}>
                        <Grid item className='options'>Monthly</Grid>
                        <Grid item>
                            <Switch
                                classes={lovelyStyles}
                                checked={checked}
                                onClick={handleClick}
                                name="checked"/>
                        </Grid>
                        <Grid item className='options'>Yearly</Grid>
                    </Grid>
                    <div className="pricing-container" style={{display: !checked   ? 'flex'   : 'none' }}>
                        <div className="pricing-container-card">
                            <div className="pricing-container-cardInfo">
                                <h3>Basic</h3>
                                <h2>$19.99</h2>
                                <ul className="pricing-container-features">
                                    <hr/>
                                    <li>500GB Storage</li>
                                    <hr/>
                                    <li>2 Users Allowed</li>
                                    <hr/>
                                    <li>Send up to 3GB</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonStyle='btn--primary'>
                                    More Info
                                </Button>
                            </div>
                        </div>
                        <div className="pricing-container-card">
                            <div className="pricing-container-cardInfo">
                                <h3>Professional</h3>
                                <h2>$24.99</h2>
                                <ul className="pricing-container-features">
                                    <hr/>
                                    <li>1TB Storage</li>
                                    <hr/>
                                    <li>5 Users Allowed</li>
                                    <hr/>
                                    <li>Send up to 10GB</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonStyle='btn--outline'>
                                    More Info
                                </Button>
                            </div>
                        </div>
                        <div className="pricing-container-card">
                            <div className="pricing-container-cardInfo">
                                <h3>Master</h3>
                                <h2>$39.99</h2>
                                <ul className="pricing-container-features">
                                    <hr/>
                                    <li>2 TB Storage</li>
                                    <hr/>
                                    <li>10 Users Allowed</li>
                                    <hr/>
                                    <li>Send up to 20GB</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonStyle='btn--primary'>
                                    More Info
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-container" style={{display: checked   ? 'flex'   : 'none' }}>
                        <div className="pricing-container-card">
                            <div className="pricing-container-cardInfo">
                                <h3>Basic</h3>
                                <h2>$199.99</h2>
                                <ul className="pricing-container-features">
                                    <hr/>
                                    <li>500GB Storage</li>
                                    <hr/>
                                    <li>2 Users Allowed</li>
                                    <hr/>
                                    <li>Send up to 3GB</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonStyle='btn--primary'>
                                    More Info
                                </Button>
                            </div>
                        </div >
                        <div className="pricing-container-card">
                            <div className="pricing-container-cardInfo">
                                <h3>Professional</h3>
                                <h2>$249.99</h2>
                                <ul className="pricing-container-features">
                                    <hr/>
                                    <li>1TB Storage</li>
                                    <hr/>
                                    <li>5 Users Allowed</li>
                                    <hr/>
                                    <li>Send up to 10GB</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonStyle='btn--outline'>
                                    More Info
                                </Button>
                            </div>
                        </div>
                        <div className="pricing-container-card">
                            <div className="pricing-container-cardInfo">
                                <h3>Master</h3>
                                <h2>$399.99</h2>
                                <ul className="pricing-container-features">
                                    <hr/>
                                    <li>2 TB Storage</li>
                                    <hr/>
                                    <li>10 Users Allowed</li>
                                    <hr/>
                                    <li>Send up to 20GB</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonStyle='btn--primary'>
                                    More Info
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div >);
}