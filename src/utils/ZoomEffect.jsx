import React, { Component } from 'react'
import './ZoomEffect.css' // Asegúrate de tener un archivo CSS para definir las clases de transición

class ZoomEffect extends Component {
  constructor () {
    super()
    this.state = {
      isHovered: false
    }
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true })
  }

  handleMouseLeave = () => {
    this.setState({ isHovered: false })
  }

  render () {
    const { isHovered } = this.state
    const zoomClass = isHovered ? 'zoom transition' : 'zoom'

    return (
      <div
        className={zoomClass}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        Contenido del componente
      </div>
    )
  }
}

export default ZoomEffect
