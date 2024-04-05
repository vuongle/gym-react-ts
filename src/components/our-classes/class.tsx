import { ClassType } from '@/shared/types'

type Props = {
  ourClass: ClassType
}

export default function OurClass({ ourClass }: Props) {
  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`
  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
      <div className={overlayStyles}>
        <p className='text-2xl'>{ourClass.name}</p>
        <p className='pt-5'>{ourClass.description}</p>
      </div>
      <img alt='' src={ourClass.image} />
    </li>
  )
}
