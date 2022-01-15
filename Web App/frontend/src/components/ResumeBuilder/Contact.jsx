import React from 'react'

function Contact({ formData, setFormData }) {
  return (
    <div className='contactContainer'>
      <input
        placeholder='first name'
        type='text'
        value={formData.first}
        onChange={(e) => setFormData({ ...formData, first: e.target.value })}
      />
      <input
        placeholder='last name'
        type='text'
        value={formData.last}
        onChange={(e) => setFormData({ ...formData, last: e.target.value })}
      />
      <input
        placeholder='Address'
        type='text'
        value={formData.add}
        onChange={(e) => setFormData({ ...formData, add: e.target.value })}
      />
      <input
        placeholder='city'
        type='text'
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      <input
        placeholder='phone number'
        type='number'
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <input
        placeholder='email'
        type='email'
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        placeholder='linkedin url'
        type='text'
        value={formData.lnkdn}
        onChange={(e) => setFormData({ ...formData, lnkdn: e.target.value })}
      />
      <input
        placeholder='github link'
        type='text'
        value={formData.github}
        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
      />
    </div>
  )
}

export default Contact
