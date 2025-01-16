import React from 'react';
import SearchUserForm from "./SearchUserForm";
import {useGetUsers} from "../api";

const UserTable = () => {
    const { users } = useGetUsers();

    return (
        <div className="container mx-auto p-4">
            <h1 className='font-bold text-2xl'>User</h1>
            <div>
                <SearchUserForm/>
            </div>
            <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-2">ID</th>
                    <th className="border border-gray-200 px-4 py-2">First Name</th>
                    <th className="border border-gray-200 px-4 py-2">Last Name</th>
                    <th className="border border-gray-200 px-4 py-2">Age</th>
                    <th className="border border-gray-200 px-4 py-2">Address</th>
                    <th className="border border-gray-200 px-4 py-2">Created At</th>
                    <th className="border border-gray-200 px-4 py-2">Updated At</th>
                    <th className="border border-gray-200 px-4 py-2">Update</th>
                </tr>
                </thead>
                <tbody>
                {users.map((item) => (
                    <tr key={item.id} className="bg-white even:bg-gray-50 hover:bg-gray-100">
                        <td className="border border-gray-200 px-4 py-2">{item.id}</td>
                        <td className="border border-gray-200 px-4 py-2">{item.firstname}</td>
                        <td className="border border-gray-200 px-4 py-2">{item.lastname}</td>
                        <td className="border border-gray-200 px-4 py-2">{item.age}</td>
                        <td className="border border-gray-200 px-4 py-2">{item.address}</td>
                        <td className="border border-gray-200 px-4 py-2">{item.createdAt}</td>
                        <td className="border border-gray-200 px-4 py-2">{item.updatedAt}</td>
                        <td className="border border-gray-200 px-4 py-2"><a>Update</a></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
