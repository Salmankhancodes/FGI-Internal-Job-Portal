import React from 'react'

function Education({ formData, setFormData }) {
  return (
    <div>
      <input
        placeholder='College Name'
        type='text'
        value={formData.college}
        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
      />
      <input
        placeholder='start year'
        type='month'
        value={formData.cstart}
        onChange={(e) => setFormData({ ...formData, cstart: e.target.value })}
      />
      <input
        placeholder='end year'
        type='month'
        value={formData.cend}
        onChange={(e) => setFormData({ ...formData, cend: e.target.value })}
      />
      <input
        placeholder='Course'
        type='text'
        value={formData.course}
        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
      />
      <input
        placeholder='branch'
        type='text'
        value={formData.branch}
        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
      />
      <input
        placeholder='cgpa'
        type='text'
        value={formData.cgpa}
        onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })}
      />
      <input
        placeholder='school'
        type='text'
        value={formData.school}
        onChange={(e) => setFormData({ ...formData, school: e.target.value })}
      />
      <input
        placeholder='board name'
        type='text'
        value={formData.board}
        onChange={(e) => setFormData({ ...formData, board: e.target.value })}
      />
      <input
        placeholder='year'
        type='month'
        value={formData.send}
        onChange={(e) => setFormData({ ...formData, send: e.target.value })}
      />
      <input
        placeholder='marks/percentage obtained'
        type='text'
        value={formData.marks}
        onChange={(e) => setFormData({ ...formData, marks: e.target.value })}
      />
    </div>
  )
}

export default Education
