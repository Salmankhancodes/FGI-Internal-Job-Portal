import React from 'react'

function Experience({ formData, setFormData }) {
  return (
    <div>
      <input
        placeholder='Company name'
        type='text'
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      />
      <input
        placeholder='start date'
        type='month'
        value={formData.jstart}
        onChange={(e) => setFormData({ ...formData, jstart: e.target.value })}
      />
      <input
        placeholder='end date'
        type='month'
        value={formData.jend}
        onChange={(e) => setFormData({ ...formData, jend: e.target.value })}
      />
      <input
        placeholder='designation'
        type='text'
        value={formData.desig}
        onChange={(e) => setFormData({ ...formData, desig: e.target.value })}
      />
      <input
        placeholder='job description'
        type='text'
        value={formData.jdesc}
        onChange={(e) => setFormData({ ...formData, jdesc: e.target.value })}
      />
    </div>
  )
}

export default Experience
