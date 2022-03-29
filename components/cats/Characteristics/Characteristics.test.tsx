import { render, screen } from '@testing-library/react'
import { Characteristics } from './Characteristics'

const characteristics = {
  adaptability: 0,
  hypoallergenic: 1,
  affectionLevel: 2,
  childFriendly: 3,
  dogFriendly: 4,
  indoor: 0,
}

test('renders all the characteristics', () => {
  render(<Characteristics {...characteristics} />)

  expect(screen.getAllByRole('listitem')).toHaveLength(6)
})

test('shows Low, Medium and High labels', () => {
  render(<Characteristics {...characteristics} />)

  expect(screen.getAllByRole('listitem')).toHaveLength(6)
  expect(screen.getByText(/adaptability/i).textContent).toContain('Low')
  expect(screen.getByText(/affection/i).textContent).toContain('Medium')
  expect(screen.getByText(/child/i).textContent).toContain('Medium')
  expect(screen.getByText(/dog/i).textContent).toContain('High')
})

test('shows Yes and No labels', () => {
  render(<Characteristics {...characteristics} />)

  expect(screen.getAllByRole('listitem')).toHaveLength(6)
  expect(screen.getByText(/hypoallergenic/i).textContent).toContain('Yes')
  expect(screen.getByText(/indoor/i).textContent).toContain('No')
})
