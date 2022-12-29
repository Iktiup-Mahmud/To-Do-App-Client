import { GoogleAuthProvider } from 'firebase/auth';
import { TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState('');
    const { createUser, loginProvider, updateUserProfile } = useContext(AuthContext);
    const providerGoogle = new GoogleAuthProvider();

    const handelSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    displayName: name
                }
                updateUserProfile(userInfo)
                    .then(() => {
                        console.log('ok')
                        form.reset()
                        toast.success('Sign Up successful')
                    })
            })
            .catch(err => {
                console.error(err.message)
                toast.error(err.message)
            })
    }

    const handelGoogleLogin = () => {
        loginProvider(providerGoogle)
            .then(res => {
                console.log(res.user)
                toast.success('Login successful')
            })
            .catch(err => {
                console.error(err)
                toast.error(err.message)
            })
    }
    return (
        <div className="max-w-2xl mx-auto mt-10">
            <div
                className="bg-white shadow-md border border-gray-200 rounded-lg max-w-6xl p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handelSubmit} action="#">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Regester to our platform</h3>
                    <div>
                        <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300 text-left">Your name</label>
                        <TextInput type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your name" required={true} />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300 text-left">Your email</label>
                        <TextInput type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required={true} />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300 text-left">Your password</label>
                        <TextInput type="password" name="password" id="password" placeholder="•••••••••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required={true} />
                    </div>
                    <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Regester</button>
                </form>
                    <button onClick={handelGoogleLogin} className="mt-5 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Google</button>

                    <div className="mt-5 text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already have an account? <Link to='/login' className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                    </div>
            </div>
        </div>
    );
};

export default SignUp;