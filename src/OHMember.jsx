/* eslint-disable react/prop-types */
export default function OHMember({ member }) {
    console.log(member);
    // let name = member.name ;
    // const { name, email } = member
    return (
        <div className="box">
            <h3>Name : {name}</h3>
            {/* <p>Email : {email}</p> */}
        </div>
    )
}