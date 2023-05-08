"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export const RegisterForm = () => {
    let [loading, setLoading] = useState(false);
    let [formValues, setFormValues] = useState({
        username: "",
        email: "",
        password: "",
        village: "",
        gender: "",
    });

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify(formValues),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setLoading(false);
            if (!res.ok) {
                alert((await res.json()).message);
                return;
            }

            signIn(undefined, { callbackUrl: "/" });
        } catch (error: any) {
            setLoading(false);
            console.error(error);
            alert(error.message);
        }
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (

        <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 w-px-[500px] border-2 border-white rounded-xl p-10"
            id="register-form"
        >
            <label htmlFor="name">Username</label>
            <input
                required
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleChange}
                className="p-4 text-black"

            />
            <label htmlFor="email">Email</label>
            <input
                required
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="p-4 text-black"

            />
            <label htmlFor="password">Password</label>
            <input
                required
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                className="p-4 text-black"

            />

            {/*  Drop Down Menus */}

            <label htmlFor="gender">Gender</label>
            <select required className="p-4 text-black" name="gender" form="register-form" value={formValues.gender} onChange={handleChange}>
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-Binary">Non-Binary</option>
                <option value="None">None</option>
            </select>


            <label htmlFor="village">Village</label>
            <select required className="p-4 text-black" name="village" form="register-form" value={formValues.village} onChange={handleChange} >
                <option value="">Select your village</option>
                <option value="Sand"> Sand</option>
                <option value="Leaf"> Leaf</option>
                <option value="Mist"> Mist</option>
                <option value="Cloud"> Cloud</option>

            </select>


            <button className="p-4 cursor-pointer bg-blue-500 text-white hover:bg-blue-700 rounded-xl"
                disabled={loading} type="submit"
            >
                {loading ? "loading..." : "Register"}
            </button>
        </form>

    );
};
