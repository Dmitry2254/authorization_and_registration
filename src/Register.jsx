
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (
            !name.trim() ||
            !email.trim() ||
            !password ||
            !confirmPassword
        ) {
            setError("Заполните все поля");
            return;
        }

        if (password.length < 8) {
            setError("Пароль должен содержать минимум 8 символов");
            return;
        }

        if (password !== confirmPassword) {
            setError("Пароли не совпадают");
            return;
        }

        setSuccess("Регистрация прошла успешно!");

        // Здесь можно подключить backend
        console.log({
            name,
            email,
            password,
        });
    };

    return (
        <div className="register-page">

            <div className="register-card">

                <div className="register-icon">
                    ✦
                </div>

                <h1>Создать аккаунт</h1>

                <p className="register-subtitle">
                    Заполните данные для регистрации
                </p>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="register-name">
                        Имя пользователя
                    </label>

                    <input
                        id="register-name"
                        type="text"
                        placeholder="Введите ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="name"
                    />

                    <label htmlFor="register-email">
                        Email
                    </label>

                    <input
                        id="register-email"
                        type="email"
                        placeholder="example@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                    />

                    <label htmlFor="register-password">
                        Пароль
                    </label>

                    <div className="register-password-wrapper">

                        <input
                            id="register-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Минимум 8 символов"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="new-password"
                        />

                    </div>

                    <label htmlFor="register-confirm-password">
                        Повторите пароль
                    </label>

                    <div className="register-password-wrapper">

                        <input
                            id="register-confirm-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Повторите пароль"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            autoComplete="new-password"
                        />

                        <button
                            type="button"
                            className="register-show-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Скрыть" : "Показать"}
                        </button>

                    </div>

                    {error && (
                        <p className="register-error">
                            {error}
                        </p>
                    )}

                    {success && (
                        <p className="register-success">
                            {success}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="register-button"
                    >
                        Зарегистрироваться
                    </button>

                </form>

                <p className="register-login">
                    Уже есть аккаунт?

                    <Link to="/login">
                        {" "}Войти
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default Register;
