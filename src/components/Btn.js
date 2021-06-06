function Btn() {
  return (
    <div className="btnContainer" id="btnContainer">
      <div className="subContainer">
        <div></div>
        <button className="openBtn" id="leftBtn">
          Front
        </button>
        <div></div>
        <div></div>
      </div>
      <div className="subContainer">
        <div></div>
        <button className="openBtn" id="rightBtn">
          Back
        </button>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Btn;
