import styled from 'styled-components';
import media from 'styled-media-query';

/**
 * mobileTheme = .../480
 * tabletPortTheme = 480/768
 * tabletLandTheme = 768/1280
 * desktopTheme = 1280/1920
 * bigDesktopTheme = 1920/...
 */

export const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;

  /* ${media.greaterThan('1920px')`
    h1 { */
      /* font: ${({ theme }) => theme.bigDesktopTheme.fonts.h1};
    }

    h2 {
      font: ${({ theme }) => theme.bigDesktopTheme.fonts.h2};
    }

    h3 {
      font: ${({ theme }) => theme.bigDesktopTheme.fonts.h3};
    }

    h4 {
      font: ${({ theme }) => theme.bigDesktopTheme.fonts.h4};
    }

    button {
      font: ${({ theme }) => theme.bigDesktopTheme.fonts.button} ;
    }

    .subtitle__one {
      font: ${({ theme }) => theme.bigDesktopTheme.fonts.subtitleOne} ;
    }

    .subtitle__two {
      font: ${({ theme }) => theme.bigDesktopTheme.fonts.subtitleTwo} ;
    }

    .body__one {
      font: ${({ theme }) => theme.bigDesktopTheme.fonts.bodyOne} ;
    }

    .body__two {
      font: ${({ theme }) => theme.bigDesktopTheme.fonts.bodyTwo} ;
    }

    .body__three {
      font: ${({ theme }) => theme.bigDesktopTheme.fonts.bodyThree} ;
    }

    .body__four {
      font: ${({ theme }) => theme.bigDesktopTheme.fonts.bodyFour} ;
    }

    .body__five {
      font: ${({ theme }) => theme.bigDesktopTheme.fonts.bodyFive} ;
    }


    .img__feed {
      height: ${({ theme }) => theme.bigDesktopTheme.metrics.imgFeed.height};
      width: ${({ theme }) => theme.bigDesktopTheme.metrics.imgFeed.width};
      object-fit: ${({ theme }) =>
        theme.bigDesktopTheme.metrics.imgFeed.objectFit};
    }
  `}

  ${media.between('1280px', '1919px')`
    h1 {
      font: ${({ theme }) => theme.desktopTheme.fonts.h1};
    }

    h2 {
      font: ${({ theme }) => theme.desktopTheme.fonts.h2};
    }

    h3 {
      font: ${({ theme }) => theme.desktopTheme.fonts.h3};
    }

    h4 {
      font: ${({ theme }) => theme.desktopTheme.fonts.h4};
    }

    button {
      font: ${({ theme }) => theme.desktopTheme.fonts.button} ;
    }

    .subtitle__one {
      font: ${({ theme }) => theme.desktopTheme.fonts.subtitleOne} ;
    }

    .subtitle__two {
      font: ${({ theme }) => theme.desktopTheme.fonts.subtitleTwo} ;
    }

    .body__one {
      font: ${({ theme }) => theme.desktopTheme.fonts.bodyOne} ;
    }

    .body__two {
      font: ${({ theme }) => theme.desktopTheme.fonts.bodyTwo} ;
    }

    .body__three {
      font: ${({ theme }) => theme.desktopTheme.fonts.bodyThree} ;
    }

    .body__four {
      font: ${({ theme }) => theme.desktopTheme.fonts.bodyFour} ;
    }

    .body__five {
      font: ${({ theme }) => theme.desktopTheme.fonts.bodyFive} ;
    }

  .img__feed {
    height: ${({ theme }) => theme.desktopTheme.metrics.imgFeed.height};
    width: ${({ theme }) => theme.desktopTheme.metrics.imgFeed.width};
    object-fit: ${({ theme }) => theme.desktopTheme.metrics.imgFeed.objectFit};
  }
  `}

  ${media.between('768px', '1279px')`
    h1 {
      font: ${({ theme }) => theme.tabletLand.fonts.h1};
    }

    h2 {
      font: ${({ theme }) => theme.tabletLand.fonts.h2};
    }

    h3 {
      font: ${({ theme }) => theme.tabletLand.fonts.h3};
    }

    h4 {
      font: ${({ theme }) => theme.tabletLand.fonts.h4};
    }

    button {
      font: ${({ theme }) => theme.tabletLand.fonts.button} ;
    }

    .subtitle__one {
      font: ${({ theme }) => theme.tabletLand.fonts.subtitleOne} ;
    }

    .subtitle__two {
      font: ${({ theme }) => theme.tabletLand.fonts.subtitleTwo} ;
    }

    .body__one {
      font: ${({ theme }) => theme.tabletLand.fonts.bodyOne} ;
    }

    .body__two {
      font: ${({ theme }) => theme.tabletLand.fonts.bodyTwo} ;
    }

    .body__three {
      font: ${({ theme }) => theme.tabletLand.fonts.bodyThree} ;
    }

    .body__four {
      font: ${({ theme }) => theme.tabletLand.fonts.bodyFour} ;
    }

    .body__five {
      font: ${({ theme }) => theme.tabletLand.fonts.bodyFive} ;
    }

  .img__feed {
    height: ${({ theme }) => theme.tabletLand.metrics.imgFeed.height};
    width: ${({ theme }) => theme.tabletLand.metrics.imgFeed.width};
    object-fit: ${({ theme }) => theme.tabletLand.metrics.imgFeed.objectFit};
  }
  `}

  ${media.between('480px', '767px')`
    h1 {
      font: ${({ theme }) => theme.tabletPort.fonts.h1};
    }

    h2 {
      font: ${({ theme }) => theme.tabletPort.fonts.h2};
    }

    h3 {
      font: ${({ theme }) => theme.tabletPort.fonts.h3};
    }

    h4 {
      font: ${({ theme }) => theme.tabletPort.fonts.h4};
    }

    button {
      font: ${({ theme }) => theme.tabletPort.fonts.button} ;
    }

    .subtitle__one {
      font: ${({ theme }) => theme.tabletPort.fonts.subtitleOne} ;
    }

    .subtitle__two {
      font: ${({ theme }) => theme.tabletPort.fonts.subtitleTwo} ;
    }

    .body__one {
      font: ${({ theme }) => theme.tabletPort.fonts.bodyOne} ;
    }

    .body__two {
      font: ${({ theme }) => theme.tabletPort.fonts.bodyTwo} ;
    }

    .body__three {
      font: ${({ theme }) => theme.tabletPort.fonts.bodyThree} ;
    }

    .body__four {
      font: ${({ theme }) => theme.tabletPort.fonts.bodyFour} ;
    }

    .body__five {
      font: ${({ theme }) => theme.tabletPort.fonts.bodyFive} ;
    }

    .img__feed {
      height: ${({ theme }) => theme.tabletPort.metrics.imgFeed.height};
      width: ${({ theme }) => theme.tabletPort.metrics.imgFeed.width};
      object-fit: ${({ theme }) => theme.tabletPort.metrics.imgFeed.objectFit};
    }
  `}

  ${media.lessThan('480px')`
    h1 {
      font: ${({ theme }) => theme.mobileTheme.fonts.h1};
    }

    h2 {
      font: ${({ theme }) => theme.mobileTheme.fonts.h2};
    }

    h3 {
      font: ${({ theme }) => theme.mobileTheme.fonts.h3};
    }

    h4 {
      font: ${({ theme }) => theme.mobileTheme.fonts.h4};
    }

    button {
      font: ${({ theme }) => theme.mobileTheme.fonts.button} ;
    }

    .subtitle__one {
      font: ${({ theme }) => theme.mobileTheme.fonts.subtitleOne} ;
    }

    .subtitle__two {
      font: ${({ theme }) => theme.mobileTheme.fonts.subtitleTwo} ;
    }

    .body__one {
      font: ${({ theme }) => theme.mobileTheme.fonts.bodyOne} ;
    }

    .body__two {
      font: ${({ theme }) => theme.mobileTheme.fonts.bodyTwo} ;
    }

    .body__three {
      font: ${({ theme }) => theme.mobileTheme.fonts.bodyThree} ;
    }

    .body__four {
      font: ${({ theme }) => theme.mobileTheme.fonts.bodyFour} ;
    }

    .body__five {
      font: ${({ theme }) => theme.mobileTheme.fonts.bodyFive} ;
    }

    .img__feed {
      height: ${({ theme }) => theme.mobileTheme.metrics.imgFeed.height};
      width: ${({ theme }) => theme.mobileTheme.metrics.imgFeed.width};
      object-fit: ${({ theme }) => theme.mobileTheme.metrics.imgFeed.objectFit};
    }
  `} */
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;

  ${media.lessThan('1577px')`
    margin-top: 100px;

  `}
`;
