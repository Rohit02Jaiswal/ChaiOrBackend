import React from 'react'
import EnquiryForm from '../../components/EnquiryForm'
import EnquiryList from '../../components/EnquiryList'

const UserEnqForm = () => {
    return (
        <div className='p-10'>
            <h1 className='text-center font-bold text-3xl'>User Enquiry</h1>
            <div className="lg:grid lg:grid-cols-[30%_auto] gap-10">
                <div><EnquiryForm/></div>
                <div><EnquiryList/></div>
            </div>
        </div>
    )
}

export default UserEnqForm


//  Use flowbite for bana banaya UI component.