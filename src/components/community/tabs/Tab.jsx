import "./tab.css";
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from '../card/Card';
import Card1 from '../card/Card1';
import Card2 from '../card/Card2';
import Student from "../students/Student";

const FIRST_EVENT_KEY = 'almumni'; // Set the first event key as a constant variable

function MyTabs() {
  const [key, setKey] = useState(FIRST_EVENT_KEY); // Use the constant variable as the initial state value for the key

  return (
    <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="my-tabs">
      <Tab eventKey="almumni" title="Alumni's Corner">
        <br/>
 
        <h1 className="almumni-title">Featured Alumni</h1>
        <div className= "alumniCards">
          <Card/>
          <Card1/>
          <Card2/>
        </div>
      </Tab>
      <Tab eventKey="student" title="Student's Corner">
        <Student />
      </Tab>
      <Tab eventKey="staff" title="Kodego Staff">
        <p>This is the kodego Staff</p>
      </Tab>
    </Tabs>
  );
}

export default MyTabs;
