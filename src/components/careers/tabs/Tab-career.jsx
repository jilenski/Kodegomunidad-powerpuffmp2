import "./tab-career.css"
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import JobSearch from '../jobSearch/JobSearch'
import JobSearchFreelance from '../jobSearchFreelance/JobSearchFreelance'


function MyTabs() {

  const [key, setKey] = useState('fullTime');

  return (

    
    <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="my-tabs">
      <Tab eventKey="fullTime" title="Full-time Jobs">
        <h1 className="fullTime-title"></h1>
        <JobSearch/>
      </Tab>
      <Tab eventKey="freelance" title="Freelance Jobs">
        <h1 className="freelance-title"></h1>
        <JobSearchFreelance/>

      </Tab>

    </Tabs>
  );
}

export default MyTabs;