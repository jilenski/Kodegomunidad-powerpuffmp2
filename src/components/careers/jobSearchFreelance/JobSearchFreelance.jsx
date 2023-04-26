import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './jobSearchFreelance.css';

const jobList = [
  {
    title: 'Web Developer',
    expertise: 'Experience Level',
    tags: 'Website',
    tags2: 'Graphic Design',
    tags3: 'Python',
  },
  {
    title: 'Node JS Developer',
    expertise: 'IntermediateLevel',
    tags: 'Full Stack Developer',
    tags2: 'NodeJS',
    tags3: 'API Development',
  },
  {
    title: 'System for Chatbot Decision',
    expertise: 'Intermediate Level',
    tags: 'React',
    tags2: 'MongoDB',
    tags3: 'API Integration',
  },
];

function JobSearch() {
  const [query, setQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobList);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filtered = jobList.filter(job =>
      job.title.toLowerCase().includes(query.toLowerCase())
      || job.expertise.toLowerCase().includes(query.toLowerCase())
      || job.tags.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="jobcontainer">
      <header className="header">
        <h1 className="jobTitle">Freelance - Job Search</h1>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input type="text" placeholder="Search for a job..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </header>
      <div className="jobs-list">
        {filteredJobs.map(job => (
          <div className="job" key={job.title}>
            <h2>{job.title}</h2>
            <p>{job.expertise}</p>
            <p>Skills and Expertise</p> 
            <div className="expertise-tags">
              <button className="job-tag">{job.tags}</button>
              <button className="job-tag">{job.tags2}</button>
              <button className="job-tag">{job.tags3}</button>
            </div>
            <br/>
            <Button onClick={() => handleApplyNow(job)}>Apply Now</Button>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedJob.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedJob.expertise}</p>
          <p>Skills and Expertise</p>
          <div className="expertise-tags">
            <button className="job-tag">{selectedJob.tags}</button>
            <button className="job-tag">{selectedJob.tags2}</button>
            <button className="job-tag">{selectedJob.tags3}</button>
          </div>
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
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit Application
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default JobSearch;
