import React from 'react'

function TechnicalSkills({ formData, setFormData }) {
  return (
    <div>
      <input
        placeholder='programming Languages'
        type='text'
        value={formData.lang}
        onChange={(e) => setFormData({ ...formData, lang: e.target.value })}
      />
      <input
        placeholder='Technologies/frameworks'
        type='text'
        value={formData.tech}
        onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
      />

      <input
        placeholder='Developer tools'
        type='text'
        value={formData.tools}
        onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
      />
    </div>
  )
}

export default TechnicalSkills
