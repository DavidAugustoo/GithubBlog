import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from './styles'

export function PostHeader() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          as="button"
          onClick={goBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          variant="iconLeft"
          text="Voltar"
          href="#"
        />
        <ExternalLink text="Ver no Github" href="#" target="_blank" />
      </header>

      <h1>Javascript data types and data sctucutere</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          camerrol
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />5 comentários
        </li>
      </ul>
    </PostHeaderContainer>
  )
}
