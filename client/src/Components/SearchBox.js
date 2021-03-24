import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import React, {Fragment, useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {DataArray, getData} from '../Services/Data'

//const options = [];

const SearchBox = () => {
  const [singleSelections, setSingleSelections] = useState([]);
  const [AllDiseases, setAllDiseases] = useState([]);
  useEffect(_ => {
    getData()
    .then(par => {
      console.log('Got data.', par);
      setAllDiseases(par);
    })
  }, []);
    return (
        <Fragment>
      <Form.Group>
        <Form.Label>Single Selection</Form.Label>
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange={setSingleSelections}
          options={AllDiseases}
          placeholder="Type in..."
          selected={singleSelections}
        />
      </Form.Group>
    </Fragment>
    )
}

export default SearchBox