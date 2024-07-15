import ReactDOMServer from 'react-dom/server';
import html2pdf from 'html2pdf.js/dist/html2pdf.min';

export const TestPrintFunction =({content})=> {
    const pdfJSX = () => {
        return (
            <>
                {content}
            </>
        )
    }

    const printHandler = () => {
        const printElement = ReactDOMServer.renderToString(pdfJSX());
        // const printElement = pdfJSX();

        html2pdf().from(printElement).save();
    }

    return (
        <div className="testPrintFunction">
            <button onClick={printHandler}>Print</button>
        </div>
    );
}
