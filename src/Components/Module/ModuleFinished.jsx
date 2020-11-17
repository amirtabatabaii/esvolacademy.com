import React, { Component } from "react";
import Footer from "../Footer/Footer";
import ModuleNavBar from "./ModuleNavBar";
import {
  Document,
  Page,
  Image,
  StyleSheet,
  Text,
  Font,
} from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import bgImage from "../../assets/esvol_sertifikalar.png";
// import fnt from "../../assets/EBGaramond-VariableFont_wght.ttf";

Font.register({
  family: "EB Garamond",
  src: "https://kastanjetextile.com/static/css/fonts/EBGaramond.ttf",
});

// Font.register({
//   family: "Oswald",
//   src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
// });

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "EB Garamond",
  },
  pageBackground: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    display: "block",
    height: "100%",
    width: "100%",
  },
  text: {
    marginLeft: 200,
    marginRight: 200,
    fontSize: 20,
    textAlign: "justify",
    fontFamily: "EB Garamond",
    lineHeight: 1.5,
  },
  header: {
    marginTop: 180,
    marginBottom: 60,
    fontSize: 30,
    textAlign: "center",
    color: "black",
    fontFamily: "EB Garamond",
  },
});

class ModuleFinished extends Component {
  render() {
    // const { userActiveModule } = this.props;

    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <ModuleNavBar userActiveModule='Module1' />

          <PDFViewer style={{ width: "100%", height: 600 }}>
            <Document title='ESVOL'>
              <Page size='A4' orientation='landscape'>
                <Image src={bgImage} style={styles.pageBackground} />
                <Text style={styles.header}>
                  {"Certificate of Completion".toUpperCase()}
                </Text>
                <Text style={styles.text}>
                  This is to certify that{" "}
                  {localStorage.getItem("firstName").toUpperCase()}{" "}
                  {localStorage.getItem("lastName").toUpperCase()} has
                  successfully completed the online course on Social Leadership
                  and Social Innovation for Sport Volunteers.
                </Text>
              </Page>
            </Document>
          </PDFViewer>

          <Footer userActiveModule={"Main"} />
        </div>
      </div>
    );
  }
}

export default ModuleFinished;
