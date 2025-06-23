import fs from "fs";
import path from "path";

const TIMEOUT = 5000;

export default async function (req, res) {
  await new Promise((resolve) => setTimeout(resolve, TIMEOUT));
  res.json({
    products: [
      {
        id: 101,
        title: "Apple AirPods Max Silver",
        description: "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
        category: "mobile-accessories",
        price: 549.99,
        discountPercentage: 11.7,
        rating: 3.11,
        stock: 7,
        tags: ["electronics", "over-ear headphones"],
        brand: "Apple",
        sku: "HPK82VDE",
        weight: 4,
        dimensions: { width: 7.73, height: 18.36, depth: 17.87 },
        warrantyInformation: "3 months warranty",
        shippingInformation: "Ships in 1 month",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 1,
            comment: "Waste of money!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Harper Kelly",
            reviewerEmail: "harper.kelly@x.dummyjson.com"
          },
          {
            rating: 3,
            comment: "Not as described!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Abigail Rivera",
            reviewerEmail: "abigail.rivera@x.dummyjson.com"
          },
          {
            rating: 5,
            comment: "Excellent quality!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Nora Russell",
            reviewerEmail: "nora.russell@x.dummyjson.com"
          }
        ],
        returnPolicy: "90 days return policy",
        minimumOrderQuantity: 2,
        meta: {
          createdAt: "2024-05-23T08:56:21.624Z",
          updatedAt: "2024-05-23T08:56:21.624Z",
          barcode: "9261269777547",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
        },
        images: ["https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png"],
        thumbnail: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png"
      },
      {
        id: 104,
        title: "Apple iPhone Charger",
        description: "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
        category: "mobile-accessories",
        price: 19.99,
        discountPercentage: 1.01,
        rating: 3.03,
        stock: 4,
        tags: ["electronics", "chargers"],
        brand: "Apple",
        sku: "YAA6EHI7",
        weight: 5,
        dimensions: { width: 28.77, height: 25.05, depth: 29.55 },
        warrantyInformation: "2 year warranty",
        shippingInformation: "Ships in 1 week",
        availabilityStatus: "Low Stock",
        reviews: [
          {
            rating: 5,
            comment: "Very satisfied!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Emily Johnson",
            reviewerEmail: "emily.johnson@x.dummyjson.com"
          },
          {
            rating: 4,
            comment: "Very pleased!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Charlotte Lopez",
            reviewerEmail: "charlotte.lopez@x.dummyjson.com"
          },
          {
            rating: 5,
            comment: "Highly recommended!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Cameron Perez",
            reviewerEmail: "cameron.perez@x.dummyjson.com"
          }
        ],
        returnPolicy: "60 days return policy",
        minimumOrderQuantity: 43,
        meta: {
          createdAt: "2024-05-23T08:56:21.624Z",
          updatedAt: "2024-05-23T08:56:21.624Z",
          barcode: "9483427398580",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
        },
        images: [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/1.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/2.png"
        ],
        thumbnail: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/thumbnail.png"
      },
      {
        id: 105,
        title: "Apple MagSafe Battery Pack",
        description: "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
        category: "mobile-accessories",
        price: 99.99,
        discountPercentage: 10.27,
        rating: 2.61,
        stock: 80,
        tags: ["electronics", "power banks"],
        brand: "Apple",
        sku: "XNFJURL7",
        weight: 6,
        dimensions: { width: 21.61, height: 7.98, depth: 9.32 },
        warrantyInformation: "3 year warranty",
        shippingInformation: "Ships in 3-5 business days",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Very pleased!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Hazel Gardner",
            reviewerEmail: "hazel.gardner@x.dummyjson.com"
          },
          {
            rating: 5,
            comment: "Very satisfied!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Aurora Rodriguez",
            reviewerEmail: "aurora.rodriguez@x.dummyjson.com"
          },
          {
            rating: 5,
            comment: "Very pleased!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Victoria McDonald",
            reviewerEmail: "victoria.mcdonald@x.dummyjson.com"
          }
        ],
        returnPolicy: "No return policy",
        minimumOrderQuantity: 4,
        meta: {
          createdAt: "2024-05-23T08:56:21.624Z",
          updatedAt: "2024-05-23T08:56:21.624Z",
          barcode: "1850091228580",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
        },
        images: [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/1.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/2.png"
        ],
        thumbnail: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/thumbnail.png"
      },
      {
        id: 107,
        title: "Beats Flex Wireless Earphones",
        description: "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
        category: "mobile-accessories",
        price: 49.99,
        discountPercentage: 8.27,
        rating: 4.17,
        stock: 49,
        tags: ["electronics", "wireless earphones"],
        brand: "Beats",
        sku: "7N15J2UK",
        weight: 6,
        dimensions: { width: 23.49, height: 15.22, depth: 20.05 },
        warrantyInformation: "1 week warranty",
        shippingInformation: "Ships overnight",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Very satisfied!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Hannah Robinson",
            reviewerEmail: "hannah.robinson@x.dummyjson.com"
          },
          {
            rating: 4,
            comment: "Awesome product!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Grace Perry",
            reviewerEmail: "grace.perry@x.dummyjson.com"
          },
          {
            rating: 5,
            comment: "Very satisfied!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Grayson Coleman",
            reviewerEmail: "grayson.coleman@x.dummyjson.com"
          }
        ],
        returnPolicy: "7 days return policy",
        minimumOrderQuantity: 19,
        meta: {
          createdAt: "2024-05-23T08:56:21.624Z",
          updatedAt: "2024-05-23T08:56:21.624Z",
          barcode: "4068884711976",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
        },
        images: [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/1.png"
        ],
        thumbnail: "https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/thumbnail.png"
      },
      {
        id: 108,
        title: "iPhone 12 Silicone Case with MagSafe Plum",
        description: "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
        category: "mobile-accessories",
        price: 29.99,
        discountPercentage: 14.35,
        rating: 4.41,
        stock: 51,
        tags: ["electronics", "phone accessories"],
        brand: "Apple",
        sku: "3UHE8VLA",
        weight: 5,
        dimensions: { width: 6.32, height: 23.37, depth: 21.62 },
        warrantyInformation: "1 year warranty",
        shippingInformation: "Ships in 1 month",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 1,
            comment: "Very disappointed!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Isaac Lawrence",
            reviewerEmail: "isaac.lawrence@x.dummyjson.com"
          },
          {
            rating: 1,
            comment: "Would not recommend!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Emily Johnson",
            reviewerEmail: "emily.johnson@x.dummyjson.com"
          },
          {
            rating: 4,
            comment: "Highly recommended!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Mateo Bennett",
            reviewerEmail: "mateo.bennett@x.dummyjson.com"
          }
        ],
        returnPolicy: "30 days return policy",
        minimumOrderQuantity: 19,
        meta: {
          createdAt: "2024-05-23T08:56:21.624Z",
          updatedAt: "2024-05-23T08:56:21.624Z",
          barcode: "4106912332105",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
        },
        images: [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/1.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/2.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/3.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/4.png"
        ],
        thumbnail: "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/thumbnail.png"
      },
      {
        id: 110,
        title: "Selfie Lamp with iPhone",
        description: "The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
        category: "mobile-accessories",
        price: 14.99,
        discountPercentage: 13.86,
        rating: 2.84,
        stock: 89,
        tags: ["electronics", "selfie accessories"],
        brand: "GadgetMaster",
        sku: "2VZ1ZNMO",
        weight: 7,
        dimensions: { width: 13.38, height: 26.33, depth: 22.71 },
        warrantyInformation: "1 week warranty",
        shippingInformation: "Ships in 1 week",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Very happy with my purchase!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Hannah Howard",
            reviewerEmail: "hannah.howard@x.dummyjson.com"
          },
          {
            rating: 5,
            comment: "Excellent quality!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "William Gonzalez",
            reviewerEmail: "william.gonzalez@x.dummyjson.com"
          },
          {
            rating: 3,
            comment: "Would not buy again!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Amelia Perez",
            reviewerEmail: "amelia.perez@x.dummyjson.com"
          }
        ],
        returnPolicy: "90 days return policy",
        minimumOrderQuantity: 4,
        meta: {
          createdAt: "2024-05-23T08:56:21.624Z",
          updatedAt: "2024-05-23T08:56:21.624Z",
          barcode: "6205123036707",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
        },
        images: ["https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/1.png"],
        thumbnail: "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/thumbnail.png"
      },
      {
        id: 111,
        title: "Selfie Stick Monopod",
        description: "The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
        category: "mobile-accessories",
        price: 12.99,
        discountPercentage: 15.29,
        rating: 2.93,
        stock: 33,
        tags: ["electronics", "selfie accessories"],
        brand: "SnapTech",
        sku: "9T6WSF1E",
        weight: 7,
        dimensions: { width: 6.11, height: 27.92, depth: 23.63 },
        warrantyInformation: "3 year warranty",
        shippingInformation: "Ships overnight",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Great product!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Aaron Cook",
            reviewerEmail: "aaron.cook@x.dummyjson.com"
          },
          {
            rating: 4,
            comment: "Very happy with my purchase!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Emma Wilson",
            reviewerEmail: "emma.wilson@x.dummyjson.com"
          },
          {
            rating: 1,
            comment: "Would not recommend!",
            date: "2024-05-23T08:56:21.624Z",
            reviewerName: "Mia Miller",
            reviewerEmail: "mia.miller@x.dummyjson.com"
          }
        ],
        returnPolicy: "60 days return policy",
        minimumOrderQuantity: 10,
        meta: {
          createdAt: "2024-05-23T08:56:21.624Z",
          updatedAt: "2024-05-23T08:56:21.624Z",
          barcode: "2854098561118",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
        },
        images: ["https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/1.png"],
        thumbnail: "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/thumbnail.png"
      },
      {
        id: 121,
        title: "iPhone 5s",
        description: "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
        category: "smartphones",
        price: 199.99,
        discountPercentage: 11.85,
        rating: 3.92,
        stock: 65,
        tags: ["smartphones", "apple"],
        brand: "Apple",
        sku: "AZ1L68SM",
        weight: 4,
        dimensions: { width: 8.49, height: 25.34, depth: 18.12 },
        warrantyInformation: "1 week warranty",
        shippingInformation: "Ships in 1 week",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 4,
            comment: "Highly impressed!",
            date: "2024-05-23T08:56:21.625Z",
            reviewerName: "Wyatt Perry",
            reviewerEmail: "wyatt.perry@x.dummyjson.com"
          },
          {
            rating: 5,
            comment: "Awesome product!",
            date: "2024-05-23T08:56:21.625Z",
            reviewerName: "Olivia Anderson",
            reviewerEmail: "olivia.anderson@x.dummyjson.com"
          },
          {
            rating: 4,
            comment: "Highly recommended!",
            date: "2024-05-23T08:56:21.625Z",
            reviewerName: "Mateo Nguyen",
            reviewerEmail: "mateo.nguyen@x.dummyjson.com"
          }
        ],
        returnPolicy: "No return policy",
        minimumOrderQuantity: 2,
        meta: {
          createdAt: "2024-05-23T08:56:21.625Z",
          updatedAt: "2024-05-23T08:56:21.625Z",
          barcode: "2903942810911",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
        },
        images: [
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/3.png"
        ],
        thumbnail: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png"
      },
      {
        id: 122,
        title: "iPhone 6",
        description: "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
        category: "smartphones",
        price: 299.99,
        discountPercentage: 4.54,
        rating: 3.76,
        stock: 99,
        tags: ["smartphones", "apple"],
        brand: "Apple",
        sku: "ZPXH3X9J",
        weight: 8,
        dimensions: { width: 16.21, height: 22.94, depth: 5.63 },
        warrantyInformation: "3 year warranty",
        shippingInformation: "Ships overnight",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Would buy again!",
            date: "2024-05-23T08:56:21.625Z",
            reviewerName: "Nicholas Bailey",
            reviewerEmail: "nicholas.bailey@x.dummyjson.com"
          },
          {
            rating: 5,
            comment: "Great product!",
            date: "2024-05-23T08:56:21.625Z",
            reviewerName: "Clara Berry",
            reviewerEmail: "clara.berry@x.dummyjson.com"
          },
          {
            rating: 3,
            comment: "Not as described!",
            date: "2024-05-23T08:56:21.625Z",
            reviewerName: "Gavin Stanley",
            reviewerEmail: "gavin.stanley@x.dummyjson.com"
          }
        ],
        returnPolicy: "60 days return policy",
        minimumOrderQuantity: 3,
        meta: {
          createdAt: "2024-05-23T08:56:21.625Z",
          updatedAt: "2024-05-23T08:56:21.625Z",
          barcode: "2517230562429",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
        },
        images: [
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/3.png"
        ],
        thumbnail: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png"
      },
      {
        id: 123,
        title: "iPhone 13 Pro",
        description: "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
        category: "smartphones",
        price: 1099.99,
        discountPercentage: 18.3,
        rating: 3.42,
        stock: 26,
        tags: ["smartphones", "apple"],
        brand: "Apple",
        sku: "YGQKHPGK",
        weight: 8,
        dimensions: { width: 22.39, height: 9.77, depth: 19.6 },
        warrantyInformation: "1 year warranty",
        shippingInformation: "Ships in 2 weeks",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Highly impressed!",
            date: "2024-05-23T08:56:21.625Z",
            reviewerName: "Aria Roberts",
            reviewerEmail: "aria.roberts@x.dummyjson.com"
          },
          {
            rating: 4,
            comment: "Great product!",
            date: "2024-05-23T08:56:21.625Z",
            reviewerName: "Ryan Graham",
            reviewerEmail: "ryan.graham@x.dummyjson.com"
          },
          {
            rating: 2,
            comment: "Poor quality!",
            date: "2024-05-23T08:56:21.625Z",
            reviewerName: "Mason Wright",
            reviewerEmail: "mason.wright@x.dummyjson.com"
          }
        ],
        returnPolicy: "7 days return policy",
        minimumOrderQuantity: 1,
        meta: {
          createdAt: "2024-05-23T08:56:21.625Z",
          updatedAt: "2024-05-23T08:56:21.625Z",
          barcode: "2986724589988",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
        },
        images: [
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/3.png"
        ],
        thumbnail: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png"
      },
      {
        id: 124,
        title: "iPhone X",
        description: "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
        category: "smartphones",
        price: 899.99,
        discountPercentage: 14.19,
        rating: 4.96,
        stock: 99,
        tags: ["smartphones", "apple"],
        brand: "Apple",
        sku: "9QN3UDUD",
        weight: 10,
        dimensions: { width: 27.86, height: 8.53, depth: 17.07 },
        warrantyInformation: "3 months warranty",
        shippingInformation: "Ships in 1 month",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 1,
            comment: "Very unhappy with my purchase!",
            date: "2024-05-23T08:56:21.625Z",
            reviewerName: "Eleanor Tyler",
            reviewerEmail: "eleanor.tyler@x.dummyjson.com"
          },
          {
            rating: 5,
            comment: "Very satisfied!",
            date: "2024-05-23T08:56:21.625Z",
            reviewerName: "Maya Reed",
            reviewerEmail: "maya.reed@x.dummyjson.com"
          },
          {
            rating: 4,
            comment: "Fast shipping!",
            date: "2024-05-23T08:56:21.625Z",
            reviewerName: "Elena Baker",
            reviewerEmail: "elena.baker@x.dummyjson.com"
          }
        ],
        returnPolicy: "30 days return policy",
        minimumOrderQuantity: 2,
        meta: {
          createdAt: "2024-05-23T08:56:21.625Z",
          updatedAt: "2024-05-23T08:56:21.625Z",
          barcode: "4331405454760",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png"
        },
        images: [
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/3.png"
        ],
        thumbnail: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png"
      }
    ],
    total: 23,
    skip: 0,
    limit: 23
  });
}
