"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Dummy credentials
    const DUMMY_USER = { username: `${process.env.NEXT_PUBLIC_USER_NAME}`, password: `${process.env.NEXT_PUBLIC_USER_PASSWARD}` };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
            setError("");
            localStorage.setItem("isLoggedIn", "true");
              router.push("/darshini"); // redirect to dashboard
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Darshani AI Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter username"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    {error && <p className="text-red-600 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
