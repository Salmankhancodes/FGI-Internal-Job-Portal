import React from 'react'
import { connect } from 'react-redux'

const PreviewPage = (props) => {
  const {
    contactInfo,
    educationInfo,
    experienceInfo,
    achievementInfo,
    technicalSkillsInfo,
    projectsInfo,
  } = props

  return (
    <div className='resume_page'>
      <div className='contact_info'>
        <p
          className='name'
          style={{
            fontSize: '30px',
            fontWeight: '500',
            fontFamily: 'sans-serif',
          }}
        >
          <span>{contactInfo.firstName}</span>
          <span>{contactInfo.lastName}</span>
        </p>
        <p className='address'>
          <span>{contactInfo.address}</span>
          <span>{contactInfo.city}</span>
          {contactInfo.city !== '' && <span>India</span>}
        </p>
        <p className='links' style={{ fontSize: '12px' }}>
          <span>{contactInfo.phone}</span>
          <span>{contactInfo.email}</span>

          {contactInfo.linkedin !== '' && (
            <span>
              <a href={contactInfo.linkedin}>LinkedinProfile</a>
            </span>
          )}
          {contactInfo.github !== '' && (
            <span>
              <a href={contactInfo.github}>GithubProfile</a>
            </span>
          )}
          {contactInfo.portfolio !== '' && (
            <span>
              <a href={contactInfo.github}>GithubProfile</a>
            </span>
          )}
        </p>
      </div>
      {educationInfo.collegeName !== '' && (
        <div className='section education_info'>
          <p className='section_header'>Education</p>
          <hr />
          <div className='subsection_info'>
            <div className='primary_row'>
              <p>{educationInfo.collegeName}</p>
              <p>
                <span>{educationInfo.collegeStartYear}</span>
                <span>{educationInfo.collegeEndYear} </span>
              </p>
            </div>
            <div className='secondary_row'>
              <span>
                {educationInfo.course} &nbsp; in &nbsp;{educationInfo.branch}{' '}
              </span>
              <span>{educationInfo.cgpa}</span>
            </div>
          </div>
          <div className='subsection_info'>
            <div className='primary_row'>
              <p>{educationInfo.schoolName}</p>
              <p>
                <span>{educationInfo.schoolEndYear} </span>
              </p>
            </div>
            <div className='secondary_row'>
              <span> {educationInfo.board}</span>
              <span> {educationInfo.marks}</span>
            </div>
          </div>
        </div>
      )}
      {experienceInfo.companyName !== '' && (
        <div className='section experience_info'>
          <p className='section_header'>Experience</p>
          <hr />
          <div className='primary_row'>
            <p>{experienceInfo.companyName}</p>
            <p>
              <span>{experienceInfo.dateOfJoining}</span>
              <span>{experienceInfo.dateOfExit} </span>
            </p>
          </div>
          <div className='secondary_row'>
            <p>{experienceInfo.designation}</p>
            <p>{experienceInfo.jobDescription} </p>
          </div>
        </div>
      )}
      {projectsInfo.projectTitle1 !== '' && (
        <div className='section projects_info'>
          <p className='section_header'>Projects</p>
          <hr />
          <div className='primary_row'>
            <p>
              {projectsInfo.projectTitle1} |{' '}
              <a href={projectsInfo.projectLink1}>
                <i>Link to work</i>
              </a>
            </p>
            <p>
              <span>{projectsInfo.techStack1}</span>
            </p>
          </div>
          <div className='secondary_row'>
            <p>{projectsInfo.projectDescription1} </p>
          </div>
          {/* <br /> */}
          {projectsInfo.projectTitle2 !== '' && (
            <div>
              {' '}
              <div className='primary_row'>
                <p>
                  {projectsInfo.projectTitle2} |{' '}
                  <a href={projectsInfo.projectLink2}>
                    <i>Link to work</i>
                  </a>
                </p>
                <p>
                  <span>{projectsInfo.techStack2}</span>
                </p>
              </div>
              <div className='secondary_row'>
                <p>{projectsInfo.projectDescription2} </p>
              </div>
              {/* <br /> */}
            </div>
          )}{' '}
          {projectsInfo.projectTitle3 !== '' && (
            <div>
              <div className='primary_row'>
                <p>
                  {projectsInfo.projectTitle3} |{' '}
                  <a href={projectsInfo.projectLink3}>
                    <i>Link to work</i>
                  </a>
                </p>
                <p>
                  <span>{projectsInfo.techStack3}</span>
                </p>
              </div>
              <div className='secondary_row'>
                <p>{projectsInfo.projectDescription3}</p>
              </div>
              {/* <br /> */}
            </div>
          )}
          {projectsInfo.projectTitle4 !== '' && (
            <div>
              <div className='primary_row'>
                <p>
                  {projectsInfo.projectTitle4} |{' '}
                  <a href={projectsInfo.projectLink4}>
                    <i>Link to work</i>
                  </a>
                </p>
                <p>
                  <span>{projectsInfo.techStack4}</span>
                </p>
              </div>
              <div className='secondary_row'>
                <p>{projectsInfo.projectDescription4} </p>
              </div>
            </div>
          )}
        </div>
      )}{' '}
      {technicalSkillsInfo.programmingLanguage !== '' && (
        <div className='section skills_info'>
          <p className='section_header'>Technical Skills</p>
          <hr />
          {technicalSkillsInfo.programmingLanguage !== '' && (
            <p>
              <b>Languages:</b>&nbsp;
              <span>{technicalSkillsInfo.programmingLanguage}</span>
            </p>
          )}
          {technicalSkillsInfo.technology !== '' && (
            <p>
              <b>Technologies/Framworks:</b>&nbsp;
              <span>{technicalSkillsInfo.technology}</span>
            </p>
          )}
          {technicalSkillsInfo.tools !== '' && (
            <p>
              <b>Developer Tools:</b>&nbsp;
              <span>{technicalSkillsInfo.tools}</span>
            </p>
          )}
        </div>
      )}
      {achievementInfo.achievement1 !== '' && (
        <div className='section achievement_info'>
          <p className='section_header'>Achievements</p>
          <hr />
          <div className='bulltets secondary_row'>
            <ul>
              {achievementInfo.achievement1 !== '' && (
                <li>{achievementInfo.achievement1}</li>
              )}
              {achievementInfo.achievement2 !== '' && (
                <li>{achievementInfo.achievement2} </li>
              )}
              {achievementInfo.achievement3 !== '' && (
                <li>{achievementInfo.achievement3}</li>
              )}
              {achievementInfo.achievement4 !== '' && (
                <li>{achievementInfo.achievement4}</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default connect(
  ({
    contactInfo,
    educationInfo,
    experienceInfo,
    achievementInfo,
    technicalSkillsInfo,
    projectsInfo,
  }) => ({
    contactInfo,
    educationInfo,
    experienceInfo,
    achievementInfo,
    technicalSkillsInfo,
    projectsInfo,
  })
)(PreviewPage)
