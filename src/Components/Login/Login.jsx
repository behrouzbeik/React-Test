import React, { useState } from 'react'
import './main.css'
import './util.css'

export default function Login(props) {
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');

	// function userCheck()

  return (
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src={require("./images/img-01.png")} alt="IMG"/>
				</div>

				<form className="login100-form validate-form">
					<span className="login100-form-title">
						Member Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email" placeholder="Email" onChange={(e)=>setUser(e.target.value)}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="pass" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div className="container-login100-form-btn">
						<button className='login100-form-btn' onClick={()=>props.handelLogin(user,pass)}>Login</button>
					</div>

					<div className="text-center p-t-12">
						<span className="txt1">
							Forgot
						</span>
						<a className="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div className="text-center p-t-136">
						<a className="txt2" href="#">
							Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
{/* <!--===============================================================================================-->	 */}
	<script src="./vendor/jquery/jquery-3.2.1.min.js"></script>
{/* <!--=========./======================================================================================--> */}
	<script src="./vendor/bootstrap/js/popper.js"></script>
	<script src="./vendor/bootstrap/js/bootstrap.min.js"></script>
{/* <!--=========./======================================================================================--> */}
	<script src="./vendor/select2/select2.min.js"></script>
{/* <!--===============================================================================================--> */}
	<script src="./vendor/tilt/tilt.jquery.min.js"></script>
	{/* <script >
		$('.js-tilt').tilt({
			scale: 1.1
		})
	</script> */}
{/* <!--===============================================================================================--> */}
	<script src="./js/main.js"></script> 
	</div>
  )
}
