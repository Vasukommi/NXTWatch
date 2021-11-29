import './index.css'

const VideoItem = props => {
  const {videoDetails} = props
  console.log(videoDetails)
  const {channel, publishedAt, thumbnailUrl, title, viewCount} = videoDetails

  const updatedChannel = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }
  const {name, profileImageUrl} = updatedChannel

  return (
    <li className="video-item">
      <img
        className="video-thumbnail"
        src={thumbnailUrl}
        alt="channel thumbnail"
      />
      <div className="video-item-details-container">
        <img
          className="channel-thumbnail"
          src={profileImageUrl}
          alt="profile"
        />
        <div className="video-item-details-section">
          <h1 className="video-item-heading">{title}</h1>
          <p className="video-item-title">{name}</p>
          <p className="video-item-views">
            <span>{viewCount} views</span>
            <span> . </span>
            <span>{publishedAt}</span>
          </p>
        </div>
      </div>
    </li>
  )
}

export default VideoItem
