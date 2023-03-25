
import React from 'react';
import Card from './Card';

export default function CardData() {
  let array = [
    {
      name: 'Rose',
      image:
        'https://tse3.mm.bing.net/th?id=OIP.BReqtLBQcSbO9Bs8G95PUQHaF6&pid=Api&P=0',
      description: 'This is dummy text used in laying.',
    },
    {
      name: 'Sunflower',
      image:
        'http://getwallpapers.com/wallpaper/full/f/2/d/714217-best-sunflower-wallpapers-1920x1080.jpg',
      description:
        'This is dummy text used in laying.',
    },
    {
      name: 'Marigold',
      image:
        'http://4.bp.blogspot.com/-TkYt_WFUsfI/UOhdNLzfBqI/AAAAAAAAQrE/SrS07YUOtNw/s1600/Marigold+Flowers+Wallpapers+09.jpg',
      description:
        'This is dummy text used in laying.',
    },
    {
      name: 'Lily',
      image:
        'http://1.bp.blogspot.com/-d7pGxp-6dGY/T0x3vCDE4KI/AAAAAAAAAeQ/RhgyR23xKt0/s1600/My+Asiatic+Lily+Flowers+1.jpg',
      description:
        'This is dummy text used in laying.',
    },
    {
      name: 'Lotus',
      image:
        'https://www.hdwallpaper.nu/wp-content/uploads/2015/10/lotus_wallpaper_011.jpg',
      description:
        'This is dummy text used in laying.',
    },
    {
      name: 'Orchid',
      image:
        'https://inspirationseek.com/wp-content/uploads/2015/01/Beautiful-Orchid-Flower.jpg',
      description:
        'This is dummy text used in laying.',
    },
  ];

  return (
    <div className="StaticCard">
        <h2 style={{textDecoration:"underline"}}>Slider Cards</h2>
      <div className="text">
        <h2>Know Your Culture</h2>
        <p>
          Hinduism is a way of life for many people around the world. The Hindu
          philosophy comes from a wide range of beliefs from scriptures and many
          other varied religious literatures. The Hindu culture is one that
          revolves around love and respect for others. For example, respect for
          elders is a foundation of Hindu culture.
        </p>
      </div>

      <div className="ComponentCard">
        <div className="CardFlex">
          {array.map((i) => {
            return <Card obj={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

