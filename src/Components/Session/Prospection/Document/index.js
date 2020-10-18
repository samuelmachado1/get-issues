import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CloudDownload } from '@material-ui/icons';

import DocumentPDF from './DocumentPDF';
// import { Container } from './styles';

function Document({ data }) {

  return (
    <PDFDownloadLink
      document={<DocumentPDF info={data} />}
      fileName={`${data.professionalName}.pdf`}
      style={{ color: '#000' }}
    >
      <CloudDownload />
    </PDFDownloadLink>
  );
}

export default Document;
