import React from 'react'
import { updateProjectsInfo } from '../../actions/projects-info'
import { connect } from 'react-redux'

function Projects(props) {
  const { projectsInfo, dispatchProjectsInfo } = props
  console.log(props)

  const handleUpdateProjectsInfo = (e, fieldToUpdate) => {
    dispatchProjectsInfo({
      ...projectsInfo,
      [fieldToUpdate]: e.target.value,
    })
  }
  return (
    <div>
      <input
        placeholder='Project 1 titie'
        type='text'
        value={projectsInfo.projectTitle1}
        onChange={(e) => handleUpdateProjectsInfo(e, 'projectTitle1')}
      />
      <input
        placeholder='Project 1 tech used'
        type='text'
        value={projectsInfo.techStack1}
        onChange={(e) => handleUpdateProjectsInfo(e, 'techStack1')}
      />{' '}
      <input
        placeholder='Project 1 Link'
        type='text'
        value={projectsInfo.projectLink1}
        onChange={(e) => handleUpdateProjectsInfo(e, 'projectLink1')}
      />{' '}
      <input
        placeholder='Project 1 description'
        type='text'
        value={projectsInfo.projectDescription1}
        onChange={(e) => handleUpdateProjectsInfo(e, 'projectDescription1')}
      />
      <br />
      <input
        placeholder='Project 2 titie'
        type='text'
        value={projectsInfo.projectTitle2}
        onChange={(e) => handleUpdateProjectsInfo(e, 'projectTitle2')}
      />
      <input
        placeholder='Project 2 tech used'
        type='text'
        value={projectsInfo.techStack2}
        onChange={(e) => handleUpdateProjectsInfo(e, 'techStack2')}
      />{' '}
      <input
        placeholder='Project 2 Link'
        type='text'
        value={projectsInfo.projectLink2}
        onChange={(e) => handleUpdateProjectsInfo(e, 'projectLink2')}
      />
      <input
        placeholder='Project 2 description'
        type='text'
        value={projectsInfo.projectDescription2}
        onChange={(e) => handleUpdateProjectsInfo(e, 'projectDescription2')}
      />
      <br />
      <input
        placeholder='Project 3 titie'
        type='text'
        value={projectsInfo.projectTitle3}
        onChange={(e) => handleUpdateProjectsInfo(e, 'projectTitle3')}
      />
      <input
        placeholder='Project 3 tech used'
        type='text'
        value={projectsInfo.techStack3}
        onChange={(e) => handleUpdateProjectsInfo(e, 'techStack3')}
      />{' '}
      <input
        placeholder='Project 3 description'
        type='text'
        value={projectsInfo.projectDescription3}
        onChange={(e) => handleUpdateProjectsInfo(e, 'projectDescription3')}
      />{' '}
      <input
        placeholder='Project 3 Link'
        type='text'
        value={projectsInfo.projectLink3}
        onChange={(e) => handleUpdateProjectsInfo(e, 'projectLink3')}
      />
      <br />
      <input
        placeholder='Project 4 titie'
        type='text'
        value={projectsInfo.projectTitle4}
        onChange={(e) => handleUpdateProjectsInfo(e, 'projectTitle4')}
      />
      <input
        placeholder='Project 4 tech used'
        type='text'
        value={projectsInfo.techStack4}
        onChange={(e) => handleUpdateProjectsInfo(e, 'techStack4')}
      />
      <input
        placeholder='Project 4 Link'
        type='text'
        value={projectsInfo.projectLink4}
        onChange={(e) => handleUpdateProjectsInfo(e, 'projectLink4')}
      />
      <input
        placeholder='Project 4 description'
        type='text'
        value={projectsInfo.projectDescription4}
        onChange={(e) => handleUpdateProjectsInfo(e, 'projectDescription4')}
      />
    </div>
  )
}

export default connect(
  ({ projectsInfo }) => ({
    projectsInfo,
  }),
  (dispatch) => ({
    dispatchProjectsInfo: (payload) => dispatch(updateProjectsInfo(payload)),
  })
)(Projects)
