import React from 'react';
import { Container, Spinner, Tab, Tabs } from 'react-bootstrap';
import DatabaseBoard from '../database-board/Database';
import './Dashboard.css';

const DashboardPage = () => {
  return (
		<div className="dashboard-wrapper">
			<div className="dashboard-header">
				<Container className="header-container">
					<div className="OLM-logo">
						<h1>OLM</h1>
					</div>
					<div className="user-status">
						<p className="pr-4">Agent.ID</p>
						<p>Logout</p>
					</div>	
				</Container>
			</div>

			<Container>
				<DatabaseBoard />

				<div className="dashboard-body-container">
					<h1>Welcome to the OLM dashboard</h1>
					<h3>Please, exercise patience as this page is still under construction</h3>
					<p>Thank you!</p>
				</div>
				<div className="text-center">
					<Spinner variant="primary" animation="border" />
				</div>
			</Container>
		</div>
  );
}

export default DashboardPage;