import { useState, useEffect } from 'react';
import { removeUser } from '../api/apiHelperFunctions';



const handleClick = ( memberId: number ) => {
    removeUser(memberId);
}






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

export const EditMembersList = ({ list, listItemComponent: ListItemComponent }: SearchableListProps) => {

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
    }, [searchTerm, list])


    return list ? (
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
            </div>
            <div className='w-full'>
                <ul className="bg-white rounded-lg border border-gray-200 text-gray-900 w-full">
                        {
                            filteredList.map((filteredListItem: Member) => {
                                return (
                                    <li key={filteredListItem.id} className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg flex justify-between">
                                        <div>
                                            <ListItemComponent  member={filteredListItem} />
                                        </div>
                                        <div>
                                            <button onClick={ () => handleClick( filteredListItem.id ) } type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Remove</button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                </ul>
            </div>
        </>
    ) : <p>Loading...</p>
}