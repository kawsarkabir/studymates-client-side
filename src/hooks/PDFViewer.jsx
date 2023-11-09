import React from "react";
// import { Document, Page } from "react-pdf";

const PDFViewer = ({ assingmentPDFLink }) => {
  return (
    <div>
      <iframe
        src= {assingmentPDFLink}
        width="640"
        height="480"
      ></iframe>
    </div>
  );
};

export default PDFViewer;
