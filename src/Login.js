import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {

        event.preventDefault();
    }

    return (

        <div className="login w-10/12">
            <form>
                <label class="block text-left my-1">Email or Phone Number
                    <input class="border-black block w-full shadow-xl" type="email" value={email} onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </label>
                <label class="block text-left my-1">Password
                    <input class="block w-full shadow-xl" type="password" value={password} onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </label>
                <input class="mt-6 shadow-xl" type="checkbox" id="rememberMe" name="rememberMe"></input>
                <label class="mt-3 px-2">Remember Me</label>
                <p class="mt-4 text-center">New to <b>CRUMZ</b>? <a href="#" class="text-blue-700">Sign up Here!</a></p>
                <p class="mb-7 text-center">Are you a business owner?<a class="text-blue-700" href="#"> Click Here</a></p>
                <button class="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full my-4">Login</button>
            </form>
            {/* <Form onSubmit={handleSubmit} class="w-full flex justify-center flex-col">
                <Form.Group size="lg" controlId="email">
                    <Form.Label class="block text-left">Email or Phone Number</Form.Label>
                    <Form.Control
                        autofocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        class="w-1000px"
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label class="block text-left">Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="remember">
                    <Form.Label>Remember Me</Form.Label>
                    <Form.Control
                        type="radio"
                    />
                </Form.Group>
                <Button class="bg-green" block size="lg" type="submit" disabled={!validateForm}>
                    Login
                </Button>
            </Form> */}
        </div>
    )
}
