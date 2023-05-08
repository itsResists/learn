
import React from 'react';
import { TrainingForm } from './trainingform';
import UserInfo from './infoform';

export default function Training() {

    return (
        <>
            <div className="flex justify-center items-center min-h-[80vh]"
            >
                <div>
                    <div className='my-2'>
                        <UserInfo />
                    </div>
                    <TrainingForm />

                </div>
            </div>
        </>
    );
}