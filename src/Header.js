import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Header(props) {
  const { sections, title } = props;
  const [activeSection, setActiveSection] = React.useState(null);

  const handleSectionClick = (title) => {
    setActiveSection(title);
  };

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 3,
          borderColor: 'divider',
          backgroundColor: '#36454F', // Background color
          color: 'white', // Text color
        }}
      >
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white' }}>Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{
            flex: 1,
            fontWeight: 'bold',
            color: 'white',
            fontStyle: 'italic',
            fontSize: '27px',
            fontFamily: title === "Beyond the Stage: Ed Sheeran Unplugged" ? 'Platypi, serif' : 'inherit',
          
          }}
        >
          {title}
        </Typography>
        <IconButton style={{ color: 'white' }}>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="medium" style={{ color: 'white', borderColor: 'white' }}>
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto', backgroundColor: 'white', color: 'black' }}
      >
        <Link
          color="inherit"
          noWrap
          variant="body2"
          href="/"
          sx={{
            p: 1,
            flexShrink: 0,
            fontFamily: 'Poppins',
          }}
          onClick={() => setActiveSection(null)}
          className="section-link">
          Home
        </Link>
        {sections.map((section) => (
          <Link
            color="inherit"
            fontWeight={'bold'}
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{
              p: 1,
              flexShrink: 0,
              fontFamily: 'Poppins',
              fontWeight: section.title === activeSection ? 'bold' : 'normal',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
            onClick={() => handleSectionClick(section.title)}
            className="section-link"
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
