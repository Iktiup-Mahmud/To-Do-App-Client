import { useQuery } from '@tanstack/react-query';
import { Button, Card } from 'flowbite-react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const CompletedTasks = () => {

    const { user } = useContext(AuthContext)

    const url = `${process.env.REACT_APP_server_url}/my-tasks-completed?email=${user?.email}`

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
        fetch(`${process.env.REACT_APP_server_url}/incomplete-task/${id}`, {
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

    return (
        <div>
            <h1 className='font-bold text-2xl my-5'>Completed Task</h1>
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
                                <Button onClick={() => handelComplete(data._id)} size="xs" gradientDuoTone="purpleToBlue" >
                                    Not Completed
                                </Button>
                                <Button size="xs" gradientDuoTone="pinkToOrange" onClick={()=> handelDelete(data._id)}>
                                    Delete
                                </Button>
                            </div>
                            {console.log(data)}
                        </Card>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CompletedTasks;