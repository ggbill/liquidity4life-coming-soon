import React from "react"
import "./App.scss"
import logo from "./images/liquidity4life.png"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import HttpsRedirect from "react-https-redirect"
import YouTube from "react-youtube"
import UsefulLinkCard from "./components/UsefulLinkCard"

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
					<img className="logo" alt="liquidity4life" src={logo} />
					<h4>Unlocking the value in residential property, the UK’s largest asset class</h4>
					{/* <br/> */}
					{/* <p>
						Liquidity4Life® is a revolutionary software platform which allows customers to switch the value in their property from bricks
						and mortar to investments they can drawdown to fund their lifestyle, whilst still retaining control over their property and
						living in it. Home Drawdown® is the first solution in a long line that Liquidity4Life® will bring to the UK market.
					</p>
					<p>
						Click{" "}
						<a href="The-lang-cat-home-asset-report.pdf" download>
							here
						</a>{" "}
						to view the recent Lang Cat home asset report.
					</p>

					<p>
						For more information please download our introduction document{" "}
						<a href="Introduction-to-Liquidity4Life.pdf" download>
							here
						</a>
						. Furthermore, if you would like to see a demo of the Liquidity4Life prototype application, please get in touch using the
						details below.
					</p> */}
					<span className="coming-soon">Coming Soon</span>
					<p>In Q1 of 2024 the Founders of Liquidity4Life are planning to launch Home Drawdown® in the UK.</p>
					<p>
						By combining a new application of familiar financial products with disruptive technology, Home Drawdown® is a new retail plan
						that works along similar lines to pension drawdown and underpins the first investment-based alternative to equity release and
						lifetime mortgages.
					</p>
					<p>
						Liquidity4Life Ltd is in the process of raising capital to finish the development of the cloud-based software to manage and
						run Home Drawdown®. Following the initial founder investment raise, and subsequent seed round with professional investors such
						as Rupert Hambro, L4L is now looking to raise £850,000 for a 20% stake in the company.
					</p>
					<p>
						RISK WARNING: Don’t invest unless you’re prepared to lose all the money you invest. This is a high-risk investment, and you are unlikely to
						be protected if something goes wrong. Take 2 mins to learn{" "}
						<a href="Key Risks.pdf" download>
							more
						</a>
						.
					</p>
					<br />

					<br />
					<h1>VIDEOS</h1>
					<div className="videos-wrapper">
						<div className="youtube-wrapper">
							<YouTube videoId="rIK80mwUAFc" />
						</div>
						<br />
						<div className="youtube-wrapper">
							<YouTube videoId="gfM6UFjXwH0" />
						</div>
					</div>



					<br />
					<br />

					<h1>VALIDATING ARTICLES</h1>


					<p>Three articles in the space of a week have validated what the team at Liquidity4Life have been saying for many months. Please click the links here to see these reports:</p>

					<div className="useful-links-wrapper">
						<UsefulLinkCard
							title="Why institutional investors are eyeing UK’s private rental sector"
							subTitle="FT Adviser"
							imageUrl="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Ffta-ez-prod%2Fez%2Fimages%2F9%2F3%2F5%2F9%2F3739539-6-eng-GB%2FLondon+rental+property+%28Hollie+Adams%3ABloomberg%29.jpg%3Fv1?source=ftadviser"
							linkUrl="https://www.ftadviser.com/investments/2023/09/18/why-institutional-investors-are-eyeing-uk-s-private-rental-sector/?page=1"
						/>
						<UsefulLinkCard
							title="Majority of advisers say property wealth is key to retirement planning"
							subTitle="FT Adviser"
							imageUrl="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Ffta-ez-prod%2Fez%2Fimages%2F9%2F2%2F7%2F1%2F3741729-4-eng-GB%2FJason+Alden_Bloomberg+houses.jpeg%3Fv1?source=ftadviser"
							linkUrl="https://www.ftadviser.com/retirement-income/2023/09/19/majority-of-advisers-say-property-wealth-is-key-to-retirement-planning/"
						/>
						<UsefulLinkCard
							title="What the FCA is looking for in its retirement income advice study"
							subTitle="FT Adviser"
							imageUrl="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Ffta-ez-prod%2Fez%2Fimages%2F6%2F9%2F2%2F2%2F3712296-15-eng-GB%2FBusiness+colleagues+in+consultation+%28Freedomtumz%3AEnvato%29.jpg%3Fv1?source=ftadviser"
							linkUrl="https://www.ftadviser.com/retirement-income/2023/08/17/what-the-fca-is-looking-for-in-its-retirement-income-advice-study/"
						/>
						
					</div>

					<br />
					<br />
					{/* <span className="get-in-touch">Get in touch</span> */}
					<h1>GET IN TOUCH</h1>
					<div className="contact-details">
						<div className="detail">
							<PhoneIcon />
							<span>+44 (0)7801 833631</span>
						</div>
						<div className="detail">
							<EmailIcon />
							<a href="mailto:nick.kemp@homedrawdown.com">nick.kemp@homedrawdown.com</a>
						</div>
					</div>
				</div>
			</div>
		</HttpsRedirect>
	)
}

export default App
