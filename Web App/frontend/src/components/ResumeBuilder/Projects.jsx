import React from 'react'

function Projects({ formData, setFormData }) {
  return (
    <div>
      <input
        placeholder='Project 1 titie'
        type='text'
        value={formData.ptitle1}
        onChange={(e) => setFormData({ ...formData, ptitle1: e.target.value })}
      />
      <input
        placeholder='Project 1 tech used'
        type='text'
        value={formData.ptech1}
        onChange={(e) => setFormData({ ...formData, ptech1: e.target.value })}
      />{' '}
      <input
        placeholder='Project 1 Link'
        type='text'
        value={formData.plink1}
        onChange={(e) => setFormData({ ...formData, plink1: e.target.value })}
      />{' '}
      <input
        placeholder='Project 1 description'
        type='text'
        value={formData.pdesc1}
        onChange={(e) => setFormData({ ...formData, pdesc1: e.target.value })}
      />
      <br />
      <input
        placeholder='Project 2 titie'
        type='text'
        value={formData.ptitle2}
        onChange={(e) => setFormData({ ...formData, ptitle2: e.target.value })}
      />
      <input
        placeholder='Project 2 tech used'
        type='text'
        value={formData.ptech2}
        onChange={(e) => setFormData({ ...formData, ptech2: e.target.value })}
      />{' '}
      <input
        placeholder='Project 2 Link'
        type='text'
        value={formData.plink2}
        onChange={(e) => setFormData({ ...formData, plink2: e.target.value })}
      />
      <input
        placeholder='Project 2 description'
        type='text'
        value={formData.pdesc2}
        onChange={(e) => setFormData({ ...formData, pdesc2: e.target.value })}
      />
      <br />
      <input
        placeholder='Project 3 titie'
        type='text'
        value={formData.ptitle3}
        onChange={(e) => setFormData({ ...formData, ptitle3: e.target.value })}
      />
      <input
        placeholder='Project 3 tech used'
        type='text'
        value={formData.ptech3}
        onChange={(e) => setFormData({ ...formData, ptech3: e.target.value })}
      />{' '}
      <input
        placeholder='Project 3 description'
        type='text'
        value={formData.pdesc3}
        onChange={(e) => setFormData({ ...formData, pdesc3: e.target.value })}
      />{' '}
      <input
        placeholder='Project 3 Link'
        type='text'
        value={formData.plink3}
        onChange={(e) => setFormData({ ...formData, plink3: e.target.value })}
      />
      <br />
      <input
        placeholder='Project 4 titie'
        type='text'
        value={formData.ptitle4}
        onChange={(e) => setFormData({ ...formData, ptitle4: e.target.value })}
      />
      <input
        placeholder='Project 4 tech used'
        type='text'
        value={formData.ptech4}
        onChange={(e) => setFormData({ ...formData, ptech4: e.target.value })}
      />
      <input
        placeholder='Project 4 Link'
        type='text'
        value={formData.plink4}
        onChange={(e) => setFormData({ ...formData, plink4: e.target.value })}
      />
      <input
        placeholder='Project 4 description'
        type='text'
        value={formData.pdesc4}
        onChange={(e) => setFormData({ ...formData, pdesc4: e.target.value })}
      />
    </div>
  )
}

export default Projects
