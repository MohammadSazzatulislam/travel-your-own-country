import React from "react";
import { FaLocationArrow, FaArrowCircleRight } from "react-icons/fa";
import "./Placess.css";
import { Link } from "react-router-dom";

const placess = [
  {
    id: 1,
    title: "Cox's Bazar",
    destination: "Chattogram",
    img: "https://i.ibb.co/TwS8BFB/places-1.jpg",
    bannerImg: "https://i.ibb.co/Pc45K80/banner-Img.jpg",
    package: [
      {
        packImg: "https://i.ibb.co/R420VPb/pack-Img-1.jpg",
        packSubTitle: "Vacations",
        raiting: "4.96(89 reviews)",
        packTitle: "Sea Pearl Beach Resort & Spa Cox's Bazar",
        location:
          " Jaliapalong, Inani, Ukhia, Cox's Bazar - 4750, Chattogram, Bangladesh",
        price: "$210",
      },
      {
        packImg: "https://i.ibb.co/9NvNytX/pack-Img-2.jpg",
        packSubTitle: "Vacations",
        raiting: "4.97(92 reviews)",
        packTitle: "Sayeman Beach Resort Cox's Bazar",
        location:
          " Sayeman Beach Resort Marine Drive Road, Kolatali Cox's Bazar 4700, chattogram , bangladesh",
        price: "$200",
      },
      {
        packImg: "https://i.ibb.co/JFC0xzf/pack-Img-3.jpg",
        packSubTitle: "Vacations",
        raiting: "4.87(87 reviews)",
        packTitle: "Seagull Hotel Cox's Bazar",
        location:
          " Soghundha Point, Hotel Motel Zone, Cox's Bazar 4700, chattogram , bangladesh",
        price: "$190",
      },
    ],
    imageGallery: [
      {
        img: "https://i.ibb.co/1Rf8xXL/tour-Gallery-1.jpg",
      },
      {
        img: "https://i.ibb.co/X3cFMmX/tour-Gallery-2.jpg",
      },
      {
        img: "https://i.ibb.co/3ccdCVY/tour-Gallery-3.jpg",
      },
      {
        img: "https://i.ibb.co/6rbStkZ/tour-Gallery-4.jpg",
      },
      {
        img: "https://i.ibb.co/ggqHQZc/tour-Gallery-5.jpg",
      },
      {
        img: "https://i.ibb.co/R239cYR/tour-Gallery-6.jpg",
      },
      {
        img: "https://i.ibb.co/rM5Sv79/tour-Gallery-7.jpg",
      },
      {
        img: "https://i.ibb.co/t8wZqBW/tour-Gallery-8.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Sundarban",
    destination: "Khulna",
    img: "https://i.ibb.co/QpkFv8d/places-2.jpg",
    bannerImg: "https://i.ibb.co/qMh8dkG/banner-Img.jpg",
    imageGallery: [
      {
        img: "https://i.ibb.co/rfNmdx8/img-1.jpg",
      },
      {
        img: "https://i.ibb.co/LJcXL0G/img-2.jpg",
      },
      {
        img: "https://i.ibb.co/G7RxvFJ/img-3.jpg",
      },
      {
        img: "https://i.ibb.co/vPpyL96/img-4.jpg",
      },
      {
        img: "https://i.ibb.co/GkpVh4D/img-5.jpg",
      },
      {
        img: "https://i.ibb.co/gMK4vZp/img-6.jpg",
      },
      {
        img: "https://i.ibb.co/7SsXkgj/img-7.jpg",
      },
      {
        img: "https://i.ibb.co/Dr1RPcx/img-8.jpg",
      },
    ],
    package: [
      {
        packImg: "https://i.ibb.co/cLpxrDp/pack-Img-1.jpg",
        packSubTitle: "Vacations",
        raiting: "4.93(89 reviews)",
        packTitle: "Sunderban Tiger Camp- Wildlife Resort",
        location: " Dayapur Island, PO, Dayapur, West Bengal 743370, India",
        price: "$230",
      },
      {
        packImg: "https://i.ibb.co/ZzNMSmR/pack-Img-2.jpg",
        packSubTitle: "Vacations",
        raiting: "4.99(109 reviews)",
        packTitle: "Royal Sundarban Wild Resort",
        location:
          " Jharkhali Forest range and park, Sundarban, South 24 parganas, West Bengal 743312, India",
        price: "$220",
      },
      {
        packImg: "https://i.ibb.co/42yWzQf/pack-Img-3.jpg",
        packSubTitle: "Vacations",
        raiting: "4.55(66 reviews)",
        packTitle: "Solitary Nook",
        location:
          " Pakhiralay, Gosaba, Sunderban South 24 Pargana Pin, Gosaba, West Bengal 743370, India",
        price: "$205",
      },
    ],
  },
  {
    id: 3,
    title: "Rangamati",
    destination: "Chattogram",
    img: "https://i.ibb.co/nkfx2Cy/places-3.jpg",
    bannerImg: "https://i.ibb.co/gjjtZ4M/banner-Img.jpg",
    imageGallery: [
      {
        img: "https://i.ibb.co/tc0VN4d/img-1.jpg",
      },
      {
        img: "https://i.ibb.co/VNKHq5c/img-2.jpg",
      },
      {
        img: "https://i.ibb.co/dpKGDqs/img-3.jpg",
      },
      {
        img: "https://i.ibb.co/yQRCqk2/img-4.jpg",
      },
      {
        img: "https://i.ibb.co/xSwJLMH/img-5.jpg",
      },
      {
        img: "https://i.ibb.co/c39PNvg/img-6.jpg",
      },
      {
        img: "https://i.ibb.co/2gMkqfB/img-7.jpg",
      },
      {
        img: "https://i.ibb.co/sPZrFDb/img-8.jpg",
      },
    ],
    package: [
      {
        packImg: " https://i.ibb.co/YXQDjSM/pack-Img-1.jpg",
        packSubTitle: "Vacations",
        raiting: "3.63(49 reviews)",
        packTitle: "Aronnak Holiday Resort",
        location:
          " Near the Infantry Brigade,Rangamati Sadar Upazila Rangamati,Chattogram",
        price: "$150",
      },
      {
        packImg: "https://i.ibb.co/xmW0R2c/pack-Img-2.jpg",
        packSubTitle: "Vacations",
        raiting: "3.63(59 reviews)",
        packTitle: "The Grand Hill Taj",
        location:
          " The Grand Hill Taj, Kaptai Lake, Rangamati Sadar Upazila Porisod, Hill Tract, Chittagong-4500,",
        price: "$130",
      },
      {
        packImg: "https://i.ibb.co/sPZrFDb/img-8.jpg",
        packSubTitle: "Vacations",
        raiting: "3.33(49 reviews)",
        packTitle: "Lakeshore Resort",
        location:
          "Lakeshore Resort, Kaptai. Lakeshore Resort, Kaptai, Kaptaimukh, Chittagong Division",
        price: "$120",
      },
    ],
  },
  {
    id: 4,
    title: "Bandarban",
    destination: "Chattogram",
    img: "https://i.ibb.co/j8gQGF4/places-4.jpg",
    bannerImg: "https://i.ibb.co/pwG72sy/banner-Img.jpg",
    package: [
      {
        packImg: "https://i.ibb.co/PrGXxR6/pack-Img-1.jpg",
        packSubTitle: "Vacations",
        raiting: "3.33(99 reviews)",
        packTitle: "Fanush Resort",
        location: "Fanush Resort, 56G3+96, Bandarban 4600",
        price: "$110",
      },
      {
        packImg: "https://i.ibb.co/mFqJty7/pack-Img-2.jpg",
        packSubTitle: "Vacations",
        raiting: "2.33(39 reviews)",
        packTitle: "Holiday Inn Resort",
        location: "Holiday Inn Resort, Meghla, Bandarban, Chittagong",
        price: "$140",
      },
      {
        packImg: "https://i.ibb.co/rQ8wSrd/pack-Img-3.jpg",
        packSubTitle: "Vacations",
        raiting: "1.33(29 reviews)",
        packTitle: "Hill Palace Resort",
        location:
          "Hill Palace Resort is luxury and deluxe resort located in Meghla Lake Square",
        price: "$100",
      },
    ],
    imageGallery: [
      {
        img: "https://i.ibb.co/pyQ2pCv/img-1.jpg",
      },
      {
        img: "https://i.ibb.co/6sjnV6t/img-2.jpg",
      },
      {
        img: "https://i.ibb.co/MZq81qz/img-3.jpg",
      },
      {
        img: "https://i.ibb.co/R7vgX0y/img-4.jpg",
      },
      {
        img: "https://i.ibb.co/XXZrSwt/img-5.jpg",
      },
      {
        img: "https://i.ibb.co/sKkMxpb/img-6.png",
      },
      {
        img: "https://i.ibb.co/ydrRjYt/img-7.jpg",
      },
      {
        img: "https://i.ibb.co/K6mc9df/img-8.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Sajek Valley",
    destination: "Chattogram",
    img: "https://i.ibb.co/KjpbCpj/places-5.jpg",
    package: [
      {
        packImg: "https://i.ibb.co/F4QZQdQ/pack-Img-1.jpg",
        packSubTitle: "Vacations",
        raiting: "3.32(69 reviews)",
        packTitle: "Relax Sajek Resort",
        location: "Hilltop resort with Sake Valley & Kasalong mountain views",
        price: "$170",
      },
      {
        packImg: "https://i.ibb.co/FhHqFSn/pack-Img-2.jpg",
        packSubTitle: "Vacations",
        raiting: "3.22(49 reviews)",
        packTitle: "Madventure Resort",
        location: "Madventure Resort Sajek ",
        price: "$120",
      },
      {
        packImg: "https://i.ibb.co/gTHXSYP/pack-Img-3.jpg",
        packSubTitle: "Vacations",
        raiting: "3.36(79 reviews)",
        packTitle: "Sajek Classic Resorts",
        location: "Valley, Dighinala - Sajek Rd, Sajek 4412",
        price: "$160",
      },
    ],
    imageGallery: [
      {
        img: "https://i.ibb.co/YbpbqC3/img-1.jpg",
      },
      {
        img: "https://i.ibb.co/pnk1nzY/img-2.jpg",
      },
      {
        img: "https://i.ibb.co/dbLpBJ5/img-3.jpg",
      },
      {
        img: "https://i.ibb.co/W6KzX3L/img-4.jpg",
      },
      {
        img: "https://i.ibb.co/vvRxMyQ/img-5.jpg",
      },
      {
        img: "https://i.ibb.co/G2ktrHn/img-6.jpg",
      },
      {
        img: "https://i.ibb.co/YttWGDX/img-7.jpg",
      },
      {
        img: "https://i.ibb.co/NNRmsJV/img-8.jpg",
      },
    ],
  },
];

const Placess = () => {
  return (
    <div className="pt-28 px-5 bg-black">
      <div>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="lg:text-5xl text-center textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 "
        >
          Travel Most Popular Place In
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="lg:text-5xl text-center textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 "
        >
          Bangladesh
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="flex flex-wrap justify-center items-center gap-5 mt-28"
      >
        {placess.map((p) => (
          <div
            key={p.id}
            className="w-full card lg:w-96 md:w-80 border  rounded overflow-hidden shadow-lg"
          >
            <img className="w-full" src={p.img} alt="Mountain" />
            <div className="px-2 py-3 gap-1 flex justify-center items-center">
              <FaLocationArrow className="w-5 h-5"></FaLocationArrow>
              <p className="font-bold text-xl">{p.title}</p>
              <p className="font-bold text-xl">{p.destination}</p>
              <Link to={`/destination`}>
                <FaArrowCircleRight className="w-7 h-7 m-3 cursor-pointer"></FaArrowCircleRight>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placess;
