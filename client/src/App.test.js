import React from "react"
import ReactDOM from "react-dom"
import { render, fireEvent, getByTestId } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import App from "./App"

test("renders without crash", () => {
  const { getByTestId } = render(<App />)
})

test("dark-mode toggles", () => {
  const { getByTestId } = render(<App />)
  const toggles = getByTestId("toggles")
})
