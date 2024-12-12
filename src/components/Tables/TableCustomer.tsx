'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import { fetchCustomers, deleteCustomer } from "@/services/customers/api";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const TableCustomer = () => {
  const [customers, setCustomers] = useState([]);
  const router = useRouter();

  // Fetch the list of customers when the component mounts
  const getCustomers = async () => {
    const data = await fetchCustomers();
    setCustomers(data);
  };

  useEffect(() => {
    const loadCustomers = async () => {
      const data = await fetchCustomers();
      setCustomers(data);
    };
    loadCustomers();
    getCustomers();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this customer?");
    
    if (confirmed) {
      try {
        await deleteCustomer(id);  // Call the delete API
        alert("Customer deleted successfully.");
        getCustomers(); // Refetch the customer list
        router.push('/customers');  // Navigate to the customers list page
      } catch (error) {
        console.error("Error deleting customer:", error);
        alert("There was an error deleting the customer.");
      }
    }
  };

  return (
    <>
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Customer
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Job Title
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Company
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Country
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                City
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Address
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody>
            {customers?.map((customer, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {customer.first_name} {customer.last_name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {customer.job_title}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {customer.company}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {customer.country_region}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {customer.city + ", " + customer.state_province}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {customer.address + ", " + customer.zip_postal_code}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {customer.business_phone}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <Link href={"/customers/" + customer.id + "/edit"} className="hover:text-primary">
                      <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                      </svg>
                    </Link>
                    <button className="hover:text-primary" onClick={() => handleDelete(customer.id)} >
                      <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default TableCustomer;
