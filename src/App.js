import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* Image imports */
// import * as pics from './../src/assets/images/*';
import pic01 from './../src/assets/images/pic01.jpg';
import pic02 from './../src/assets/images/pic02.jpg';
import pic03 from './../src/assets/images/pic03.jpg';
import pic04 from './../src/assets/images/pic04.jpg';
import pic05 from './../src/assets/images/pic05.jpg';
import pic06 from './../src/assets/images/pic06.jpg';
import pic07 from './../src/assets/images/pic07.jpg';
import promo from './../src/assets/images/promo.jpg';


class App extends Component {
  render() {
    return (
      <div id="page-wrapper">

			{/* <!-- Header --> */}
				<div id="header-wrapper">
					<div id="header" className="container">

						{/* <!-- Logo --> */}
							<h1 id="logo"><a href="index.html">Home</a></h1>

						{/* <!-- Nav --> */}
							<nav id="nav">
								<ul id="main-nav">
									<li>
										<a href="#">About Us</a>
										<ul id="drop-down-nav">
											<li><a href="#">Lorem ipsum dolor</a></li>
											<li><a href="#">Magna phasellus</a></li>
											<li><a href="#">Etiam dolore nisl</a></li>
											<li>
												<a href="#">Phasellus consequat</a>
												<ul>
													<li><a href="#">Lorem ipsum dolor</a></li>
													<li><a href="#">Phasellus consequat</a></li>
													<li><a href="#">Magna phasellus</a></li>
													<li><a href="#">Etiam dolore nisl</a></li>
												</ul>
											</li>
											<li><a href="#">Veroeros feugiat</a></li>
										</ul>
									</li>
									<li><a href="left-sidebar.html">Events</a></li>
									<li className="break"><a href="right-sidebar.html">Donate</a></li>
									<li><a href="no-sidebar.html">Scholarships</a></li>
								</ul>
							</nav>

					</div>

					{/* <!-- Hero --> */}
						<section id="hero" className="container">
							<header>
								<h2>The Leaf Foundation</h2>
							</header>
							<p>Accumsan cep augue ut eu mus pharetra vel enim porta
							<br />
							sed Accumsan Blandit Scelerisque col pharetra.</p>
							<ul className="actions">
								<li><a href="#" className="button">Learn more</a></li>
							</ul>
						</section>

				</div>

			{/* <!-- Features 1 --> */}
				<div className="wrapper">
					<div className="container">
						<div className="row">
							<section className="col-6 col-12-narrower feature">
								<div className="image-wrapper first">
									<a href="#" className="image featured first"><img src={pic01} alt="" /></a>
								</div>
								<header>
									<h2>Semper magna neque vel<br />
									adipiscing curabitur</h2>
								</header>
								<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel
								sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et sed
								adipiscing elit. Curabitur vel sem sit.</p>
								<ul className="actions">
									<li><a href="#" className="button">Aliquet at convallis</a></li>
								</ul>
							</section>
							<section className="col-6 col-12-narrower feature">
								<div className="image-wrapper">
									<a href="#" className="image featured"><img src={pic02} alt="" /></a>
								</div>
								<header>
									<h2>Amet lorem ipsum dolor<br />
									sit consequat magna</h2>
								</header>
								<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel
								sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et sed
								adipiscing elit. Curabitur vel sem sit.</p>
								<ul className="actions">
									<li><a href="#" className="button">Aliquet at convallis</a></li>
								</ul>
							</section>
						</div>
					</div>
				</div>

			{/* <!-- Promo --> */}
				<div id="promo-wrapper">
					<section id="promo">
						<h2>Neque semper magna et lorem ipsum adipiscing</h2>
						<a href="#" className="button">Ornare mus adipiscing</a>
					</section>
				</div>

			{/* <!-- Features 2 --> */}
				<div className="wrapper">
					<section className="container">
						<header className="major">
							<h2>Sed magna consequat lorem curabitur tempus</h2>
							<p>Elit aliquam vulputate egestas euismod nunc semper vehicula lorem blandit</p>
						</header>
						<div className="row features">
							<section className="col-4 col-12-narrower feature">
								<div className="image-wrapper first">
									<a href="#" className="image featured"><img src={pic03} alt="" /></a>
								</div>
								<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
								vel sem sit dolor neque semper magna lorem ipsum.</p>
							</section>
							<section className="col-4 col-12-narrower feature">
								<div className="image-wrapper">
									<a href="#" className="image featured"><img src={pic04} alt="" /></a>
								</div>
								<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
								vel sem sit dolor neque semper magna lorem ipsum.</p>
							</section>
							<section className="col-4 col-12-narrower feature">
								<div className="image-wrapper">
									<a href="#" className="image featured"><img src={pic05} alt="" /></a>
								</div>
								<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
								vel sem sit dolor neque semper magna lorem ipsum.</p>
							</section>
						</div>
						<ul className="actions major">
							<li><a href="#" className="button">Aliquet at convallis</a></li>
						</ul>
					</section>
				</div>

			{/* <!-- Footer --> */}
				<div id="footer-wrapper">
					<div id="footer" className="container">
						<header className="major">
							<h2>Euismod aliquam vehicula lorem</h2>
							<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit<br />
							dolor neque semper magna lorem ipsum feugiat veroeros lorem ipsum dolore.</p>
						</header>
						<div className="row">
							<section className="col-6 col-12-narrower">
								<form method="post" action="#">
									<div className="row gtr-50">
										<div className="col-6 col-12-mobile">
											<input name="name" placeholder="Name" type="text" />
										</div>
										<div className="col-6 col-12-mobile">
											<input name="email" placeholder="Email" type="text" />
										</div>
										<div className="col-12">
											<textarea name="message" placeholder="Message"></textarea>
										</div>
										<div className="col-12">
											<ul className="actions">
												<li><input type="submit" value="Send Message" /></li>
												<li><input type="reset" value="Clear form" /></li>
											</ul>
										</div>
									</div>
								</form>
							</section>
							<section className="col-6 col-12-narrower">
								<div className="row gtr-0">
									<ul className="divided icons col-6 col-12-mobile">
										<li className="icon fa-twitter"><a href="#"><span className="extra">twitter.com/</span>untitled</a></li>
										<li className="icon fa-facebook"><a href="#"><span className="extra">facebook.com/</span>untitled</a></li>
										<li className="icon fa-dribbble"><a href="#"><span className="extra">dribbble.com/</span>untitled</a></li>
									</ul>
									<ul className="divided icons col-6 col-12-mobile">
										<li className="icon fa-instagram"><a href="#"><span className="extra">instagram.com/</span>untitled</a></li>
										<li className="icon fa-youtube"><a href="#"><span className="extra">youtube.com/</span>untitled</a></li>
										<li className="icon fa-pinterest"><a href="#"><span className="extra">pinterest.com/</span>untitled</a></li>
									</ul>
								</div>
							</section>
						</div>
					</div>
					<div id="copyright" className="container">
						<ul className="menu">
							<li>&copy; Untitled. All rights reserved.</li>
						</ul>
					</div>
				</div>

		</div>
    );
  }
}

export default App;
