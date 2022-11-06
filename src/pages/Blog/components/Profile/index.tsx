import { ExternalLink } from '../../../../components/ExternalLink/index'
import { ProfileContainer, ProfileDetails, ProfilePicture } from './style'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/davidaugustoo.png" />

      <ProfileDetails>
        <header>
          <h1>David Augusto</h1>

          <ExternalLink text="Github" href="#" />
        </header>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
          perspiciatis ducimus! Dolorem mollitia corrupti rerum reiciendis
          placeat accusamus magnam in.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            DavidAugusto
          </li>

          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Intelliway
          </li>

          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            112 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
