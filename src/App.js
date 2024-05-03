// App.js
import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import axios from 'axios'; 
import Album from './Album'; 
import Merchandise from './Merchandise'; 
import Fans from './Fans'; 
import Biography from './Biography'; 
import Quotes from './Quotes';

const sections = [
  { title: 'Albums of Ed Sheeran', url: '/album' },
  { title: 'Merchandise of Ed Sheeran', url: '/merchandise' },
  { title: 'Fans of Ed Sheeran', url: '/fans' },
  { title: 'Biography of Ed Sheeran', url: '/biography' },
  { title: 'Quotes', url: '/quotes' },
];

const mainFeaturedPost = {
  title: 'Ed Sheeran',
  description:
    "Melodic storyteller, guitar-strumming bard, soulful troubadour; his music weaves tales, emotions, and dreams into timeless melodies. Sheeran's essence resonates.",
  image: './images/edsheeran.jpg',
  imageText: 'main image description',
  linkText: 'Continue Reading…',
};

const featuredPosts = [
  {
    title: 'Mathematical Melodies: The 2024 Tour',
    date: 'February 10, 2024',
    description:
      "Sheeran's tour lineup boasts over 20 chart-toppers spanning his discography, where each album, named after math symbols.",
    image: './images/ed-sheeran-tour.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Subtract (-) New Album',
    date: 'May 5, 2023',
    description:
      'Subtract is the sixth studio album by English singer-songwriter Ed Sheeran. It was released on 5 May 2023 through Asylum and Atlantic Records.',
    image: './images/Edsubtract.png',
    imageLabel: 'Image Text',
  },
];

const defaultTheme = createTheme();

export default function Blog() {
  const [poststate1, setPoststate1] = React.useState();
  const [poststate2, setPoststate2] = React.useState();
  const [poststate3, setPoststate3] = React.useState();

  React.useEffect(() => {
    axios.get(post1).then(res => setPoststate1(res.data));
    axios.get(post2).then(res => setPoststate2(res.data));
    axios.get(post3).then(res => setPoststate3(res.data));
  }, []);  

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Router>
          <Header title="Beyond the Stage: Ed Sheeran Unplugged" sections={sections} />
          <main>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                      {featuredPosts.map((post) => (
                        <FeaturedPost key={post.title} post={post} />
                      ))}
                    </Grid>
                    <Grid container spacing={5} sx={{ mt: 3 }}>
                      {(poststate1 && poststate2 && poststate3) && (
                        <Main title='The Melodic Chronicles of Ed Sheeran' posts={[poststate1, poststate2, poststate3]} />
                      )}
                      <Sidebar
                        title="The Man Behind the Music"
                        description="Ed Sheeran, a musician who connects people through his heartfelt songs, shares his soulful melodies, spreading joy and unity worldwide."
                        archives={[
                          { title: 'Shape of You - March 2017', url: '#' },
                          { title: 'Thinking Out Loud - February 2014', url: '#' },
                          { title: 'Perfect - January 2017', url: '#' },
                          { title: 'Castle on the Hill - November 2016', url: '#' },
                          { title: 'Photograph - October 2014', url: '#' },
                          { title: 'The A Team - September 2011', url: '#' },
                          { title: 'Galway Girl - August 2017', url: '#' },
                          { title: 'I See Fire - July 2013', url: '#' },
                          { title: 'Sing - June 2014', url: '#' },
                          { title: 'Lego House - May 2011', url: '#' },
                          { title: "Don't - April 2014", url: '#' }
                        ]}
                        social={[
                          { name: 'Instagram', icon: InstagramIcon },
                          { name: 'Twitter', icon: XIcon },
                          { name: 'Facebook', icon: FacebookIcon },
                        ]}
                      />
                    </Grid>
                  </>
                }
              />
              <Route path="/album" element={<Album />} />
              <Route path="/merchandise" element={<Merchandise />} />
              <Route path="/fans" element={<Fans />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/quotes" element={<Quotes />} />
            </Routes>
          </main>
        </Router>
        <Footer
          title="Ed Sheeran"
          description="Crafting melodies, weaving stories, and painting emotions with every chord. Here's to the journey of music & beauty of connecting souls."
        />
      </Container>
    </ThemeProvider>
  );
}
