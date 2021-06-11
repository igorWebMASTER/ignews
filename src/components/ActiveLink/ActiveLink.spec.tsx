import { render, screen} from '@testing-library/react'
import { ActiveLink } from './index'
import { debug } from 'console'


jest.mock('next/router', () =>{
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink Component', () =>{
  test('renders correctly', () => {
    render(
        <ActiveLink  href="/" activeClassName="active">
          <a>Home</a>
        </ActiveLink>
    )
  
      expect(screen.getByText('Home')).toBeInTheDocument()
  
      debug()
  })
  
  test('it adds active class if the link as currently active', () => {
     render(
        <ActiveLink  href="/" activeClassName="active">
          <a>Home</a>
        </ActiveLink>
    )
  
      expect(screen.getByText('Home')).toHaveClass('active')
  })
})

