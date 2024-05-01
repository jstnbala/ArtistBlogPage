import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Sidebar(props) {
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: '#36454F' }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'white', fontWeight: 'bold', fontFamily: 'Poppins'}}>
          {title}
        </Typography>
        <Typography gutterBottom sx={{ fontSize: '18px', color: 'white', fontFamily: 'Poppins'}}>{description}</Typography>
      </Paper>
      <Typography variant="h5" gutterBottom sx={{ mt: 3, textAlign: 'center', fontWeight: 'bold', fontFamily: 'Poppins' }}>
        Some of His Iconic Tunes
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title} 
        sx={{ padding: '1px', color: 'black', fontFamily: 'Poppins', textDecoration: 'white'}}>
          {archive.title}
        </Link>
      ))}
      <Typography variant="h5" gutterBottom sx={{ mt: 3, fontFamily: 'Shrikhand' }}>
        Ed Sheeran's Social Media
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5, fontSize: '1.2rem', color: 'black', fontFamily: 'Poppins', textDecorationColor: 'white' }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon sx={{ fontSize: '2.5rem' }} /> 
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;
