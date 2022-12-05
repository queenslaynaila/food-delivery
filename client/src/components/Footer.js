import React from 'react'
import '../styles/footer.css'
export default function Footer() {
  return (
    <div>
      <section class="contact" id="contact">
		<div class="main-contact">
			<div class="contact-content">
				<h4>Services</h4>
				<li><a href="#home">Home</a></li>
			  <li><a href="#about">About</a></li>
			  <li><a href="#menu">Menu</a></li>
			  <li><a href="#contact">Contact</a></li>
			</div>

			<div class="contact-content">
				<h4>Partner</h4>
				<li><a href="#home">Food Panda</a></li>
			  <li><a href="#about">Foodie</a></li>
			  <li><a href="#menu">Food Fun</a></li>
			  <li><a href="#contact">Fresh Food</a></li>
			</div>

			<div class="contact-content">
				<h4>Contact</h4>
				<li><a href="#home">Contact Us</a></li>
			  <li><a href="#about">Press Center</a></li>
			  <li><a href="#menu">Careers</a></li>
			  <li><a href="#contact">Faq</a></li>
			</div>

			<div class="contact-content">
				<h4>Follow Us</h4>
				<li><a href="#home">Facebook</a></li>
			  <li><a href="#about">Instagram</a></li>
			  <li><a href="#menu">Pinterest</a></li>
			</div>

		</div>
	</section>

	<div class="last-text">
		<p>© 2022 FoodFun. All Rights Reserved by Jema Queenslay</p>
	</div>


	<a href="#home" class="scroll-top">
		<i class='bx bx-up-arrow-alt' ></i>
	</a>

    </div>
  )
}

