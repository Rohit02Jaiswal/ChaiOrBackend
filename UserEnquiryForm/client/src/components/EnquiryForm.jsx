import React, { useState } from 'react'
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const getValue = (e) => {
        let oldData = { ...formData };
        let inputName = e.target.name; // name = name/email/phone/message 
        let inputValue = e.target.value;
        oldData[inputName] = inputValue;
        setFormData(oldData);
    }

    const saveEnquiry = (e) => {
        e.preventDefault();
        console.log("Log Saved.");
        // For API hit, use axios
        // let formData = {
        //     name: e.target.name.value,
        //     email: e.target.email.value,
        //     phone: e.target.phone.value,
        //     message: e.target.msg.value,
        // }

        axios.post('http://localhost:5000/api/web/enquiry/insert', formData)
            .then((res) => {
                console.log(res.data);
                toast.success("Enquiry Saved Successfully!");
                // data reset
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                })
            })
    }

    return (
        <div className="form bg-gray-200 p-4 mt-8">
            <ToastContainer />
            <h2 className='text-xl font-bold'>Enquiry Form</h2>
            <form action="" onSubmit={saveEnquiry}>
                <div className="py-2">
                    <Label htmlFor="name" value="Your Name" color='black' />
                    <TextInput type="text" name='name' placeholder="Enter Your Name..." required value={formData.name} onChange={getValue} />
                </div>
                <div className="py-2">
                    <Label htmlFor="email" value="Your Email" color='black' />
                    <TextInput type="email" name='email' placeholder="Enter Your Email..." required value={formData.email} onChange={getValue} />
                </div>
                <div className="py-2">
                    <Label htmlFor="phone" value="Your Phone" color='black' />
                    <TextInput type="text" name='phone' placeholder="Enter Your Phone Number..." required value={formData.phone} onChange={getValue} />
                </div>
                <div className="py-2">
                    <Label htmlFor="message" value="Your Message" color='black' />
                    <Textarea name='message' placeholder="Leave a comment..." required rows={4} className='p-2' value={formData.message} onChange={getValue} />
                </div>
                <div className="py-2 flex items-center justify-center">
                    <Button type="submit" className='w-full'>Save</Button>
                </div>
            </form>
        </div>
    )
}

export default EnquiryForm
