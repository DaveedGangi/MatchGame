import './styleForTheImages.css'

const ListOfTheImages = props => {
  const {eachElement, changeTheImage} = props
  const {thumbnailUrl, imageUrl} = eachElement
  const changeUpperImage = () => {
    changeTheImage(imageUrl)
  }

  return (
    <li key={thumbnailUrl}>
      <button onClick={changeUpperImage} type="button">
        <img className="ThumbNailImage" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ListOfTheImages
