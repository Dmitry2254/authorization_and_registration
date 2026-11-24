
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (!email.trim() || !password) {
            setError("Заполните все поля");
            return;
        }

        if (password.length < 8) {
            setError("Пароль должен содержать минимум 8 символов");
            return;
        }

        setSuccess("Форма успешно отправлена!");

        // Здесь можно подключить backend
        console.log({
            email,
            password,
        });
    };

    return (
        <div className="login-page">
            <div className="login-card">

                <div className="login-icon">
                    ✦
                </div>

                <h1>Добро пожаловать!</h1>

                <p className="login-subtitle">
                    Войдите в свой аккаунт
                </p>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="login-email">
                        Email
                    </label>

                    <input
                        id="login-email"
                        type="email"
                        placeholder="example@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                    />

                    <label htmlFor="login-password">
                        Пароль
                    </label>

                    <div className="login-password-wrapper">

                        <input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />

                        <button
                            type="button"
                            className="login-show-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Скрыть" : "Показать"}
                        </button>

                    </div>

                    <div className="login-forgot">
                        <Link to="/forgot-password">
                            Забыли пароль?
                        </Link>
                    </div>

                    {error && (
                        <p className="login-error">
                            {error}
                        </p>
                    )}

                    {success && (
                        <p className="login-success">
                            {success}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="login-button"
                    >
                        Войти
                    </button>

                </form>

                <p className="login-register">
                    Нет аккаунта?

                    <Link to="/register">
                        {" "}Зарегистрироваться
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Login;
