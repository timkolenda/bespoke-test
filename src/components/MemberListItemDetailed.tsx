import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from 'react';
import { Member } from './SearchMembersList';


interface MemberListItemDetailedProps {
    member: Member
}

export const MemberListItemDetailed = ( { member }: MemberListItemDetailedProps ) => {
    const { name, age, rating, activities } = member;

    return (
        <>
        <p><span className='font-bold'>Name:</span> { name }</p>
        <p><span className='font-bold'>Age:</span> { age }</p>
        <p><span className='font-bold'>Rating:</span> { rating }</p>
        <div className='flex justify-start'>
            <p className='font-bold'>Recent Activities:</p>
            {
                activities.map((activity: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined, i: Key | null | undefined) => (
                    <p className='mx-1' key={ i }>{ activity }</p>
                ))
            }
        </div>
        </>
    )
}