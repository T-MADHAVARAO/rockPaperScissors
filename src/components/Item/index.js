import {Img} from '../GamePage/style'

const Item = props => {
  const {each, onUserGame} = props
  const {id, imageUrl} = each
  let btnAlt
  if (id === 'ROCK') {
    btnAlt = 'rockButton'
  } else if (id === 'PAPER') {
    btnAlt = 'paperButton'
  } else {
    btnAlt = 'scissorsButton'
  }

  const onUser = () => {
    onUserGame(id, imageUrl)
  }
  return (
    <li key={each.id}>
      <button data-testid={btnAlt} onClick={onUser} type="button">
        <Img src={imageUrl} alt={id} />
      </button>
    </li>
  )
}

export default Item
