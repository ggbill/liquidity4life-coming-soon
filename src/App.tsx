import React from 'react';
import './App.scss';
import logo from './images/liquidity4life.png'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import HttpsRedirect from 'react-https-redirect'
import YouTube from 'react-youtube';

function App() {

    // const opts: any = {
    //     playerVars: {
    //       autoplay: 1,
    //       start: props.startSeconds
    //     },
    //   };

    return (
        <HttpsRedirect>
            <div className="page-wrapper">
                <div className="content-wrapper">
                    <img alt="liquidity4life" src={logo} />
                    <h4>Unlocking the value in residential property, the UK’s largest asset class</h4>
                    {/* <br/> */}
                    <p>Liquidity4Life® is a revolutionary software platform which allows customers to switch the value in their property from bricks and mortar to investments they can drawdown to fund their lifestyle, whilst still retaining control over their property and living in it. Home Drawdown® is the first solution in a long line that Liquidity4Life® will bring to the UK market.
                        </p>
                        <p>For more information please download our introduction document <a href="Introduction-to-Liquidity4Life.pdf" download>here</a>.
                    Furthermore, if you would like to see a demo of the Liquidity4Life prototype application, please get in touch using the details below.</p>
                    <br />
                    <span className="coming-soon">Coming Soon</span>
                    <br />
                    <div className="youtube-wrapper">
                    <YouTube videoId="0EETiWzsU4o"/>
                    </div>
                    
                    <br />
                    <br />
                    <span className="get-in-touch">Get in touch</span>
                    <div className="contact-details">

                        <div className="detail">
                            <PhoneIcon />
                            <span>+44 (0)7837 034028</span>
                        </div>
                        <div className="detail">
                            <EmailIcon />
                            <a href="mailto:andrew@liquidity4life.co.uk">andrew@liquidity4life.co.uk</a>
                        </div>
                    </div>
                </div>
            </div>
        </HttpsRedirect>
    );
}

export default App;


