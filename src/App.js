import React, {useRef} from 'react';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import googleimg from "./download.png"

function App() {

  const pdfExportComponent = useRef(null)
  const contentArea = useRef(null)

  const handleClickWithComponent = (e) => {
    console.log("log");
    pdfExportComponent.current.save();
  }

  const handleClickWithMethod = (e) => {
    savePDF(contentArea.current, {paperSize: "A4"});
  }

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <PDFExport ref={pdfExportComponent} paperSize="A4">
      <div ref={contentArea}>
        <div>
          <img src={googleimg} alt="img" />
          <p>this is test app</p>
          <h1>this is test app</h1>
          <p>احمد ناصر حسن</p>
        </div>
      </div>
      </PDFExport>
      <button className='bg-gray-400 py-2 px-4' onClick={handleClickWithComponent}>save component</button>
      <button className='bg-gray-400 py-2 px-4' onClick={handleClickWithMethod}>save method</button>
    </div>
  );
}

export default App;
