import { RegisterForm } from "./registerform";

export default function RegisterPage() {
    return (
        <div className="flex justify-center items-center h-screen"
        >
            <div>
                <h1>Register</h1>
                <RegisterForm />
            </div>
        </div>
    );
}
