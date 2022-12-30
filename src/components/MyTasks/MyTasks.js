import { useQuery } from '@tanstack/react-query';
import { Button, Card, Modal } from 'flowbite-react';
import React, { useContext, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const MyTasks = () => {
    const { user } = useContext(AuthContext)
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)

    const url = `${process.env.REACT_APP_server_url}/my-tasks?email=${user?.email}`

    const { data: datas = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = res.json()
            return data
        }
    })

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    refetch()

    const handelComplete = (id) => {
        fetch(`${process.env.REACT_APP_server_url}/complete-task/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('completed', data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(` verified successfully`)
                }
            })
    }

    const handelDelete = (id) => {
        fetch(`${process.env.REACT_APP_server_url}/deleteTask/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.deletedCount > 0) {
                    refetch()
                    toast.success(`Task deleted successfully`)
                }
            })
    }

    console.log(datas)
    return (
        <div>
            <h1 className='font-bold text-2xl my-5'>My Tasks</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-10 gap-10'>
                {
                    datas &&
                    datas.map((data, i) => <div className="max-w-sm" key={i}>
                        <Card className='' imgSrc={data?.img}>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {data?.name}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {data?.description}
                            </p>

                            <div className='flex justify-evenly'>
                                <Button size="xs" onClick={()=> console.log(data._id)} gradientDuoTone="purpleToBlue" >
                                    Edit
                                </Button>
                                <Button onClick={()=> handelComplete(data._id)} size="xs" gradientDuoTone="purpleToBlue" >
                                    Complete
                                </Button>
                                <Button onClick={() => handelDelete(data._id)} size="xs" gradientDuoTone="pinkToOrange" >
                                    Delete
                                </Button>
                            </div>
                            {console.log(data)}
                        </Card>
                    </div>)
                }
            </div>
            {/* <React.Fragment>
                <Button onClick={onClick}>
                    Toggle modal
                </Button>
                <Modal
                    show={false}
                    size="md"
                    popup={true}
                    onClose={() => console.log(2)}
                >
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Are you sure you want to delete this product?
                            </h3>
                            <div className="flex justify-center gap-4">
                                <Button
                                    color="failure"
                                    onClick={() => console.log(1)}
                                >
                                    Yes, I'm sure
                                </Button>
                                <Button
                                    color="gray"
                                    onClick={() => console.log(1)}
                                >
                                    No, cancel
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment> */}

        </div>
    );
};

export default MyTasks;