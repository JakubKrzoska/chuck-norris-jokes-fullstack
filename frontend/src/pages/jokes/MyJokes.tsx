import { Box, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';

const dummyJokes = [
  "Chuck Norris can win a game of Connect Four in three moves.",
  "When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris.",
  "Chuck Norris doesn't wear a watch. He decides what time it is."
];

export default function MyJokes() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', pt: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'text.primary' }}>
       My jokes list
      </Typography>

      <Box sx={{ flexGrow: 1, overflowY: 'auto', overflowX: 'hidden', pr: 1 }}>
        <List disablePadding>
          {dummyJokes.map((joke, index) => (
            <ListItem
              key={index}
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
                  sx={{right: 8 }} 
                >
                  <BackspaceIcon />
                </IconButton>
              }
            >
              <ListItemText 
                primary={`${index + 1}. "${joke}"`} 
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}