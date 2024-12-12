"use client"

import { useState } from 'react';
import { createCustomer } from '@/services/customers/api';
import { useRouter } from 'next/navigation';
import { Customer } from '@/types/customer';

import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import Link from "next/link";

const CreateCustomer = () => {
    const [customer, setCustomer] = useState<Customer>({
        id: 0,
        company: '',
        last_name: '',
        first_name: '',
        email_address: '',
        job_title: '',
        business_phone: '',
        home_phone: '',
        mobile_phone: '',
        fax_number: '',
        address: '',
        city: '',
        state_province: '',
        zip_postal_code: '',
        country_region: '',
        web_page: '',
        notes: '',
        attachments: '',
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCustomer({
        ...customer,
        [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        // Basic validation
        if (!customer.first_name || !customer.last_name || !customer.company) {
            alert("Please fill in all required fields (First Name, Last Name, Company).");
            return;
        }
    
        try {
            await createCustomer(customer);
            alert("Customer added successfully!");
            router.push('/'); // Redirect
        } catch (error) {
            console.error("Error creating customer:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
    <DefaultLayout>
        <Breadcrumb pageName="Create Customer" />

        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
            <div className="flex flex-col gap-9">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                    Contact Form
                    </h3>
                </div>
                <form  onSubmit={handleSubmit}>
                    <div className="p-6.5">
                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                First name
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                placeholder="Enter customer's first name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={handleChange}
                            />
                            </div>

                            <div className="w-full xl:w-1/2">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Last name
                            </label>
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Enter customer's last name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={handleChange}
                            />
                            </div>
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email_address"
                                placeholder="Enter customer's email address"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={handleChange}
                            />
                            </div>
                            <div className="w-full xl:w-1/2">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Phone number
                            </label>
                            <input
                                type="tel"
                                name="business_phone"
                                placeholder="Enter customer's phone number"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={handleChange}
                            />
                            </div>
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Company
                            </label>
                            <input
                                type="text"
                                name="company"
                                placeholder="Enter customer's company name"
                                className="w-full rounded boder-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={handleChange}
                            />
                            </div>

                            <div className="w-full xl:w-1/2">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Job title
                            </label>
                            <input
                                type="text"
                                name="job_title"
                                placeholder="Enter customer's job title"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={handleChange}
                            />
                            </div>
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/3">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                placeholder="Miami"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={handleChange}
                            />
                            </div>

                            <div className="w-full xl:w-1/3">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                State
                            </label>
                            <input
                                type="text"
                                name="state_province"
                                placeholder="FL"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={handleChange}
                            />
                            </div>

                            <div className="w-full xl:w-1/3">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Country
                            </label>
                            <input
                                type="text"
                                name="country_region"
                                placeholder="US"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={handleChange}
                            />
                            </div>
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-2/3">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Address
                            </label>
                            <textarea
                                rows={3}
                                name="address"
                                placeholder="Enter customer's address"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={handleChange}
                            ></textarea>
                            </div>
                            <div className="w-full xl:w-1/3">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Zip code
                                </label>
                                <input
                                type="text"
                                name="zip_postal_code"
                                placeholder="321456"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={handleChange}
                                />                  
                            </div>
                        </div>

                        <button type='submit' className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                            Add Customer
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </DefaultLayout>
    );
};

export default CreateCustomer;
