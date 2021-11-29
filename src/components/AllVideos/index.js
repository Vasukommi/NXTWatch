import {Component} from 'react'
import Cookies from 'js-cookie'

import VideoItem from '../VideoItem'

import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class AllVideos extends Component {
  state = {
    userSearch: '',
    videoList: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.fetchVideoData()
  }

  fetchVideoData = async () => {
    this.setState({apiStatus: apiConstants.in_progress})
    const {userSearch} = this.state
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${userSearch}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const rawData = data.videos
      const updatedData = rawData.map(eachItem => ({
        id: eachItem.id,
        channel: eachItem.channel,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        videoList: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderVideoList = () => {
    const {videoList} = this.state

    return (
      <ul className="all-videos-container">
        {videoList.map(eachItem => (
          <VideoItem videoDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderFailureView = () => {}

  renderLoader = () => {}

  renderUi = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.success:
        return this.renderVideoList()
      case apiConstants.in_progress:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderUi()}</>
  }
}

export default AllVideos
