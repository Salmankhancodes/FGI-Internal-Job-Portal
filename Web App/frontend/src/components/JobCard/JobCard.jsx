import React from 'react'

const JobCard = ({ eachJob }) => {
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
          {eachJob.salary_min / 100000}-{eachJob.salary_max / 100000} LPA
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
        <a target='_blank' rel='noreferrer' href={eachJob.redirect_url}>
          <button className='applyButton'>Apply</button>
        </a>
      </p>
    </div>
  )
}
export default JobCard
