import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function MarkdownListItem(props) {
  return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
}

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
        component: 'h1',
        fontFamily: 'Platypi, serif',
        fontWeight: 'bold',
      },
    },
    h2: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h6',
        component: 'h2',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
      },
    },
    h3: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'subtitle1',
        fontFamily: 'Poppins, sans-serif',
      },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
        fontFamily: 'Poppins, sans-serif',
      },
    },
    p: {
      component: Typography,
      props: {
        paragraph: true,
        fontFamily: 'Poppins, sans-serif',
      },
    },
    a: {
      component: Link,
      props: {
        style: { color: 'white', textDecorationColor: 'white' }, // Set the color to black
      },
    },
    li: {
      component: MarkdownListItem,
    },
  },
};

export default function Markdown(props) {
  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/edbg.jpg)', // Replace with the correct path to your image
        backgroundSize: 'auto',
        color: 'white',
        padding: '20px', // Adjust as needed
      }}
    >
      <ReactMarkdown options={options} {...props} />
    </Box>
  );
}

