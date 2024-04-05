import { SelectedPage } from '@/shared/enums'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type LinkProps = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}
export default function Link({ page, selectedPage, setSelectedPage }: LinkProps) {
  const lowercasePage = page.toLocaleLowerCase().replace(/ /g, '') as SelectedPage

  return (
    <AnchorLink
      href={`#${lowercasePage}`}
      onClick={() => setSelectedPage(lowercasePage)}
      className={`${selectedPage === lowercasePage ? 'text-primary-500' : ''}
        transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  )
}
