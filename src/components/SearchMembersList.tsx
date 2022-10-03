 import { useState, useEffect } from 'react';


export interface Member {
    id: number;
    name: string;
    age: number;
    rating: number;
    activities: string[];
}

interface SearchableListProps {
    list?: any;
    listItemComponent: any;
}


export const SearchMembersList = ({ list, listItemComponent: ListItemComponent }: SearchableListProps) => {

    const [ searchTerm, setSearchTerm ] = useState('');
    const [ filter, setFilter ] = useState('all')
    const [ filteredList, setFilteredList ] = useState<Member[] | []>([]);

    
    useEffect(() => {
        if((searchTerm === '') && (filter === 'all')) {
            setFilteredList(list);
        } else {
            const newList = list.filter((member: Member) => (
                member.name.toUpperCase().startsWith(searchTerm.toUpperCase())
                 && (member.activities.includes(filter) || filter === 'all')
            ));
            setFilteredList(newList)
        }
    }, [searchTerm, filter])


    return (
        <>
            <div className='flex justify-between w-full'>
                <div className="mb-3 xl:w-96">
                    <label className="form-label inline-block mb-2 text-gray-700">Search</label>
                    <input 
                    onChange={ e => {
                        setSearchTerm(e.target.value)
                        setFilter('all')
                    } }
                    value={ searchTerm }
                    type="text"
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlInput1"
                    placeholder='Search'
                    />
                </div>
                <div>
                    <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                        <button onClick={() => setFilter('all')} type="button" className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Show All</button>
                        <button onClick={() => setFilter('hiking')} type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Hikers</button>
                        <button onClick={() => setFilter('biking')} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Bikers</button>
                        <button onClick={() => setFilter('running')}type="button" className=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Runners</button>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <p className='mb-8'>Total Results: {filteredList.length}</p>
                <ul className="bg-white rounded-lg border border-gray-200 text-gray-900 w-full">
                        {
                            filteredList.map((filteredListItem: Member) => {
                                return (
                                    <li key={filteredListItem.id} className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg flex justify-between">
                                        <div>
                                            <ListItemComponent  member={filteredListItem} />
                                        </div>
                                    </li>
                                )
                            })
                        }
                </ul>
            </div>
        </>
    )
}