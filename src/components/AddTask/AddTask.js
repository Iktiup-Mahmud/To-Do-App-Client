import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const AddTask = () => {
    const handelSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const image = form.img.files[0]
        const description = form.description.value

        const data = {
            name,
            image,
            description
        }

        console.log(data)
    }

    return (
            <form onSubmit={handelSubmit} className="flex flex-col gap-4 lg:mx-40 md:mx-16 mx-10 ">
                <h1 className='text-xl font-bold'>Add Task</h1>

                {/* name input */}
                <div>
                    <div className="mb-2 block text-left">
                        <Label
                            htmlFor=""
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

                {/* img input */}
                <div>
                    <div className="mb-2 block text-left">
                        <Label
                            htmlFor="email1"
                            value="Image"
                            className=''
                        />
                    </div>
                    <TextInput
                        name='img'
                        id="email1"
                        type="file"
                        placeholder="Select Image"
                        required={true}
                    />
                </div>

                {/* description input */}
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

            {/* button submit */}
                <Button type="submit" className='' color="purple"> 
                    Submit
                </Button>
            </form>
    );
};

export default AddTask;