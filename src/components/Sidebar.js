function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <div className="subSidebar">
        <div className="leftSide" id="leftSide">
          <button id="closeLeftBtn">Close Btn</button>
          <div className="description">차의 전면부에 대한 설명 블라블라</div>
        </div>
        <div className="rightSide" id="rightSide">
          <button id="closeRightBtn">Close Btn</button>
          <div className="description">차의 후면부에 대한 설명 블라블라</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
