
import { ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "Erin Dwi Aprilia",
  birthDate: "20 April 1991",
  phone: "+62 856-4009-4727",
  education: {
    degree: "S.AK (Sarjana Akuntansi)",
    institution: "STIE Semarang",
    gpa: "3.11"
  },
  experiences: [
    {
      company: "PT Tiga Raksa Satria TBK",
      role: "Area Sales Supervisor",
      period: "2014 - 2026",
      description: "Bertanggung jawab atas pengawasan penjualan area, strategi pasar, dan pencapaian target tim penjualan dalam skala besar.",
      skills: ["Team Leadership", "Sales Strategy", "Market Analysis", "Key Account Management"]
    },
    {
      company: "PT Antar Mitra Sembada",
      role: "Sales Exclusive Pure Baby",
      period: "2012 - 2014",
      description: "Menangani area Semarang, Demak, dan Salatiga. Membangun hubungan eksklusif dengan klien retail dan distributor produk bayi.",
      skills: ["B2B Sales", "Client Relations", "Regional Expansion", "Product Specialist"]
    },
    {
      company: "PT APL",
      role: "Sales Merchandiser",
      period: "2010 - 2012",
      description: "Memastikan ketersediaan produk di outlet, visual merchandising, dan monitoring stok barang di lapangan.",
      skills: ["Visual Merchandising", "Inventory Monitoring", "Retail Execution", "Field Sales"]
    }
  ]
};
