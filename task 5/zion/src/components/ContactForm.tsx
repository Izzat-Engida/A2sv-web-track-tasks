import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { ShowList } from './ShowList'

type FormType = {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [dataList, setDataList] = useState<FormType[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>()

  const onSubmit = (formData: FormType) => {
    setDataList(prev => [...prev, formData]) 
    reset() 
  }

  return (
    <>
    <div className='input'>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            {...register('name', {
              required: 'Please enter your name',
            })}
          />
          <p>{errors.name?.message}</p>
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register('email', {
              required: 'Please enter a valid email',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email format',
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label>Message:</label>
          <textarea
            
            {...register('message', {
              required: 'Please enter a message',
            })}
          />
          <p>{errors.message?.message}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    <div className='output'>
      <ShowList data={dataList} />
    </div>
    </>
  )
}
