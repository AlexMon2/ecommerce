import { useForm } from 'react-hook-form'
import { registerUserService } from '@/services/userServices'
import { useNavigate } from 'react-router-dom'
import '@/styles/form.css'
import logo from '@/assets/diamond.png'

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 201) {
        navigate('/login')
        console.log('Usuario creado exitosamente')
      }
    } catch (error) {
      console.log('Ocurrió un error en Signup', error)
    }
  }

  return (
    <main className='container w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className='logod' src={logo} alt='Logo' width='72' />
        <h1 className='regis'>Registrarse</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            {...register('first_name')}
          />
          <label htmlFor='first_name'>Nombre</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            {...register('last_name')}
          />
          <label htmlFor='last_name'>Apellido</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            {...register('gender')}
          >
            <option value=''>Seleccionar...</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
          </select>
          <label htmlFor='gender'>Genero</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            {...register('email')}
          />
          <label htmlFor='email'>Correo electrónico</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            {...register('password')}
          />
          <label htmlFor='password'>Contraseña</label>
        </div>

        <button className='button' type='submit'>Enviar</button>
      </form>
    </main>
  )
}

export default Signup
