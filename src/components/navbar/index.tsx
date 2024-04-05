import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import Link from './link'
import { SelectedPage } from '@/shared/enums'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useState } from 'react'
import LinkButton from '../link-button'

type NavbarProps = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}
export default function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: NavbarProps) {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

  const flexBetween = 'flex items-center justify-between'
  const navBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'

  return (
    <nav>
      <div className={`${flexBetween} ${navBackground} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/*left side: contain logo only */}
            <img src={Logo} alt='' />

            {/*right side: contain 2 sections: links and Sign In + become a member button */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/*right side: links */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                {/*right side: Sign In + become a member button */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <LinkButton setSelectedPage={setSelectedPage}>Become a Member</LinkButton>
                </div>
              </div>
            ) : (
              <button className='rounded-full bg-secondary-500 p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className='h-6 w-6 text-white' />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu on the right */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className='fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
          {/* close icon */}
          <div className='flex justify-end p-8 pr-10'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className='h-6 w-6 text-gray-400' />
            </button>
          </div>

          {/* menu item in colum format */}
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        </div>
      )}
    </nav>
  )
}
