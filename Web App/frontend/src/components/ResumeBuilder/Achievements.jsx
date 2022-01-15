import React from 'react'

function Achievements({ formData, setFormData }) {
  return (
    <div>
      {' '}
      <input
        placeholder='Achievement 1'
        type='text'
        value={formData.achieve1}
        onChange={(e) => setFormData({ ...formData, achieve1: e.target.value })}
      />
      <input
        placeholder='Achievement 2'
        type='text'
        value={formData.achieve2}
        onChange={(e) => setFormData({ ...formData, achieve2: e.target.value })}
      />
      <input
        placeholder='Achievement 3'
        type='text'
        value={formData.achieve3}
        onChange={(e) => setFormData({ ...formData, achieve3: e.target.value })}
      />
      <input
        placeholder='Achievement 4'
        type='text'
        value={formData.achieve4}
        onChange={(e) => setFormData({ ...formData, achieve4: e.target.value })}
      />
    </div>
  )
}

export default Achievements
