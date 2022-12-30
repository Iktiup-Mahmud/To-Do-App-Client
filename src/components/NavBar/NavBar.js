import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handelLogout = () => {
        logOut()
            .then(res => {
                console.log('logout successfull')
            })
            .catch(err => console.log(err))
    }

    return (
            <Navbar
                fluid={true}
                rounded={true}
                className=""
            >
                <Navbar.Brand href="https://flowbite.com/">
                    {/* <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    /> */}
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        TO-DO
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {/* <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                    </Dropdown> */}

                    {
                        user ? 
                        <Link onClick={handelLogout} className='ml-3'>
                            <Button gradientDuoTone="purpleToBlue">
                                Logout
                            </Button>
                        </Link>
                    :
                        <Link to='/login' className='ml-3'>
                            <Button gradientDuoTone="purpleToBlue">
                                Login
                            </Button>
                        </Link>
                    }

                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse>
                    {/* <Link to='/home' active="true">Home</Link> */}
                    <Link to='/add-task' >Add Task</Link>
                    <Link to='/my-tasks' >My Tasks</Link>
                    <Link to='/completed-tasks'>Completed Tasks</Link>
                    
                </Navbar.Collapse>
            </Navbar>
    );
};

export default NavBar;