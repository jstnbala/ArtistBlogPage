// Footer.js
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: '#36454F', py: 6, color: '#fff'}}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" fontFamily={'Shrikhand, serif'} gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
          fontFamily="Poppins"
        >
          {description}
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <InstagramIcon style={{ color: '#fff' }} />
          </Grid>
          <Grid item>
            <FacebookIcon style={{ color: '#fff' }} />
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" fontFamily="Poppins">
          Copyright © 2024, Ed Sheeran. Designed © 2024, BALA-VIENA. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;