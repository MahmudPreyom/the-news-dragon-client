import React from "react";
import { Link } from 'react-router-dom'

const Terms = () => {
    return (
        <div>
            <h2>terms and Conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur atque deleniti expedita tempore quaerat natus, debitis repellat rerum pariatur totam consequuntur distinctio saepe non quia esse optio placeat sint corporis.</p>
            <p>Go Back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;