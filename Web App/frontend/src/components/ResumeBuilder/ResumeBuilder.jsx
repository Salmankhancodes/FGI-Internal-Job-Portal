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
      <div class='resume_wrapper'></div>
    </>
  )
}

export default ResumeBuilder
