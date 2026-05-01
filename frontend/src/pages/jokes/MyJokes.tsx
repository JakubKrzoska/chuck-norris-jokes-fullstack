import { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton, CircularProgress } from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { api } from '../../api'; 

interface Joke {
  id: number;
  text: string;
}

export default function MyJokes() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const data = await api.request('/jokes');
      setJokes(data);
    } catch (err) {
      console.error("Failed to fetch jokes", err);
    } finally {
      setLoading(false);
    }
  };

  // 2. Handle deleting a joke from the database
  const handleDelete = async (id: number) => {
    try {
      await api.request(`/jokes/${id}`, { method: 'DELETE' });
      // Update the local state to remove the joke from the UI immediately
      setJokes((prevJokes) => prevJokes.filter(joke => joke.id !== id));
    } catch (err) {
      console.error("Failed to delete joke", err);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', pt: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'text.primary' }}>
       My jokes list
      </Typography>

      <Box sx={{ flexGrow: 1, overflowY: 'auto', overflowX: 'hidden', pr: 1 }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress color="secondary" />
          </Box>
        ) : jokes.length === 0 ? (
          <Typography sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
            No jokes saved yet. Go draw some!
          </Typography>
        ) : (
          <List disablePadding>
            {jokes.map((joke, index) => (
              <ListItem
                key={joke.id}
                disableGutters
                sx={{
                  borderRadius: 2,
                  pl: 1, 
                  transition: '0.2s',
                  '&:hover': {
                    backgroundColor: '#E5B4C6',
                    '& .backspace-icon': {
                      color: 'secondary.main', 
                    },
                  }
                }}
                secondaryAction={
                  <IconButton  
                    className="backspace-icon"
                    sx={{ right: 8 }} 
                    onClick={() => handleDelete(joke.id)} 
                  >
                    <BackspaceIcon />
                  </IconButton>
                }
              >
                <ListItemText 
                  primary={`${index + 1}. "${joke.text}"`} 
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
}