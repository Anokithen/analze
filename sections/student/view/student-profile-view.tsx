"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Dele, Student } from "@/types/student"
import { Button } from "@/components/ui/button"



export default function StudentProfileView() {
    const { id } = useParams()

    // const [delstudent,setDelstudent] = useState<Dele | null>(null)


  // const deleteStudent = async () => {
  
    
  // try {
  //   const response = await axios.delete(`https://jey-student-api.up.railway.app/api/students/${id}`);
  //   console.log('Deleted successfully:', response.status);
  // } catch (error) {
  //   console.error('Error deleting user:', error);
  // }
  // useEffect(() => {
  //   deleteStudent()
  // }, [id])

  // }



  

  const [student, setStudent] = useState<Student | null>(null)

  const fetchStudent = async () => {
    try {
      const response = await axios.get(
        `https://jey-student-api.up.railway.app/api/students/${id}`
      )
      setStudent(response.data.student)
    } catch (error) {
      console.error("Error fetching student:", error)
    }
  }

  useEffect(() => {
    fetchStudent()
  }, [id])

  if (!student) {
    return <div>Loading...</div>
  }

  return (
    <>
    {/* <div>
     <Button> <Link href={`/students/${id}/edit`}>Delete</Link></Button>
    </div> */}
    <div className="space-y-2 p-6">
      <Link
        href="/students"
        className="mb-4 inline-block text-blue-500 hover:underline"
      >
        &larr; Back to Students
      </Link>
      <h1 className="text-2xl font-bold">{student.full_name}</h1>
      {/* <button onclick ={"deleteStudent()"}></button> */}

      <p>ID: {student.id}</p>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
      <p>CGPA: {student.cgpa}</p>
      <p>Status: {student.is_active ? "Active" : "Inactive"}</p>
      <p>Joined Date: {student.joined_date}</p>
      <p>Created At: {student.created_at}</p>
    </div>
    </>
  )
}
