import { ChangeEvent } from 'react'
import { StyledSearch } from './SearchInput.style'

export type SearchInputProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <StyledSearch
      type="text"
      placeholder="Search"
      value={value}
      onChange={onChange}
    />
  )
}
