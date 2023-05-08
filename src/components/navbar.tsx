import React from 'react';
import {
    LoginButton,
    LogoutButton,
    ProfileButton,
    RegisterButton,
    CharacterButton,
    TrainingButton,
    HomeButton
} from './buttons.component';



export default function Navbar() {
    return (
        <div className='min-h-[10vh] max-h-14 p-2 justify-center  flex'>
            <HomeButton />
            <RegisterButton />
            <LoginButton />
            <LogoutButton />
            <ProfileButton />
            <CharacterButton />
            <TrainingButton />
        </div>
    )
}