import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const GalleryComponent = () => {
  const images = [
    {
      original: 'https://i.ibb.co/rymbs0p/Anns-Lodge3.jpg',
      description: 'AnnsLodge',
    },
    {
      original: 'https://i.ibb.co/D80BryV/Anns-Lodge4.jpg',
      description: 'AnnsLodge',
    },
    {
      original: 'https://i.ibb.co/m8rWxKX/Anns-Lodge5.jpg',
      description: 'AnnsLodge',
    },
    {
      original: 'https://i.ibb.co/1rngH9B/Anns-Lodge6.jpg',
      description: 'AnnsLodge',
    },
    {
      original: 'https://i.ibb.co/RvzbBQx/Anns-Lodge7.jpg',
      description: 'AnnsLodge',
    },
    {
      original: 'https://i.ibb.co/fGB3wsM/Anns-Lodge8.jpg',
      description: 'AnnsLodge',
    },
    {
      original: 'https://i.ibb.co/SmrS0Tf/Anns-Lodge9.jpg',
      description: 'AnnsLodge',
    },
    {
      original: 'https://i.ibb.co/myWbWgT/Anns-Lodge10.jpg',
      description: 'AnnsLodge',
    },
    {
      original: "https://i.ibb.co/kVT34p8/Anns-Lodge11.jpg",
      description: "AnnsLodge",
    },
    {
      original:"https://i.ibb.co/xmDctxs/Anns-Lodge12.jpg",
      description:"AnnsLodge",
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4 underline">
        Discover Our Black Friday Specials
      </h2>
      <Gallery items={images} />
    </div>
  );
};

export default GalleryComponent;
