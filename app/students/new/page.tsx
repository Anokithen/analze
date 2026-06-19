"use client"
import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import StudentCreateFormView from "@/sections/student/view/student-create-form-view"

import StudentNewEditForm from "@/sections/student/student-create-form"

export default function NewCode() {
  const [formData, setFormData] = useState({
    age: "",
    cgpa: "",
    created_at: "",
    email: "",
    full_name: "",
    is_active: true,
    joined_date: "",
  })

  const createStudent = async () => {
    try {
      const response = await axios.post(
        `https://jey-student-api.up.railway.app/api/students`,
        {
          full_name: formData.full_name,
          age: Number(formData.age),
          cgpa: Number(formData.cgpa),
          created_at: formData.created_at,
          email: formData.email,
          is_active: formData.is_active,
          join_data: formData.joined_date,
        }
      )
      console.log("student add:", response.data)
      alert("student success full created")

      setFormData({
        age: "",
        cgpa: "",
        created_at: "",
        email: "",
        full_name: "",
        is_active: true,
        joined_date: "",
      })
    } catch (error) {
      alert("Failed to create student.")
    }
  }

  return (
    <>
      {/* <div>
        <Link href="/students">
          <Button>Goto List</Button>
        </Link>
      </div>
      <div className="mx-auto flex max-w-md flex-col gap-4 p-6">
        <h1 className="text-xl font-bold">Add New Student</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={(e) =>
            setFormData({ ...formData, full_name: e.target.value })
          }
          className="w-full rounded border p-2"
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded border p-2"
        />

        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="w-full rounded border p-2"
        />

        <input
          type="number"
          step="0.01"
          placeholder="CGPA ( StudentCreateFormViewe.g. 3.99)"
          value={formData.cgpa}
          onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })}
          className="w-full rounded border p-2"
        />

        <input
          type="date"
          value={formData.joined_date}
          onChange={(e) =>
            setFormData({ ...formData, joined_date: e.target.value })
          }
          className="w-full rounded border p-2"
        />
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={formData.is_active}
            onChange={(e) =>
              setFormData({ ...formData, is_active: e.target.checked })
            }
          />
          Is Active
        </label>

        <button
          onClick={createStudent}
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Add Student
        </button>
      </div> */}
      <div className="flex justify-center mt-50">
        {/* <StudentCreateFormView /> */}
        {/* <StudentForm /> */}
        < StudentCreateFormView/>
      </div>
    </>
  )
}
