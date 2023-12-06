import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Aaa() {
    return (
        <>
            <div>
                <div>
                    <h1>Welcome to Tour and Travel</h1>
                    <form style={{ display: "flex", flexDirection: "column", width: 550 }}>
                        <input
                            type="text"

                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            placeholder="Name"
                        />
                        <input
                            type="text"

                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            placeholder="Username"
                        />
                        <input
                            type="password"

                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            placeholder="Password"
                        />
                        <button onClick={submitreg} style={{ color: "black" }}>
                            REGISTER
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Aaa;
