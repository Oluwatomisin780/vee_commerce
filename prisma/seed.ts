import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.product.deleteMany();
  const product = await prisma.product.createMany({
    data: [
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/397664/1.jpg?9493',
        name: "XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray",
        price: 150000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/204592/1.jpg?2015',
        name: 'XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray',
        price: 118650,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/909098/1.jpg?3607',
        name: 'XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim',
        price: 195878,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/73349/1.jpg?7805',
        name: ' Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White',
        price: 370000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/037857/1.jpg?0943',
        name: 'Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition',
        price: 315000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/4571202/1.jpg?6274',
        name: 'XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition,',
        price: 115878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/7504971/1.jpg?1923',
        name: 'itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W',
        price: 65878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/3796591/2.jpg?0919',
        name: 'Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black',
        price: 95878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/2698201/1.jpg?5660',
        name: 'IPhone X 3GB RAM+64GB(Renewed) -Black',
        price: 174500,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone X 3GB RAM+64GB(Renewed) -Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone X 3GB RAM+64GB(Renewed) -Black for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2698201/1.jpg?5628',
        name: 'IPhone X 3GB RAM+64GB (Renewed) -White',
        price: 17600,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone X 3GB RAM+64GB (Renewed) -White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone X 3GB RAM+64GB (Renewed) -White for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/931009/1.jpg?5328',
        name: 'IPhone 6 16GB(Refurbished) - Gold (Grade A)',
        price: 71412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone 6 16GB(Refurbished) - Gold (Grade A) - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone 6 16GB(Refurbished) - Gold (Grade A) for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0477811/1.jpg?2168',
        name: 'IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P',
        price: 79412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/4956431/1.jpg?8817',
        name: 'Apple Iphone XR 64gb White, Free Pouch',
        price: 279412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple Iphone XR 64gb White, Free Pouch - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple Iphone XR 64gb White, Free Pouch for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/709296/1.jpg?1393',
        name: 'Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch,',
        price: 620000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch, for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/139307/1.jpg?3251',
        name: 'Apple IPhone 12 Pro (128 GB) - Pacific Blue',
        price: 520000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 12 Pro (128 GB) - Pacific Blue - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 12 Pro (128 GB) - Pacific Blue for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/122749/1.jpg?5259',
        name: 'Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch,',
        price: 720000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch, for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/884688/1.jpg?2746',
        name: 'Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n    ',
        price: 92000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n     - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n     for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2928632/1.jpg?5128',
        name: 'Tecno Spark 10c- 6.6" - 4GB/128GB',
        price: 120000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10c- 6.6" - 4GB/128GB - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10c- 6.6" - 4GB/128GB for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8887922/1.jpg?2905',
        name: "XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray",
        price: 150000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/7067422/1.jpg?8486',
        name: 'XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray',
        price: 118650,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/7542032/1.jpg?3477',
        name: 'XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim',
        price: 195878,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/2037521/1.jpg?6055',
        name: ' Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White',
        price: 370000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/7411722/1.jpg?5299',
        name: 'Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition',
        price: 315000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/1084132/1.jpg?4284',
        name: 'XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition,',
        price: 115878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/5017732/1.jpg?8724',
        name: 'itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W',
        price: 65878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/2515032/1.jpg?4731',
        name: 'Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black',
        price: 95878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/397664/1.jpg?9493',
        name: "XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray",
        price: 150000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/204592/1.jpg?2015',
        name: 'XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray',
        price: 118650,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/909098/1.jpg?3607',
        name: 'XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim',
        price: 195878,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/73349/1.jpg?7805',
        name: ' Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White',
        price: 370000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/037857/1.jpg?0943',
        name: 'Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition',
        price: 315000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/4571202/1.jpg?6274',
        name: 'XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition,',
        price: 115878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/7504971/1.jpg?1923',
        name: 'itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W',
        price: 65878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/3796591/2.jpg?0919',
        name: 'Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black',
        price: 95878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8887922/1.jpg?2905',
        name: 'Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10 ',
        price: 150000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10  - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10  for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/667128/1.jpg?5824',
        name: 'Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard',
        price: 179900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/1356501/1.jpg?5301',
        name: 'Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse',
        price: 178000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/045718/1.jpg?0894',
        name: 'Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz',
        price: 22900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3834601/1.jpg?1027',
        name: 'Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard',
        price: 180000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/110387/1.jpg?5496',
        name: 'Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD',
        price: 177900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/124177/1.jpg?9117',
        name: 'Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH',
        price: 19900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/9607501/1.jpg?3525',
        name: 'Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard',
        price: 99000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/8819891/1.jpg?7592',
        name: 'Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro',
        price: 21200,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/4607501/1.jpg?3064',
        name: 'Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard',
        price: 27280,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/2698201/1.jpg?5660',
        name: 'IPhone X 3GB RAM+64GB(Renewed) -Black',
        price: 174500,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone X 3GB RAM+64GB(Renewed) -Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone X 3GB RAM+64GB(Renewed) -Black for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2698201/1.jpg?5628',
        name: 'IPhone X 3GB RAM+64GB (Renewed) -White',
        price: 17600,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone X 3GB RAM+64GB (Renewed) -White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone X 3GB RAM+64GB (Renewed) -White for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/931009/1.jpg?5328',
        name: 'IPhone 6 16GB(Refurbished) - Gold (Grade A)',
        price: 71412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone 6 16GB(Refurbished) - Gold (Grade A) - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone 6 16GB(Refurbished) - Gold (Grade A) for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0477811/1.jpg?2168',
        name: 'IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P',
        price: 79412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/4956431/1.jpg?8817',
        name: 'Apple Iphone XR 64gb White, Free Pouch',
        price: 279412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple Iphone XR 64gb White, Free Pouch - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple Iphone XR 64gb White, Free Pouch for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/709296/1.jpg?1393',
        name: 'Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch,',
        price: 620000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch, for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/139307/1.jpg?3251',
        name: 'Apple IPhone 12 Pro (128 GB) - Pacific Blue',
        price: 520000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 12 Pro (128 GB) - Pacific Blue - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 12 Pro (128 GB) - Pacific Blue for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/122749/1.jpg?5259',
        name: 'Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch,',
        price: 720000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch, for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/884688/1.jpg?2746',
        name: 'Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n    ',
        price: 92000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n     - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n     for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2928632/1.jpg?5128',
        name: 'Tecno Spark 10c- 6.6" - 4GB/128GB',
        price: 120000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10c- 6.6" - 4GB/128GB - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10c- 6.6" - 4GB/128GB for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8887922/1.jpg?2905',
        name: "XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray",
        price: 150000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/7067422/1.jpg?8486',
        name: 'XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray',
        price: 118650,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/7542032/1.jpg?3477',
        name: 'XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim',
        price: 195878,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/2037521/1.jpg?6055',
        name: ' Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White',
        price: 370000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/7411722/1.jpg?5299',
        name: 'Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition',
        price: 315000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/1084132/1.jpg?4284',
        name: 'XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition,',
        price: 115878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/5017732/1.jpg?8724',
        name: 'itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W',
        price: 65878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/2515032/1.jpg?4731',
        name: 'Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black',
        price: 95878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/397664/1.jpg?9493',
        name: "XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray",
        price: 150000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/204592/1.jpg?2015',
        name: 'XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray',
        price: 118650,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/909098/1.jpg?3607',
        name: 'XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim',
        price: 195878,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/73349/1.jpg?7805',
        name: ' Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White',
        price: 370000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/037857/1.jpg?0943',
        name: 'Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition',
        price: 315000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/4571202/1.jpg?6274',
        name: 'XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition,',
        price: 115878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/7504971/1.jpg?1923',
        name: 'itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W',
        price: 65878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/3796591/2.jpg?0919',
        name: 'Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black',
        price: 95878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8887922/1.jpg?2905',
        name: 'Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10 ',
        price: 150000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10  - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10  for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/667128/1.jpg?5824',
        name: 'Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard',
        price: 179900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/1356501/1.jpg?5301',
        name: 'Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse',
        price: 178000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/045718/1.jpg?0894',
        name: 'Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz',
        price: 22900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3834601/1.jpg?1027',
        name: 'Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard',
        price: 180000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/110387/1.jpg?5496',
        name: 'Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD',
        price: 177900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/124177/1.jpg?9117',
        name: 'Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH',
        price: 19900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/9607501/1.jpg?3525',
        name: 'Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard',
        price: 99000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/8819891/1.jpg?7592',
        name: 'Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro',
        price: 21200,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/4607501/1.jpg?3064',
        name: 'Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard',
        price: 27280,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/2698201/1.jpg?5660',
        name: 'IPhone X 3GB RAM+64GB(Renewed) -Black',
        price: 174500,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone X 3GB RAM+64GB(Renewed) -Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone X 3GB RAM+64GB(Renewed) -Black for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2698201/1.jpg?5628',
        name: 'IPhone X 3GB RAM+64GB (Renewed) -White',
        price: 17600,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone X 3GB RAM+64GB (Renewed) -White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone X 3GB RAM+64GB (Renewed) -White for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/931009/1.jpg?5328',
        name: 'IPhone 6 16GB(Refurbished) - Gold (Grade A)',
        price: 71412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone 6 16GB(Refurbished) - Gold (Grade A) - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone 6 16GB(Refurbished) - Gold (Grade A) for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0477811/1.jpg?2168',
        name: 'IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P',
        price: 79412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/4956431/1.jpg?8817',
        name: 'Apple Iphone XR 64gb White, Free Pouch',
        price: 279412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple Iphone XR 64gb White, Free Pouch - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple Iphone XR 64gb White, Free Pouch for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/709296/1.jpg?1393',
        name: 'Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch,',
        price: 620000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch, for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/139307/1.jpg?3251',
        name: 'Apple IPhone 12 Pro (128 GB) - Pacific Blue',
        price: 520000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 12 Pro (128 GB) - Pacific Blue - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 12 Pro (128 GB) - Pacific Blue for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/122749/1.jpg?5259',
        name: 'Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch,',
        price: 720000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch, for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/884688/1.jpg?2746',
        name: 'Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n    ',
        price: 92000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n     - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n     for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2928632/1.jpg?5128',
        name: 'Tecno Spark 10c- 6.6" - 4GB/128GB',
        price: 120000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10c- 6.6" - 4GB/128GB - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10c- 6.6" - 4GB/128GB for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8887922/1.jpg?2905',
        name: "XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray",
        price: 150000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/7067422/1.jpg?8486',
        name: 'XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray',
        price: 118650,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/7542032/1.jpg?3477',
        name: 'XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim',
        price: 195878,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/2037521/1.jpg?6055',
        name: ' Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White',
        price: 370000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/7411722/1.jpg?5299',
        name: 'Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition',
        price: 315000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/1084132/1.jpg?4284',
        name: 'XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition,',
        price: 115878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/5017732/1.jpg?8724',
        name: 'itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W',
        price: 65878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/2515032/1.jpg?4731',
        name: 'Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black',
        price: 95878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/397664/1.jpg?9493',
        name: "XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray",
        price: 150000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/204592/1.jpg?2015',
        name: 'XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray',
        price: 118650,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/909098/1.jpg?3607',
        name: 'XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim',
        price: 195878,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/73349/1.jpg?7805',
        name: ' Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White',
        price: 370000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/037857/1.jpg?0943',
        name: 'Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition',
        price: 315000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/4571202/1.jpg?6274',
        name: 'XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition,',
        price: 115878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/7504971/1.jpg?1923',
        name: 'itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W',
        price: 65878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/3796591/2.jpg?0919',
        name: 'Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black',
        price: 95878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8887922/1.jpg?2905',
        name: 'Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10 ',
        price: 150000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10  - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10  for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/667128/1.jpg?5824',
        name: 'Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard',
        price: 179900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/1356501/1.jpg?5301',
        name: 'Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse',
        price: 178000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/045718/1.jpg?0894',
        name: 'Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz',
        price: 22900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3834601/1.jpg?1027',
        name: 'Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard',
        price: 180000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/110387/1.jpg?5496',
        name: 'Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD',
        price: 177900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/124177/1.jpg?9117',
        name: 'Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH',
        price: 19900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/9607501/1.jpg?3525',
        name: 'Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard',
        price: 99000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/8819891/1.jpg?7592',
        name: 'Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro',
        price: 21200,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/4607501/1.jpg?3064',
        name: 'Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard',
        price: 27280,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/2698201/1.jpg?5660',
        name: 'IPhone X 3GB RAM+64GB(Renewed) -Black',
        price: 174500,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone X 3GB RAM+64GB(Renewed) -Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone X 3GB RAM+64GB(Renewed) -Black for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2698201/1.jpg?5628',
        name: 'IPhone X 3GB RAM+64GB (Renewed) -White',
        price: 17600,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone X 3GB RAM+64GB (Renewed) -White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone X 3GB RAM+64GB (Renewed) -White for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/931009/1.jpg?5328',
        name: 'IPhone 6 16GB(Refurbished) - Gold (Grade A)',
        price: 71412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone 6 16GB(Refurbished) - Gold (Grade A) - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone 6 16GB(Refurbished) - Gold (Grade A) for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0477811/1.jpg?2168',
        name: 'IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P',
        price: 79412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/4956431/1.jpg?8817',
        name: 'Apple Iphone XR 64gb White, Free Pouch',
        price: 279412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple Iphone XR 64gb White, Free Pouch - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple Iphone XR 64gb White, Free Pouch for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/709296/1.jpg?1393',
        name: 'Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch,',
        price: 620000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch, for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/139307/1.jpg?3251',
        name: 'Apple IPhone 12 Pro (128 GB) - Pacific Blue',
        price: 520000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 12 Pro (128 GB) - Pacific Blue - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 12 Pro (128 GB) - Pacific Blue for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/122749/1.jpg?5259',
        name: 'Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch,',
        price: 720000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch, for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/884688/1.jpg?2746',
        name: 'Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n    ',
        price: 92000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n     - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n     for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2928632/1.jpg?5128',
        name: 'Tecno Spark 10c- 6.6" - 4GB/128GB',
        price: 120000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10c- 6.6" - 4GB/128GB - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10c- 6.6" - 4GB/128GB for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8887922/1.jpg?2905',
        name: "XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray",
        price: 150000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/7067422/1.jpg?8486',
        name: 'XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray',
        price: 118650,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/7542032/1.jpg?3477',
        name: 'XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim',
        price: 195878,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/2037521/1.jpg?6055',
        name: ' Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White',
        price: 370000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/7411722/1.jpg?5299',
        name: 'Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition',
        price: 315000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/1084132/1.jpg?4284',
        name: 'XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition,',
        price: 115878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/5017732/1.jpg?8724',
        name: 'itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W',
        price: 65878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/2515032/1.jpg?4731',
        name: 'Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black',
        price: 95878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/397664/1.jpg?9493',
        name: "XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray",
        price: 150000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/204592/1.jpg?2015',
        name: 'XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray',
        price: 118650,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/909098/1.jpg?3607',
        name: 'XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim',
        price: 195878,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/73349/1.jpg?7805',
        name: ' Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White',
        price: 370000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/037857/1.jpg?0943',
        name: 'Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition',
        price: 315000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/4571202/1.jpg?6274',
        name: 'XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition,',
        price: 115878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/7504971/1.jpg?1923',
        name: 'itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W',
        price: 65878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/3796591/2.jpg?0919',
        name: 'Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black',
        price: 95878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8887922/1.jpg?2905',
        name: 'Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10 ',
        price: 150000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10  - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10  for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/667128/1.jpg?5824',
        name: 'Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard',
        price: 179900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/1356501/1.jpg?5301',
        name: 'Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse',
        price: 178000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/045718/1.jpg?0894',
        name: 'Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz',
        price: 22900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3834601/1.jpg?1027',
        name: 'Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard',
        price: 180000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/110387/1.jpg?5496',
        name: 'Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD',
        price: 177900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/124177/1.jpg?9117',
        name: 'Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH',
        price: 19900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/9607501/1.jpg?3525',
        name: 'Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard',
        price: 99000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/8819891/1.jpg?7592',
        name: 'Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro',
        price: 21200,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/4607501/1.jpg?3064',
        name: 'Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard',
        price: 27280,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/2698201/1.jpg?5660',
        name: 'IPhone X 3GB RAM+64GB(Renewed) -Black',
        price: 174500,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone X 3GB RAM+64GB(Renewed) -Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone X 3GB RAM+64GB(Renewed) -Black for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2698201/1.jpg?5628',
        name: 'IPhone X 3GB RAM+64GB (Renewed) -White',
        price: 17600,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone X 3GB RAM+64GB (Renewed) -White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone X 3GB RAM+64GB (Renewed) -White for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/931009/1.jpg?5328',
        name: 'IPhone 6 16GB(Refurbished) - Gold (Grade A)',
        price: 71412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone 6 16GB(Refurbished) - Gold (Grade A) - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone 6 16GB(Refurbished) - Gold (Grade A) for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0477811/1.jpg?2168',
        name: 'IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P',
        price: 79412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/4956431/1.jpg?8817',
        name: 'Apple Iphone XR 64gb White, Free Pouch',
        price: 279412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple Iphone XR 64gb White, Free Pouch - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple Iphone XR 64gb White, Free Pouch for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/709296/1.jpg?1393',
        name: 'Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch,',
        price: 620000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch, for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/139307/1.jpg?3251',
        name: 'Apple IPhone 12 Pro (128 GB) - Pacific Blue',
        price: 520000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 12 Pro (128 GB) - Pacific Blue - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 12 Pro (128 GB) - Pacific Blue for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/122749/1.jpg?5259',
        name: 'Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch,',
        price: 720000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch, for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/884688/1.jpg?2746',
        name: 'Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n    ',
        price: 92000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n     - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n     for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2928632/1.jpg?5128',
        name: 'Tecno Spark 10c- 6.6" - 4GB/128GB',
        price: 120000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10c- 6.6" - 4GB/128GB - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10c- 6.6" - 4GB/128GB for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8887922/1.jpg?2905',
        name: "XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray",
        price: 150000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/7067422/1.jpg?8486',
        name: 'XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray',
        price: 118650,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/7542032/1.jpg?3477',
        name: 'XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim',
        price: 195878,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/2037521/1.jpg?6055',
        name: ' Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White',
        price: 370000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/7411722/1.jpg?5299',
        name: 'Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition',
        price: 315000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/1084132/1.jpg?4284',
        name: 'XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition,',
        price: 115878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/5017732/1.jpg?8724',
        name: 'itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W',
        price: 65878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/2515032/1.jpg?4731',
        name: 'Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black',
        price: 95878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/397664/1.jpg?9493',
        name: "XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray",
        price: 150000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/204592/1.jpg?2015',
        name: 'XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray',
        price: 118650,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/909098/1.jpg?3607',
        name: 'XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim',
        price: 195878,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/73349/1.jpg?7805',
        name: ' Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White',
        price: 370000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/037857/1.jpg?0943',
        name: 'Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition',
        price: 315000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/4571202/1.jpg?6274',
        name: 'XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition,',
        price: 115878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/7504971/1.jpg?1923',
        name: 'itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W',
        price: 65878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/3796591/2.jpg?0919',
        name: 'Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black',
        price: 95878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8887922/1.jpg?2905',
        name: 'Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10 ',
        price: 150000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10  - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10  for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/667128/1.jpg?5824',
        name: 'Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard',
        price: 179900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/1356501/1.jpg?5301',
        name: 'Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse',
        price: 178000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/045718/1.jpg?0894',
        name: 'Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz',
        price: 22900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3834601/1.jpg?1027',
        name: 'Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard',
        price: 180000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/110387/1.jpg?5496',
        name: 'Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD',
        price: 177900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/124177/1.jpg?9117',
        name: 'Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH',
        price: 19900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/9607501/1.jpg?3525',
        name: 'Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard',
        price: 99000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/8819891/1.jpg?7592',
        name: 'Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro',
        price: 21200,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/4607501/1.jpg?3064',
        name: 'Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard',
        price: 27280,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/2698201/1.jpg?5660',
        name: 'IPhone X 3GB RAM+64GB(Renewed) -Black',
        price: 174500,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone X 3GB RAM+64GB(Renewed) -Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone X 3GB RAM+64GB(Renewed) -Black for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2698201/1.jpg?5628',
        name: 'IPhone X 3GB RAM+64GB (Renewed) -White',
        price: 17600,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone X 3GB RAM+64GB (Renewed) -White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone X 3GB RAM+64GB (Renewed) -White for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/931009/1.jpg?5328',
        name: 'IPhone 6 16GB(Refurbished) - Gold (Grade A)',
        price: 71412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone 6 16GB(Refurbished) - Gold (Grade A) - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone 6 16GB(Refurbished) - Gold (Grade A) for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0477811/1.jpg?2168',
        name: 'IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P',
        price: 79412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/4956431/1.jpg?8817',
        name: 'Apple Iphone XR 64gb White, Free Pouch',
        price: 279412,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple Iphone XR 64gb White, Free Pouch - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple Iphone XR 64gb White, Free Pouch for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/709296/1.jpg?1393',
        name: 'Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch,',
        price: 620000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch, for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/139307/1.jpg?3251',
        name: 'Apple IPhone 12 Pro (128 GB) - Pacific Blue',
        price: 520000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 12 Pro (128 GB) - Pacific Blue - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 12 Pro (128 GB) - Pacific Blue for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/122749/1.jpg?5259',
        name: 'Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch,',
        price: 720000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch, for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/884688/1.jpg?2746',
        name: 'Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n    ',
        price: 92000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n     - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black\n     for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2928632/1.jpg?5128',
        name: 'Tecno Spark 10c- 6.6" - 4GB/128GB',
        price: 120000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10c- 6.6" - 4GB/128GB - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10c- 6.6" - 4GB/128GB for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8887922/1.jpg?2905',
        name: "XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray",
        price: 150000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/7067422/1.jpg?8486',
        name: 'XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray',
        price: 118650,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/7542032/1.jpg?3477',
        name: 'XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim',
        price: 195878,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/2037521/1.jpg?6055',
        name: ' Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White',
        price: 370000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/7411722/1.jpg?5299',
        name: 'Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition',
        price: 315000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/1084132/1.jpg?4284',
        name: 'XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition,',
        price: 115878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/5017732/1.jpg?8724',
        name: 'itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W',
        price: 65878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/2515032/1.jpg?4731',
        name: 'Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black',
        price: 95878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/397664/1.jpg?9493',
        name: "XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray",
        price: 150000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/204592/1.jpg?2015',
        name: 'XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray',
        price: 118650,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/909098/1.jpg?3607',
        name: 'XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim',
        price: 195878,
        quantity: 0,
        description:
          "use this Introducing the Ultimate XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI Redmi Note 12 Pro 5G 8GB RAM 256GB ROM 6.67 Dual Sim for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/73349/1.jpg?7805',
        name: ' Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White',
        price: 370000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the  Samsung Galaxy A73 5G - 6.7" 6GB/128GB Memory - White for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/037857/1.jpg?0943',
        name: 'Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition',
        price: 315000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Samsung Galaxy A54 5G 6.4" 256GB/8GB Facial Recognition for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/4571202/1.jpg?6274',
        name: 'XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition,',
        price: 115878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the XIAOMI A1 Plus, 6.52" 4G LTE, 2GB/32GB Memory, Fingerprint, Face ID Recognition, for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/7504971/1.jpg?1923',
        name: 'itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W',
        price: 65878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the itel P40 6.6" Screen, 64GB ROM + Up To 7GB RAM, 6000mAh 18W for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/3796591/2.jpg?0919',
        name: 'Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black',
        price: 95878,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Tecno Spark 10- 6.6" - 8GB/128GB，50MP+Q Rear Camera，5000mAh-Black for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8887922/1.jpg?2905',
        name: 'Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10 ',
        price: 150000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10  - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD 15.6" Wins 10  for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/667128/1.jpg?5824',
        name: 'Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard',
        price: 179900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/1356501/1.jpg?5301',
        name: 'Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse',
        price: 178000,
        quantity: 0,
        description:
          'use this Introducing the Ultimate Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it\'s your all-in-one solution for modern mobile communication. In the box, you\'ll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse for a premium mobile experience.',
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/045718/1.jpg?0894',
        name: 'Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz',
        price: 22900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3834601/1.jpg?1027',
        name: 'Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard',
        price: 180000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/110387/1.jpg?5496',
        name: 'Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD',
        price: 177900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Pavilion 14 - Intel Core I3 12GB RAM- 12TH GEN- 256GB SSD for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/124177/1.jpg?9117',
        name: 'Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH',
        price: 19900,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GH for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/9607501/1.jpg?3525',
        name: 'Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard',
        price: 99000,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/8819891/1.jpg?7592',
        name: 'Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro',
        price: 21200,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp 250 G8 Intel Celeron Dualcore,8GB RAM,1TB HDD,Wins 10pro for a premium mobile experience.",
      },
      {
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/4607501/1.jpg?3064',
        name: 'Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard',
        price: 27280,
        quantity: 0,
        description:
          "use this Introducing the Ultimate Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard - A high-performance smartphone featuring a Qualcomm Snapdragon 865 Octa-Core CPU, 128GB of ROM with support for up to 512GB Micro SD Memory Card, and a stunning 6.7-inch Quad HD+ AMOLED display. This device is available in Gray, Black, or Blue, with a compact and sleek design measuring 161.9x73.7x7.8mm and weighing just 186g. Capture moments with its impressive 64.0-megapixel quad-camera system and enjoy a wide array of languages for your convenience. With 5G connectivity, a 4500mAh battery, and features like Face ID and a fingerprint scanner, it's your all-in-one solution for modern mobile communication. In the box, you'll find a headset, power adapter, USB-C cable, and more. Choose the Hp Stream 11 Pro- Intel Celeron - 4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard for a premium mobile experience.",
      },
    ],
  });
  console.log({ product });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
