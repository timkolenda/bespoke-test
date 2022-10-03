import { Member } from './SearchMembersList';


interface MemberListItemDetailedProps {
    member: Member
}

export const MemberListItem = ({ member }: MemberListItemDetailedProps) => {

    return (
        <>
        <p><span className='font-bold'>Name:</span> { member.name }</p>
        </>
    )
}