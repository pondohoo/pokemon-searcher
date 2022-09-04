import React from 'react'
import { Button, Container } from 'react-bootstrap'

export default function LoadingPages({gotoNextPage, gotoPrevPage}) {
  return (
    <Container className={"d-flex justify-content-between mb-4"}>
      {gotoPrevPage && <Button block className="p-10" onClick={gotoPrevPage}>Previous</Button>}
      {gotoNextPage && <Button block onClick={gotoNextPage}>Next</Button>}
    </Container>
  );
}
