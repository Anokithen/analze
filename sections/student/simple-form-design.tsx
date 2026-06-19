import axios from 'axios';
import React from 'react'

export default function SimpleFormDesign() {

    const style = {
        margin: "20px",
        width: "300px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px"
    }

    async function submitData(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        

        const form = e.currentTarget

        const payload = {
            full_name:form.fullName.value,
            email:form.email.value,
            age:form.age.value,
            join_date:form.joinDate.value,
        }
       
    //    await axios
    //   .post("https://jey-student-api.up.railway.app/api/students", payload)
    //   .then(() => {
    //     alert("Student created successfully!")
    //     form.reset()
    //   })
    //   .catch(() => {
    //     alert("Failed to create student")
    //   })



        try{
            await axios.post("https://jey-student-api.up.railway.app/api/students",payload)
            alert("Student Created successfull")
            form.reset()
        }catch(error){
            alert("failed to create students",)
            
        }
       

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