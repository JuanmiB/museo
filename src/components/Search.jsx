import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const Search = ({ setFilterAntiques }) => {
  return (
        <Box
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="standard-basic"
                label="Buscar..."
                variant="standard"
                onChange={e => setFilterAntiques(e.target.value)} />
        </Box>

  )
}

export default Search
