import { SelectedPage } from '@/shared/enums'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import { motion } from 'framer-motion'
import HText from '../shared/htext'
import { useForm } from 'react-hook-form'

//FormSubmit
//Use this random-like string 51a5b0a6907591ae22b02ca9e54b85ad to replace your naked email address

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function ContactUs({ setSelectedPage }: Props) {
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm()
  const inputStyle = 'mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white'

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <section id='contactus' className='mx-auto w-5/6 py-24'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/*header */}
        <motion.div
          className='md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <HText>
            <span className='text-primary-500'>JOIN NOW</span> TO GET SHAPE
          </HText>
          <p className='my-5'>
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim
            pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        {/*form and image*/}
        <div className='mt-10 justify-between gap-8 md:flex'>
          <motion.div
            className='mt-10 basis-3/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <form
              target='_blank'
              onSubmit={onSubmit}
              method='POST'
              action='https://formsubmit.co/51a5b0a6907591ae22b02ca9e54b85ad'
            >
              <input
                className={inputStyle}
                type='text'
                placeholder='NAME'
                {...register('name', {
                  required: true,
                  maxLength: 100
                })}
              />
              {
                // display errors of the name field
                errors.name && (
                  <p className='mt-1 text-primary-500'>
                    {errors.name.type === 'required' && 'NAME is required'}
                    {errors.name.type === 'maxLength' && 'NAME is not exceeded 100 characters'}
                  </p>
                )
              }

              <input
                className={inputStyle}
                type='email'
                placeholder='EMAIL'
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
              />
              {
                // display errors of the name field
                errors.email && (
                  <p className='mt-1 text-primary-500'>
                    {errors.email.type === 'required' && 'EMAIL is required'}
                    {errors.email.type === 'pattern' && 'EMAIL is not valid'}
                  </p>
                )
              }

              <textarea
                className={inputStyle}
                rows={4}
                placeholder='MESSAGE'
                {...register('message', {
                  required: true
                })}
              />
              {
                // display errors of the message field
                errors.message && (
                  <p className='mt-1 text-primary-500'>{errors.message.type === 'required' && 'MESSAGE is required'}</p>
                )
              }
              <button className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            className='basic-2/5 relative mt-16 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className='w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext'>
              <img className='w-full' src={ContactUsPageGraphic} alt='' />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
