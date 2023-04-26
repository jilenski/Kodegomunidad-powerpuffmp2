import React, { useState } from 'react';
import './jobSearch.css';
import Modal from 'react-bootstrap/Modal';

const jobList = [
  {
    title: 'Quality Assurance',
    company: 'DW Morgan',
    info: 'SUMMARY : The Quality Assurance intern will focus on tetsing web and mobile applications.This involves working closely with the entire project team for all branches. Application Development,Solutions, and IT Operators. The QA Intern will also be interacting with the Operators Control team for production support. A commitment to collaborate problem solving and process optimization is essential.',
    location: 'Zuellig Building, Paseo de Roxas, Makati, Metro Manila',
  },
  {
    title: 'UI Designer',
    company: 'Aseana One',
    info: 'Illustrate design ideas using storyboards, prototypes, process flows and sitemaps. Design graphic user interface elements, like menus, tabs and widgets.Build page navigation buttons and search fields. Develop UI mockups and prototypes that clearly illustrate how sites function and look like.',
    location: ' Aseana One Building Bradco Ave. Baclaran Paranaque City',
  },
  {
    title: 'Digital Web Designer',
    info: 'As a Digital Web Designer (UI), your mission is to bring to life the story of clients digital healthcare brands to attract new patients and customers. You will never be boxed in by a client brief for a brand you are not familiar with. Instead, you will be designing digital content and landing pages for our health and wellness brands that will be seen by millions of Australians. The role will be highly collaborative with our client designers and creatives based in Australia, as well as the newly formed creative team in Manila.',
    company: 'NXScale',
    location: 'Eastwood City',
  },
];

function JobSearch() {
  const [query, setQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobList);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filtered = jobList.filter(job =>
      job.title.toLowerCase().includes(query.toLowerCase())
      || job.company.toLowerCase().includes(query.toLowerCase())
      || job.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="jobcontainer">
      <header className="header">
        <h1 className = "jobTitle">FullJob Search</h1>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input type="text" placeholder="Search for a job..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </header>
      <div className="jobs-list">
        {filteredJobs.map(job => (
          <div className="job" key={job.title}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <button onClick={() => handleApplyClick(job)}>Apply Now</button>
          </div>
        ))}
      </div>
      <Modal show={selectedJob !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedJob && selectedJob.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedJob && selectedJob.company}</p>
          <p>{selectedJob && selectedJob.location}</p>
          <p>{selectedJob && selectedJob.info}</p>
          <form>
            <label htmlFor="name">Your Name:</label>
            <br/>
            <input type="text" id="name" name="name" required />
            <br/>
            <label htmlFor="email">Your Email:</label>
            <br/>
            <input type="email" id="email" name="email" required />
            <button type="submit">Submit Application</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default JobSearch;
