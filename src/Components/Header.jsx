/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import { saveAs } from 'file-saver';


const Header = () => {

  const downloadPDF = () => {
    const fileUrl = '../../public/kayes.pdf'; // Replace with the URL of your PDF file
    const fileName = 'kayes.pdf'; // Replace with the name of your PDF file

    // Fetch the file as a Blob object
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        // Save the Blob object as a file using FileSaver.js
        saveAs(blob, fileName);
      })
      .catch(error => {
        console.error(error);
      });
  }


  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        // width: "100vw",
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
      <a href="_" target="_blank" onClick={downloadPDF} type className="header-title">Get Resume</a>
    </div>
  );
};

export default Header;
