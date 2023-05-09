import React from 'react';
import {
    LoginButton,
    LogoutButton,
    ProfileButton,
    RegisterButton,
    TrainingButton,
    HomeButton
} from './buttons.component';
import { getServerSession } from 'next-auth';
import { authOptions } from '../app/api/auth/[...nextauth]/route';







export default async function Navbar() {

    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    if (userId === undefined) {
        return (
            <div className='min-h-[10vh] max-h-14 p-2 justify-center  flex'>
                <HomeButton />
                <RegisterButton />
                <LoginButton />
            </div>
        )
    } else {
        return (
            <div className='min-h-[10vh] max-h-14 p-2 justify-center  flex'>
                <HomeButton />
                <ProfileButton />
                <TrainingButton />
                <LogoutButton />
        </div>
    )
}
}