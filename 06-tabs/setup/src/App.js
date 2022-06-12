import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// import data from './data';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [currentJob, setCurrentJob] = useState({});

  // 获取数据并初始化
  const fetchData = async () => {
    try {
      const responce = await fetch(url);
      const data = await responce.json();
      console.log(data);
      setExperience(data);
      setCurrentJob(data[0]);
      setCompanies([...new Set(data.map((value) => value.company))]);
      // 如果我在这里把loading调到上方，那么react会渲染新的
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  // 切换工作
  const switchJob = (company) => {
    const newJob = experience.find((value) => value.company === company);
    setCurrentJob(newJob);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <section className='section'>
          <div className='title'>
            <h2>loading...</h2>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className='section'>
        <div className='title'>
          <h2>Experience</h2>
          <div className='underline'></div>
        </div>
        <article className='jobs-center'>
          <header className='btn-container'>
            {companies.map((company) => (
              <button
                onClick={() => switchJob(company)}
                className={`job-btn ${
                  currentJob.company === company && 'active-btn'
                }`}
                key={company}>
                {company}
              </button>
            ))}
          </header>
          <figure className='job-info'>
            <h3>{currentJob.title}</h3>
            <h4>{currentJob.company}</h4>
            <p className='job-date'>{currentJob.dates}</p>
            {currentJob.duties.map((value, index) => (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{value}</p>
              </div>
            ))}
            <button className='btn'>more info</button>
          </figure>
        </article>
      </section>
    </main>
  );
}

export default App;
