import React from 'react';
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';
import './styles/Register.css'

const Register = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { registerUser } = useAuth();

  const submit = data => {
    registerUser(data);
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'unknown'
    });
  };

  return (
    <div className='content-register'>
      <form onSubmit={handleSubmit(submit)}>

        <h2 className='title-register'>Register</h2>

        <section className='inputs-section'>
          <label>
            <span>First Name</span>
            <input
              type="text"
              placeholder='Ej: John Paul'
              {...register('firstName', { required: "First Name is required", maxLength: 20 })}
            />
            {errors.firstName && <span className='span-error'>{errors.firstName.message}</span>}
            <br />
          </label>

          <label>
            <span>Last Name</span>
            <input
            type="text"
            placeholder='Ej: Smith Jones'
            {...register('lastName', { required: "Last Name is required", maxLength: 20 })}  />
            {errors.lastName && <span className='span-error'>{errors.lastName.message}</span>}
            <br />
          </label>

          <label>
            <span>Email</span>
            <input 
            type="email"
            placeholder='Ej: abcxy@domain.com'
            {...register('email', { required: "Email is required" })}  />
            {errors.email && <span className='span-error'>{errors.email.message}</span>}
            <br />
          </label>

          <label>
            <span>Password</span>
            <input 
            placeholder='Ej: 12345678'
            type="password"
            {...register('password', { required: "Password is required" })}  />
            {errors.password && <span className='span-error'>{errors.password.message}</span>}
            <br />
          </label>

          <label>
            <span>Gender</span>
            <select {...register('gender')}>
              <option value={'unknown'}>Unknown</option>
              <option value={'male'}>male</option>
              <option value={'female'}>female</option>
              <option value={'other'}>I prefer don't say it</option>
            </select>
          </label>
        </section>

        <button className='register-boton'>Submit</button>

      </form>
    </div>
  );
};

export default Register;
