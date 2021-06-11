import { render, screen } from '@testing-library/react'
import Header from '.'
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

jest.mock('next-auth/client', () => {
  return  {
    useSession(){
      return [null, false]
    }
  }
})

describe('ActiveLink Component', () =>{
  test('renders correctly', () => {
    render(<Header />)
  
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Posts')).toBeInTheDocument()
  
      debug()
  })

})

