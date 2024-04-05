import { SelectedPage } from '@/shared/enums'
import { MediumScreenMinWidth } from '@/shared/media-query'
import useMediaQuery from '@/hooks/useMediaQuery'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LinkButton from '../link-button'
import { motion } from 'framer-motion'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery(MediumScreenMinWidth)

  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      {/*images and main header*/}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 '
      >
        {/*main header*/}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/*headings: includes background image(before:content-evolvetext), image(HomePageText) and paragraph*/}
          <motion.div
            className='md:-top-20'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <div className='relative'>
              <div className='before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext'>
                <img src={HomePageText} alt='' />
              </div>
            </div>
            <p className='mt-8 text-sm '>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you
              Dream of.. Get Your Dream Body Now.
            </p>
          </motion.div>
          {/*link button and link*/}
          <motion.div
            className='md: mt-8 flex items-center gap-8'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <LinkButton setSelectedPage={setSelectedPage}>Join Now</LinkButton>
            <AnchorLink
              className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/*images*/}
        <div className='flex basis-3/5 justify-center md:z-10'>
          <img src={HomePageGraphic} alt='' />
        </div>
      </motion.div>

      {/*sponsors*/}
      {isAboveMediumScreens && (
        <div className='h-[150px] w-full bg-primary-100 py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex w-3/5 items-center justify-between gap-8'>
              <img src={SponsorRedBull} alt='' />
              <img src={SponsorForbes} alt='' />
              <img src={SponsorFortune} alt='' />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
