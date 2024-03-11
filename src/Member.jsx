export default function Member({member}){
    console.log(member);
    const {name, email,id,website,phone,company} = member;
    return(
        <div className="box">
            <h4>ID : {id}</h4>
            <h2>Name : {name} </h2>
            <h3>CompanyName : {company.name} </h3>
            <p>phone : {phone}</p>
            <p>Email : {email}</p>
            <p>Website : {website}</p>
        </div>
    )
}