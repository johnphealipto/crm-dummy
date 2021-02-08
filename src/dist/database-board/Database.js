import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './Database.css';

const DatabaseBoard = () => {
  return (
		<div className="database-wrapper">
			<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  			<Tab eventKey="activities" title="Activities">
    			
  			</Tab>
  			<Tab eventKey="profile" title="Profile">
    			
  			</Tab>
  			<Tab eventKey="marketResearch" title="Market Research">
    			
  			</Tab>
			</Tabs>
		</div>
  );
}

export default DatabaseBoard;