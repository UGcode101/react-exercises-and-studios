import React from 'react';

function HobbyLinks() {
  const HobbyLinks = [
    { url: "https://www.pdga.com/", text: "Disc Golf (PDGA)" },
    { url: "https://gizmodo.com/io9", text: "Science Fiction and Fantasy (io9)" },
  ];

  return (
    <div>
      {HobbyLinks.map((link, index) => (
        <React.Fragment key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a><br />
        </React.Fragment>
      ))}
    </div>
  );
}

export default HobbyLinks;
