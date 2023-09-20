import React from 'react'
import { connect } from 'react-redux'
import { updateContactInfo } from '../../actions/contact-info'

function Contact(props) {
  const { contactInfo, dispatchContactUpdate } = props
  console.log(contactInfo)

  const handleUpdatePersonalInfo = (e, fieldToUpdate) => {
    dispatchContactUpdate({
      ...contactInfo,
      [fieldToUpdate]: e.target.value,
    })
  }
  return (
    <div className='contactContainer'>
      <input
        placeholder='first name'
        type='text'
        value={contactInfo.firstName}
        onChange={(e) => handleUpdatePersonalInfo(e, 'firstName')}
      />
      <input
        placeholder='last name'
        type='text'
        value={contactInfo.lastName}
        onChange={(e) => handleUpdatePersonalInfo(e, 'lastName')}
      />
      <input
        placeholder='Address'
        type='text'
        value={contactInfo.address}
        onChange={(e) => handleUpdatePersonalInfo(e, 'address')}
      />
      <input
        placeholder='city'
        type='text'
        value={contactInfo.city}
        onChange={(e) => handleUpdatePersonalInfo(e, 'city')}
      />
      <input
        placeholder='phone number'
        type='number'
        value={contactInfo.phone}
        onChange={(e) => handleUpdatePersonalInfo(e, 'phone')}
      />
      <input
        placeholder='email'
        type='email'
        value={contactInfo.email}
        onChange={(e) => handleUpdatePersonalInfo(e, 'email')}
      />
      <input
        placeholder='linkedin url'
        type='text'
        value={contactInfo.linkedin}
        onChange={(e) => handleUpdatePersonalInfo(e, 'linkedin')}
      />
      <input
        placeholder='github link'
        type='text'
        value={contactInfo.github}
        onChange={(e) => handleUpdatePersonalInfo(e, 'github')}
      />
      <input
        placeholder='portfolio link'
        type='text'
        value={contactInfo.portfolio}
        onChange={(e) => handleUpdatePersonalInfo(e, 'portfolio')}
      />
    </div>
  )
}

export default connect(
  (state) => ({ contactInfo: state.contactInfo }),
  (dispatch) => ({
    dispatchContactUpdate: (payload) => dispatch(updateContactInfo(payload)),
  })
)(Contact)
