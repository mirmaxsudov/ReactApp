import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './404.css'

export default function NotFound() {
  return (
    <div className="not-found-page accordion ">
      <Container className="text-center">
        <h1 className="display-1 text-danger">404</h1>
        <h2 className="mb-3 tc">Page Not Found</h2>
        <p className="tc">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button color="primary" onClick={handleGoBack}>
          Go Back
        </Button>
      </Container>
    </div>
  )
}

function handleGoBack() {
  window.history.back()
}