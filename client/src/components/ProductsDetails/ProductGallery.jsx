const ProductGallery = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-4 sm:py-[160px] py-[120px]">
          <div className="grid grid-rows-2 gap-4">
            <img
              src={`${import.meta.env.VITE_BASE_URL}${
                data.gallery.first.desktop
              }`}
              alt="Gallery 1"
              className="rounded-lg w-full h-[288px] object-center md:flex hidden"
            />
            <img
              src={`${import.meta.env.VITE_BASE_URL}${
                data.gallery.first.tablet
              }`}
              alt="Gallery 1"
              className="rounded-lg w-full h-[277px] object-cover sm:flex hidden md:hidden"
            />
            <img
              src={`${import.meta.env.VITE_BASE_URL}${
                data.gallery.first.mobile
              }`}
              alt="Gallery 1"
              className="rounded-lg w-full h-[174px] object-fill object-center sm:hidden flex"
            />
            <img
              src={`${import.meta.env.VITE_BASE_URL}${
                data.gallery.second.desktop
              }`}
              alt="Gallery 2"
              className="rounded-lg w-full h-[288px] object-center md:flex hidden"
            />
            <img
              src={`${import.meta.env.VITE_BASE_URL}${
                data.gallery.second.tablet
              }`}
              alt="Gallery 2"
              className="rounded-lg w-full h-[277px] object-cover sm:flex hidden md:hidden"
            />
            <img
              src={`${import.meta.env.VITE_BASE_URL}${
                data.gallery.second.mobile
              }`}
              alt="Gallery 2"
              className="rounded-lg w-full h-[174px] object-cover sm:hidden flex"
            />
          </div>
          <div>
            <img
              src={`${import.meta.env.VITE_BASE_URL}${
                data.gallery.third.desktop
              }`}
              alt="Gallery 3"
              className="rounded-lg w-full h-[592px] object-center md:flex hidden"
            />
            <img
              src={`${import.meta.env.VITE_BASE_URL}${
                data.gallery.third.tablet
              }`}
              alt="Gallery 3"
              className="rounded-lg w-[395px] h-[570px] object-cover sm:flex hidden md:hidden"
            />
            <img
              src={`${import.meta.env.VITE_BASE_URL}${
                data.gallery.third.mobile
              }`}
              alt="Gallery 3"
              className="rounded-lg w-full h-[368px] object-cover sm:hidden flex"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
