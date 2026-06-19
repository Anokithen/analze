// "use client"

// import * as React from "react"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { format } from "date-fns"
// import { ChevronDownIcon } from "lucide-react"
// import { Controller, useForm } from "react-hook-form"
// import { toast } from "sonner"
// import * as z from "zod"
// import { useState } from "react"




// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   Field,
//   FieldError,
//   FieldGroup,
//   FieldLabel,
// } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// const formSchema = z.object({
//   fullname: z
//     .string()
//     .min(2, "Full name must be at least 2 characters."),

//   email: z
//     .string("Email is required")
// ,
//   age: z
//     .number("Age must be positive.")
//     .min(1, "Age must be positive."),

//   join: z
//     .date("Join date is required"),
// })

  


// export default function StudentForm() {
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       fullname: "",
//       email: "",
//     },
//   })

//   function onSubmit(data: z.infer<typeof formSchema>) {
//     toast("You submitted the following values:", {
//       description: (
//         <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
//           <code>{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//       position: "bottom-right",
//       classNames: {
//         content: "flex flex-col gap-2",
//       },
//       style: {
//         "--border-radius": "calc(var(--radius) + 4px)",
//       } as React.CSSProperties,
//     })
//   }



  

//   return (
//     <Card className="w-full sm:max-w-md">
//       <CardHeader>
//         <CardTitle>Add Student</CardTitle>
//         <CardDescription>
//           Enter the student&apos;s details below to create a new record.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form id="student-form" onSubmit={form.handleSubmit(onSubmit)}>
//           <FieldGroup>
//             <Controller
//               name="fullname"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel htmlFor="student-form-fullname">
//                     Full Name
//                   </FieldLabel>
//                   <Input
//                     {...field}
//                     id="student-form-fullname"
//                     aria-invalid={fieldState.invalid}
//                     placeholder="Enter Full name"
//                     autoComplete="off"

//                   />
//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />

//             <Controller
//               name="email"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel htmlFor="student-form-email">
//                     Email
//                   </FieldLabel>
//                   <Input
//                     {...field}
//                     id="student-form-email"
//                     type="email"
//                     aria-invalid={fieldState.invalid}
//                     placeholder="Enter email address"
//                     autoComplete="off"
//                   />
//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />

//             <Controller
//               name="age"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel htmlFor="student-form-age">
//                     Age
//                   </FieldLabel>
//                   <Input
//                     {...field}
//                     value={field.value ?? ""}
//                     id="student-form-age"
//                     type="number"
//                     aria-invalid={fieldState.invalid}
//                     placeholder="Enter age"
//                     autoComplete="off"
//                     onChange={(e) => field.onChange(e.target.valueAsNumber)}
//                   />
//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />

//             <Controller
//               name="join"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel htmlFor="student-form-join">
//                     Join Date
//                   </FieldLabel>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <Button
//                         id="student-form-join"
//                         type="button"
//                         variant="outline"
//                         data-empty={!field.value}
//                         aria-invalid={fieldState.invalid}
//                         className="w-full justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
//                       >
//                         {field.value ? (
//                           format(field.value as Date, "PPP")
//                         ) : (
//                           <span>Pick a date</span>
//                         )}
//                         <ChevronDownIcon className="size-4 opacity-50" />
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={field.value as Date | undefined}
//                         onSelect={field.onChange}
//                         defaultMonth={field.value as Date | undefined}
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />
//           </FieldGroup>
//         </form>
//       </CardContent>
//       <CardFooter>
//         <Field orientation="horizontal">
//           <Button type="button" variant="outline" onClick={() => form.reset()}>
//             Reset
//           </Button>
//           <Button type="submit" form="student-form">
//             Submit
//           </Button>
//         </Field>
//       </CardFooter>
//     </Card>
//   )
// }