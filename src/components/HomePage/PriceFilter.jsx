
import { useForm } from 'react-hook-form'
import './styles/PriceFilter.css'

const PriceFilter = ({ setFromTo }) => {


  const { handleSubmit, register, reset } = useForm()

  const submit = data => {
    const from = data.from
    const to = data.to

    setFromTo({
      from: from === '' ? 0 : +from,
      to: to === '' ? Infinity : Number(to)
    })
  }

  return (

    <section className='price-section'>
      <h3 className='price__title'>Filter for Price</h3>

      <form onSubmit={handleSubmit(submit)}>

        <section className='content-spn'>
          <input placeholder='From' className='price__input' min={1} type="number" {...register('from')} />
          <input placeholder='To' className='price__input' min={1} type="number" {...register('to')} />
        </section>

        <button className='btn-appl'>Apply</button>

      </form>

    </section>
  )
}

export default PriceFilter