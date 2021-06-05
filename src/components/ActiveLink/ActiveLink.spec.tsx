import { render } from '@testing-library/react'
import { ActiveLink } from '.'


jest.mock('next/router', () =>{
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

test('active link renders correctly', () => {
  const element = document.createElement('div');
  const { getByText } = render(
      <ActiveLink  href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
  )

    expect(getByText('Home')).toBeInTheDocument()
})

test('active link is receiving active class', () => {
  const element = document.createElement('div');
  const { getByText } = render(
      <ActiveLink  href="/test" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
  )

    expect(getByText('Home')).toHaveClass('active')
})