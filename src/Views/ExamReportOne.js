import React from 'react'
import { Button, Col, Row, Table } from 'reactstrap'
import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function ExReportOne() {
  return (
          <div className="cRDmYnew">
                <Row>
                <Table id="convertxlsoutput1">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Item 1</th>
                        <th>Item 2</th>
                        <th>Item 3</th>
                        <th>Item 4</th>
                        <th>Item 5</th>
                        <th>Item 6</th>
                        <th>Item 7</th>
                        <th>Item 8</th>
                        <th>Item 9</th>
                        <th>Item 10</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Putri</td>
                        <td>A</td>
                        <td>B</td>
                        <td>C</td>
                        <td>D</td>
                        <td>E</td>
                        <td>E</td>
                        <td>D</td>
                        <td>C</td>
                        <td>B</td>
                        <td>A</td>
                    </tr>
                    <tr>
                    <td>2</td>
                        <td>IW</td>
                        <td>A</td>
                        <td>B</td>
                        <td>C</td>
                        <td>D</td>
                        <td>E</td>
                        <td>E</td>
                        <td>D</td>
                        <td>C</td>
                        <td>B</td>
                        <td>A</td>
                    </tr>
                    <tr>
                    <td>3</td>
                        <td>Odi</td>
                        <td>A</td>
                        <td>B</td>
                        <td>C</td>
                        <td>D</td>
                        <td>E</td>
                        <td>E</td>
                        <td>D</td>
                        <td>C</td>
                        <td>B</td>
                        <td>A</td>
                    </tr>
                    <tr>
                    <td>4</td>
                        <td>Oleh</td>
                        <td>A</td>
                        <td>B</td>
                        <td>C</td>
                        <td>D</td>
                        <td>E</td>
                        <td>E</td>
                        <td>D</td>
                        <td>C</td>
                        <td>B</td>
                        <td>A</td>
                    </tr>
                    <tr>
                    <td>5</td>
                        <td>Dedi</td>
                        <td>A</td>
                        <td>B</td>
                        <td>C</td>
                        <td>D</td>
                        <td>E</td>
                        <td>E</td>
                        <td>D</td>
                        <td>C</td>
                        <td>B</td>
                        <td>A</td>
                    </tr>
                    <tr>
                    <td>6</td>
                        <td>Irhan</td>
                        <td>A</td>
                        <td>B</td>
                        <td>C</td>
                        <td>D</td>
                        <td>E</td>
                        <td>E</td>
                        <td>D</td>
                        <td>C</td>
                        <td>B</td>
                        <td>A</td>
                    </tr>
                    <tr>
                    <td>7</td>
                        <td>Budi</td>
                        <td>A</td>
                        <td>B</td>
                        <td>C</td>
                        <td>D</td>
                        <td>E</td>
                        <td>E</td>
                        <td>D</td>
                        <td>C</td>
                        <td>B</td>
                        <td>A</td>
                    </tr>
                    <tr>
                    <td>8</td>
                        <td>Jati</td>
                        <td>A</td>
                        <td>B</td>
                        <td>C</td>
                        <td>D</td>
                        <td>E</td>
                        <td>E</td>
                        <td>D</td>
                        <td>C</td>
                        <td>B</td>
                        <td>A</td>
                    </tr>
                </Table>
                </Row>
                
                <Row className="d-flex justify-content-center">
                <ReactHTMLTableToExcel
                    id="convertxlsoutput1-button"
                    className="download-table-xls-button"
                    table="convertxlsoutput1"
                    filename="convertxlsoutput1"
                    sheet="output1"
                    buttonText="Download as XLS Output 1"/>
                </Row>
            </div>
  )
}

export default ExReportOne