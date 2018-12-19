/* Gallery displays an image and handles the full screen overlay */

import React from 'react';

import GalleryOverlay from './GalleryOverlay.jsx';
import {
  Container,
  Image,
  MagnifyingGlass,
} from './styled-components/GalleryStyles.jsx';

const MAGNIFYING_GLASS_URL =
  'https://image.flaticon.com/icons/svg/181/181561.svg';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
    };
    this.handleImageClick = () => this.setState({ overlay: true });
    this.handleOverlayClick = () => this.setState({ overlay: false });
  }
  render() {
    return (
      <Container>
        <Image src={this.props.src} onClick={this.handleImageClick} />
        <MagnifyingGlass src={MAGNIFYING_GLASS_URL} />
        <GalleryOverlay
          overlay={this.state.overlay}
          handleClick={this.handleOverlayClick}
          src={this.props.src}
          imgs={[this.props.src, ...this.props.imgs]}
        />
      </Container>
    );
  }
}

export default Gallery;
