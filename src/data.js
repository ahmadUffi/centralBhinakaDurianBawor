// buat data
import catalogDurian from "./assets/image/catalogDurian.png";
import catalogBibit from "./assets/image/catalogBibit.png";
import catalogOlahan from "./assets/image/catalogOlahan.png";

const mitra = [
  {
    id: 1,
    toko: "nama toko",
    name: "nama pemilik",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "gambar pemiik",
    kataPromosi: "gpt aja",
    linkMap: "",
    alamat: "",
    linkWhatsapp: "",
    linkInstagram: "",
    linkFacebook: "",
    galeri: [
      "import gambar 1",
      "import gambar 2",
      "import gambar 3",
      "....cari aja gambar foto foto tempatnya cari yang bagus di drive ambil 7",
    ],
    fasilitas: [
      {
        id: 1,
        name: "fasilitas 1",
        description: "deskripsi fasilitas",
      },
      {
        id: 2,
        name: "fasilitas 2",
        description: "deskripsi fasilitas",
      },
      // fasilitas lainnya
    ],
    productsDuren: [
      {
        id: 1,
        name: "product 1",
        image: "hasil import gambar",
      },
      {
        id: 2,
        name: "product 2",
        image: "hasil import gambar",
      },
      // lain-lain product... gambar product cari aja di internet sesuaiin gambar sama nama durian nya
    ],
    productsBibit: [
      {
        id: 1,
        name: "product 1",
        image: "hasil import gambar",
      },
      {
        id: 2,
        name: "product 2",
        image: "hasil import gambar",
      },
      // lain-lain product... gambar product cari aja di internet sesuaiin gambar sama nama bibit nya
    ],
  },
];

const productBibit = [
  {
    id: 1,
    name: "product 1",
    image: "hasil import gambar",
  },
  {
    id: 2,
    name: "product 2",
    image: "hasil import gambar",
  },

  // PRODUCT BIBIT LAINNYA
];
const productDuren = [
  {
    id: 1,
    name: "product 1",
    image: "hasil import gambar",
  },
  {
    id: 2,
    name: "product 2",
    image: "hasil import gambar",
  },

  // PRODUCT BIBIT LAINNYA
];
const productOlahan = [
  {
    id: 1,
    name: "product 1",
    image: "hasil import gambar",
  },
  {
    id: 2,
    name: "product 2",
    image: "hasil import gambar",
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
