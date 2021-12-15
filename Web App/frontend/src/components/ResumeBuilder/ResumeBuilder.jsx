import React, { useState } from 'react'
import './ResumeBuilder.css'
function ResumeBuilder() {
  //name sates
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')

  //address state
  const [add, setAdd] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [lnkdn, setLnkdn] = useState('')
  const [github, setGithhub] = useState('')

  //education

  //college
  const [college, setCollege] = useState('')
  const [cstart, setCstart] = useState('')
  const [cend, setCend] = useState('')
  const [course, setCourse] = useState('')
  const [branch, setBranch] = useState('')
  const [cgpa, setCGPA] = useState('')
  //school
  const [school, setSchool] = useState('')
  const [send, setSend] = useState('')
  const [board, setBoard] = useState('')
  const [marks, setMarks] = useState('')

  //experience
  const [company, setCompany] = useState('')
  const [jstart, setJstart] = useState('')
  const [jend, setJend] = useState('')
  const [desig, setDesig] = useState('')
  const [jdesc, setJdesc] = useState('')

  //projects
  // project 1
  const [ptitle1, setPtitle1] = useState('')
  const [ptech1, setPtech1] = useState('')
  const [pdesc1, setPdesc1] = useState('')

  const [ptitle2, setPtitle2] = useState('')
  const [ptech2, setPtech2] = useState('')
  const [pdesc2, setPdesc2] = useState('')

  const [ptitle3, setPtitle3] = useState('')
  const [ptech3, setPtech3] = useState('')
  const [pdesc3, setPdesc3] = useState('')

  const [ptitle4, setPtitle4] = useState('')
  const [ptech4, setPtech4] = useState('')
  const [pdesc4, setPdesc4] = useState('')

  //texhnical skills
  const [lang, setLang] = useState('')
  const [tech, setTech] = useState('')
  const [tools, setTools] = useState('')

  //achievements
  const [achieve1, setAchieve1] = useState('')
  const [achieve2, setAchieve2] = useState('')
  const [achieve3, setAchieve3] = useState('')
  const [achieve4, setAchieve4] = useState('')

  return (
    <>
      <div class='resume_wrapper'>
        <div className='resume_form'>
          <div>
            {' '}
            <h2>Contact Info</h2>{' '}
            <input
              placeholder='first name'
              type='text'
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
            <input
              placeholder='last name'
              type='text'
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
            <input
              placeholder='Address'
              type='text'
              value={add}
              onChange={(e) => setAdd(e.target.value)}
            />
            <input
              placeholder='city'
              type='text'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder='phone number'
              type='number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              placeholder='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder='linkedin url'
              type='text'
              value={lnkdn}
              onChange={(e) => setLnkdn(e.target.value)}
            />
            <input
              placeholder='github link'
              type='text'
              value={github}
              onChange={(e) => setGithhub(e.target.value)}
            />
          </div>
          <div>
            <h2>Education info</h2>
            <input
              placeholder='College Name'
              type='text'
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            />
            <input
              placeholder='start year'
              type='month'
              value={cstart}
              onChange={(e) => setCstart(e.target.value)}
            />
            <input
              placeholder='end year'
              type='month'
              value={cend}
              onChange={(e) => setCend(e.target.value)}
            />
            <input
              placeholder='Course'
              type='text'
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
            <input
              placeholder='branch'
              type='text'
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
            <input
              placeholder='cgpa'
              type='text'
              value={cgpa}
              onChange={(e) => setCGPA(e.target.value)}
            />
            <input
              placeholder='school'
              type='text'
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
            <input
              placeholder='board name'
              type='text'
              value={board}
              onChange={(e) => setBoard(e.target.value)}
            />
            <input
              placeholder='year'
              type='month'
              value={send}
              onChange={(e) => setSend(e.target.value)}
            />
            <input
              placeholder='marks/percentage obtained'
              type='text'
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />
          </div>
          <div>
            <h2>experience info</h2>
            <input
              placeholder='Company name'
              type='text'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              placeholder='start date'
              type='month'
              value={jstart}
              onChange={(e) => setJstart(e.target.value)}
            />
            <input
              placeholder='end date'
              type='month'
              value={jend}
              onChange={(e) => setJend(e.target.value)}
            />
            <input
              placeholder='designation'
              type='text'
              value={desig}
              onChange={(e) => setDesig(e.target.value)}
            />
            <input
              placeholder='job description'
              type='text'
              value={jdesc}
              onChange={(e) => setJdesc(e.target.value)}
            />
          </div>
          <div>
            <h2>project info</h2>
            <input
              placeholder='Project 1 titie'
              type='text'
              value={ptitle1}
              onChange={(e) => setPtitle1(e.target.value)}
            />
            <input
              placeholder='Project 1 tech used'
              type='text'
              value={ptech1}
              onChange={(e) => setPtech1(e.target.value)}
            />{' '}
            <input
              placeholder='Project 1 description'
              type='text'
              value={pdesc1}
              onChange={(e) => setPdesc1(e.target.value)}
            />
            <input
              placeholder='Project 2 titie'
              type='text'
              value={ptitle2}
              onChange={(e) => setPtitle2(e.target.value)}
            />
            <input
              placeholder='Project 2 tech used'
              type='text'
              value={ptech2}
              onChange={(e) => setPtech2(e.target.value)}
            />{' '}
            <input
              placeholder='Project 2 description'
              type='text'
              value={pdesc2}
              onChange={(e) => setPdesc2(e.target.value)}
            />
            <input
              placeholder='Project 3 titie'
              type='text'
              value={ptitle3}
              onChange={(e) => setPtitle3(e.target.value)}
            />
            <input
              placeholder='Project 3 tech used'
              type='text'
              value={ptech3}
              onChange={(e) => setPtech3(e.target.value)}
            />{' '}
            <input
              placeholder='Project 3 description'
              type='text'
              value={pdesc3}
              onChange={(e) => setPdesc3(e.target.value)}
            />
            <input
              placeholder='Project 4 titie'
              type='text'
              value={ptitle4}
              onChange={(e) => setPtitle4(e.target.value)}
            />
            <input
              placeholder='Project 4 tech used'
              type='text'
              value={ptech4}
              onChange={(e) => setPtech4(e.target.value)}
            />
            <input
              placeholder='Project 4 description'
              type='text'
              value={pdesc4}
              onChange={(e) => setPdesc4(e.target.value)}
            />
          </div>
          <div>
            <h2>technical skills info</h2>
            <input
              placeholder='programming Languages'
              type='text'
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            />
            <input
              placeholder='Technologies/frameworks'
              type='text'
              value={tech}
              onChange={(e) => setTech(e.target.value)}
            />

            <input
              placeholder='Developer tools'
              type='text'
              value={tools}
              onChange={(e) => setTools(e.target.value)}
            />
          </div>
          <div>
            <h2>achievements info</h2>
            <input
              placeholder='Achievement 1'
              type='text'
              value={achieve1}
              onChange={(e) => setAchieve1(e.target.value)}
            />
            <input
              placeholder='Achievement 2'
              type='text'
              value={achieve2}
              onChange={(e) => setAchieve2(e.target.value)}
            />
            <input
              placeholder='Achievement 3'
              type='text'
              value={achieve3}
              onChange={(e) => setAchieve3(e.target.value)}
            />

            <input
              placeholder='Achievement 4'
              type='text'
              value={achieve4}
              onChange={(e) => setAchieve4(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ResumeBuilder
