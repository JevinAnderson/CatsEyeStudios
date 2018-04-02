import shuffle from 'lodash/shuffle';

export const images = shuffle([
  {
    src: 'images/portraits/1.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/2.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/3.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/4.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/5.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/6.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/7.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/8.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/9.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/10.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/11.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/12.jpg',
    w: 2771,
    h: 4156
  },
  {
    src: 'images/portraits/13.jpg',
    w: 2100,
    h: 3150
  },
  {
    src: 'images/portraits/14.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/15.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/16.jpg',
    w: 3265,
    h: 4898
  },
  // {
  //   src: 'images/portraits/17.jpg',
  //   w: 4898,
  //   h: 3265
  // },
  {
    src: 'images/portraits/18.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/19.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/20.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/21.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/22.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/23.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/24.jpg',
    w: 3265,
    h: 4898
  },
  {
    src: 'images/portraits/25.jpg',
    w: 3265,
    h: 4898
  }
]).map(image => ({
  ...image,
  msrc: image.src.replace(/\.jpg$/, 'a.jpg')
}));

export default images;
