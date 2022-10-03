import { useState } from 'react';
import { DataLoader } from './components/DataLoader';
import { EditMembersList } from './components/EditMembersList';
import { SearchMembersList } from './components/SearchMembersList';
import { MemberListItemDetailed } from './components/MemberListItemDetailed';
import { MemberListItem } from './components/MembersListItem';

function App() {
  const [page, setPage] = useState('search')



  return (
      <>
      <nav className="
      relative
      w-full
      flex flex-wrap
      items-center
      justify-between
      py-4
      bg-gray-100
      text-gray-500
      hover:text-gray-700
      focus:text-gray-700
      shadow-lg
      navbar navbar-expand-lg navbar-light
      ">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <h1 className="text-xl text-black">Outdoor Adventure Club</h1>
          {/* <!-- Left links --> */}
          <ul className="navbar-nav flex pl-0 list-style-none">
            <li className="nav-item px-2">
              <button onClick={() => setPage('search') } className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">Search</button>
            </li>
            <li className="nav-item pr-4">
              <button onClick={() => setPage('edit') } className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">Edit</button>
            </li>
          </ul>

        </div>
      </nav>
      <div className='flex justify-center'>
        <div className='w-5/6 mt-8'>
          <DataLoader apiUrlEndpoint='/members' >
            { page === 'search' ? 
              <SearchMembersList listItemComponent={ MemberListItemDetailed } /> : 
              <EditMembersList listItemComponent={ MemberListItem } /> }
          </DataLoader>
        </div>
      </div>
      </>
  )
}

export default App
