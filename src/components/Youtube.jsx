/* eslint-disable react/prop-types */

const Youtube = ({videoData}) => {

    console.log(videoData)

    // console.log(`https://www.youtube.com/embed/${id}si=mkzyOVZj5rH21UOm`)
  return videoData && (
    <div className="m-10  video-player">
      {/* <iframe
        className="rounded-xl"
        width="300"
        height="415"
        src={`https://www.youtube.com/embed/${id}?&autoplay=1&loop=1`}
      ></iframe> */}
    </div>
  )
}

export default Youtube