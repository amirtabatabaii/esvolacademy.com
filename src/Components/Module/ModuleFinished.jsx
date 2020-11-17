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
import bgtest from "../../assets/bgtest.png";

const Quixote = () => (
  <Document title='ESVOL'>
    <Page size='A4' orientation='landscape'>
      <Image src={bgtest} style={styles.pageBackground} />
      <Text style={styles.text}>TEST TEST</Text>
    </Page>
  </Document>
);

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
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
    margin: 60,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
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
            <Quixote />
          </PDFViewer>

          <Footer userActiveModule={"Main"} />
        </div>
      </div>
    );
  }
}
export default ModuleFinished;
