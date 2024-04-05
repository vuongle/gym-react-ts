import { SelectedPage } from '@/shared/enums'
import { ReactNode } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  children: ReactNode
  setSelectedPage: (value: SelectedPage) => void
}

const LinkButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  )
}

export default LinkButton
