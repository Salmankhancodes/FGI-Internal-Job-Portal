import React, { useState } from 'react'
import './ResumeBuilder.css'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Achievements from './Achievements'
import TechnicalSkills from './TechnicalSkills'

function ResumeBuilder() {
  window.onbeforeunload = function () {
    return ''
  }
  //name sates
  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    add: '',
    city: '',
    phone: null,
    email: '',
    lnkdn: '',
    github: '',
    college: '',
    cstart: '',
    cend: '',
    course: '',
    branch: '',
    cgpa: '',
    school: '',
    board: '',
    send: '',
    marks: '',
    company: '',
    jstart: '',
    jend: '',
    desig: '',
    jdesc: '',
    ptitle1: '',
    ptech1: '',
    pdesc1: '',
    plink1: '',
    ptitle2: '',
    ptech2: '',
    pdesc2: '',
    plink2: '',
    ptitle3: '',
    ptech3: '',
    pdesc3: '',
    plink3: '',
    ptitle4: '',
    ptech4: '',
    pdesc4: '',
    plink4: '',
    lang: '',
    tech: '',
    tools: '',
    achieve1: '',
    achieve2: '',
    achieve3: '',
    achieve4: '',
  })

  const sectionName = [
    'Contact',
    'Education',
    'Experience',
    'Projects',
    'Technical Skills',
    'Achievement',
  ]

  function displayComponent() {
    if (page === 0)
      return <Contact formData={formData} setFormData={setFormData} />
    else if (page === 1)
      return <Education formData={formData} setFormData={setFormData} />
    else if (page === 2)
      return <Experience formData={formData} setFormData={setFormData} />
    else if (page === 3)
      return <Projects formData={formData} setFormData={setFormData} />
    else if (page === 4)
      return <TechnicalSkills formData={formData} setFormData={setFormData} />
    else if (page === 5)
      return <Achievements formData={formData} setFormData={setFormData} />
  }

  function handleDownload() {
    let div = document.querySelectorAll('.resume_page')[0]
    console.log(div)
    html2canvas(div)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4')
        var width = pdf.internal.pageSize.getWidth()
        var height = pdf.internal.pageSize.getHeight()
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height)
        // pdf.output('dataurlnewwindow');
        pdf.save('resume.pdf')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <>
      {/* <button className='download_button' onClick={() => handleDownload()}>
        Download Resume
      </button> */}
      <div class='resume_wrapper'>
        <div className='resume_form'>
          <div className='header'>
            <h4>{sectionName[page]}-Info</h4>
          </div>
          <div className='progressbar_container'>
            <div
              style={{
                width:
                  page === 0
                    ? '16.66%'
                    : page === 1
                    ? '33.32%'
                    : page === 2
                    ? '49.98%'
                    : page === 3
                    ? '66.64%'
                    : page === 4
                    ? '83.3%'
                    : ' 100%',
              }}
              className='currentProgress'
            >
              &nbsp;
            </div>
          </div>
          <div className='footer'>
            <button disabled={page === 0} onClick={() => setPage(page - 1)}>
              prev
            </button>
            {page === sectionName.length - 1 ? (
              <button
                style={{ fontSize: '12px' }}
                onClick={() => handleDownload()}
              >
                Download Resume
              </button>
            ) : (
              <button
                disabled={page === sectionName.length - 1}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            )}
          </div>
          <div className='formbody'>{displayComponent()}</div>
        </div>

        <div class='resume_page'>
          <div class='contact_info'>
            <p
              class='name'
              style={{
                fontSize: '30px',
                fontWeight: '500',
                fontFamily: 'sans-serif',
              }}
            >
              <span>{formData.first}</span>
              <span>{formData.last}</span>
            </p>
            <p class='address'>
              <span>{formData.add}</span>
              <span>{formData.city}</span>
              {formData.city !== '' && <span>India</span>}
            </p>
            <p class='links'>
              <span>{formData.phone}</span>
              <span>{formData.email}</span>
              <span>
                <a href={formData.lnkdn}></a>
                {formData.lnkdn}
              </span>
              <span>
                <a href={formData.github}></a>
                {formData.github}
              </span>
            </p>
          </div>
          {formData.college !== '' && (
            <div class='section education_info'>
              <p class='section_header'>Education</p>
              <hr />
              <div class='subsection_info'>
                <div class='primary_row'>
                  <p>{formData.college}</p>
                  <p>
                    <span>{formData.cstart}</span>
                    <span>{formData.cend} </span>
                  </p>
                </div>
                <div class='secondary_row'>
                  <span>
                    {formData.course} &nbsp; in &nbsp;{formData.branch}{' '}
                  </span>
                  <span>{formData.cgpa}</span>
                </div>
              </div>
              <div class='subsection_info'>
                <div class='primary_row'>
                  <p>{formData.school}</p>
                  <p>
                    <span>{formData.send} </span>
                  </p>
                </div>
                <div class='secondary_row'>
                  <span> {formData.board}</span>
                  <span> {formData.marks}</span>
                </div>
              </div>
            </div>
          )}
          {formData.company !== '' && (
            <div class='section experience_info'>
              <p class='section_header'>Experience</p>
              <hr />
              <div class='primary_row'>
                <p>{formData.company}</p>
                <p>
                  <span>{formData.jstart}</span>
                  <span>{formData.jend} </span>
                </p>
              </div>
              <div class='secondary_row'>
                <p>{formData.desig}</p>
                <p>{formData.jdesc} </p>
              </div>
            </div>
          )}
          {formData.ptitle1 !== '' && (
            <div class='section projects_info'>
              <p class='section_header'>Projects</p>
              <hr />
              <div class='primary_row'>
                <p>
                  {formData.ptitle1} |{' '}
                  <a href={formData.plink1}>
                    <i>Link to work</i>
                  </a>
                </p>
                <p>
                  <span>{formData.ptech1}</span>
                </p>
              </div>
              <div class='secondary_row'>
                <p>{formData.pdesc1} </p>
              </div>
              {/* <br /> */}
              {formData.ptitle2 !== '' && (
                <div>
                  {' '}
                  <div class='primary_row'>
                    <p>
                      {formData.ptitle2} |{' '}
                      <a href={formData.plink2}>
                        <i>Link to work</i>
                      </a>
                    </p>
                    <p>
                      <span>{formData.ptech2}</span>
                    </p>
                  </div>
                  <div class='secondary_row'>
                    <p>{formData.pdesc2} </p>
                  </div>
                  {/* <br /> */}
                </div>
              )}{' '}
              {formData.ptitle3 !== '' && (
                <div>
                  <div class='primary_row'>
                    <p>
                      {formData.ptitle3} |{' '}
                      <a href={formData.plink3}>
                        <i>Link to work</i>
                      </a>
                    </p>
                    <p>
                      <span>{formData.ptech3}</span>
                    </p>
                  </div>
                  <div class='secondary_row'>
                    <p>{formData.pdesc3}</p>
                  </div>
                  {/* <br /> */}
                </div>
              )}
              {formData.ptitle4 !== '' && (
                <div>
                  <div class='primary_row'>
                    <p>
                      {formData.ptitle4} |{' '}
                      <a href={formData.plink4}>
                        <i>Link to work</i>
                      </a>
                    </p>
                    <p>
                      <span>{formData.ptech4}</span>
                    </p>
                  </div>
                  <div class='secondary_row'>
                    <p>{formData.pdesc4} </p>
                  </div>
                </div>
              )}
            </div>
          )}{' '}
          {formData.lang !== '' && (
            <div class='section skills_info'>
              <p class='section_header'>Technical Skills</p>
              <hr />
              {formData.lang !== '' && (
                <p>
                  <b>Languages:</b>&nbsp;<span>{formData.lang}</span>
                </p>
              )}
              {formData.tech !== '' && (
                <p>
                  <b>Technologies/Framworks:</b>&nbsp;
                  <span>{formData.tech}</span>
                </p>
              )}
              {formData.tools !== '' && (
                <p>
                  <b>Developer Tools:</b>&nbsp;<span>{formData.tools}</span>
                </p>
              )}
            </div>
          )}
          {formData.achieve1 !== '' && (
            <div class='section achievement_info'>
              <p class='section_header'>Achievements</p>
              <hr />
              <div class='bulltets secondary_row'>
                <ul>
                  {formData.achieve1 !== '' && <li>{formData.achieve1}</li>}
                  {formData.achieve2 !== '' && <li>{formData.achieve2} </li>}
                  {formData.achieve3 !== '' && <li>{formData.achieve3}</li>}
                  {formData.achieve4 !== '' && (
                    <li>{formData.achieve4}</li>
                  )}{' '}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ResumeBuilder
