import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from "react-dom"
import App from "../components/App"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("testing full")
    const app = document.getElementById("root")
    ReactDOM.render(<App />, app)
  }
}
