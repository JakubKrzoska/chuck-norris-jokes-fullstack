import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

export default function AddJoke() {
  const [jokeText, setJokeText] = useState('');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', pt: 5, gap: 5, width: '60%' }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'text.primary' }}>
          Add joke
        </Typography>

        <TextField
          fullWidth
          multiline
          rows={8}
          label="Joke"
          placeholder="Type your joke here"
          value={jokeText}
          onChange={(e) => setJokeText(e.target.value)}
          slotProps={{ inputLabel: { shrink: true } }}
          sx={{ 
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'secondary.light' },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'secondary.main' }
          }}
        />
      </Box>

      <Box sx={{pb: 3 }}>
        <Button 
          variant="contained" 
          fullWidth 
          disabled={!jokeText.trim()}
          sx={{ 
            py: 1.8, 
            fontSize: '16px', 
            fontWeight: 600,
            backgroundColor: jokeText.trim() ? 'primary.main' : '#D9D9D9',
            '&.Mui-disabled': { backgroundColor: '#D9D9D9', color: '#FDFDFA' }
          }}
        >
          ADD JOKE
        </Button>
      </Box>
    </Box>
  );
}