import { Member } from './SearchableList';


interface MemberListItemProps {
    member: Member
}

export const MemberListItem = ({ member }: MemberListItemProps) => {

    return (
        <>
        <p><span className='font-bold'>Name:</span> { member.name }</p>
        <p><span className='font-bold'>Age:</span> { member.age }</p>
        <p><span className='font-bold'>Rating:</span> { member.rating }</p>
        <div className='flex justify-start'>
            <p className='font-bold'>Recent Activities:</p>
            {
                member.activities.map((activity, i) => (
                    <p className='mx-1' key={ i }>{ activity }</p>
                ))
            }
        </div>
        </>
    )
}