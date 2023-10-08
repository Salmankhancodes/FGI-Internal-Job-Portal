import React, { useState } from 'react'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Achievements from './Achievements'
import TechnicalSkills from './TechnicalSkills'
import PreviewPage from './PreviewPage'
import './ResumeBuilder.css'

function ResumeBuilder() {
  window.onbeforeunload = function () {
    return ''
  }
  const [page, setPage] = useState(0)

  const sectionName = [
    'Contact',
    'Education',
    'Experience',
    'Projects',
    'Technical Skills',
    'Achievement',
  ]

  function displayComponent() {
    if (page === 0) return <Contact />
    else if (page === 1) return <Education />
    else if (page === 2) return <Experience />
    else if (page === 3) return <Projects />
    else if (page === 4) return <TechnicalSkills />
    else if (page === 5) return <Achievements />
  }

  function handleDownload() {
    let div = document.querySelectorAll('.resume_page')[0]
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
      .catch(function (error) {})
  }

  return (
    <>
      <div className='resume_wrapper'>
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
        <PreviewPage />
      </div>
    </>
  )
}

export default ResumeBuilder
