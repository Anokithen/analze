"use client"
import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DeleteStudent() {
  const [studentId, setStudentId] = useState("")
  const [loading, setLoading] = useState(false)

  const deleteStudent = async () => {
    if (!studentId.trim()) {
      alert("Please enter a Student ID.")
      return
    }

    const confirmed = confirm(`Are you sure you want to delete student ID: ${studentId}?`)
    if (!confirmed) return

    setLoading(true)
    try {
      await axios.delete(
        `https://jey-student-api.up.railway.app/api/students/${studentId}`
      )
      alert(`Student ${studentId} deleted successfully.`)
      setStudentId("")
    } catch (error) {
      alert("Failed to delete student. Please check the ID and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <Link href="/students">
          <Button>Goto List</Button>
        </Link>
      </div>
      <div className="mx-auto flex max-w-md flex-col gap-4 p-6">
        <h1 className="text-xl font-bold">Delete Student</h1>

        <input
          type="text"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="w-full rounded border p-2"
        />

        <button
          onClick={deleteStudent}
          disabled={loading}
          className="w-full rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 disabled:opacity-50"
        >
          {loading ? "Deleting..." : "Delete Student"}
        </button>
      </div>
    </>
  )
}