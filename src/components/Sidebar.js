import ReactPlayer from "react-player";

function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <div className="subSidebar">
        <div className="leftSide" id="leftSide">
          <button className="closeBtn" id="closeLeftBtn">
            Close
          </button>
          <div className="description">
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
            <div>차의 전면부에 대한 설명 블라블라</div>
          </div>
          <ReactPlayer
            className="video"
            url="./assets/video/video.mp4"
            controls
          ></ReactPlayer>
        </div>
        <div className="rightSide" id="rightSide">
          <button className="closeBtn" id="closeRightBtn">
            Close
          </button>
          <div className="description">
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <div>차의 후면부에 대한 설명 블라블라</div>
            <ReactPlayer
              className="video"
              url="./assets/video/video.mp4"
              controls
            ></ReactPlayer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
