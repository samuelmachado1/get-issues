import {React, useMemo} from 'react';
import {
  View,
  Document,
  
} from '@react-pdf/renderer';

import logo from '../../../../../assets/images/stefanini.png';
import footer from '../../../../../assets/images/footer-document.png';

import {
  Page,
  Body,
  ItemText,
  DetailText,
  BrandText,
  Contact,
  Img,
  Footer,
  Logo,
  FooterTextInfo,
} from './styles';

const DocumentPDF = ({ info }) => {
  

  // const languages = useMemo(() => {
  //   const infos = '';
  //   info.languages.forEach((element) => {
  //     infos.concat(`${element.name} \n`);
  //   });
  //   return infos;
  // }, [info]);

  return (
    <Document>
      <Page size="A4">
        <View>
          <Logo src={logo} />
        </View>
        <Body>
          <View>
            <ItemText>
              FORMAÇÃO
            </ItemText>
            <DetailText>
              {info.formations}
            </DetailText>
          </View>
          <View>
            <ItemText>
              Idioma
            </ItemText>
            <DetailText>
              languages
            </DetailText>
          </View>
          <View>
            <ItemText>
              CERTIFICAÇÕES
            </ItemText>
            <DetailText>
              {info.certifications}
            </DetailText>
          </View>
          <View>
            <ItemText>
              PRINCIPAIS COMPETÊNCIAS
            </ItemText>
            <DetailText>
              {info.main_compentations}
            </DetailText>
          </View>
          <View>
            <ItemText>
              Disponibilidade
            </ItemText>
            <DetailText>
              {`A partir de ${info.avaible}`}
            </DetailText>
          </View>
        </Body>
        {/* <View style={styles.footer}> */}
        <Footer>
          <Img src={footer} />
          <Contact>
            <BrandText>
              Stefanini Group
            </BrandText>
            <FooterTextInfo>
              (11) 3094-6000  • www.stefanini.com
            </FooterTextInfo>
          </Contact>
        </Footer>
      </Page>
    </Document>
  );
};

export default DocumentPDF;
