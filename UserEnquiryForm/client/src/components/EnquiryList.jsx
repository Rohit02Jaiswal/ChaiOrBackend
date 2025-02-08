import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const EnquiryList = () => {

    const [enqList, setEnqList] = useState([]);
    const getEnqList = () => {
        axios.get('http://localhost:5000/api/web/enquiry/view')
            .then((res) => {
                return res.data;
            })
            .then((finalData) => {
                if (finalData.status) {
                    setEnqList(finalData.enquiryList);
                }
            })
    }


    const deleteData = (id) => {
        // console.log(id);
        let confirmDelete = confirm("Are you sure?");
        if (confirmDelete) {
            axios.delete(`http://localhost:5000/api/web/enquiry/delete/${id}`)
                .then((res) => {
                    toast("Data deleted !");
                })
        }
    }

    const updateData = (id) => {
        
    }

    useEffect(() => {
        getEnqList();
    }, [deleteData, getEnqList, setEnqList, updateData]);


    return (
        <div className="table bg-gray-200 p-4 mt-8">
            <ToastContainer />
            <h2 className='text-xl font-bold'>Enquiry List</h2>
            <div className="overflow-x-auto mt-4">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Sr. No</Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Phone</Table.HeadCell>
                        <Table.HeadCell>Message</Table.HeadCell>
                        <Table.HeadCell>Edit</Table.HeadCell>
                        <Table.HeadCell>Delete</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            enqList.length >= 1 ?
                                enqList.map((item, index) => {
                                    return (<>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
                                            <Table.Cell>{item.name}</Table.Cell>
                                            <Table.Cell>{item.email}</Table.Cell>
                                            <Table.Cell>{item.phone}</Table.Cell>
                                            <Table.Cell>{item.message}</Table.Cell>
                                            <Table.Cell>
                                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={() => updateData(item._id)}>
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={() => deleteData(item._id)}>
                                                    Delete
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                    </>)
                                })
                                :
                                <Table.Row>
                                    <Table.Cell>No data found!</Table.Cell>
                                </Table.Row>
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export default EnquiryList
