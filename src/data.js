// buat data
let drivePath = "https://drive.google.com/thumbnail?id=";
let size = "&sz=w1000";
let wa = "https://wa.me/";
let fb = "https://www.facebook.com/";
let ig = "https://www.instagram.com/";

// Image catalog
import catalogDurian from "./assets/image/catalogDurian.png";
import catalogBibit from "./assets/image/catalogBibit.png";
import catalogOlahan from "./assets/image/catalogOlahan.png";

// Image Durian
import DurianBawor from "./assets/image/durian/DurianBawor.png";
import DurianMusangKing from "./assets/image/durian/DurianMusangKing.png";
import DurianMasmuarr from "./assets/image/durian/DurianMasmuarr.png";
import DurianMontong from "./assets/image/durian/DurianMontong.png";

// Image Duri Hitam
import BibitBawor from "./assets/image/durian/bibit/bawor.png";
import BibitMusangKing from "./assets/image/durian/bibit/MusangKing.png";
import BibitDuriHitam from "./assets/image/durian/bibit/DuriHitam.png";
import BibitMontong from "./assets/image/durian/bibit/Monthong.png";

// Image Olahan
import Dodol from "./assets/image/durian/olahan/Dodol.png";
import Juice from "./assets/image/durian/olahan/Juice.png";
import Keripik from "./assets/image/durian/olahan/Keripik.png";

// import gambar mitra
import budi from "./assets/image/fotoMitra/budi.png";
import edy from "./assets/image/fotoMitra/edy.png";
import sarno from "./assets/image/fotoMitra/sarno.png";
import sugeng from "./assets/image/fotoMitra/sugeng.png";
const mitra = [
  {
    id: 1,
    toko: "Bhinneka Bawor",
    name: "Sarno",
    description:
      "Saya Sarno, pemilik Bhinneka Bawor, menawarkan berbagai jenis durian premium yang terkenal akan kualitas dan rasanya. Dengan pengalaman bertahun-tahun, saya berkomitmen untuk menyediakan durian terbaik bagi pecinta durian di seluruh Indonesia.",
    image: sarno,
    kataPromosi:
      "Rasakan sensasi durian premium hanya di Bhinneka Bawor, kenikmatan tiada tanding!",
    linkMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.2298550186238!2d109.3132639!3d-7.584144800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65443be24c5489%3A0x8c3020f13b40cec1!2sDurian%20Bhineka%20Bawor%20Sarno%20KEMRANJEN!5e1!3m2!1sid!2sid!4v1733414021574!5m2!1sid!2sid",
    alamat: "Desa Pageralam",
    linkWhatsapp: `${wa}6281234567890`,
    linkInstagram: `${ig}`,
    linkFacebook: `${fb}`,
    listProducts: [
      {
        id: 1,
        title: "Catalog Durian",
        image: catalogDurian,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemenim non in aliquid, optio unde earum porro dolores sapiente nemo!",
      },
      {
        id: 2,
        title: "Catalog Bibit",
        image: catalogBibit,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemenim non in aliquid, optio unde earum porro dolores sapiente nemo!",
      },
      {
        id: 3,
        title: "Catalog Olahan",
        image: catalogOlahan,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemenim non in aliquid, optio unde earum porro dolores sapiente nemo!",
      },
    ],
    galeri: [
      `${drivePath}10Z_ATQtaF_LIELPLxWWfIiaObVrcWV-3${size}`,
      `${drivePath}1lleVGCQdsav-wSvpEl9QUS_YqTMTtnol${size}`,
      `${drivePath}13JfruwgYs32zkWp0_NCURVMeMbm8JujV${size}`,
      `${drivePath}1dTekFV7whc-pMgc73Lp-MmsSSvCm03RR${size}`,
      `${drivePath}1zHF8POZXQO9Yz8WV_9UFr4b3QnTQPL99${size}`,
    ],
    fasilitas: [
      {
        id: 1,
        name: "Saung",
        description:
          "Tempat bersantai menikmati durian dengan pemandangan alam yang asri dan udara yang sejuk. Saung ini didesain untuk memberikan kenyamanan maksimal bagi para pengunjung, cocok untuk keluarga maupun teman-teman.",
      },
      {
        id: 2,
        name: "Musala",
        description:
          "Musala untuk beribadah dengan fasilitas yang lengkap dan nyaman. Kebersihan selalu dijaga dengan baik, serta tersedia tempat wudu yang mudah diakses. Musala ini dilengkapi dengan sajadah, mukena, dan sarung yang bersih, serta pencahayaan yang cukup untuk memberikan kenyamanan saat beribadah.",
      },
      {
        id: 3,
        name: "Toilet",
        description:
          "Fasilitas toilet umum yang bersih dan terawat, tersedia untuk pengunjung. Toilet dilengkapi dengan pencahayaan yang baik, air bersih, dan sabun untuk memastikan kenyamanan pengguna.",
      },
      {
        id: 4,
        name: "Tempat Parkir",
        description:
          "Fasilitas parkir kami dirancang untuk memberikan kenyamanan dan keamanan maksimal bagi kendaraan Anda. Dengan area yang luas, akses mudah, dan sistem keamanan canggih, Anda dapat memarkir kendaraan tanpa khawatir dan fokus menikmati waktu Anda. Parkir lebih mudah, praktis, dan tenang bersama kami!",
      },
    ],
    product: {
      productsDurian: [
        { id: 1, name: "Durian Bawor", image: DurianBawor },
        { id: 2, name: "Durian Musang King", image: DurianMusangKing },
        { id: 3, name: "Durian Duri Hitam", image: DurianMasmuarr },
        { id: 4, name: "Durian Montong", image: DurianMontong },
      ],
      productsBibit: [
        { id: 1, name: "Durian Bawor", image: BibitBawor },
        { id: 2, name: "Durian Musang King", image: BibitMusangKing },
        { id: 3, name: "Durian Duri Hitam", image: BibitDuriHitam },
        { id: 4, name: "Durian Montong", image: BibitMontong },
      ],
    },
  },
  {
    id: 2,
    toko: "Duren Mandiri",
    name: "Edi Waluyo",
    description:
      "Saya, Edi Waluyo, adalah seorang petani durian yang sudah mengelola Kebun Duren Mandiri selama lebih dari dua dekade. Ketertarikan saya pada durian sudah muncul sejak masa muda, dan selama bertahun-tahun saya mendalami teknik budidaya durian, memilih varietas unggulan, serta mempraktikkan metode perawatan yang alami dan berkelanjutan.",
    image: edy,
    kataPromosi:
      "Nikmati durian terbaik dari Duren Mandiri, alami dan berkelanjutan!",
    linkMap:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15036.985822034185!2d109.2996822!3d-7.5822443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6545c269cde91d%3A0xe939028f539e74c7!2sEdi%20Waluyo%20bibit%20dan%20buah%20durian!5e1!3m2!1sid!2sid!4v1733414205287!5m2!1sid!2sid",
    alamat: "Desa Pageralam",
    linkWhatsapp: `${wa}`,
    linkInstagram: `${ig}`,
    linkFacebook: `${fb}`,
    listProducts: [
      {
        id: 1,
        title: "Catalog Durian",
        image: catalogDurian,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemenim non in aliquid, optio unde earum porro dolores sapiente nemo!",
      },
      {
        id: 2,
        title: "Catalog Bibit",
        image: catalogBibit,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemenim non in aliquid, optio unde earum porro dolores sapiente nemo!",
      },
    ],
    galeri: [
      `${drivePath}11FMBA12udoeg0kOlw0Fmxe6rxAvpn4dA${size}`,
      `${drivePath}1ss5xFxhF374SYYYVzpyGD_wV9CXiO1rB${size}`,
      `${drivePath}1ZO6Itz7Feg8ANQC1vxgccO7wXlQFa29C${size}`,
      `${drivePath}1UsEridFUbWyQNlLDAK7EAobwq21TfP53${size}`,
      `${drivePath}1MbQiloIa4A8Ngp_dpmSTcJzDIpRSO06l${size}`,
    ],
    fasilitas: [
      {
        id: 1,
        name: "Saung Durian",
        description:
          "Tempat bersantai menikmati durian dengan pemandangan alam yang asri dan udara yang sejuk. Saung ini didesain untuk memberikan kenyamanan maksimal bagi para pengunjung, cocok untuk keluarga maupun teman-teman.",
      },
      {
        id: 2,
        name: "Musala",
        description:
          "Musala untuk beribadah dengan fasilitas yang lengkap dan nyaman. Kebersihan selalu dijaga dengan baik, serta tersedia tempat wudu yang mudah diakses. Musala ini dilengkapi dengan sajadah, mukena, dan sarung yang bersih, serta pencahayaan yang cukup untuk memberikan kenyamanan saat beribadah.",
      },
      {
        id: 3,
        name: "Toilet",
        description:
          "Fasilitas toilet umum yang bersih dan terawat, tersedia untuk pengunjung. Toilet dilengkapi dengan pencahayaan yang baik, air bersih, dan sabun untuk memastikan kenyamanan pengguna.",
      },
      {
        id: 4,
        name: "Tempat Parkir",
        description:
          "Fasilitas parkir kami dirancang untuk memberikan kenyamanan dan keamanan maksimal bagi kendaraan Anda. Dengan area yang luas, akses mudah, dan sistem keamanan canggih, Anda dapat memarkir kendaraan tanpa khawatir dan fokus menikmati waktu Anda. Parkir lebih mudah, praktis, dan tenang bersama kami!",
      },
    ],
    product: {
      productsDurian: [
        { id: 1, name: "Durian Bawor", image: DurianBawor },
        { id: 2, name: "Durian Musang King", image: DurianMusangKing },
        { id: 3, name: "Durian Duri Hitam", image: DurianMasmuarr },
        { id: 4, name: "Durian Montong", image: DurianMontong },
      ],
      productsBibit: [
        { id: 1, name: "Durian Bawor", image: BibitBawor },
        { id: 2, name: "Durian Musang King", image: BibitMusangKing },
        { id: 3, name: "Durian Duri Hitam", image: BibitDuriHitam },
        { id: 4, name: "Durian Montong", image: BibitMontong },
      ],
    },
  },
  {
    id: 3,
    toko: "Mbah Duren",
    name: "Budi Setiawan",
    description:
      "Saya, Budi Setiawan, pemilik Mbah Duren, dengan bangga menghadirkan berbagai jenis durian, termasuk varietas lokal unggulan dan favorit impor. Pengalaman saya bertahun-tahun menjamin setiap durian yang dijual memiliki rasa dan kualitas terbaik.",
    image: budi,
    kataPromosi:
      "Jangan lewatkan kelezatan sejati di Mbah Duren, pusatnya durian berkualitas!",
    linkMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.348193640914!2d109.31422607476364!3d-7.5705864924435655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65459ce5156bc7%3A0xd5f550b874e815fe!2sMbah%20Duren!5e1!3m2!1sid!2sid!4v1733414327071!5m2!1sid!2sid",
    alamat: "Desa Karangsalam, RT 04/02 Kec Kemranjen",
    linkWhatsapp: `${wa}`,
    linkInstagram: `${ig}`,
    linkFacebook: `${fb}`,
    listProducts: [
      {
        id: 1,
        title: "Catalog Durian",
        image: catalogDurian,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemenim non in aliquid, optio unde earum porro dolores sapiente nemo!",
      },
      {
        id: 2,
        title: "Catalog Bibit",
        image: catalogBibit,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemenim non in aliquid, optio unde earum porro dolores sapiente nemo!",
      },
    ],
    galeri: [
      `${drivePath}118griv5Thhby96t3JIslzH5BWOc5_c5U${size}`,
      `${drivePath}1OtHxR_lCr7CCqgE-R3jFb2f4HO9iS0N6${size}`,
      `${drivePath}1UZzD5pka_xdOQWyVZZtzY5q1wZ7OyiFd${size}`,
      `${drivePath}1qgji3bAe9iYCPlcP2lTLroEwQMNJb02x${size}`,
    ],
    fasilitas: [
      {
        id: 1,
        name: "Tempat Duduk",
        description:
          "Tempat bersantai menikmati durian dengan pemandangan alam yang asri dan udara yang sejuk. Saung ini didesain untuk memberikan kenyamanan maksimal bagi para pengunjung, cocok untuk keluarga maupun teman-teman.",
      },
      {
        id: 2,
        name: "Tempat Parkir",
        description:
          "Fasilitas parkir kami dirancang untuk memberikan kenyamanan dan keamanan maksimal bagi kendaraan Anda. Dengan area yang luas, akses mudah, dan sistem keamanan canggih, Anda dapat memarkir kendaraan tanpa khawatir dan fokus menikmati waktu Anda. Parkir lebih mudah, praktis, dan tenang bersama kami!",
      },
    ],
    products: {
      productsDurian: [
        { id: 1, name: "Durian Bawor", image: DurianBawor },
        { id: 2, name: "Durian Musang King", image: DurianMusangKing },
        { id: 3, name: "Durian Duri Hitam", image: DurianMasmuarr },
        { id: 4, name: "Durian Montong", image: DurianMontong },
        { id: 5, name: "Durian Lokal", image: DurianMasmuarr },
        { id: 6, name: "Durian Masmuar", image: DurianMasmuarr },
      ],
      productsBibit: [
        { id: 1, name: "Durian Bawor", image: BibitBawor },
        { id: 2, name: "Durian Musang King", image: BibitMusangKing },
        { id: 3, name: "Durian Duri Hitam", image: BibitDuriHitam },
        { id: 4, name: "Durian Montong", image: BibitMontong },
      ],
    },
  },

  {
    id: 4,
    toko: "Toko Duren Kliwon",
    name: "Sugeng",
    description:
      "Saya, Sugeng, pendiri Toko Duren Kliwon, menyediakan berbagai pilihan durian favorit dengan fasilitas lengkap untuk kenyamanan pelanggan. Dengan pelayanan terbaik, kami siap memanjakan pecinta durian dari berbagai penjuru.",
    image: sugeng,
    kataPromosi:
      "Puaskan selera Anda dengan durian istimewa dari Toko Duren Kliwon!",
    linkMap: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.3564460139737!2d109.31666369999999!3d-7.569640100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65456ecd370d25%3A0x69f9df3d2a0b8119!2sDuren%20pak%20kliwon!5e1!3m2!1sid!2sid!4v1733414365161!5m2!1sid!2sid`,
    alamat: "Desa Karangsalam",
    linkWhatsapp: `${wa}`,
    linkInstagram: `${ig}`,
    linkFacebook: `${fb}DurenPakKliwon`,
    listProducts: [
      {
        id: 1,
        title: "Catalog Durian",
        image: catalogDurian,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemenim non in aliquid, optio unde earum porro dolores sapiente nemo!",
      },
      {
        id: 2,
        title: "Catalog Bibit",
        image: catalogBibit,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemenim non in aliquid, optio unde earum porro dolores sapiente nemo!",
      },
    ],
    galeri: [
      `${drivePath}1oLQNNvOiwHmg5tiKYEPFmMDv6TbF3NR4${size}`,
      `${drivePath}1w0eypdsoUY5nHeqsKm1t6riYxvfgtQ7W${size}`,
      `${drivePath}1c6CEwBZ9jAi5VeiukYeK92wX940ZuG72${size}`,
      `${drivePath}1DpL6aVdPhb4m4yKfbxgRcJlN2CgZ3VPc${size}`,
      `${drivePath}14ZQT7CUDUPDnWlwrVcGxDA3-yOZaR3C4${size}`,
      `${drivePath}1_J_yUhlaa_qlrIp_EzqM3NO_AySUrkC3${size}`,
    ],
    fasilitas: [
      {
        id: 1,
        name: "Musala",
        description:
          "Musala untuk beribadah dengan fasilitas yang lengkap dan nyaman. Kebersihan selalu dijaga dengan baik, serta tersedia tempat wudu yang mudah diakses. Musala ini dilengkapi dengan sajadah, mukena, dan sarung yang bersih, serta pencahayaan yang cukup untuk memberikan kenyamanan saat beribadah.",
      },
      {
        id: 2,
        name: "Kamar Mandi",
        description:
          "Fasilitas toilet umum yang bersih dan terawat, tersedia untuk pengunjung. Toilet dilengkapi dengan pencahayaan yang baik, air bersih, dan sabun untuk memastikan kenyamanan pengguna.",
      },
      {
        id: 3,
        name: "Tempat Istirahat",
        description:
          "Tempat bersantai menikmati durian dengan pemandangan alam yang asri dan udara yang sejuk. Saung ini didesain untuk memberikan kenyamanan maksimal bagi para pengunjung, cocok untuk keluarga maupun teman-teman.",
      },
      {
        id: 4,
        name: "Tempat Parkir",
        description:
          "Fasilitas parkir kami dirancang untuk memberikan kenyamanan dan keamanan maksimal bagi kendaraan Anda. Dengan area yang luas, akses mudah, dan sistem keamanan canggih, Anda dapat memarkir kendaraan tanpa khawatir dan fokus menikmati waktu Anda. Parkir lebih mudah, praktis, dan tenang bersama kami!",
      },
    ],
    product: {
      productsDurian: [
        { id: 1, name: "Durian Bawor", image: DurianBawor },
        { id: 2, name: "Durian Musang King", image: DurianMusangKing },
        { id: 3, name: "Durian Duri Hitam", image: DurianMasmuarr },
      ],
      productsBibit: [
        { id: 1, name: "Durian Bawor", image: BibitBawor },
        { id: 2, name: "Durian Musang King", image: BibitMusangKing },
        { id: 3, name: "Durian Duri Hitam", image: BibitDuriHitam },
      ],
    },
  },
];

const product = {
  productsDurian: [
    {
      id: 1,
      name: "Durian Bawor",
      image: DurianBawor,
    },
    {
      id: 2,
      name: "Durian Musang King",
      image: DurianMusangKing,
    },
    {
      id: 3,
      name: "Durian Duri Hitam",
      image: DurianMasmuarr,
    },
    {
      id: 4,
      name: "Durian Montong",
      image: DurianMontong,
    },
  ],
  productsBibit: [
    {
      id: 1,
      name: "Durian Bawor",
      image: BibitBawor,
    },
    {
      id: 2,
      name: "Durian Musang King",
      image: BibitMusangKing,
    },
    {
      id: 3,
      name: "Durian Duri Hitam",
      image: BibitDuriHitam,
    },
    {
      id: 4,
      name: "Durian Montong",
      image: BibitMontong,
    },
  ],
  productsOlahan: [
    {
      id: 1,
      name: "Keripik Durian",
      image: Keripik,
    },
    {
      id: 2,
      name: "Juice Durian",
      image: Juice,
    },
    {
      id: 3,
      name: "Dodol Durian",
      image: Dodol,
    },
  ],
};

// const productBibit = [
//   {
//     id: 1,
//     name: "Durian Bawor",
//     image: BibitBawor,
//   },
//   {
//     id: 2,
//     name: "Durian Musang King",
//     image: BibitMusangKing,
//   },
//   {
//     id: 3,
//     name: "Durian Duri Hitam",
//     image: BibitDuriHitam,
//   },
//   {
//     id: 4,
//     name: "Durian Montong",
//     image: BibitMontong,
//   },
// ];

// const productDurian = [
//   {
//     id: 1,
//     name: "Durian Bawor",
//     image: DurianBawor,
//   },
//   {
//     id: 2,
//     name: "Durian Musang King",
//     image: DurianMusangKing,
//   },
//   {
//     id: 3,
//     name: "Durian Duri Hitam",
//     image: DurianMasmuarr,
//   },
//   {
//     id: 4,
//     name: "Durian Montong",
//     image: DurianMontong,
//   },
// ];

// const productOlahan = [
//   {
//     id: 1,
//     name: "Keripik Durian",
//     image: Keripik,
//   },
//   {
//     id: 2,
//     name: "Juice Durian",
//     image: Juice,
//   },
//   {
//     id: 3,
//     name: "Dodol Durian",
//     image: Dodol,
//   },

//   // PRODUCT BIBIT LAINNYA
// ];

const mitraPage = [{}];

const catalogData = [
  {
    id: 1,
    title: "Catalog Durian",
    image: catalogDurian,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemenim non in aliquid, optio unde earum porro dolores sapiente nemo!",
  },
  {
    id: 2,
    title: "Catalog Bibit",
    image: catalogBibit,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemenim non in aliquid, optio unde earum porro dolores sapiente nemo!",
  },
  {
    id: 3,
    title: "Catalog Olahan",
    image: catalogOlahan,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemenim non in aliquid, optio unde earum porro dolores sapiente nemo!",
  },
];

export { mitra, product, mitraPage, catalogData };
