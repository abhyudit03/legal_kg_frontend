import React, { Fragment } from "react";
import Navbar from "./Nav.js"
import "./Nav.css"
import Timeline from "./Timeline.js";


const data = {
  "akomaNtoso": {
      "@xmlns": "http://www.example.org/PreventionOfMoney-LaunderingAct-2005",
      "act": {
          "@contains": "originalVersion",
          "meta": null,
          "preface": {
              "p": {
                  "legislature": "Central Legislature",
                  "docType": "An Act",
                  "docNumber": "No. 15 of 2003",
                  "docTitle": {
                      "@id": "ActTitle",
                      "@refersTo": "#TheActTitle",
                      "#text": "Prevention of Money Laundering Act, 2002"
                  },
                  "docDate": [
                      {
                          "@date": "2003-01-17",
                          "@refersTo": "#publicationDate",
                          "p": "Date of Publication:",
                          "#text": "17th January 2003"
                      },
                      {
                          "@date": "2005-07-17",
                          "@refersTo": "#commencementDate",
                          "p": "Date of Commencement:",
                          "#text": "1st July 2005"
                      }
                  ]
              }
          },
          "preamble": {
              "p": "An Act to prevent money-laundering and to provide for confiscation of property derived from, or involved in, money-laundering and for matters connected therewith or incidental thereto. \n            WHEREAS the Political Declaration and Global Programme of Action, annexed to the resolution S-17/2 was adopted by the General Assembly of the United Nations at its seventeenth special session on the twenty-third day of February, 1990; \n            AND WHEREAS the Political Declaration adopted by the Special Session of the United Nations General Assembly held on 8th to 10th June, 1998 calls upon the Member States to adopt national money-laundering legislation and programme; \n            AND WHEREAS it is considered necessary to implement the aforesaid resolution and the Declaration.",
              "formula": {
                  "@class": "preambleEnacted",
                  "p": "ENACTED by Parliament in the Fifty-third Year of the Republic of India as follows:-"
              }
          },
          "body": {
              "chapter": {
                  "@id": "chp2",
                  "num": {
                      "@title": "Two",
                      "#text": "Chapter II"
                  },
                  "heading": "OFFENCE OF MONEY-LAUNDERING",
                  "section": [
                      {
                          "@id": "sct3",
                          "num": {
                              "@title": "3",
                              "#text": "3"
                          },
                          "heading": "Offence of money-laundering",
                          "paragraph": {
                              "@id": "sct3-par001",
                              "num": {
                                  "@title": "1",
                                  "#text": "(1)"
                              },
                              "content": {
                                  "p": "Whosoever directly or indirectly attempts to indulge or knowingly assists or knowingly is a party or is actually involved in any process or activity connected with the proceeds of crime and projecting it as untainted property shall be guilty of offence of money-laundering."
                              }
                          }
                      },
                      {
                          "@id": "sct4",
                          "num": {
                              "@title": "4",
                              "#text": "4"
                          },
                          "heading": "Punishment for money-laundering",
                          "paragraph": [
                              {
                                  "@id": "sct4-par001",
                                  "num": {
                                      "@title": "1",
                                      "#text": "(1)"
                                  },
                                  "content": {
                                      "p": "Whoever commits the offence of money-laundering shall be punishable with rigorous imprisonment for a term which shall not be less than three years but which may extend to seven years and shall also be liable to fine which may extend to five lakh rupees:"
                                  }
                              },
                              {
                                  "@id": "sct4-par002",
                                  "num": {
                                      "@title": "2",
                                      "#text": "(2)"
                                  },
                                  "content": {
                                      "p": "Provided that where the proceeds of crime involved in money-laundering relates to any offence specified under paragraph 2 of Part A of the Schedule, the provisions of this section shall have effect as if for the words \"which may extend to seven years\", the words \"which may extend to ten years\" had been substituted."
                                  }
                              }
                          ]
                      }
                  ]
              }
          }
      }
  }
}

let preamble_data = data.akomaNtoso.act.preamble
let preamble_enacted = data.akomaNtoso.act.preamble.formula
let body = data.akomaNtoso.act.body
const HomePage = () => (
  <div>
    <Navbar/>
    <Timeline/>
    <div>
      
      <p>{preamble_data.p}</p>
      <p>{preamble_enacted.p}</p>
      
    </div>
  </div>
);

export default HomePage;

