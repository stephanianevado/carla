import { render, screen } from '@testing-library/react'
import { Temperament } from './Temperament'

test('maps temperament string to labels', () => {
  render(<Temperament temperament="Test, Test, Test" />)

  expect(screen.getAllByText('Test')).toHaveLength(3)
})

test('returns empty if bad format of temperament', () => {
  render(<Temperament temperament="Test Test Test" />)

  expect(screen.queryAllByText('Test')).toHaveLength(0)
})
