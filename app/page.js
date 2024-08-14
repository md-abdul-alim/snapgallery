// pages/index.js
import ImageLayout from './components/image/ImageLayout';
import ImageGrid from './components/image/ImageGrid';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1721332153282-3be1f363074d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Photo 1' },
  { id: 2, url: 'https://plus.unsplash.com/premium_photo-1722993519853-daa99e78d572?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', alt: 'Photo 2' },
  { id: 3, url: 'https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8', alt: 'Photo 2' },
  { id: 4, url: 'https://images.unsplash.com/photo-1722778610349-e3c02e277ec2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8', alt: 'Photo 2' },
  { id: 5, url: 'https://images.unsplash.com/photo-1723212396541-e3b97ac55599?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D', alt: 'Photo 2' },
  { id: 6, url: 'https://images.unsplash.com/photo-1723519248300-a9c2f25a0574?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D', alt: 'Photo 2' },
  { id: 7, url: 'https://images.unsplash.com/photo-1723457135240-883758b1bc72?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D', alt: 'Photo 2' },
  { id: 8, url: 'https://plus.unsplash.com/premium_photo-1673977827860-107a79dd8e8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D', alt: 'Photo 2' },
  { id: 9, url: 'https://images.unsplash.com/photo-1723103878444-ea3e7597bf73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D', alt: 'Photo 2' },
  { id: 10, url: 'https://images.unsplash.com/photo-1721742151766-868932ab8056?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D', alt: 'Photo 2' },
  { id: 11, url: 'https://images.unsplash.com/photo-1721297015660-135f106bcdaf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D', alt: 'Photo 2' },
  { id: 12, url: 'https://plus.unsplash.com/premium_photo-1717576016919-78478d60695b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTl8fHxlbnwwfHx8fHw%3D', alt: 'Photo 2' },

];

export default function Home() {
  return (
    <ImageLayout>
      <ImageGrid images={images} />
    </ImageLayout>
  );
}
