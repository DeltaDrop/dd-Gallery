import React from 'react';
import {
  Overlay,
  CenterImage,
  BannerSpacer,
  BannerContainer,
  CenterImageWrapper,
  ContentContainer,
  CarouselSection,
  CarouselWrapper,
  CarouselImage,
  CarouselImageWrapper,
  CarouselContainer,
  CarouselHeader,
  ButtonLeft,
  ButtonRight,
  ButtonExit,
} from './styled-components/OverlayStyles.jsx';

class GalleryOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centerImageIndex: 0,
      numImgs: props.imgs.length,
    };
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleRightClick(e) {
    let i = this.state.centerImageIndex;
    if (i < this.props.imgs.length - 1) i++;
    this.setState({ centerImageIndex: i });
  }

  handleLeftClick(e) {
    let i = this.state.centerImageIndex;
    if (i > 0) i--;
    this.setState({ centerImageIndex: i });
  }

  handleImageClick(centerImageIndex) {
    this.setState({ centerImageIndex });
  }

  render() {
    return (
      <Overlay overlay={this.props.overlay}>
        <CarouselContainer>
          <CarouselHeader>
            <ButtonExit
              onClick={this.props.handleClick}
              type='image'
              src='https://cdn3.iconfinder.com/data/icons/iconic-1/32/x_alt-512.png'
            />
          </CarouselHeader>

          <ContentContainer>
            <div>
              <BannerContainer>
                <CenterImageWrapper>
                  <CenterImage
                    src={this.props.imgs[this.state.centerImageIndex]}
                  />
                </CenterImageWrapper>
                <BannerSpacer />
              </BannerContainer>

              <ButtonLeft
                onClick={this.handleLeftClick}
                type='image'
                src='https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/01_arrow_left-128.png'
              />

              <ButtonRight
                onClick={this.handleRightClick}
                type='image'
                src='https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/01_arrow_left-128.png'
              />

              <CarouselWrapper>
                <CarouselSection>
                  <CarouselImageWrapper>
                    {this.props.imgs.map((item, index, array) => {
                      return <CarouselImage key={index} src={item} onClick={ () => { this.handleImageClick(index) } } index={ index } />;
                    })}
                  </CarouselImageWrapper>
                </CarouselSection>
              </CarouselWrapper>
            </div>
          </ContentContainer>
        </CarouselContainer>
      </Overlay>
    );
  }
}

export default GalleryOverlay;
