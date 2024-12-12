import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        try {
            const response = await api.post("/login", formData);
            alert("Logged in successfully");
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
            navigate("/dashboard");
        } catch (err) {
            if (err.response?.data?.errors) {
                setErrors(err.response.data.errors);
            } else {
                alert("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Login</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {errors.email && <p style={styles.error}>{errors.email[0]}</p>}
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {errors.password && <p style={styles.error}>{errors.password[0]}</p>}
                </div>

                <button type="submit" style={styles.button} disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        maxWidth: "400px",
        margin: "50px auto",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        fontSize: "1.8rem",
        color: "#333",
        marginBottom: "20px",
        textAlign: "center",
    },
    form: {
        width: "100%",
    },
    formGroup: {
        marginBottom: "15px",
    },
    label: {
        display: "block",
        fontSize: "1rem",
        color: "#555",
        marginBottom: "5px",
    },
    input: {
        width: "100%",
        padding: "10px",
        fontSize: "1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        outline: "none",
        boxSizing: "border-box",
    },
    button: {
        width: "100%",
        padding: "10px",
        fontSize: "1rem",
        color: "#fff",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
    error: {
        fontSize: "0.9rem",
        color: "red",
        marginTop: "5px",
    },
    buttonDisabled: {
        backgroundColor: "#ccc",
        cursor: "not-allowed",
    },
};

export default Login;
