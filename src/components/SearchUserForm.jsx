import React, { useState } from 'react';

const SearchUserForm = ({ onSearch }) => {
    const [searchParams, setSearchParams] = useState({
        id: '',
        firstname: '',
        lastname: '',
        age: '',
        address: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchParams); // Pass the search parameters to the parent
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">ID</label>
                    <input
                        type="text"
                        name="id"
                        value={searchParams.id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter ID"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="firstname"
                        value={searchParams.firstname}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter First Name"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        value={searchParams.lastname}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Last Name"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={searchParams.age}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Age"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={searchParams.address}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Address"
                    />
                </div>

                <div className="col-span-2 flex justify-start">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchUserForm;
