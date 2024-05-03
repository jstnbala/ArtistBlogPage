import React from 'react';
import './index.css'; // Import CSS file

const Album = () => {
  const albums = [
    {
      title: "Plus",
      description: "Released in 2011, Plus is Ed Sheeran's debut studio album. It features a blend of folk, acoustic, and pop elements. The album includes hits like 'The A Team' and 'Lego House,' showcasing Sheeran's songwriting prowess and emotive vocal delivery.",
      image: "./images/plus.png"
    },
    {
      title: "Multiply",
      description: "Multiply, released in 2014, is Sheeran's second studio album. Building on the success of his debut, this album explores a wider range of musical styles, incorporating elements of R&B, hip hop, and pop. It includes popular tracks such as 'Sing,' 'Thinking Out Loud,' and 'Photograph.'",
      image: "./images/multiply.png"
    },
    {
      title: "Divide",
      description: "Released in 2017, Divide is Ed Sheeran's third studio album. It continues to showcase Sheeran's versatility as a musician, featuring a mix of pop, folk, and even elements of Irish traditional music. Hit singles from the album include 'Shape of You,' 'Castle on the Hill,' and 'Galway Girl.'",
      image: "./images/divide.png"
    },
    {
      title: "Equals",
      description: "The fifth studio album by English singer-songwriter Ed Sheeran. It was released on 29 October 2021 through Asylum and Atlantic Records. The album was supported by five singles: 'Bad Habits', 'Shivers', 'Overpass Graffiti', 'The Joker and the Queen', and '2step'. The song 'Visiting Hours' was released as a promotional single.",
      image: "./images/equals.png"
    },
    {
      title: "Subtract",
      description: "The sixth studio album by English singer-songwriter Ed Sheeran. It was released on 5 May 2023 through Asylum and Atlantic Records. A mostly acoustic album, production was handled by Aaron Dessner on every track, alongside Fred Again, Max Martin and Shellback, who all joined him to help produce lead single 'Eyes Closed'; while 'Boat' and 'Life Goes On' served as the respective second and third singles of the album.",
      image: "./images/minus.png"
    }
  ];

  return (
    <div className="album-container" style={{ backgroundColor: '#36454F' }}>
      <h1 className="title"> M a t h e m a t i c a l  -   E r a </h1>
      <div className="albums">
        {albums.map((album, index) => (
          <div key={index} className="album-card">
            <img src={album.image} alt={album.title} />
            <div className="album-info">
              <h2>{album.title}</h2>
              <p>{album.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Album;
