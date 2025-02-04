import React from 'react'
import { Table } from "flowbite-react";

const EnquiryList = () => {
    return (
        <div className="table bg-gray-200 p-4 mt-8">
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
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">1</Table.Cell>
                            <Table.Cell>Rohit Jaiswal</Table.Cell>
                            <Table.Cell>jais@gmail.com</Table.Cell>
                            <Table.Cell>+91 993xxxxxxx</Table.Cell>
                            <Table.Cell>Hi there..</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    Edit
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    Delete
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export default EnquiryList
