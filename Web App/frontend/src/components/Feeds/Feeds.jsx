import React, { useState } from 'react'
import axios from 'axios'
import './Feeds.css'
import loader from './loader.gif'
import nodataimage from './nodata.png'

function Feeds() {
  const [location, setLocation] = useState('')
  const [search, setSearch] = useState('')
  const [jobData, setJobData] = useState(null)
  const [loading, setLoading] = useState(false)

  const country = 'in'

  let API_KEY = '3d3b4f0df0ffe00a90506fed37c05aa6'
  let APP_ID = '36d1ac77'
  let BASE_URL = 'https://api.adzuna.com/v1/api/jobs'
  let BASE_PARAMS =
    'search/1?&results_per_page=40&content-type=application/json'
  const targetURL = `${BASE_URL}/${country.toLowerCase()}/${BASE_PARAMS}&app_id=${APP_ID}&app_key=${API_KEY}&what=${search}&where=${location}`

  async function handleSubmit() {
    setLoading(true)
    setJobData([])
    const data = await axios.get(targetURL)
    setJobData(data.data.results)
    setSearch('')
    setLocation('')
    setLoading(false)
  }
  const sortBy = (val) => {
    if (val === 'asce') handleSortDateasc()
    else if (val === 'desc') handleSortDatedesc()
    else return
  }

  const handleSortDateasc = () => {
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
      return parseInt(dateA) - parseInt(dateB)
    })
    setJobData(temp)
  }

  const handleSortDatedesc = () => {
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
      return parseInt(dateB) - parseInt(dateA)
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
          onChange={(e) => sortBy(e.target.value)}
          disabled={jobData === null || jobData.length <= 1}
          title={
            jobData === null || jobData.length <= 1
              ? 'No or not enough data to sort'
              : ''
          }
        >
          {console.log(jobData)}
          <option value=''>Sort By</option>
          <option value='asce'>Least Recent</option>
          <option value='desc'>Most Recent</option>
        </select>
        <button className='searchJobButton' onClick={handleSubmit}>
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
          {jobData === null ? (
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
            jobData.map((eachJob) => {
              return (
                <div className='eachJob'>
                  <p className='firstRow'>
                    {/* <b>Title:</b> */}
                    <span>{eachJob.title}</span>
                    <span>
                      <i className='fas fa-map-marker-alt'></i>
                      {eachJob.location.area.map((element) => {
                        return <span className='location'>&nbsp;{element}</span>
                      })}
                    </span>
                  </p>
                  <p className='secondRow'>
                    <span>
                      <i className='far fa-building'></i>

                      {eachJob.company.display_name}
                    </span>
                    <span>
                      <i className='fas fa-money-bill'></i>
                      {eachJob.salary_min / 100000}-
                      {eachJob.salary_max / 100000} LPA
                    </span>
                    <span>
                      <i className='far fa-clock'></i>{' '}
                      {eachJob.contract_time === undefined
                        ? 'Not available'
                        : eachJob.contract_time}
                    </span>

                    <span>
                      <i className='far fa-calendar-alt'></i>
                      {eachJob.created.split('T')[0]}
                    </span>
                  </p>
                  <p className='thirdRow'>
                    <a href={eachJob.redirect_url}>
                      <button className='applyButton'>Apply</button>
                    </a>
                  </p>
                </div>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}

export default Feeds
