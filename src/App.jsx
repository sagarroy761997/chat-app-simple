import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, TextField } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Box></Box>
      <Box><TextField id="messege" label="Write your messege" variant="outlined" />
      <Button>send</Button></Box>
    </Box>
  )
}

export default App
