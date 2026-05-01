import { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import { api } from '../../api'; 

export default function AddJoke() {
  const [jokeText, setJokeText] = useState('');
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleAddJoke = async () => {
    setStatus(null); // Clear previous status
    try {
      await api.request('/jokes', {
        method: 'POST',
        body: JSON.stringify({ text: jokeText }),
      });
      
      // Provide feedback and clear the input[cite: 3]
      setStatus({ type: 'success', message: 'Your joke has been added to the list!' });
      setJokeText(''); 
    } catch (err) {
      const error = err as Error;
      setStatus({ type: 'error', message: error.message || 'Failed to add joke' });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', pt: 5, gap: 5, width: '60%' }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'text.primary' }}>
          Add joke
        </Typography>

        {/* Status feedback for the user */}
        {status && <Alert severity={status.type} sx={{ mb: 2 }}>{status.message}</Alert>}

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

      <Box sx={{ pb: 3 }}>
        <Button 
          variant="contained" 
          fullWidth 
          disabled={!jokeText.trim()}
          onClick={handleAddJoke} 
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