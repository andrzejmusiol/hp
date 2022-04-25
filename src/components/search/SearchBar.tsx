import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { IVoivodeships, IVoivodeshipOption, ICityOption } from '../../types/types'

const SearchBar = ({ voivodeships, cities }: IVoivodeships): React.ReactElement => {
  const [chosenVoivodeship, setChosenVoivodeship] = React.useState('')
  const [chosenCity, setChosenCity] = React.useState('')

  const handleVoivodeshipChange = (event: SelectChangeEvent) => {
    setChosenVoivodeship(event.target.value)
  }

  const handleCityChange = (event: SelectChangeEvent) => {
    setChosenCity(event.target.value)
  }

  const renderOptions = (options: IVoivodeshipOption[] | ICityOption[]) =>
    options.map((option: IVoivodeshipOption | ICityOption) => <MenuItem value={option.id}>{option.name}</MenuItem>)

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="voivodeship-select-label">Województwo</InputLabel>
        <Select
          labelId="voivodeship-select-label"
          value={chosenVoivodeship}
          onChange={handleVoivodeshipChange}
          label="voivodeship"
        >
          {renderOptions(voivodeships)}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="city-select-label">Miasto</InputLabel>
        <Select labelId="city-select-label" value={chosenCity} onChange={handleCityChange} label="city">
          {renderOptions(cities)}
        </Select>
      </FormControl>
    </>
  )
}

export default SearchBar
