import { useForm } from 'react-hook-form'

type Formtype = {
  name: string
  email: string
  password: string
  confirmpassword: string
}

export function For() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Formtype>()

  const onSubmit = (data: Formtype) => {
    console.log("Form submitted successfully!")
    console.log(data)
  }

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Enter full name: </label>
          <input
            type="text"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters',
              },
            })}
          />
          <p>{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="email">Enter your email: </label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address',
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="password">Enter your password: </label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          <p>{errors.password?.message}</p>
        </div>

        <div>
          <label htmlFor="confirmpassword">Confirm password: </label>
          <input
            type="password"
            {...register('confirmpassword', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === getValues('password') || 'Passwords do not match',
            })}
          />
          <p>{errors.confirmpassword?.message}</p>
        </div>

        <button type="submit">Confirm</button>
      </form>
    </>
  )
}
