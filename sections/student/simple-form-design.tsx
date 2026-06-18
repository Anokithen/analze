import React from 'react'

export default function SimpleFormDesign() {

    const style = {
        margin: "20px",
        width: "300px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px"
    }

    function submitData(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        alert("Form submitted")
    }
  return (
    <div>
        <form action="post" style={style} onSubmit={submitData}>
            <label htmlFor="fullName">Name</label><br />
            <input type="text" id="fullName" name="fullName" />
            <br /><br />
            <label htmlFor="email">Email</label><br />
            <input type="email" id="email" name="email" />
            <br /><br />
            <label htmlFor="age">Age</label><br />
            <input type="number" id="age" name="age" />
            <br /><br />
            <label htmlFor="joinDate">Join Date</label><br />
            <input type="date" id="joinDate" name="joinDate" />
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}