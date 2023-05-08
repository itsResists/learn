"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
    return (
        <button className="p-4 flex" onClick={() => signIn()}>
            Sign in
        </button>
    );
};

export const HomeButton = () => {
    return (
        <Link href="/" className="p-4">
            Home
        </Link>
    );
};


export const RegisterButton = () => {
    return (
        <Link href="/register" className="p-4">
            Register
        </Link>
    );
};

export const LogoutButton = () => {
    return (
        <button className="p-4 flex" onClick={() => signOut()}>
            Sign Out
        </button>
    );
};

export const ProfileButton = () => {
    return <Link href="/profile" className="p-4">Profile</Link>;
};


export const TrainingButton = () => {
    return <Link href="/training" className="p-4">Training</Link>;
};

export const CharacterButton = () => {
    return <Link href="/character" className="p-4">Character</Link>;
};