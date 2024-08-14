// pages/index.js
import ImageLayout from './components/image/ImageLayout';
import ImageGrid from './components/image/ImageGrid';
import one from '@/public/1.jpg'
import two from '@/public/2.jpg'
import three from '@/public/3.jpg'
import four from '@/public/4.jpg'
import five from '@/public/5.jpg'
import six from '@/public/6.jpg'
import seven from '@/public/7.jpg'
import eight from '@/public/8.jpg'
import nine from '@/public/9.jpg'
import ten from '@/public/10.jpg'
import eleven from '@/public/11.jpg'
import twelve from '@/public/12.jpg'
import thirteen from '@/public/13.jpg'
import fourteen from '@/public/14.jpg'

const images = [
  { id: 1, url: one, alt: 'Photo 1' },
  { id: 2, url: two, alt: 'Photo 2' },
  { id: 3, url: three, alt: 'Photo 3' },
  { id: 4, url: four, alt: 'Photo 4' },
  { id: 5, url: five, alt: 'Photo 5' },
  { id: 6, url: six, alt: 'Photo 6' },
  { id: 7, url: seven, alt: 'Photo 7' },
  { id: 8, url: eight, alt: 'Photo 8' },
  { id: 9, url: nine, alt: 'Photo 9' },
  { id: 10, url: ten, alt: 'Photo 10' },
  { id: 11, url: eleven, alt: 'Photo 11' },
  { id: 12, url: twelve, alt: 'Photo 12' },
  { id: 13, url: thirteen, alt: 'Photo 13' },
  { id: 14, url: fourteen, alt: 'Photo 14' },


];

export default function Home() {
  return (
    <ImageLayout>
      <ImageGrid images={images} />
    </ImageLayout>
  );
}
