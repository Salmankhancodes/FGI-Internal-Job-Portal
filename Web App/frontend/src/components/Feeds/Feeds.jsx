import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import {signOut} from 'firebase/auth'
import {auth} from '../../config/firebase'

function Feeds() {
  const history = useHistory()
  const [location, setLocation] = useState('')
  const [search, setSearch] = useState('')
  const [jobData, setJobData] = useState([])
  const country="in"
  
  let API_KEY = '3d3b4f0df0ffe00a90506fed37c05aa6'
  let APP_ID = '36d1ac77'
  let BASE_URL = 'https://api.adzuna.com/v1/api/jobs'
  let BASE_PARAMS =
    'search/1?&results_per_page=20&content-type=application/json'
  const targetURL = `${BASE_URL}/${country.toLowerCase()}/${BASE_PARAMS}&app_id=${APP_ID}&app_key=${API_KEY}&what=${search}&where=${location}`

  async function handleSubmit() {
    const data = await axios.get(targetURL)
    setJobData(data.data.results)
    setSearch("")
    setLocation("")
  }


  return (
    <div>
      <button onClick={() => {
        signOut(auth)
        .then(() => {
          history.push('/')
        })
      }}>Logout</button>
      <input
        placeholder='City'
        type='text'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        placeholder='search'
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

{/* Will be adding the country when adding filters,commented and hardcoded as for now */}

      {/* <input
        placeholder='
      country'
        type='text'
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      /> */}
      <button onClick={handleSubmit}>submit</button>

      <div>
        {jobData === [] ? (
          <></>
        ) : (
          jobData.map((eachJob) => {
            return (
              <div>
                <hr />
                <p>
                  <b>Title:</b>
                  {eachJob.title}
                </p>
                <p>
                  <b>Company:</b>
                  {eachJob.company.display_name}
                </p>
                <p>
                  <b>Job description:</b>
                  {eachJob.description}
                </p>
                <p>
                  <b>Job location:</b>
                  {eachJob.location.area.map((element) => {
                    return <span>&nbsp;{element}</span>
                  })}
                </p>
                <p>
                  <b>Salary:</b>
                  {eachJob.salary_min / 100000}-{eachJob.salary_max / 100000}{' '}
                  LPA
                </p>
                <p>
                  <b>Job type:</b>
                  &nbsp;
                  {eachJob.contract_time === undefined
                    ? 'Not available'
                    : eachJob.contract_time}
                </p>
                <p>
                  <b>Posted On:</b>
                  &nbsp;{eachJob.created.split('T')[0]}
                </p>

                <a href={eachJob.redirect_url}>Apply</a>

                <hr />
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Feeds

// console.log('position', data.data.results[0].title)
// console.log('Company name', data.data.results[0].company.display_name)
// console.log(data.data.results[0].description)
// console.log(
//   data.data.results[0].salary_min / 100000,
//   '-',
//   data.data.results[0].salary_max / 100000,
//   ' LPA'
// )
