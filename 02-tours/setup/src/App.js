import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import data from './data';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

const appContext = React.createContext();

function App() {
  // init
  const [tourInfos, setTourInfos] = useState([]);
  const [status, setStaus] = useState('Loading');
  const [loading, setLoading] = useState(true);

  const removeTour = function (id) {
    const newTours = tourInfos.filter((tour) => tour.id !== id);
    setTourInfos(newTours);
  };

  const fetchData = function (url) {
    setLoading(true);
    // fetch data
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // init data
    //     setTourInfos(data);
    //   });
    setTimeout(() => {
      setTourInfos(data);
      setStaus('Our Tours');
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    // get data
    fetchData(url);
  }, []);

  if (loading) {
    return (
      <main>
        <Loading></Loading>;
      </main>
    );
  }

  if (tourInfos.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchData()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <appContext.Provider value={{ removeTour }}>
      <main>
        {/* <Loading status={status}></Loading> */}
        <Tours tourInfos={tourInfos}></Tours>
      </main>
    </appContext.Provider>
  );
}

export default App;
export { appContext };
