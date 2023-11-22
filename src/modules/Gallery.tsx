import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const GalleryComponent = () => {
  const images = [
    {
      original: "https://i.ibb.co/WDDFVb7/Anns-Lodge3.jpg",
      description: "AnnsLodge",
    },

    {
      original: "https://i.ibb.co/jWXg3w6/Anns-Lodge4.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/MDFVKc7/Anns-Lodge5.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/JkrgrnH/Anns-Lodge6.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/BtTXZQr/Anns-Lodge7.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/bFhjxrC/Anns-Lodge8.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/Xyy331d/Anns-Lodge17.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/KrhqphH/Anns-Lodge18.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/Lgks6sh/Anns-Lodge13.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/JHknk5X/Anns-Lodge16.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/Bw8F5rt/Anns-Lodge9.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/nCFf5z2/Anns-Lodge10.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/ZGxXxmw/Anns-Lodge2.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/TYNrbrS/Anns-Lodge15.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/YPbcbZP/Anns-Lodge14.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/kVT34p8/Anns-Lodge11.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/xmDctxs/Anns-Lodge12.jpg",
      description: "AnnsLodge",
    },
    {
      original: "https://i.ibb.co/JqhT7mX/Anns-Lodge1.jpg",
      description: "AnnsLodge",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold  text-center mb-4 underline">
        Discover Our Black Friday Specials
      </h2>
      <div className="my-4">
        <Gallery items={images} />
      </div>
    </div>
  );
};

export default GalleryComponent;
