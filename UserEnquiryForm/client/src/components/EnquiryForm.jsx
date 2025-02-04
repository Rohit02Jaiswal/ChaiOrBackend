import React from 'react'
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

const EnquiryForm = () => {
    const saveEnquiry = (e) => {
        e.preventDefault();
        console.log("Log Saved.");
    }
    return (
        <div className="form bg-gray-200 p-4 mt-8">
            <h2 className='text-xl font-bold'>Enquiry Form</h2>
            <form action="" onSubmit={saveEnquiry}>
                <div className="py-2">
                    <Label htmlFor="name" value="Your Name" color='black' />
                    <TextInput type="text" name='name' placeholder="Enter Your Name..." required />
                </div>
                <div className="py-2">
                    <Label htmlFor="email" value="Your Email" color='black' />
                    <TextInput type="email" name='email' placeholder="Enter Your Email..." required />
                </div>
                <div className="py-2">
                    <Label htmlFor="phone" value="Your Phone" color='black' />
                    <TextInput type="text" name='phone' placeholder="Enter Your Phone Number..." required />
                </div>
                <div className="py-2">
                    <Label htmlFor="message" value="Your Message" color='black' />
                    <Textarea name='msg' placeholder="Leave a comment..." required rows={4} className='p-2' />
                </div>
                <div className="py-2 flex items-center justify-center">
                    <Button type="submit" className='w-full'>Save</Button>
                </div>
            </form>
        </div>
    )
}

export default EnquiryForm
