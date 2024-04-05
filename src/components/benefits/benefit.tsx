import { SelectedPage } from '@/shared/enums'
import { BenefitType } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

const childVariantMotion = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

type Props = {
  key: string
  benefit: BenefitType
  setSelectedPage: (value: SelectedPage) => void
}

export default function Benefit({ key, benefit, setSelectedPage }: Props) {
  console.log(key)
  return (
    <motion.div
      variants={childVariantMotion}
      className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'
    >
      <div className='mb-4 flex justify-center'>
        {/*icon wrapper*/}
        <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
          {/*icon*/}
          {benefit.icon}
        </div>
      </div>

      <h4 className='font-bold'>{benefit.title}</h4>
      <p className='my-3'>{benefit.description}</p>
      <AnchorLink
        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  )
}
