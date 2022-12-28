import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
            <Navbar
                fluid={true}
                rounded={true}
                className=""
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                    </Dropdown>
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