import { useForm } from 'react-hook-form'
import { loginUserService } from '@/services/userServices'
import { useNavigate } from 'react-router-dom'
import '@/styles/form.css'
import logo from '@/assets/diamond.png'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        navigate('/')
        console.log('Usuario autenticado exitosamente')
      }
    } catch (error) {
      console.log('Ocurrió un error en Login', error)
    }
  }

  return (
    <div className='container'>
      <img className='logod' src={logo} alt='Logo' width='72' />
      <h1>Iniciar sesión</h1>
      <form action='#' onSubmit={handleSubmit(onSubmit)}>
        <div className='input-group'>
          <input type='email' className='input' placeholder='Correo electrónico' {...register('email')} />
        </div>
        <div className='input-group'>
          <input type='password' className='input' placeholder='Contraseña' {...register('password')} />
        </div>
        <input type='submit' className='button' defaultValue='Registrarse' />
      </form>
    </div>
  )
}

export default Login
