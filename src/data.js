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

// Gallery
import Sarno1 from "./assets/image/mitra/gallery/sarno/gallery_sarno_1.JPG";
import Sarno2 from "./assets/image/mitra/gallery/sarno/gallery_sarno_2.JPG";
import Sarno3 from "./assets/image/mitra/gallery/sarno/gallery_sarno_3.JPG";
import Sarno4 from "./assets/image/mitra/gallery/sarno/gallery_sarno_4.JPG";
import Sarno5 from "./assets/image/mitra/gallery/sarno/gallery_sarno_5.JPG";
import Sarno6 from "./assets/image/mitra/gallery/sarno/gallery_sarno_6.JPG";
import Sarno7 from "./assets/image/mitra/gallery/sarno/gallery_sarno_7.JPG";

import Waluyo1 from "./assets/image/mitra/gallery/ediWaluyo/gallery_waluyo_7.JPG";
import Waluyo2 from "./assets/image/mitra/gallery/ediWaluyo/gallery_waluyo_2.JPG";
import Waluyo3 from "./assets/image/mitra/gallery/ediWaluyo/gallery_waluyo_3.JPG";
import Waluyo4 from "./assets/image/mitra/gallery/ediWaluyo/gallery_waluyo_4.JPG";
import Waluyo5 from "./assets/image/mitra/gallery/ediWaluyo/gallery_waluyo_5.JPG";
import Waluyo6 from "./assets/image/mitra/gallery/ediWaluyo/gallery_waluyo_6.JPG";
import Waluyo7 from "./assets/image/mitra/gallery/ediWaluyo/gallery_waluyo_7.JPG";

import mbah1 from "./assets/image/mitra/gallery/ediWaluyo/gallery_mbah_1.JPG";
import mbah2 from "./assets/image/mitra/gallery/ediWaluyo/gallery_mbah_2.JPG";
import mbah3 from "./assets/image/mitra/gallery/ediWaluyo/gallery_mbah_3.JPG";
import mbah4 from "./assets/image/mitra/gallery/ediWaluyo/gallery_mbah_4.JPG";
import mbah5 from "./assets/image/mitra/gallery/ediWaluyo/gallery_mbah_5.JPG";
import mbah6 from "./assets/image/mitra/gallery/ediWaluyo/gallery_mbah_6.JPG";
import mbah7 from "./assets/image/mitra/gallery/ediWaluyo/gallery_mbah_7.JPG";

import kliwon1 from "./assets/image/mitra/gallery/ediWaluyo/gallery_kliwon_1.JPG";
import kliwon2 from "./assets/image/mitra/gallery/ediWaluyo/gallery_kliwon_2.JPG";
import kliwon3 from "./assets/image/mitra/gallery/ediWaluyo/gallery_kliwon_3.JPG";
import kliwon4 from "./assets/image/mitra/gallery/ediWaluyo/gallery_kliwon_4.JPG";
import kliwon5 from "./assets/image/mitra/gallery/ediWaluyo/gallery_kliwon_5.JPG";
import kliwon6 from "./assets/image/mitra/gallery/ediWaluyo/gallery_kliwon_6.JPG";
import kliwon7 from "./assets/image/mitra/gallery/ediWaluyo/gallery_kliwon_7.JPG";

// Foto TOKO
import tokoSarno from "./assets/image/mitra/fotoToko/tokoSarno.jpg";
import tokoKliwon from "./assets/image/mitra/fotoToko/tokoKliwon.JPG";
import tokoMbah from "./assets/image/mitra/fotoToko/tokoMbah.JPG";
import tokoWaluyo from "./assets/image/mitra/fotoToko/tokoWaluyo.JPG";

const mitra = [
  {
    id: 1,
    toko: "Bhinneka Bawor",
    name: "Sarno",
    description:
      "Saya Sarno, pemilik Bhinneka Bawor, menawarkan berbagai jenis durian premium yang terkenal akan kualitas dan rasanya. Dengan pengalaman bertahun-tahun, saya berkomitmen untuk menyediakan durian terbaik bagi pecinta durian di seluruh Indonesia.",
    image: `${drivePath}1DEgYofaiTbqOsKCAylLt3NOrc7X6L1L9${size}`,
    fotoToko: tokoSarno,
    kataPromosi:
      "Rasakan sensasi durian premium hanya di Bhinneka Bawor, kenikmatan tiada tanding!",
    linkMap: "https://maps.app.goo.gl/so9GKWVz64sWRsmZ8",
    alamat: "Desa Pageralam",
    linkWhatsapp: `${wa}6281234567890`,
    linkInstagram: `${ig}`,
    linkFacebook: `${fb}`,
    galeri: [Sarno1, Sarno2, Sarno3, Sarno4, Sarno5, Sarno6, Sarno7],
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
    ],
    productsDuren: [
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
  {
    id: 2,
    toko: "Duren Mandiri",
    name: "Edi Waluyo",
    description:
      "Saya, Edi Waluyo, adalah seorang petani durian yang sudah mengelola Kebun Duren Mandiri selama lebih dari dua dekade. Ketertarikan saya pada durian sudah muncul sejak masa muda, dan selama bertahun-tahun saya mendalami teknik budidaya durian, memilih varietas unggulan, serta mempraktikkan metode perawatan yang alami dan berkelanjutan.",
    image: `${drivePath}1BK5Eo_L9KPQu4bSwl-I4pH4Ly90xFOMI${size}`,
    fotoToko: tokoWaluyo,
    kataPromosi:
      "Nikmati durian terbaik dari Duren Mandiri, alami dan berkelanjutan!",
    linkMap: "https://maps.app.goo.gl/TSCrCNTaLqBabrL59",
    alamat: "Desa Pageralam",
    linkWhatsapp: `${wa}6281226779766`,
    linkInstagram: `${ig}`,
    linkFacebook: `${fb}`,
    galeri: [Waluyo1, Waluyo2, Waluyo3, Waluyo4, Waluyo5, Waluyo6, Waluyo7],
    fasilitas: [
      {
        id: 1,
        name: "Saung Durian",
        description:
          "Tempat bersantai menikmati durian dengan pemandangan alam yang asri dan udara yang sejuk. Saung ini didesain untuk memberikan kenyamanan maksimal bagi para pengunjung, cocok untuk keluarga maupun teman-teman.",
        image: "",
      },
      {
        id: 2,
        name: "Musala",
        description:
          "Musala untuk beribadah dengan fasilitas yang lengkap dan nyaman. Kebersihan selalu dijaga dengan baik, serta tersedia tempat wudu yang mudah diakses. Musala ini dilengkapi dengan sajadah, mukena, dan sarung yang bersih, serta pencahayaan yang cukup untuk memberikan kenyamanan saat beribadah.",
        image: "",
      },
      {
        id: 3,
        name: "Toilet",
        description:
          "Fasilitas toilet umum yang bersih dan terawat, tersedia untuk pengunjung. Toilet dilengkapi dengan pencahayaan yang baik, air bersih, dan sabun untuk memastikan kenyamanan pengguna.",
        image: "",
      },
    ],
    productsDuren: [
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
  {
    id: 3,
    toko: "Mbah Duren",
    name: "Budi Setiawan",
    description:
      "Saya, Budi Setiawan, pemilik Mbah Duren, dengan bangga menghadirkan berbagai jenis durian, termasuk varietas lokal unggulan dan favorit impor. Pengalaman saya bertahun-tahun menjamin setiap durian yang dijual memiliki rasa dan kualitas terbaik.",
    image: `${drivePath}19wwz6_u8oCQgfgUCQjUiHk22NpxA8ol2${size}`,
    fotoToko: tokoMbah,
    kataPromosi:
      "Jangan lewatkan kelezatan sejati di Mbah Duren, pusatnya durian berkualitas!",
    linkMap: "https://g.co/kgs/cHwC7V3",
    alamat: "Desa Karangsalam, RT 04/02 Kec Kemranjen",
    linkWhatsapp: `${wa}`,
    linkInstagram: `${ig}`,
    linkFacebook: `${fb}`,
    galeri: [mbah1, mbah2, mbah3, mbah4, mbah5, mbah6, mbah7],
    fasilitas: [
      {
        id: 1,
        name: "Tempat Duduk",
        description:
          "Tempat bersantai menikmati durian dengan pemandangan alam yang asri dan udara yang sejuk. Saung ini didesain untuk memberikan kenyamanan maksimal bagi para pengunjung, cocok untuk keluarga maupun teman-teman.",
      },
    ],
    productsDuren: [
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
  {
    id: 4,
    toko: "Toko Duren Kliwon",
    name: "Sugeng",
    description:
      "Saya, Sugeng, pendiri Toko Duren Kliwon, menyediakan berbagai pilihan durian favorit dengan fasilitas lengkap untuk kenyamanan pelanggan. Dengan pelayanan terbaik, kami siap memanjakan pecinta durian dari berbagai penjuru.",
    image: `${drivePath}1GxUKJxZKG7XNw-ihA8_OWJZWklhB5QNf${size}`,
    fotoToko: tokoKliwon,
    kataPromosi:
      "Puaskan selera Anda dengan durian istimewa dari Toko Duren Kliwon!",
    linkMap: "https://maps.app.goo.gl/58HbtBhDEqU3vryi6",
    alamat: "Desa Karangsalam",
    linkWhatsapp: `${wa}62882000311731`,
    linkInstagram: `${ig}`,
    linkFacebook: `${fb}DurenPakKliwon`,
    galeri: [kliwon1, kliwon2, kliwon3, kliwon4, kliwon5, kliwon6, kliwon7],
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
    ],
    productsDuren: [
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
];

const productBibit = [
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
];

const productDurian = [
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
];

const productOlahan = [
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

  // PRODUCT BIBIT LAINNYA
];

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

export { mitra, mitraPage, catalogData };
