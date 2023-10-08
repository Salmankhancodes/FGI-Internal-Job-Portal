import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Feeds.css'
import loader from './loader.gif'
import nodataimage from './nodata.png'
import JobCard from '../JobCard/JobCard'
import Pagination from '../Pagination/Pagination'

function Feeds() {
  const [location, setLocation] = useState('')
  const [search, setSearch] = useState('')
  const [jobData, setJobData] = useState([])
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [resultCount, setResultCount] = useState(0)

  const country = 'in'

  let ADZUNA_API_KEY = process.env.REACT_APP_ADZUNA_API_KEY
  let ADZUNA_APP_ID = process.env.REACT_APP_ADZUNA_APP_ID
  let BASE_URL = 'https://api.adzuna.com/v1/api/jobs'
  let BASE_PARAMS = `search/${currentPage}?&results_per_page=10&content-type=application/json`
  const targetURL = `${BASE_URL}/${country.toLowerCase()}/${BASE_PARAMS}&app_id=${ADZUNA_APP_ID}&app_key=${ADZUNA_API_KEY}&what=${search}&where=${location}`

  const handleSubmit = async (fromSearchButton = false) => {
    setLoading(true)
    setJobData([])
    if (fromSearchButton) {
      setCurrentPage(1)
    }
    const response = await axios.get(targetURL)
    setJobData(response.data.results)
    setResultCount(response.data.count)
    setLoading(false)
    setStatus(200)
  }

  useEffect(() => {
    handleSubmit(false)
  }, [currentPage])

  const handleSortDate = (val) => {
    if (!val) return
    let temp = [...jobData]
    temp.sort(function (objA, objB) {
      let yearA = objA.created.split('T')[0].split('-')[0]
      let yearB = objB.created.split('T')[0].split('-')[0]

      let monthA = objA.created.split('T')[0].split('-')[1]
      let monthB = objB.created.split('T')[0].split('-')[1]

      let daya = objA.created.split('T')[0].split('-')[2]
      let dayb = objB.created.split('T')[0].split('-')[2]
      let dateA = yearA + monthA + daya
      let dateB = yearB + monthB + dayb
      return val === 'asc'
        ? parseInt(dateA) - parseInt(dateB)
        : parseInt(dateB) - parseInt(dateA)
    })
    setJobData(temp)
  }

  return (
    <div className='feeds'>
      <div className='searchWrapper'>
        <input
          className='searchBarCity'
          placeholder='City'
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className='searchBarTitle'
          placeholder='Job title'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          name='sortdate'
          id='sortdate'
          onChange={(e) => handleSortDate(e.target.value)}
        >
          <option value=''>Sort By</option>
          <option value='asc'>Least Recent</option>
          <option value='desc'>Most Recent</option>
        </select>
        <button
          className='searchJobButton'
          onClick={() => handleSubmit(true)}
          disabled={loading}
        >
          Find a Job
        </button>
      </div>
      {loading ? (
        <div className='loader'>
          <img src={loader} alt='' />
          <h3>Loading please wait....</h3>
        </div>
      ) : (
        <div className='jobsWrapper'>
          <p className='resultsDetails'>
            Displaying {currentPage * 10 - 9}-
            {resultCount < currentPage * 10 ? resultCount : currentPage * 10} of{' '}
            {resultCount} opportunities
          </p>
          {jobData.length === 0 && status === 0 ? (
            <div className='emptyFeeds'>
              <h1>Start Searching...</h1>
              <h5>
                Somewhere someone is looking for exactly what you want to offer
              </h5>
            </div>
          ) : jobData.length === 0 ? (
            <div className='nodataPage'>
              <img src={nodataimage} alt='' />

              <h3>
                Not Found, Try searching with different location or job title
              </h3>
            </div>
          ) : (
            jobData.map((eachJob, index) => {
              return <JobCard key={index} eachJob={eachJob} />
            })
          )}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            resultCount={resultCount}
          />
        </div>
      )}
    </div>
  )
}

export default Feeds
