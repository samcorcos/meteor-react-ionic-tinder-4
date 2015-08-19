Home = React.createClass({
  getInitialState() {
    return {
      x: 0,
      y: 0,
      initialX: 0,
      initialY: 0,
      dragging: "none"
    }
  },
  moveCardInit(e) {
    this.setState({
      initialX: e.touches[0].pageX,
      initialY: e.touches[0].pageY,
      dragging: "none"
    })
  },
  moveCard(e) {
    deltaX = (e.touches[0].pageX - this.state.initialX) / 2.5;
    deltaY = (e.touches[0].pageY - this.state.initialY) * 1.2;
    this.setState({
      x: deltaX,
      y: deltaY
    })
  },
  moveCardEnd(e) {
    this.setState({
      x: 0,
      y: 0,
      dragging: "all 0.5s ease"
    })
  },
  render() {
    React.initializeTouchEvents(true)
    let cardStyle = {
      transform: "translate(" + this.state.x + "%," + this.state.y + "%)",
      transition: this.state.dragging
    }
    return (
      <div className="card" onTouchStart={this.moveCardInit} onTouchMove={this.moveCard} onTouchEnd={this.moveCardEnd} style={cardStyle}>
        <div className="item item-text-wrap">
          This is a basic Card which contains an item that has wrapping text.
        </div>
      </div>
    )
  }
});
