import { jsPDF } from "jspdf";
import React, { PureComponent } from "react";
export default class pdfGenerator extends PureComponent {
    // initialize the constructor
    constructor(props) {
        super(props)
        this.state = {}
    }

    // jsPdf Generator function

    jsPdfGenerator = (name, data) => {
        // new Document in jsPdf
        var doc = new jsPDF('p', 'pt', 'a4');

        // add some text to pdf document
        doc.text(20, 20, `s`)

        // set the pdf document
        doc.save(`ss.pdf`)
    }

    //making render function of the component
    render() {
        return (
            <button className="btn btn-warning btn-sm"
                onClick={this.jsPdfGenerator}>GeneratePDF</button>)
    }

}