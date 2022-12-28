import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const AddTask = () => {
    const handelSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const description = form.description.value

        const data = {
            name,
            description
        }

        console.log(data)
    }

    return (
            <form onSubmit={handelSubmit} className="flex flex-col gap-4 mx-36">
                <h1 className='text-xl font-bold'>Add Task</h1>
                <div>
                    <div className="mb-2 block text-left">
                        <Label
                            htmlFor="email1"
                            value="Task Name"
                            className=''
                        />
                    </div>
                    <TextInput
                        name='name'
                        id="email1"
                        type="text"
                        placeholder="Task Name"
                        required={true}
                    />
                </div>
            <div id="textarea">
                <div className="mb-2 block text-left">
                    <Label
                        htmlFor="comment"
                        value="Add Description"
                    />
                </div>
                <Textarea
                    name='description'
                    id="comment"
                    placeholder="Add a description..."
                    required={true}
                    rows={6}
                />
            </div>
                <Button type="submit" className='' color="purple"> 
                    Submit
                </Button>
            </form>
    );
};

export default AddTask;