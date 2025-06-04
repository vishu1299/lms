import React from 'react'
import Search from '@/components/ui/input-search'
import { Button } from '@/components/ui/button'
import FiltersSidebar from './filters-sidebar'
import BooksGrid from './books-grid'
import DonateButton from '../../_components/donate'

const LibrarySection = () => {
    return (
        <div className="px-4 py-8 mx-3 sm:mx-5 md:mx-8">
            <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                    <Search className= 'border-none text-gray-700' placeholder='Search Here...' />
                </div>
                <div className="mb-4 space-x-3 flex">
                    <Button size="sm" className="bg-blue-500 text-white sm:px-4 rounded-md">Request to Add</Button>
                    <DonateButton />
                </div>
            </div>

            <div className="flex flex-col md:flex-row mt-6 gap-6">
                <div className="md:w-1/4">
                    <FiltersSidebar />
                </div>
                <div className="md:w-3/4">
                    <BooksGrid />
                </div>
            </div>
        </div>

    )
}

export default LibrarySection