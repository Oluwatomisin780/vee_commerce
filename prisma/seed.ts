import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.product.deleteMany();
  const product = await prisma.product.createMany({
    data: [
      {
        name: 'IPhone X 3GB RAM+64GB(Renewed)  -Black',
        description:
          "Meet IPhone X 3GB RAM+64GB(Renewed)  -Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone X 3GB RAM+64GB(Renewed)  -Black.",
        price: 213879,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/2698201/1.jpg?5660',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone X 3GB RAM+64GB (Renewed) -White',
        description:
          "Meet IPhone X 3GB RAM+64GB (Renewed) -White. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone X 3GB RAM+64GB (Renewed) -White.",
        price: 213879,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2698201/1.jpg?5628',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 6S 128GB(Refurbished) -Space Gray(Grade A)',
        description:
          "Meet IPhone 6S 128GB(Refurbished) -Space Gray(Grade A). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 6S 128GB(Refurbished) -Space Gray(Grade A).",
        price: 120000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/6048152/1.jpg?2836',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 6 16GB(Refurbished) - Gold (Grade A)',
        description:
          "Meet IPhone 6 16GB(Refurbished) - Gold (Grade A). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 6 16GB(Refurbished) - Gold (Grade A).",
        price: 49893,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/931009/1.jpg?5328',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 6 16GB(Refurbished) - Gold (Grade A)',
        description:
          "Meet IPhone 6 16GB(Refurbished) - Gold (Grade A). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 6 16GB(Refurbished) - Gold (Grade A).",
        price: 49893,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/931009/1.jpg?5328',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 6S Plus 64GB(Refurbished )-Gold Grade A',
        description:
          "Meet IPhone 6S Plus 64GB(Refurbished )-Gold Grade A. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 6S Plus 64GB(Refurbished )-Gold Grade A.",
        price: 110098,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/619898/1.jpg?2950',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 5s 4.0 Inch 8MP IOS Smartphones Refurbished 95% New',
        description:
          "Meet IPhone 5s 4.0 Inch 8MP IOS Smartphones Refurbished 95% New. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 5s 4.0 Inch 8MP IOS Smartphones Refurbished 95% New.",
        price: 44000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/3241922/1.jpg?3763',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 6 128GB(Refurbished) -Gold',
        description:
          "Meet IPhone 6 128GB(Refurbished) -Gold. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 6 128GB(Refurbished) -Gold.",
        price: 69100,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/241009/1.jpg?5988',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPHONE 11 - 6.1"  64/4GB RAM (12MP+12MP) 3110mAh PURPLE',
        description:
          'Meet IPHONE 11 - 6.1"  64/4GB RAM (12MP+12MP) 3110mAh PURPLE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 11 - 6.1"  64/4GB RAM (12MP+12MP) 3110mAh PURPLE.',
        price: 378500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/2459932/1.jpg?5824',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPHONE 12 - 6.1" 64GB 4GB RAM (12PM+12PM) 2815mAh RED',
        description:
          'Meet IPHONE 12 - 6.1" 64GB 4GB RAM (12PM+12PM) 2815mAh RED. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 12 - 6.1" 64GB 4GB RAM (12PM+12PM) 2815mAh RED.',
        price: 470000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/6169932/1.jpg?0062',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 6S Plus 128G (Refurbished) -Space Gray (Grade A)',
        description:
          "Meet IPhone 6S Plus 128G (Refurbished) -Space Gray (Grade A). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 6S Plus 128G (Refurbished) -Space Gray (Grade A).",
        price: 118900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/3011361/1.jpg?3074',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone X - 5.8" 64GB ROM, 3GB RAM, 2716mAh - Silver',
        description:
          'Meet IPhone X - 5.8" 64GB ROM, 3GB RAM, 2716mAh - Silver. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone X - 5.8" 64GB ROM, 3GB RAM, 2716mAh - Silver.',
        price: 260000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/2652852/1.jpg?8363',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone X 64GB - （Renewed）- Space Gray - 5.8 Inch',
        description:
          "Meet IPhone X 64GB - （Renewed）- Space Gray - 5.8 Inch. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone X 64GB - （Renewed）- Space Gray - 5.8 Inch.",
        price: 218000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/7633441/1.jpg?1248',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 6S Plus 16GB(Refurbished) -Rose Gold (Grade A)',
        description:
          "Meet IPhone 6S Plus 16GB(Refurbished) -Rose Gold (Grade A). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 6S Plus 16GB(Refurbished) -Rose Gold (Grade A).",
        price: 89500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/863609/1.jpg?3015',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '20000mAh Dual Input & Dual Output Fast Charging Power Bank',
        description:
          "Meet 20000mAh Dual Input & Dual Output Fast Charging Power Bank. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 20000mAh Dual Input & Dual Output Fast Charging Power Bank.",
        price: 11890,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/1695862/1.jpg?6059',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 6S Plus 16GB(Refurbished) -Gold (Grade A)',
        description:
          "Meet IPhone 6S Plus 16GB(Refurbished) -Gold (Grade A). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 6S Plus 16GB(Refurbished) -Gold (Grade A).",
        price: 89500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/863609/1.jpg?3004',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Apple IPhone 6 Renewed 99.9%New 16G Unlocked FingerPrint A++',
        description:
          "Meet Apple IPhone 6 Renewed 99.9%New 16G Unlocked FingerPrint A++. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Apple IPhone 6 Renewed 99.9%New 16G Unlocked FingerPrint A++.",
        price: 49000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/5194652/1.jpg?3468',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max 256GB 4GB 6.5inch Silver + Free Case & Screen Guide',
        description:
          "Meet IPhone XS Max 256GB 4GB 6.5inch Silver + Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max 256GB 4GB 6.5inch Silver + Free Case & Screen Guide.",
        price: 380000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/3367402/1.jpg?4049',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 6S Plus 2GB RAM+64GB(Refurbished ) -Silver (Grade A)',
        description:
          "Meet IPhone 6S Plus 2GB RAM+64GB(Refurbished ) -Silver (Grade A). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 6S Plus 2GB RAM+64GB(Refurbished ) -Silver (Grade A).",
        price: 110098,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/719898/1.jpg?2877',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb Blue, Free Pouch And Screen Protector',
        description:
          "Meet Iphone XR 128gb Blue, Free Pouch And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb Blue, Free Pouch And Screen Protector.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/3807501/1.jpg?5767',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 12, 6.1-Inch 128GB ROM 5G  - Pacific Blue',
        description:
          "Meet IPhone 12, 6.1-Inch 128GB ROM 5G  - Pacific Blue. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 12, 6.1-Inch 128GB ROM 5G  - Pacific Blue.",
        price: 500000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/0397202/1.jpg?9697',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPHONE 12 - 6.1" 64GB 4GB RAM (12PM+12PM) 2815mAh PURPLE',
        description:
          'Meet IPHONE 12 - 6.1" 64GB 4GB RAM (12PM+12PM) 2815mAh PURPLE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 12 - 6.1" 64GB 4GB RAM (12PM+12PM) 2815mAh PURPLE.',
        price: 470000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/4959932/1.jpg?9026',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 - 6.1Inch - 64GB ROM, 4GB RAM - IOS 13 - 3110mAh',
        description:
          "Meet IPhone 11 - 6.1Inch - 64GB ROM, 4GB RAM - IOS 13 - 3110mAh. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 - 6.1Inch - 64GB ROM, 4GB RAM - IOS 13 - 3110mAh.",
        price: 378000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/1291932/1.jpg?7105',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 4GB RAM + 64GB ROM - 4G LTE - Single Nano SIM',
        description:
          "Meet IPhone 11 4GB RAM + 64GB ROM - 4G LTE - Single Nano SIM. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 4GB RAM + 64GB ROM - 4G LTE - Single Nano SIM.",
        price: 378000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/2531331/1.jpg?3508',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb Black, Free Case And Screen Guide',
        description:
          "Meet Iphone XR 128gb Black, Free Case And Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb Black, Free Case And Screen Guide.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/8849811/1.jpg?2753',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XR - 6.1 Inches - 64GB ROM - 3GB RAM - 4G LTE - Red - With Free Pouch & Screen Guide',
        description:
          "Meet IPhone XR - 6.1 Inches - 64GB ROM - 3GB RAM - 4G LTE - Red - With Free Pouch & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XR - 6.1 Inches - 64GB ROM - 3GB RAM - 4G LTE - Red - With Free Pouch & Screen Guide.",
        price: 310000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/9741251/1.jpg?4593',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 64gb 3gb 6.1inch Yellow Free Case & Screen Guide',
        description:
          "Meet Iphone XR 64gb 3gb 6.1inch Yellow Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 64gb 3gb 6.1inch Yellow Free Case & Screen Guide.",
        price: 301000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/1086031/1.jpg?9764',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPHONE 11 PRO MAX 64/4GB (12PM+12PM+12PM) 6.5" 3969mAh',
        description:
          'Meet IPHONE 11 PRO MAX 64/4GB (12PM+12PM+12PM) 6.5" 3969mAh. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 11 PRO MAX 64/4GB (12PM+12PM+12PM) 6.5" 3969mAh.',
        price: 610000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/46/5972352/1.jpg?0955',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XR 64GB Black, Free Pouch And Screen Protector',
        description:
          "Meet IPhone XR 64GB Black, Free Pouch And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XR 64GB Black, Free Pouch And Screen Protector.",
        price: 310000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/5772221/1.jpg?6774',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XS Max 256gb Space Grey, Free Pouch And Screen Protector',
        description:
          "Meet Iphone XS Max 256gb Space Grey, Free Pouch And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XS Max 256gb Space Grey, Free Pouch And Screen Protector.",
        price: 378000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/1587111/1.jpg?3479',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 Pro Max 6.5-Inch (4GB RAM, 256GB ROM),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Midnight Green',
        description:
          "Meet IPhone 11 Pro Max 6.5-Inch (4GB RAM, 256GB ROM),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Midnight Green. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 Pro Max 6.5-Inch (4GB RAM, 256GB ROM),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Midnight Green.",
        price: 599000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/5513611/1.jpg?8634',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 6 128GB(Refurbished) -Silver',
        description:
          "Meet IPhone 6 128GB(Refurbished) -Silver. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 6 128GB(Refurbished) -Silver.",
        price: 69100,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/241009/1.jpg?5963',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb 6.1" Blue Free Pouch And Tempered Glass',
        description:
          'Meet Iphone XR 128gb 3gb 6.1" Blue Free Pouch And Tempered Glass. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb 6.1" Blue Free Pouch And Tempered Glass.',
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/4927102/1.jpg?3300',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max - 64GB ROM 4GB RAM - 6.5" - Nano Sim - Gold + Free Back Case & Screen Guide',
        description:
          'Meet IPhone XS Max - 64GB ROM 4GB RAM - 6.5" - Nano Sim - Gold + Free Back Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max - 64GB ROM 4GB RAM - 6.5" - Nano Sim - Gold + Free Back Case & Screen Guide.',
        price: 350000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/1939102/1.jpg?6002',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb Blue Free Pouch And Tempered Glass',
        description:
          "Meet Iphone XR 128gb Blue Free Pouch And Tempered Glass. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb Blue Free Pouch And Tempered Glass.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/5001121/1.jpg?4324',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 15 Pro 128GB White Titanium - FaceTime - A17 Pro Chip',
        description:
          "Meet IPhone 15 Pro 128GB White Titanium - FaceTime - A17 Pro Chip. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 15 Pro 128GB White Titanium - FaceTime - A17 Pro Chip.",
        price: 1450999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/0352862/1.jpg?9207',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max 64GB Gold, Free Pouch And Screen Protector',
        description:
          "Meet IPhone XS Max 64GB Gold, Free Pouch And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max 64GB Gold, Free Pouch And Screen Protector.",
        price: 360000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/4431121/1.jpg?1503',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32"INCHES ENERGY TV LED FULL HD',
        description:
          'Meet 32"INCHES ENERGY TV LED FULL HD. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32"INCHES ENERGY TV LED FULL HD.',
        price: 66990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/128938/1.jpg?7320',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'IPhone XS Max - 256GB ROM, 4GB RAM - 6.5" - Silver + Free Pouch & Screen Guide',
        description:
          'Meet IPhone XS Max - 256GB ROM, 4GB RAM - 6.5" - Silver + Free Pouch & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max - 256GB ROM, 4GB RAM - 6.5" - Silver + Free Pouch & Screen Guide.',
        price: 378000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/3881931/1.jpg?4122',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb 6.1inch Black, Free Case And Screen Guide',
        description:
          "Meet Iphone XR 128gb 3gb 6.1inch Black, Free Case And Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb 6.1inch Black, Free Case And Screen Guide.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/2369231/1.jpg?4276',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb 6.1inch White Free Case & Screen Guide',
        description:
          "Meet Iphone XR 128gb 3gb 6.1inch White Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb 6.1inch White Free Case & Screen Guide.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/8455041/1.jpg?7044',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max - 6.5" - 64GB ROM - 4GB RAM - IOS 12 - 4G Smartphone - 3174mAh - Space Grey + Free Back Case & Screen Protector',
        description:
          'Meet IPhone XS Max - 6.5" - 64GB ROM - 4GB RAM - IOS 12 - 4G Smartphone - 3174mAh - Space Grey + Free Back Case & Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max - 6.5" - 64GB ROM - 4GB RAM - IOS 12 - 4G Smartphone - 3174mAh - Space Grey + Free Back Case & Screen Protector.',
        price: 350000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/6247102/1.jpg?8636',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XS Max 256gb 4gb 6.5" Gold, Free Case & Screen Guide',
        description:
          'Meet Iphone XS Max 256gb 4gb 6.5" Gold, Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XS Max 256gb 4gb 6.5" Gold, Free Case & Screen Guide.',
        price: 360000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/8248102/1.jpg?2272',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb Ram Black Free Pouch And Tempered Glass',
        description:
          "Meet Iphone XR 128gb 3gb Ram Black Free Pouch And Tempered Glass. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb Ram Black Free Pouch And Tempered Glass.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/7649821/1.jpg?2868',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max 256GB Space Grey, Free Pouch And Screen Protector',
        description:
          "Meet IPhone XS Max 256GB Space Grey, Free Pouch And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max 256GB Space Grey, Free Pouch And Screen Protector.",
        price: 378000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/4830121/1.jpg?4389',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Woman A Line Woven Tunic-Green',
        description:
          'Embark on an epic adventure with Woman A Line Woven Tunic-Green. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Woman A Line Woven Tunic-Green pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 64589,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/6535102/1.jpg?0296',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Iphone XR 128gb 3gb Ram 6.1inch Yellow Free Case & Screen Guide',
        description:
          "Meet Iphone XR 128gb 3gb Ram 6.1inch Yellow Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb Ram 6.1inch Yellow Free Case & Screen Guide.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/0246921/1.jpg?7581',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPHONE 12 - 6.1" 128GB 4GB RAM (12PM+12PM) 2815mAh WHITE',
        description:
          'Meet IPHONE 12 - 6.1" 128GB 4GB RAM (12PM+12PM) 2815mAh WHITE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 12 - 6.1" 128GB 4GB RAM (12PM+12PM) 2815mAh WHITE.',
        price: 500000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/3940042/1.jpg?1987',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max 64GB - Gold + Free Pouch And Screen Protector',
        description:
          "Meet IPhone XS Max 64GB - Gold + Free Pouch And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max 64GB - Gold + Free Pouch And Screen Protector.",
        price: 350000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/9347102/1.jpg?8925',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max - 6.5 Inches - 256GB ROM - 4GB RAM - IOS 12 - 4G Smartphone - 3174mAh - Grey + Free Back Case & Screen Protector',
        description:
          "Meet IPhone XS Max - 6.5 Inches - 256GB ROM - 4GB RAM - IOS 12 - 4G Smartphone - 3174mAh - Grey + Free Back Case & Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max - 6.5 Inches - 256GB ROM - 4GB RAM - IOS 12 - 4G Smartphone - 3174mAh - Grey + Free Back Case & Screen Protector.",
        price: 380000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/8879341/1.jpg?5082',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM, 64GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone - White',
        description:
          "Meet IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM, 64GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone - White. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM, 64GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone - White.",
        price: 378000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/3166491/1.jpg?7531',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb 6.1inch White, Free Case And Screen Guide',
        description:
          "Meet Iphone XR 128gb 3gb 6.1inch White, Free Case And Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb 6.1inch White, Free Case And Screen Guide.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/2107641/1.jpg?4429',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11, 6.1-Inch 128GB ROM 4G LTE Single Nano SIM - Black',
        description:
          "Meet IPhone 11, 6.1-Inch 128GB ROM 4G LTE Single Nano SIM - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11, 6.1-Inch 128GB ROM 4G LTE Single Nano SIM - Black.",
        price: 430000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/2303441/1.jpg?2549',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Man- 2-Pack Crew Neck Long Sleeve Regular Fit Homewear Knitted Sets-Navy Blue',
        description:
          'Embark on an epic adventure with Man- 2-Pack Crew Neck Long Sleeve Regular Fit Homewear Knitted Sets-Navy Blue. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Man- 2-Pack Crew Neck Long Sleeve Regular Fit Homewear Knitted Sets-Navy Blue pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 60425,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/8137502/1.jpg?2064',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Iphone XR 128gb 3gb 6.1" White  Free Pouch And Tempered Glass',
        description:
          'Meet Iphone XR 128gb 3gb 6.1" White  Free Pouch And Tempered Glass. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb 6.1" White  Free Pouch And Tempered Glass.',
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/8137102/1.jpg?4147',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM, 128GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone - Purple',
        description:
          "Meet IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM, 128GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone - Purple. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM, 128GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone - Purple.",
        price: 430000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/0203441/1.jpg?2549',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb 6.1" Black Free Pouch And Tempered Glass',
        description:
          'Meet Iphone XR 128gb 3gb 6.1" Black Free Pouch And Tempered Glass. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb 6.1" Black Free Pouch And Tempered Glass.',
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/4927102/1.jpg?3301',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone Xs Max 64gb 4gb Ram Silver, Free Case & Screen Guide',
        description:
          "Meet Iphone Xs Max 64gb 4gb Ram Silver, Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone Xs Max 64gb 4gb Ram Silver, Free Case & Screen Guide.",
        price: 360000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/8749821/1.jpg?3727',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb 6.1inch Black Free Case & Screen Guide',
        description:
          "Meet Iphone XR 128gb 3gb 6.1inch Black Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb 6.1inch Black Free Case & Screen Guide.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/6086031/1.jpg?0457',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max - 6.5 Inches - 64GB ROM - 4GB RAM - IOS 12 - 4G Smartphone - 3174mAh - Gold + Free Pouch & Screen Protector',
        description:
          "Meet IPhone XS Max - 6.5 Inches - 64GB ROM - 4GB RAM - IOS 12 - 4G Smartphone - 3174mAh - Gold + Free Pouch & Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max - 6.5 Inches - 64GB ROM - 4GB RAM - IOS 12 - 4G Smartphone - 3174mAh - Gold + Free Pouch & Screen Protector.",
        price: 360000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/8303661/1.jpg?2697',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 64gb 3gb 6.1inch White Free Case & Screen Guide',
        description:
          "Meet Iphone XR 64gb 3gb 6.1inch White Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 64gb 3gb 6.1inch White Free Case & Screen Guide.",
        price: 301000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/8672441/1.jpg?8831',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '4 In 1 Travelling Luggage Set',
        description:
          'Embark on an epic adventure with 4 In 1 Travelling Luggage Set. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where 4 In 1 Travelling Luggage Set pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 105000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/0754941/1.jpg?8439',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Iphone XR 64gb 6.1" Red, Free Pouch And Screen Protector',
        description:
          'Meet Iphone XR 64gb 6.1" Red, Free Pouch And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 64gb 6.1" Red, Free Pouch And Screen Protector.',
        price: 301000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/9796191/1.jpg?5440',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb 6.1" White, Case & Screen Guide',
        description:
          'Meet Iphone XR 128gb 3gb 6.1" White, Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb 6.1" White, Case & Screen Guide.',
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/9089531/1.jpg?4762',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max - 256GB ROM, 4GB RAM - 6.5" + Pouch & Screen Guide',
        description:
          'Meet IPhone XS Max - 256GB ROM, 4GB RAM - 6.5" + Pouch & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max - 256GB ROM, 4GB RAM - 6.5" + Pouch & Screen Guide.',
        price: 378000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/7491931/1.jpg?5237',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb Ram Blue, Free Case & Screen Guide',
        description:
          "Meet Iphone XR 128gb 3gb Ram Blue, Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb Ram Blue, Free Case & Screen Guide.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/7519421/1.jpg?0362',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max 256GB Silver, Free Case And Screen Guide',
        description:
          "Meet IPhone XS Max 256GB Silver, Free Case And Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max 256GB Silver, Free Case And Screen Guide.",
        price: 378000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/1924911/1.jpg?3552',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb White, Free Case And Screen Guide',
        description:
          "Meet Iphone XR 128gb White, Free Case And Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb White, Free Case And Screen Guide.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/1059811/1.jpg?3173',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 64gb 3gb 6.1inch Yellow, Free Case And Screen Guide',
        description:
          "Meet Iphone XR 64gb 3gb 6.1inch Yellow, Free Case And Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 64gb 3gb 6.1inch Yellow, Free Case And Screen Guide.",
        price: 301000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/6696641/1.jpg?4428',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XS Max 256gb Space Grey, Free Otter Box Case And Screen Protector',
        description:
          "Meet Iphone XS Max 256gb Space Grey, Free Otter Box Case And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XS Max 256gb Space Grey, Free Otter Box Case And Screen Protector.",
        price: 378000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/5636611/1.jpg?1523',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max 256GB Space Gray, Free Case And Screen Guide',
        description:
          "Meet IPhone XS Max 256GB Space Gray, Free Case And Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max 256GB Space Gray, Free Case And Screen Guide.",
        price: 378000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/0724911/1.jpg?3446',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max - 6.4" - 256GB ROM, 4GB RAM With Free Back Case & Screen Protector',
        description:
          'Meet IPhone XS Max - 6.4" - 256GB ROM, 4GB RAM With Free Back Case & Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max - 6.4" - 256GB ROM, 4GB RAM With Free Back Case & Screen Protector.',
        price: 378000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/7433711/1.jpg?6883',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 6S  - 64GB, 4G LTE, Rose Gold (Refurbished A)',
        description:
          "Meet IPhone 6S  - 64GB, 4G LTE, Rose Gold (Refurbished A). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 6S  - 64GB, 4G LTE, Rose Gold (Refurbished A).",
        price: 79499,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/8379331/1.jpg?7149',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb 6.1" Blue Free Case & Tempered Glass',
        description:
          'Meet Iphone XR 128gb 3gb 6.1" Blue Free Case & Tempered Glass. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb 6.1" Blue Free Case & Tempered Glass.',
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/7248102/1.jpg?2271',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max 64GB/4GB 6.5inch Silver, Case & Screen Guide',
        description:
          "Meet IPhone XS Max 64GB/4GB 6.5inch Silver, Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max 64GB/4GB 6.5inch Silver, Case & Screen Guide.",
        price: 360000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/0337102/1.jpg?4521',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 64gb 3gb 6.1" White, Case & Screen Guide',
        description:
          'Meet Iphone XR 64gb 3gb 6.1" White, Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 64gb 3gb 6.1" White, Case & Screen Guide.',
        price: 301000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/4479531/1.jpg?4426',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPHONE 12 PRO  (6.1 INCH)  5G (6GB RAM, 128GB ROM) - GOLD',
        description:
          "Meet IPHONE 12 PRO  (6.1 INCH)  5G (6GB RAM, 128GB ROM) - GOLD. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 12 PRO  (6.1 INCH)  5G (6GB RAM, 128GB ROM) - GOLD.",
        price: 740000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/5812812/1.jpg?8960',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XS Max 64gb 4gb 6.5inch Space Gray Case, Screen Guide',
        description:
          "Meet Iphone XS Max 64gb 4gb 6.5inch Space Gray Case, Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XS Max 64gb 4gb 6.5inch Space Gray Case, Screen Guide.",
        price: 360000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/7186031/1.jpg?1339',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 13 6.1" Super Retina XDR Display, (4GB RAM + 128GB ROM), IOS 15 - Midnight',
        description:
          'Meet IPhone 13 6.1" Super Retina XDR Display, (4GB RAM + 128GB ROM), IOS 15 - Midnight. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 6.1" Super Retina XDR Display, (4GB RAM + 128GB ROM), IOS 15 - Midnight.',
        price: 700000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/050858/1.jpg?8232',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb 6.1inch Blue Free Case & Screen Guide',
        description:
          "Meet Iphone XR 128gb 3gb 6.1inch Blue Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb 6.1inch Blue Free Case & Screen Guide.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/7766641/1.jpg?2253',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 6.1" Black, Free Pouch And Screen Protector',
        description:
          'Meet Iphone XR 128gb 6.1" Black, Free Pouch And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 6.1" Black, Free Pouch And Screen Protector.',
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/4083951/1.jpg?0596',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb 6.1" Red Free Pouch And Tempered Glass',
        description:
          'Meet Iphone XR 128gb 3gb 6.1" Red Free Pouch And Tempered Glass. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb 6.1" Red Free Pouch And Tempered Glass.',
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/8137102/1.jpg?4145',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 64gb 3gb 6.1" Yellow, Case & Screen Guide',
        description:
          'Meet Iphone XR 64gb 3gb 6.1" Yellow, Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 64gb 3gb 6.1" Yellow, Case & Screen Guide.',
        price: 301000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/4779531/1.jpg?4540',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max 256GB Space Gray With Free Pouch And Screen Protector',
        description:
          "Meet IPhone XS Max 256GB Space Gray With Free Pouch And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max 256GB Space Gray With Free Pouch And Screen Protector.",
        price: 378000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/6929821/1.jpg?1349',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb Black Free Pouch And Tempered Glass',
        description:
          "Meet Iphone XR 128gb Black Free Pouch And Tempered Glass. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb Black Free Pouch And Tempered Glass.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/1525221/1.jpg?1947',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPHONE 12 PRO  (6.1 INCH)  5G (6GB RAM, 128GB ROM)- Gold',
        description:
          "Meet IPHONE 12 PRO  (6.1 INCH)  5G (6GB RAM, 128GB ROM)- Gold. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 12 PRO  (6.1 INCH)  5G (6GB RAM, 128GB ROM)- Gold.",
        price: 740000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/6812812/1.jpg?8132',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 6.1" Yellow, Free Pouch And Screen Protector',
        description:
          'Meet Iphone XR 128gb 6.1" Yellow, Free Pouch And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 6.1" Yellow, Free Pouch And Screen Protector.',
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/0896191/1.jpg?5268',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb Ram 6.1" Yellow Free Case & Screen Guide',
        description:
          'Meet Iphone XR 128gb 3gb Ram 6.1" Yellow Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb Ram 6.1" Yellow Free Case & Screen Guide.',
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/8990431/1.jpg?9563',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb 6.1inch Red Free Case & Screen Guide',
        description:
          "Meet Iphone XR 128gb 3gb 6.1inch Red Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb 6.1inch Red Free Case & Screen Guide.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/7766641/1.jpg?2229',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb Ram Blue  Free Pouch And Tempered Glass',
        description:
          "Meet Iphone XR 128gb 3gb Ram Blue  Free Pouch And Tempered Glass. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb Ram Blue  Free Pouch And Tempered Glass.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/7649821/1.jpg?2869',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb 6.1" Blue, Free Case & Screen Guide',
        description:
          'Meet Iphone XR 128gb 3gb 6.1" Blue, Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb 6.1" Blue, Free Case & Screen Guide.',
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/3295431/1.jpg?6539',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 64gb 3gb Ram White, 6.1" Free Case & Screen Guide',
        description:
          'Meet Iphone XR 64gb 3gb Ram White, 6.1" Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 64gb 3gb Ram White, 6.1" Free Case & Screen Guide.',
        price: 301000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/7990431/1.jpg?8684',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 64gb 3gb 6.1" Yellow, Free Case & Screen Guide',
        description:
          'Meet Iphone XR 64gb 3gb 6.1" Yellow, Free Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 64gb 3gb 6.1" Yellow, Free Case & Screen Guide.',
        price: 301000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/3295431/1.jpg?6540',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb 6.1inch Yellow, Free Case And Screen Guide',
        description:
          "Meet Iphone XR 128gb 3gb 6.1inch Yellow, Free Case And Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb 6.1inch Yellow, Free Case And Screen Guide.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0007641/1.jpg?4429',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 128gb 3gb Ram 6.1inch White, Case & Screen Guide',
        description:
          "Meet Iphone XR 128gb 3gb Ram 6.1inch White, Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 3gb Ram 6.1inch White, Case & Screen Guide.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/9749131/1.jpg?7596',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone Xs Max 256gb 4gb Ram Gold, Case & Screen Guide',
        description:
          "Meet Iphone Xs Max 256gb 4gb Ram Gold, Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone Xs Max 256gb 4gb Ram Gold, Case & Screen Guide.",
        price: 378500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/1359621/1.jpg?1181',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XS Max 256gb 6.5" Gold Free Case & Screen Protector',
        description:
          'Meet Iphone XS Max 256gb 6.5" Gold Free Case & Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XS Max 256gb 6.5" Gold Free Case & Screen Protector.',
        price: 378500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/7583951/1.jpg?1463',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max - 6.5" - 256GB RAM - 4GB ROM - IOS 12 - 4G Smartphone - 3174mAh - Silver + Free Pouch And Screen Protector',
        description:
          'Meet IPhone XS Max - 6.5" - 256GB RAM - 4GB ROM - IOS 12 - 4G Smartphone - 3174mAh - Silver + Free Pouch And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max - 6.5" - 256GB RAM - 4GB ROM - IOS 12 - 4G Smartphone - 3174mAh - Silver + Free Pouch And Screen Protector.',
        price: 380000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/1279341/1.jpg?4869',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS MAX 256GB 4GB RAM Space Gray, Case & Screen Guide',
        description:
          "Meet IPhone XS MAX 256GB 4GB RAM Space Gray, Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS MAX 256GB 4GB RAM Space Gray, Case & Screen Guide.",
        price: 378000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/4215531/1.jpg?5891',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPHONE 12 - 6.1" 64GB 4GB RAM (12PM+12PM) 2815mAh WHITE',
        description:
          'Meet IPHONE 12 - 6.1" 64GB 4GB RAM (12PM+12PM) 2815mAh WHITE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 12 - 6.1" 64GB 4GB RAM (12PM+12PM) 2815mAh WHITE.',
        price: 470000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/7840042/1.jpg?9993',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XR 64GB ROM 3GB RAM + Free Pouch & Screen Protector',
        description:
          "Meet IPhone XR 64GB ROM 3GB RAM + Free Pouch & Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XR 64GB ROM 3GB RAM + Free Pouch & Screen Protector.",
        price: 310000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/3216631/1.jpg?9242',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '40" INCHES HD LED TV',
        description:
          'Meet 40" INCHES HD LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40" INCHES HD LED TV.',
        price: 144690,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/914176/1.jpg?3946',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'IPhone XR - 6.1 Inches - 64GB ROM - 3GB RAM - 4G LTE With Free Pouch & Screen Guide',
        description:
          "Meet IPhone XR - 6.1 Inches - 64GB ROM - 3GB RAM - 4G LTE With Free Pouch & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XR - 6.1 Inches - 64GB ROM - 3GB RAM - 4G LTE With Free Pouch & Screen Guide.",
        price: 310000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/6736791/1.jpg?8683',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'PVC Background Backdrop Product Photography 200x120cm Orange',
        description:
          "Meet PVC Background Backdrop Product Photography 200x120cm Orange. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the PVC Background Backdrop Product Photography 200x120cm Orange.",
        price: 12950,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/980277/1.jpg?9386',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 64gb Red, Free Pouch And Screen Protector',
        description:
          "Meet Iphone XR 64gb Red, Free Pouch And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 64gb Red, Free Pouch And Screen Protector.",
        price: 310000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/4956431/1.jpg?8806',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 Pro 5.8-Inch (4GB RAM, 64GB ROM),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Gold',
        description:
          "Meet IPhone 11 Pro 5.8-Inch (4GB RAM, 64GB ROM),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Gold. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 Pro 5.8-Inch (4GB RAM, 64GB ROM),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Gold.",
        price: 480000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/7366612/1.jpg?3146',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 14 Pro Max 6.7" 512GB Nano Sim - Deep Purple',
        description:
          'Meet IPhone 14 Pro Max 6.7" 512GB Nano Sim - Deep Purple. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro Max 6.7" 512GB Nano Sim - Deep Purple.',
        price: 1780000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/7712952/1.jpg?2785',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 13 6.1" 4GB RAM + 128GB ROM) -Midnight',
        description:
          'Meet IPhone 13 6.1" 4GB RAM + 128GB ROM) -Midnight. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 6.1" 4GB RAM + 128GB ROM) -Midnight.',
        price: 730000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/978048/1.jpg?6376',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 15 Pro 128gb - Nano Sim - Natural Titanium',
        description:
          "Meet IPhone 15 Pro 128gb - Nano Sim - Natural Titanium. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 15 Pro 128gb - Nano Sim - Natural Titanium.",
        price: 1550000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/1390262/1.jpg?0776',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 6.1-Inch Liquid Retina (4GB RAM, 64GB  Red',
        description:
          "Meet IPhone 11 6.1-Inch Liquid Retina (4GB RAM, 64GB  Red. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 6.1-Inch Liquid Retina (4GB RAM, 64GB  Red.",
        price: 390000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/0944401/1.jpg?7087',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone XR 64 Gb Black, Free Pouch And Screen Protector',
        description:
          "Meet Iphone XR 64 Gb Black, Free Pouch And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 64 Gb Black, Free Pouch And Screen Protector.",
        price: 320125,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/3544401/1.jpg?7020',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 12 - 6.1-Inch 128GB ROM, 4GB RAM, 5G + Back Case & Screen Guide',
        description:
          "Meet IPhone 12 - 6.1-Inch 128GB ROM, 4GB RAM, 5G + Back Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 12 - 6.1-Inch 128GB ROM, 4GB RAM, 5G + Back Case & Screen Guide.",
        price: 500000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/4819831/1.jpg?5208',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max (4GB RAM, 64GB ROM) IOS 12 (12MP + 12MP)+7MP (single Sim) Gold & 10D Screen Protector + Silicon Back Case ',
        description:
          "Meet IPhone XS Max (4GB RAM, 64GB ROM) IOS 12 (12MP + 12MP)+7MP (single Sim) Gold & 10D Screen Protector + Silicon Back Case . With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max (4GB RAM, 64GB ROM) IOS 12 (12MP + 12MP)+7MP (single Sim) Gold & 10D Screen Protector + Silicon Back Case .",
        price: 350000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/362373/1.jpg?2152',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone X - 5.8" 256GB ROM, 3GB RAM, 2716mAh - Black',
        description:
          'Meet IPhone X - 5.8" 256GB ROM, 3GB RAM, 2716mAh - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone X - 5.8" 256GB ROM, 3GB RAM, 2716mAh - Black.',
        price: 290000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/3652852/1.jpg?9083',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 Pro Max 6.5-Inch Super Retina (4GB RAM, 256GB ROM),iOS 4G LTE Smartphone - Gold',
        description:
          "Meet IPhone 11 Pro Max 6.5-Inch Super Retina (4GB RAM, 256GB ROM),iOS 4G LTE Smartphone - Gold. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 Pro Max 6.5-Inch Super Retina (4GB RAM, 256GB ROM),iOS 4G LTE Smartphone - Gold.",
        price: 599000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/9770431/1.jpg?3742',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "IPhone 11 Pro Max 6.5'' (4GB RAM, 256GBROM) 4G Gray",
        description:
          "Meet IPhone 11 Pro Max 6.5'' (4GB RAM, 256GBROM) 4G Gray. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 Pro Max 6.5'' (4GB RAM, 256GBROM) 4G Gray.",
        price: 599000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/9719831/1.jpg?3392',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XR - 128GB ROM - 3GB RAM - 4G LTE With Free Pouch & Screen Protector',
        description:
          "Meet IPhone XR - 128GB ROM - 3GB RAM - 4G LTE With Free Pouch & Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XR - 128GB ROM - 3GB RAM - 4G LTE With Free Pouch & Screen Protector.",
        price: 330000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/2146631/1.jpg?3065',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Man - Long Sleeve Slim Fit Shirt-Blue',
        description:
          'Embark on an epic adventure with Man - Long Sleeve Slim Fit Shirt-Blue. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Man - Long Sleeve Slim Fit Shirt-Blue pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 57548,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/8137502/1.jpg?2064',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Magic Keyboard For IPad Pro 12.9" (3rd/4th/5th Gen - Black',
        description:
          'Meet Magic Keyboard For IPad Pro 12.9" (3rd/4th/5th Gen - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Magic Keyboard For IPad Pro 12.9" (3rd/4th/5th Gen - Black.',
        price: 350000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/2113922/1.jpg?5831',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 6.1-Inch (4GB RAM, 128GB ROM) Green',
        description:
          "Meet IPhone 11 6.1-Inch (4GB RAM, 128GB ROM) Green. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 6.1-Inch (4GB RAM, 128GB ROM) Green.",
        price: 430000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/7003441/1.jpg?2532',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPHONE 12 - 6.1" 64GB 4GB RAM (12PM+12PM) 2815mAh',
        description:
          'Meet IPHONE 12 - 6.1" 64GB 4GB RAM (12PM+12PM) 2815mAh. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 12 - 6.1" 64GB 4GB RAM (12PM+12PM) 2815mAh.',
        price: 470000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/3930042/1.jpg?3341',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 14 Pro Max 6.7" 256GB Nano Sim - Deep Purple',
        description:
          'Meet IPhone 14 Pro Max 6.7" 256GB Nano Sim - Deep Purple. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro Max 6.7" 256GB Nano Sim - Deep Purple.',
        price: 1576000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/0326212/1.jpg?8192',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPHONE 11 PRO MAX 6.5" (12PM+12PM+12PM) 64/4GB 3969mAh',
        description:
          'Meet IPHONE 11 PRO MAX 6.5" (12PM+12PM+12PM) 64/4GB 3969mAh. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 11 PRO MAX 6.5" (12PM+12PM+12PM) 64/4GB 3969mAh.',
        price: 610000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/7740042/1.jpg?7710',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 14 Pro Max 6.7" 256GB - Nano Sim - Gold',
        description:
          'Meet IPhone 14 Pro Max 6.7" 256GB - Nano Sim - Gold. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro Max 6.7" 256GB - Nano Sim - Gold.',
        price: 1573730,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/6226212/1.jpg?8196',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 12 Pro (128 GB) - Pacific Blue',
        description:
          "Meet IPhone 12 Pro (128 GB) - Pacific Blue. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 12 Pro (128 GB) - Pacific Blue.",
        price: 690000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/139307/1.jpg?3251',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch,(12MP+12MP+12MP) - Pacific Blue',
        description:
          "Meet IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch,(12MP+12MP+12MP) - Pacific Blue. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch,(12MP+12MP+12MP) - Pacific Blue.",
        price: 820000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/709296/1.jpg?1393',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM, 64GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone-Nano Sim-PURPLE',
        description:
          "Meet IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM, 64GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone-Nano Sim-PURPLE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM, 64GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone-Nano Sim-PURPLE.",
        price: 390000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/8844401/1.jpg?7044',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 128GB - Black ',
        description:
          "Meet IPhone 11 128GB - Black . With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 128GB - Black .",
        price: 400000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/073366/1.jpg?9732',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "IPhone 14 Pro Max 6.7'' 6GB 1TB ROM Nano SIM - Space Black",
        description:
          "Meet IPhone 14 Pro Max 6.7'' 6GB 1TB ROM Nano SIM - Space Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro Max 6.7'' 6GB 1TB ROM Nano SIM - Space Black.",
        price: 1860999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/9026002/1.jpg?4074',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 13 6.1" , (4GB RAM + 256gb ROM), IOS 15 - Red',
        description:
          'Meet IPhone 13 6.1" , (4GB RAM + 256gb ROM), IOS 15 - Red. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 6.1" , (4GB RAM + 256gb ROM), IOS 15 - Red.',
        price: 840000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/4873921/1.jpg?1248',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'MacBook Pro 16" - M2 Max 32GB Ram - 1TB SSD Space Gray',
        description:
          'Meet MacBook Pro 16" - M2 Max 32GB Ram - 1TB SSD Space Gray. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the MacBook Pro 16" - M2 Max 32GB Ram - 1TB SSD Space Gray.',
        price: 3800000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/4170652/1.jpg?7540',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "IPhone 14 Pro Max 6.7'' 6GB RAM/128GB ROM IOS 16 - Deep Purple",
        description:
          "Meet IPhone 14 Pro Max 6.7'' 6GB RAM/128GB ROM IOS 16 - Deep Purple. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro Max 6.7'' 6GB RAM/128GB ROM IOS 16 - Deep Purple.",
        price: 1265999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/8241302/1.jpg?6210',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '55” Smart Android UHD 4k Television',
        description:
          "Meet 55” Smart Android UHD 4k Television. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55” Smart Android UHD 4k Television.",
        price: 288000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/6546932/1.jpg?7237',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'IPhone 13 Pro Max 6.7" - 256GB ROM + 6GB RAM - IOS 15, 5G',
        description:
          'Meet IPhone 13 Pro Max 6.7" - 256GB ROM + 6GB RAM - IOS 15, 5G. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 Pro Max 6.7" - 256GB ROM + 6GB RAM - IOS 15, 5G.',
        price: 1030000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/2006252/1.jpg?5688',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone XS Max 64GB 4GB 6.5" Space Grey, Case & Screen Guide',
        description:
          'Meet IPhone XS Max 64GB 4GB 6.5" Space Grey, Case & Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max 64GB 4GB 6.5" Space Grey, Case & Screen Guide.',
        price: 350000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/7336402/1.jpg?0093',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Iphone Xs Max 256gb/4gb 6.5inch Silver Case,Screen Guide',
        description:
          "Meet Iphone Xs Max 256gb/4gb 6.5inch Silver Case,Screen Guide. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone Xs Max 256gb/4gb 6.5inch Silver Case,Screen Guide.",
        price: 378500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/0669131/1.jpg?9958',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 15 Pro 256gb - Nano Sim - Natural Titanium',
        description:
          "Meet IPhone 15 Pro 256gb - Nano Sim - Natural Titanium. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 15 Pro 256gb - Nano Sim - Natural Titanium.",
        price: 1680000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/2390262/1.jpg?0776',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 13 6.1" Super Retina XDR Display, (4GB RAM + 256GB ROM), IOS 15,  With FaceTime  - Midnight Black',
        description:
          'Meet IPhone 13 6.1" Super Retina XDR Display, (4GB RAM + 256GB ROM), IOS 15,  With FaceTime  - Midnight Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 6.1" Super Retina XDR Display, (4GB RAM + 256GB ROM), IOS 15,  With FaceTime  - Midnight Black.',
        price: 840000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/122749/1.jpg?5260',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "IPhone 11 6.1''- Liquid Retina LCD (4GB RAM, 64GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone-White",
        description:
          "Meet IPhone 11 6.1''- Liquid Retina LCD (4GB RAM, 64GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone-White. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 6.1''- Liquid Retina LCD (4GB RAM, 64GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone-White.",
        price: 390000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/0944401/1.jpg?7058',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM, 64GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone - Black',
        description:
          "Meet IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM, 64GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM, 64GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone - Black.",
        price: 378000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/0185431/1.jpg?5609',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Man Jogger - Standart Fit Woven Trousers -Anthracite',
        description:
          'Embark on an epic adventure with Man Jogger - Standart Fit Woven Trousers -Anthracite. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Man Jogger - Standart Fit Woven Trousers -Anthracite pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 65768,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/0451002/1.jpg?8537',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'IPhone XS Max (4GB RAM, 256GB ROM) IOS 12 (12MP + 12MP)+7MP Nano Sim And E-sim Gold',
        description:
          "Meet IPhone XS Max (4GB RAM, 256GB ROM) IOS 12 (12MP + 12MP)+7MP Nano Sim And E-sim Gold. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone XS Max (4GB RAM, 256GB ROM) IOS 12 (12MP + 12MP)+7MP Nano Sim And E-sim Gold.",
        price: 395000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/331452/1.jpg?2624',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 15 Pro Max 512gb - Nano Sim - Black Titanium',
        description:
          "Meet IPhone 15 Pro Max 512gb - Nano Sim - Black Titanium. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 15 Pro Max 512gb - Nano Sim - Black Titanium.",
        price: 2000000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/0390262/1.jpg?8984',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 Pro Max 6.5-Inch (4GB RAM, 64GB ROM) 4G Gold',
        description:
          "Meet IPhone 11 Pro Max 6.5-Inch (4GB RAM, 64GB ROM) 4G Gold. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 Pro Max 6.5-Inch (4GB RAM, 64GB ROM) 4G Gold.",
        price: 550000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/5766431/1.jpg?0116',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 12 Pro Max - 6.7Inch - 128GB, 6GB RAM - IOS 14 - Gold',
        description:
          "Meet IPhone 12 Pro Max - 6.7Inch - 128GB, 6GB RAM - IOS 14 - Gold. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 12 Pro Max - 6.7Inch - 128GB, 6GB RAM - IOS 14 - Gold.",
        price: 780000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8893812/1.jpg?5270',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 15 Pro Max 256gb - Nano Sim - Blue  Titanium',
        description:
          "Meet IPhone 15 Pro Max 256gb - Nano Sim - Blue  Titanium. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 15 Pro Max 256gb - Nano Sim - Blue  Titanium.",
        price: 1950000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/8290262/1.jpg?6242',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 Pro Max (4GB RAM, 256GB ROM),iOS 4G LTE Midnight Green',
        description:
          "Meet IPhone 11 Pro Max (4GB RAM, 256GB ROM),iOS 4G LTE Midnight Green. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 Pro Max (4GB RAM, 256GB ROM),iOS 4G LTE Midnight Green.",
        price: 599000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/4270241/1.jpg?0094',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 13 Pro Max 6.7" Super Retina XDR Display With ProMotion, (6GB RAM + 256GB ROM) IOS 15, 5G, FaceTime - Graphite',
        description:
          'Meet IPhone 13 Pro Max 6.7" Super Retina XDR Display With ProMotion, (6GB RAM + 256GB ROM) IOS 15, 5G, FaceTime - Graphite. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 Pro Max 6.7" Super Retina XDR Display With ProMotion, (6GB RAM + 256GB ROM) IOS 15, 5G, FaceTime - Graphite.',
        price: 1030000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/510389/1.jpg?9688',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Woman Oversize Fit Knitted Cardigan-Black',
        description:
          'Embark on an epic adventure with Woman Oversize Fit Knitted Cardigan-Black. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Woman Oversize Fit Knitted Cardigan-Black pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 57371,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/6535102/1.jpg?0307',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'IPhone 14 Pro Max 6.7" (6GB RAM + 128GB ROM) - Deep Purple',
        description:
          'Meet IPhone 14 Pro Max 6.7" (6GB RAM + 128GB ROM) - Deep Purple. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro Max 6.7" (6GB RAM + 128GB ROM) - Deep Purple.',
        price: 1359300,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/1326212/1.jpg?8191',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 13 Pro 6.1 Inch Super Retina XDR Display With ProMotion, (6GB RAM + 256GB ROM), IOS 15, 5G, FaceTime - Graphite',
        description:
          "Meet IPhone 13 Pro 6.1 Inch Super Retina XDR Display With ProMotion, (6GB RAM + 256GB ROM), IOS 15, 5G, FaceTime - Graphite. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 Pro 6.1 Inch Super Retina XDR Display With ProMotion, (6GB RAM + 256GB ROM), IOS 15, 5G, FaceTime - Graphite.",
        price: 1000000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/122749/1.jpg?5260',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 13 Pro 6.1" Super Retina XDR Display (6GB RAM + 128GB ROM) IOS 15 - Gold',
        description:
          'Meet IPhone 13 Pro 6.1" Super Retina XDR Display (6GB RAM + 128GB ROM) IOS 15 - Gold. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 Pro 6.1" Super Retina XDR Display (6GB RAM + 128GB ROM) IOS 15 - Gold.',
        price: 1000000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/810389/1.jpg?0404',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 13 Pro Max 6.7" Super Retina XDR Display With ProMotion, (6GB RAM + 128GB ROM) IOS 15, 5G, FaceTime - Graphite',
        description:
          'Meet IPhone 13 Pro Max 6.7" Super Retina XDR Display With ProMotion, (6GB RAM + 128GB ROM) IOS 15, 5G, FaceTime - Graphite. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 Pro Max 6.7" Super Retina XDR Display With ProMotion, (6GB RAM + 128GB ROM) IOS 15, 5G, FaceTime - Graphite.',
        price: 1020000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/122749/1.jpg?5259',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "IPhone 14 Pro Max 6.7'' 6GB RAM 256GB ROM IOS 16 - Space Black",
        description:
          "Meet IPhone 14 Pro Max 6.7'' 6GB RAM 256GB ROM IOS 16 - Space Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro Max 6.7'' 6GB RAM 256GB ROM IOS 16 - Space Black.",
        price: 1385999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/6646002/1.jpg?8657',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium',
        description:
          "Meet IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium.",
        price: 2200000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/0390262/1.jpg?0127',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 14 Pro Max 6.7" 1tb Nano Sim - Deep Purple',
        description:
          'Meet IPhone 14 Pro Max 6.7" 1tb Nano Sim - Deep Purple. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro Max 6.7" 1tb Nano Sim - Deep Purple.',
        price: 1890000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/7712952/1.jpg?3717',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'Leather Lace Boot',
        description:
          'Embark on an epic adventure with Leather Lace Boot. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Leather Lace Boot pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 58500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0411991/1.jpg?7064',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: "IPhone 14 6.1'' 6GB RAM 128GB ROM IOS 16 - Blue",
        description:
          "Meet IPhone 14 6.1'' 6GB RAM 128GB ROM IOS 16 - Blue. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 6.1'' 6GB RAM 128GB ROM IOS 16 - Blue.",
        price: 850999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/9123002/1.jpg?5622',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 12, 6.1-Inch 64GB ROM, 4GB RAM, 5G',
        description:
          "Meet IPhone 12, 6.1-Inch 64GB ROM, 4GB RAM, 5G. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 12, 6.1-Inch 64GB ROM, 4GB RAM, 5G.",
        price: 470000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/0397202/1.jpg?9697',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 12 Pro Max - 128GB ROM - 6GB RAM - 6.7-Inch - 5G',
        description:
          "Meet IPhone 12 Pro Max - 128GB ROM - 6GB RAM - 6.7-Inch - 5G. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 12 Pro Max - 128GB ROM - 6GB RAM - 6.7-Inch - 5G.",
        price: 780000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/0390122/1.jpg?6702',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 Pro Max (4GB RAM, 256GB ROM) 4G LTE Midnight Green',
        description:
          "Meet IPhone 11 Pro Max (4GB RAM, 256GB ROM) 4G LTE Midnight Green. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 Pro Max (4GB RAM, 256GB ROM) 4G LTE Midnight Green.",
        price: 599000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/5500042/1.jpg?1519',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 14 Pro  Max 6.7" (6GB RAM + 256GB ROM) - Deep Purple',
        description:
          'Meet IPhone 14 Pro  Max 6.7" (6GB RAM + 256GB ROM) - Deep Purple. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro  Max 6.7" (6GB RAM + 256GB ROM) - Deep Purple.',
        price: 1499000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/1842102/1.jpg?5308',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 15 Pro Max 512gb - Nano Sim - Blue Titanium',
        description:
          "Meet IPhone 15 Pro Max 512gb - Nano Sim - Blue Titanium. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 15 Pro Max 512gb - Nano Sim - Blue Titanium.",
        price: 2000000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/0390262/1.jpg?9778',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 14 Pro Max  6.7" 6GB RAM 1TB ROM IOS 16 - Gold',
        description:
          'Meet IPhone 14 Pro Max  6.7" 6GB RAM 1TB ROM IOS 16 - Gold. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro Max  6.7" 6GB RAM 1TB ROM IOS 16 - Gold.',
        price: 1860999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/1573232/1.jpg?8068',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 - 6.1Inch - 128GB ROM, 4GB RAM - IOS 13 - 3110mAh',
        description:
          "Meet IPhone 11 - 6.1Inch - 128GB ROM, 4GB RAM - IOS 13 - 3110mAh. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 - 6.1Inch - 128GB ROM, 4GB RAM - IOS 13 - 3110mAh.",
        price: 450000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/0559252/1.jpg?3402',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 Pro Max 6.5-Inch (4GB RAM, 256GB ROM ),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Space Grey',
        description:
          "Meet IPhone 11 Pro Max 6.5-Inch (4GB RAM, 256GB ROM ),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Space Grey. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 Pro Max 6.5-Inch (4GB RAM, 256GB ROM ),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Space Grey.",
        price: 599000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/5294321/1.jpg?2396',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "IPhone 14 Pro Max 6.7'' 6GB RAM 512GB ROM IOS 16 - Black",
        description:
          "Meet IPhone 14 Pro Max 6.7'' 6GB RAM 512GB ROM IOS 16 - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro Max 6.7'' 6GB RAM 512GB ROM IOS 16 - Black.",
        price: 1610999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/5831302/1.jpg?1515',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 12 6.1 Inches 5GB RAM, 64GB ROM - Black',
        description:
          "Meet IPhone 12 6.1 Inches 5GB RAM, 64GB ROM - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 12 6.1 Inches 5GB RAM, 64GB ROM - Black.",
        price: 470000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/5249521/1.jpg?6380',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 15 Pro Max 256gb - Nano Sim - Blue Titanium',
        description:
          "Meet IPhone 15 Pro Max 256gb - Nano Sim - Blue Titanium. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 15 Pro Max 256gb - Nano Sim - Blue Titanium.",
        price: 1880000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/0390262/1.jpg?9046',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 15 Plus 256GB Black FaceTime - A16 Bionic - 5 Core',
        description:
          "Meet IPhone 15 Plus 256GB Black FaceTime - A16 Bionic - 5 Core. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 15 Plus 256GB Black FaceTime - A16 Bionic - 5 Core.",
        price: 1390999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/6631862/1.jpg?6618',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPHONE 12 - 6.1" 128GB 4GB RAM (12PM+12PM) 2815mAh RED',
        description:
          'Meet IPHONE 12 - 6.1" 128GB 4GB RAM (12PM+12PM) 2815mAh RED. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 12 - 6.1" 128GB 4GB RAM (12PM+12PM) 2815mAh RED.',
        price: 500000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/6940042/1.jpg?3005',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPHONE 11 - 6.1"  64/4GB RAM (12MP+12MP) 3110mAh BLACK',
        description:
          'Meet IPHONE 11 - 6.1"  64/4GB RAM (12MP+12MP) 3110mAh BLACK. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 11 - 6.1"  64/4GB RAM (12MP+12MP) 3110mAh BLACK.',
        price: 378500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/5972352/1.jpg?0954',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 Pro 5.8-Inch (4GB RAM, 64GB ROM),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Space Grey',
        description:
          "Meet IPhone 11 Pro 5.8-Inch (4GB RAM, 64GB ROM),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Space Grey. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 Pro 5.8-Inch (4GB RAM, 64GB ROM),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Space Grey.",
        price: 480000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/6477331/1.jpg?8007',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "IPhone 14 Pro Max 6.7'' 6GB 512GB ROM Nano SIM - Silver",
        description:
          "Meet IPhone 14 Pro Max 6.7'' 6GB 512GB ROM Nano SIM - Silver. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro Max 6.7'' 6GB 512GB ROM Nano SIM - Silver.",
        price: 1610999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/5738662/1.jpg?9176',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 6.1-Inch Liquid Retina (4GB RAM, 128GB ROM) White',
        description:
          "Meet IPhone 11 6.1-Inch Liquid Retina (4GB RAM, 128GB ROM) White. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 6.1-Inch Liquid Retina (4GB RAM, 128GB ROM) White.",
        price: 430000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/7003441/1.jpg?2532',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 13 Pro Max 6.7" Super Retina XDR Display (6GB RAM +256GB ROM), IOS 15 - Sierra Blue',
        description:
          'Meet IPhone 13 Pro Max 6.7" Super Retina XDR Display (6GB RAM +256GB ROM), IOS 15 - Sierra Blue. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 Pro Max 6.7" Super Retina XDR Display (6GB RAM +256GB ROM), IOS 15 - Sierra Blue.',
        price: 1030000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/122749/1.jpg?5258',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 - 6.1" 64GB ROM, 4GB RAM, 3110mAh - White',
        description:
          'Meet IPhone 11 - 6.1" 64GB ROM, 4GB RAM, 3110mAh - White. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 - 6.1" 64GB ROM, 4GB RAM, 3110mAh - White.',
        price: 400000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/4652852/1.jpg?9981',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPHONE 12 - 6.1" 128GB 4GB RAM (12PM+12PM) 2815mAh',
        description:
          'Meet IPHONE 12 - 6.1" 128GB 4GB RAM (12PM+12PM) 2815mAh. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 12 - 6.1" 128GB 4GB RAM (12PM+12PM) 2815mAh.',
        price: 500000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/3930042/1.jpg?3341',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 13 Pro Max 6.7" Super Retina XDR Display With ProMotion, (6GB RAM + 128GB ROM) IOS 15, 5G, FaceTime - Sierra Blue',
        description:
          'Meet IPhone 13 Pro Max 6.7" Super Retina XDR Display With ProMotion, (6GB RAM + 128GB ROM) IOS 15, 5G, FaceTime - Sierra Blue. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 Pro Max 6.7" Super Retina XDR Display With ProMotion, (6GB RAM + 128GB ROM) IOS 15, 5G, FaceTime - Sierra Blue.',
        price: 1030000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/122749/1.jpg?5259',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'New DesignTravel Luggage Box With Kit Bag - 4sets',
        description:
          'Embark on an epic adventure with New DesignTravel Luggage Box With Kit Bag - 4sets. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where New DesignTravel Luggage Box With Kit Bag - 4sets pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 79549,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/1157121/1.jpg?1445',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'IPHONE 11 - 6.1"  64/4GB RAM (12MP+12MP) 3110mAh WHITE',
        description:
          'Meet IPHONE 11 - 6.1"  64/4GB RAM (12MP+12MP) 3110mAh WHITE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 11 - 6.1"  64/4GB RAM (12MP+12MP) 3110mAh WHITE.',
        price: 378500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/5972352/1.jpg?0954',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "IPhone 14 Pro 6.1'' 6GB RAM 256GB ROM IOS 16 - Space Black",
        description:
          "Meet IPhone 14 Pro 6.1'' 6GB RAM 256GB ROM IOS 16 - Space Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro 6.1'' 6GB RAM 256GB ROM IOS 16 - Space Black.",
        price: 1160999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/4055102/1.jpg?6278',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 Pro Max 6.5-Inch (4GB RAM, 64GB ROM ),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Space Grey',
        description:
          "Meet IPhone 11 Pro Max 6.5-Inch (4GB RAM, 64GB ROM ),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Space Grey. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 Pro Max 6.5-Inch (4GB RAM, 64GB ROM ),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Space Grey.",
        price: 580000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/9744801/1.jpg?6920',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 14 Pro  6.1" 6GB RAM 128GB ROM IOS 16 - Deep Purple',
        description:
          'Meet IPhone 14 Pro  6.1" 6GB RAM 128GB ROM IOS 16 - Deep Purple. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro  6.1" 6GB RAM 128GB ROM IOS 16 - Deep Purple.',
        price: 1155999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/9677202/1.jpg?4457',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "IPhone 14 6.1'' (6GB  RAM +128GB ROM) - Midnight",
        description:
          "Meet IPhone 14 6.1'' (6GB  RAM +128GB ROM) - Midnight. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 6.1'' (6GB  RAM +128GB ROM) - Midnight.",
        price: 950000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/5925102/1.jpg?6274',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "IPhone 14 Pro Max 6.7'' 6GB 512GB ROM Nano SIM - Deep Purple",
        description:
          "Meet IPhone 14 Pro Max 6.7'' 6GB 512GB ROM Nano SIM - Deep Purple. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro Max 6.7'' 6GB 512GB ROM Nano SIM - Deep Purple.",
        price: 1610999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/7431302/1.jpg?4571',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "IPhone 14 Pro Max 6.7'' 6GB 256GB ROM Nano SIM - Deep Purple",
        description:
          "Meet IPhone 14 Pro Max 6.7'' 6GB 256GB ROM Nano SIM - Deep Purple. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro Max 6.7'' 6GB 256GB ROM Nano SIM - Deep Purple.",
        price: 1320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/3389252/1.jpg?5354',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '50″ Android FULL  HD LED Smart Tv',
        description:
          "Meet 50″ Android FULL  HD LED Smart Tv. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50″ Android FULL  HD LED Smart Tv.",
        price: 255990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/877244/1.jpg?9271',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'Iphone XR 128gb 6.1" Red, Free Pouch And Screen Protector',
        description:
          'Meet Iphone XR 128gb 6.1" Red, Free Pouch And Screen Protector. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Iphone XR 128gb 6.1" Red, Free Pouch And Screen Protector.',
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/9083951/1.jpg?0778',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 13 6.1" , (4GB RAM + 256GB ROM), IOS 15 - Midnight',
        description:
          'Meet IPhone 13 6.1" , (4GB RAM + 256GB ROM), IOS 15 - Midnight. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 6.1" , (4GB RAM + 256GB ROM), IOS 15 - Midnight.',
        price: 840000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/8532452/1.jpg?9748',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 12 6.1 Inches 5G , 128GB ROM, - Black',
        description:
          "Meet IPhone 12 6.1 Inches 5G , 128GB ROM, - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 12 6.1 Inches 5G , 128GB ROM, - Black.",
        price: 500000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/0397202/1.jpg?9697',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 15 Plus 256GB - FaceTime - A16 Bionic - 5core - BLUE',
        description:
          "Meet IPhone 15 Plus 256GB - FaceTime - A16 Bionic - 5core - BLUE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 15 Plus 256GB - FaceTime - A16 Bionic - 5core - BLUE.",
        price: 1390999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/5838662/1.jpg?0030',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPHONE 11 - 6.1"  64/4GB RAM (12MP+12MP) 3110mAh RED',
        description:
          'Meet IPHONE 11 - 6.1"  64/4GB RAM (12MP+12MP) 3110mAh RED. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPHONE 11 - 6.1"  64/4GB RAM (12MP+12MP) 3110mAh RED.',
        price: 378500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/5972352/1.jpg?0955',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 13 Pro Max 6.7" Super Retina XDR Display With ProMotion, (6GB RAM + 512GB ROM), IOS 15, 5G, FaceTime - Gold',
        description:
          'Meet IPhone 13 Pro Max 6.7" Super Retina XDR Display With ProMotion, (6GB RAM + 512GB ROM), IOS 15, 5G, FaceTime - Gold. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 Pro Max 6.7" Super Retina XDR Display With ProMotion, (6GB RAM + 512GB ROM), IOS 15, 5G, FaceTime - Gold.',
        price: 1300000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/122749/1.jpg?5260',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 13 - 6.1Inch - 4GB RAM, 256GB ROM - IOS 15 - 3420mAh',
        description:
          "Meet IPhone 13 - 6.1Inch - 4GB RAM, 256GB ROM - IOS 15 - 3420mAh. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 - 6.1Inch - 4GB RAM, 256GB ROM - IOS 15 - 3420mAh.",
        price: 840000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/8532452/1.jpg?9748',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '40 Inches Full HD LED Tv',
        description:
          "Meet 40 Inches Full HD LED Tv. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40 Inches Full HD LED Tv.",
        price: 130000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/9713501/1.jpg?0413',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'IPhone 13 Pro 6.1 Inch Super Retina XDR Display With ProMotion, (6GB RAM + 256GB ROM), IOS 15, 5G, FaceTime - GOLD',
        description:
          "Meet IPhone 13 Pro 6.1 Inch Super Retina XDR Display With ProMotion, (6GB RAM + 256GB ROM), IOS 15, 5G, FaceTime - GOLD. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 13 Pro 6.1 Inch Super Retina XDR Display With ProMotion, (6GB RAM + 256GB ROM), IOS 15, 5G, FaceTime - GOLD.",
        price: 1000000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/978048/1.jpg?6376',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "IPhone 14 Pro Max 6.7'' 6GB 512GB ROM Nano SIM - Gold",
        description:
          "Meet IPhone 14 Pro Max 6.7'' 6GB 512GB ROM Nano SIM - Gold. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 14 Pro Max 6.7'' 6GB 512GB ROM Nano SIM - Gold.",
        price: 1610999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/9731302/1.jpg?6935',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: 'IPhone 11 Pro 5.8-Inch (4GB RAM, 256GB ROM),iOS 13, 4G LTE.',
        description:
          "Meet IPhone 11 Pro 5.8-Inch (4GB RAM, 256GB ROM),iOS 13, 4G LTE.. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand ,Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display  offers a big, immersive screen with limited onscreen interruptions. sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them.This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the IPhone 11 Pro 5.8-Inch (4GB RAM, 256GB ROM),iOS 13, 4G LTE..",
        price: 520000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/7109852/1.jpg?1532',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32 Inches LED TV (RTV32F7J) + 1 Year Warranty',
        description:
          "Meet 32 Inches LED TV (RTV32F7J) + 1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inches LED TV (RTV32F7J) + 1 Year Warranty.",
        price: 58800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/0412362/1.jpg?1684',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32 Inches LED TV (A3250) + 1 year Warranty',
        description:
          "Meet 32 Inches LED TV (A3250) + 1 year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inches LED TV (A3250) + 1 year Warranty.",
        price: 58800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/5031362/1.jpg?0002',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "32'' Inches Frameless HD LED TV-Black",
        description:
          "Meet 32'' Inches Frameless HD LED TV-Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32'' Inches Frameless HD LED TV-Black.",
        price: 59900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/1897052/1.jpg?0761',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "50'' Inches Smart UHD 4K TV (50A6K) - Black +1 Year Warranty",
        description:
          "Meet 50'' Inches Smart UHD 4K TV (50A6K) - Black +1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50'' Inches Smart UHD 4K TV (50A6K) - Black +1 Year Warranty.",
        price: 303900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/643077/1.jpg?0796',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '50" UHD 4K Frameless Android Smart TV  (U4K621B)SA',
        description:
          'Meet 50" UHD 4K Frameless Android Smart TV  (U4K621B)SA. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50" UHD 4K Frameless Android Smart TV  (U4K621B)SA.',
        price: 225750,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/8002752/1.jpg?8878',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '40" Curve LED Smart Android Tv (PV-JP40CV2100SY)',
        description:
          'Meet 40" Curve LED Smart Android Tv (PV-JP40CV2100SY). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40" Curve LED Smart Android Tv (PV-JP40CV2100SY).',
        price: 129150,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/0612502/1.jpg?9683',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '43 Inches 4K LED Smart TV (43A6H) - Black + 1 Year Warranty',
        description:
          "Meet 43 Inches 4K LED Smart TV (43A6H) - Black + 1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43 Inches 4K LED Smart TV (43A6H) - Black + 1 Year Warranty.",
        price: 219780,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/2221601/1.jpg?3573',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '55" Inches UHD 4K SMART TV (55A6K) - Black + 1 Year Warranty',
        description:
          'Meet 55" Inches UHD 4K SMART TV (55A6K) - Black + 1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55" Inches UHD 4K SMART TV (55A6K) - Black + 1 Year Warranty.',
        price: 355215,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/951058/1.jpg?9250',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '50" Inches UHD Smart TV (BTF-50SV) + Free Wall Bracket - Black + 1 Year Warranty',
        description:
          'Meet 50" Inches UHD Smart TV (BTF-50SV) + Free Wall Bracket - Black + 1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50" Inches UHD Smart TV (BTF-50SV) + Free Wall Bracket - Black + 1 Year Warranty.',
        price: 289980,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/5192502/1.jpg?3378',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32" Inches LED TV (32WAN)  - Black +1 Year Warranty',
        description:
          'Meet 32" Inches LED TV (32WAN)  - Black +1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches LED TV (32WAN)  - Black +1 Year Warranty.',
        price: 75890,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/9731431/1.jpg?8886',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32" Inches HD TV (A3240GE) - Black + 1 Year Warranty',
        description:
          'Meet 32" Inches HD TV (A3240GE) - Black + 1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches HD TV (A3240GE) - Black + 1 Year Warranty.',
        price: 81556,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/909098/1.jpg?3607',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '43" Inches Full HD TV (BTF-43AN) - Black + 1 Year warranty',
        description:
          'Meet 43" Inches Full HD TV (BTF-43AN) - Black + 1 Year warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" Inches Full HD TV (BTF-43AN) - Black + 1 Year warranty.',
        price: 122850,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/5826921/1.jpg?6830',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "32'' Inch Frameless Android Smart HD LED TV - Black",
        description:
          "Meet 32'' Inch Frameless Android Smart HD LED TV - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32'' Inch Frameless Android Smart HD LED TV - Black.",
        price: 76800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/8797052/1.jpg?0832',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "43'' Frameless FHD LED TV - Black +  Free Wall Mount",
        description:
          "Meet 43'' Frameless FHD LED TV - Black +  Free Wall Mount. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43'' Frameless FHD LED TV - Black +  Free Wall Mount.",
        price: 139900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/2897052/1.jpg?1047',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32" Inches FHD TV (H620B(SA) - Black + 2 Years Warranty',
        description:
          'Meet 32" Inches FHD TV (H620B(SA) - Black + 2 Years Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches FHD TV (H620B(SA) - Black + 2 Years Warranty.',
        price: 81000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/2636301/1.jpg?1598',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "55'' Inch Frameless Android Smart 4K LED TV-Black+WALLMOUNT",
        description:
          "Meet 55'' Inch Frameless Android Smart 4K LED TV-Black+WALLMOUNT. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55'' Inch Frameless Android Smart 4K LED TV-Black+WALLMOUNT.",
        price: 255500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/9797052/1.jpg?1463',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: "50'' Inch Frameless Android Smart 4K LED TV-Black+WALLMOUNT",
        description:
          "Meet 50'' Inch Frameless Android Smart 4K LED TV-Black+WALLMOUNT. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50'' Inch Frameless Android Smart 4K LED TV-Black+WALLMOUNT.",
        price: 215900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/9797052/1.jpg?1355',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32 Inch Full HD LED TV  + 12 Months Warranty',
        description:
          "Meet 32 Inch Full HD LED TV  + 12 Months Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inch Full HD LED TV  + 12 Months Warranty.",
        price: 93900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/7962502/1.jpg?2026',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '43 Inch FHD LED TV (CTV-43) + 1 Year Warranty',
        description:
          "Meet 43 Inch FHD LED TV (CTV-43) + 1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43 Inch FHD LED TV (CTV-43) + 1 Year Warranty.",
        price: 135000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/2772502/1.jpg?0708',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32" INCH HD LED TV (1year Warranty)',
        description:
          'Meet 32" INCH HD LED TV (1year Warranty). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" INCH HD LED TV (1year Warranty).',
        price: 87400,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/067289/1.jpg?2763',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '43" Frameless FHD TV (F620B (SA)',
        description:
          'Meet 43" Frameless FHD TV (F620B (SA). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" Frameless FHD TV (F620B (SA).',
        price: 120750,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/2636301/1.jpg?8683',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32" Inches LED HD TV (D2010) - Black +1 Year Warranty',
        description:
          'Meet 32" Inches LED HD TV (D2010) - Black +1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches LED HD TV (D2010) - Black +1 Year Warranty.',
        price: 75500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/951058/1.jpg?2917',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32" INCH HD LED TV  (1year Warranty)',
        description:
          'Meet 32" INCH HD LED TV  (1year Warranty). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" INCH HD LED TV  (1year Warranty).',
        price: 95000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/167289/1.jpg?2904',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '55" UHD Smart LED TV with Android OS (BTF-55SW) + Steel Bezzle + Wall Bracket',
        description:
          'Meet 55" UHD Smart LED TV with Android OS (BTF-55SW) + Steel Bezzle + Wall Bracket. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55" UHD Smart LED TV with Android OS (BTF-55SW) + Steel Bezzle + Wall Bracket.',
        price: 386640,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/5826921/1.jpg?6905',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32" Inches DLED HD TV (A3250)Overvoltage Protection + 1 Year Warranty - Black',
        description:
          'Meet 32" Inches DLED HD TV (A3250)Overvoltage Protection + 1 Year Warranty - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches DLED HD TV (A3250)Overvoltage Protection + 1 Year Warranty - Black.',
        price: 79900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/9215921/1.jpg?0233',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32 Inches FHD LED TV (A5100) - Black +1 Year Warranty',
        description:
          "Meet 32 Inches FHD LED TV (A5100) - Black +1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inches FHD LED TV (A5100) - Black +1 Year Warranty.",
        price: 93333,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/8888501/1.jpg?4081',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '43” Inch Bluetooth UHD ANDROID Smart TV+FREE WALL HANGER',
        description:
          "Meet 43” Inch Bluetooth UHD ANDROID Smart TV+FREE WALL HANGER. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43” Inch Bluetooth UHD ANDROID Smart TV+FREE WALL HANGER.",
        price: 163599,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/5274711/1.jpg?4521',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32 Inches HD Smart TV (A4H Series) - Black',
        description:
          "Meet 32 Inches HD Smart TV (A4H Series) - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inches HD Smart TV (A4H Series) - Black.",
        price: 141900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/9673042/1.jpg?4973',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32" Smart Frameless TV+Netflix,Youtube APP-1 Yr Warranty',
        description:
          'Meet 32" Smart Frameless TV+Netflix,Youtube APP-1 Yr Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Smart Frameless TV+Netflix,Youtube APP-1 Yr Warranty.',
        price: 104780,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/696997/1.jpg?0552',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '43” Inches LED HD TV (43A5100) - Black + 1 Year Warranty',
        description:
          "Meet 43” Inches LED HD TV (43A5100) - Black + 1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43” Inches LED HD TV (43A5100) - Black + 1 Year Warranty.",
        price: 177000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/472358/1.jpg?0910',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32"INCHES SMART ANDROID TV 2 YEARS WARRANTY',
        description:
          'Meet 32"INCHES SMART ANDROID TV 2 YEARS WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32"INCHES SMART ANDROID TV 2 YEARS WARRANTY.',
        price: 99839,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/4400152/1.jpg?6318',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '19" Inches LED TV (19TV)  - Black +1 Year Warranty',
        description:
          'Meet 19" Inches LED TV (19TV)  - Black +1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 19" Inches LED TV (19TV)  - Black +1 Year Warranty.',
        price: 49039,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/4447531/1.jpg?8888',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '43” Inches FRAMELESS Smart TV+Netflix,Youtube +WALL HANGER',
        description:
          "Meet 43” Inches FRAMELESS Smart TV+Netflix,Youtube +WALL HANGER. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43” Inches FRAMELESS Smart TV+Netflix,Youtube +WALL HANGER.",
        price: 169104,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/9154611/1.jpg?7494',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32"INCHES SMART ANDROID TV + Free Wall Hanger',
        description:
          'Meet 32"INCHES SMART ANDROID TV + Free Wall Hanger. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32"INCHES SMART ANDROID TV + Free Wall Hanger.',
        price: 104999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/7679231/1.jpg?3158',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '32”Smart UHD 4K TV+Netflix,Youtube,android Free Gift Inside',
        description:
          "Meet 32”Smart UHD 4K TV+Netflix,Youtube,android Free Gift Inside. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32”Smart UHD 4K TV+Netflix,Youtube,android Free Gift Inside.",
        price: 130990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/7024142/1.jpg?9013',
        quantity: 20,
        categoryId: 2,
      },
      {
        name: '43" Inches  Smart LED TV (Strong And Durable)',
        description:
          'Meet 43" Inches  Smart LED TV (Strong And Durable). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" Inches  Smart LED TV (Strong And Durable).',
        price: 195800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/831437/1.jpg?2888',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 Inch Dmarc HD LED TV',
        description:
          "Meet 32 Inch Dmarc HD LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inch Dmarc HD LED TV.",
        price: 79950,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/848123/1.jpg?6517',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '2020 A 5 Series 32" LED Full HD TV + Free Wall Bracket',
        description:
          'Meet 2020 A 5 Series 32" LED Full HD TV + Free Wall Bracket. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 2020 A 5 Series 32" LED Full HD TV + Free Wall Bracket.',
        price: 113500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/299307/1.jpg?4308',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 Inch HD LED TV',
        description:
          "Meet 32 Inch HD LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inch HD LED TV.",
        price: 140000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/553912/1.jpg?9795',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "50'' Smart UHD 4K TV+ Bluetooth, Netflix, YouTube & DSTV Now APP",
        description:
          "Meet 50'' Smart UHD 4K TV+ Bluetooth, Netflix, YouTube & DSTV Now APP. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50'' Smart UHD 4K TV+ Bluetooth, Netflix, YouTube & DSTV Now APP.",
        price: 327000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/348018/1.jpg?5185',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40" Inch Top Quality HD Led TV (New Model)',
        description:
          'Meet 40" Inch Top Quality HD Led TV (New Model). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40" Inch Top Quality HD Led TV (New Model).',
        price: 140990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/318507/1.jpg?2663',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'UHD TV 65 Inch 4K Display 4K HDR Smart LED TV W/ ThinQ AI',
        description:
          "Meet UHD TV 65 Inch 4K Display 4K HDR Smart LED TV W/ ThinQ AI. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the UHD TV 65 Inch 4K Display 4K HDR Smart LED TV W/ ThinQ AI.",
        price: 563908,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/103758/1.jpg?1994',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "43 Inch LED/LCD HD TV With Free Wall Hanger-43''",
        description:
          "Meet 43 Inch LED/LCD HD TV With Free Wall Hanger-43''. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43 Inch LED/LCD HD TV With Free Wall Hanger-43''.",
        price: 148790,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/416667/1.jpg?3503',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43 Inches Full HD Certified Android LED Smart TV 43S5400',
        description:
          "Meet 43 Inches Full HD Certified Android LED Smart TV 43S5400. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43 Inches Full HD Certified Android LED Smart TV 43S5400.",
        price: 300000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/3655912/1.jpg?6099',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43" Inch Full HD LED TV+wall Hanger',
        description:
          'Meet 43" Inch Full HD LED TV+wall Hanger. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" Inch Full HD LED TV+wall Hanger.',
        price: 140500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/3080781/1.jpg?7545',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55" Inches 4K TV Ultra-HD  LED Smart TV High Quality PROMO',
        description:
          'Meet 55" Inches 4K TV Ultra-HD  LED Smart TV High Quality PROMO. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55" Inches 4K TV Ultra-HD  LED Smart TV High Quality PROMO.',
        price: 272999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/786868/1.jpg?0862',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43inchs UFC Smart LED HD Tv Black New 2022',
        description:
          "Meet 43inchs UFC Smart LED HD Tv Black New 2022. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43inchs UFC Smart LED HD Tv Black New 2022.",
        price: 174900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/275293/1.jpg?7264',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "55''Smart UHD 4K TV+Netflix,Youtube,Prime Video APP",
        description:
          "Meet 55''Smart UHD 4K TV+Netflix,Youtube,Prime Video APP. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55''Smart UHD 4K TV+Netflix,Youtube,Prime Video APP.",
        price: 375000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/162697/1.jpg?2326',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'Tv 32”Amani ClassicView LED Tv Full HD Promo Price',
        description:
          "Meet Tv 32”Amani ClassicView LED Tv Full HD Promo Price. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Tv 32”Amani ClassicView LED Tv Full HD Promo Price.",
        price: 98990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/013758/1.jpg?3339',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "32''INCHES LED FULL HD PROMO PRICE",
        description:
          "Meet 32''INCHES LED FULL HD PROMO PRICE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32''INCHES LED FULL HD PROMO PRICE.",
        price: 84900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/2241431/1.jpg?7344',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "50''Smart UHD 4K TV+Netflix,YouTube,DSTV Now APP,Bluetooth",
        description:
          "Meet 50''Smart UHD 4K TV+Netflix,YouTube,DSTV Now APP,Bluetooth. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50''Smart UHD 4K TV+Netflix,YouTube,DSTV Now APP,Bluetooth.",
        price: 338000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/836957/1.jpg?1023',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40"INCHES FULL HD LED TV + Free Hanger & HDMI Wire-PROMO',
        description:
          'Meet 40"INCHES FULL HD LED TV + Free Hanger & HDMI Wire-PROMO. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40"INCHES FULL HD LED TV + Free Hanger & HDMI Wire-PROMO.',
        price: 119999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/511227/1.jpg?6618',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "32'' FHD LED Digital Flat TV + Free Wall Hanger & HDMI Wire",
        description:
          "Meet 32'' FHD LED Digital Flat TV + Free Wall Hanger & HDMI Wire. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32'' FHD LED Digital Flat TV + Free Wall Hanger & HDMI Wire.",
        price: 85900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/2141901/1.jpg?5570',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43″ Full High Definition LED SMART TV With WiFi - 43A4K',
        description:
          "Meet 43″ Full High Definition LED SMART TV With WiFi - 43A4K. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43″ Full High Definition LED SMART TV With WiFi - 43A4K.",
        price: 227500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/724028/1.jpg?2385',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40" INCHES SMART FULL HD LED TV + FREE WALL HANGER',
        description:
          'Meet 40" INCHES SMART FULL HD LED TV + FREE WALL HANGER. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40" INCHES SMART FULL HD LED TV + FREE WALL HANGER.',
        price: 159499,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/9044821/1.jpg?9064',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 INCHES LED FULL HD TV - FRAMELESS -1YR WARRANTY',
        description:
          "Meet 32 INCHES LED FULL HD TV - FRAMELESS -1YR WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 INCHES LED FULL HD TV - FRAMELESS -1YR WARRANTY.",
        price: 80489,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/7076441/1.jpg?3684',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "70''Smart UHD 4K TV+Netflix,Youtube,Prime Video",
        description:
          "Meet 70''Smart UHD 4K TV+Netflix,Youtube,Prime Video. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 70''Smart UHD 4K TV+Netflix,Youtube,Prime Video.",
        price: 612500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/713968/1.jpg?4227',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55 Inch UHD Slim Flat Smart 4K LED Tv/ Black',
        description:
          "Meet 55 Inch UHD Slim Flat Smart 4K LED Tv/ Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55 Inch UHD Slim Flat Smart 4K LED Tv/ Black.",
        price: 750000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/917534/1.jpg?0087',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32inch Television  With  Quality Picture',
        description:
          "Meet 32inch Television  With  Quality Picture. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32inch Television  With  Quality Picture.",
        price: 84900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/670166/1.jpg?4797',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43 - Inch Super HD LED TV + Surge + HDMI +Wall Hanger',
        description:
          "Meet 43 - Inch Super HD LED TV + Surge + HDMI +Wall Hanger. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43 - Inch Super HD LED TV + Surge + HDMI +Wall Hanger.",
        price: 236000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/9027612/1.jpg?7112',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "65''Smart UHD 4K TV Netflix, Youtube & DSTV APP 2023",
        description:
          "Meet 65''Smart UHD 4K TV Netflix, Youtube & DSTV APP 2023. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65''Smart UHD 4K TV Netflix, Youtube & DSTV APP 2023.",
        price: 509500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/4713132/1.jpg?9703',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43" Inches FHD TV (MI43FZ08A) + 12 Months Warranty - Black',
        description:
          'Meet 43" Inches FHD TV (MI43FZ08A) + 12 Months Warranty - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" Inches FHD TV (MI43FZ08A) + 12 Months Warranty - Black.',
        price: 155900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/2028491/1.jpg?6861',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '19" INCHES FULL HD LED TV + Free Wall Hanger 2 YEARS WARRANTY',
        description:
          'Meet 19" INCHES FULL HD LED TV + Free Wall Hanger 2 YEARS WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 19" INCHES FULL HD LED TV + Free Wall Hanger 2 YEARS WARRANTY.',
        price: 47500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/995667/1.jpg?6179',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "43'' Inch  BLUETOOTH Smart Android  TV-DUAL SCREEN",
        description:
          "Meet 43'' Inch  BLUETOOTH Smart Android  TV-DUAL SCREEN. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43'' Inch  BLUETOOTH Smart Android  TV-DUAL SCREEN.",
        price: 169989,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/728308/1.jpg?6170',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" Inches LED TV',
        description:
          'Meet 32" Inches LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches LED TV.',
        price: 140000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/7635441/1.jpg?1838',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32-Inch  Full HD LED Television + Wall Hanger (2 Years Warranty)',
        description:
          "Meet 32-Inch  Full HD LED Television + Wall Hanger (2 Years Warranty). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32-Inch  Full HD LED Television + Wall Hanger (2 Years Warranty).",
        price: 147998,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/0038381/1.jpg?3452',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32-Inch HD Digital Flat TV+Free Wall Hanger & HDMI Wire',
        description:
          "Meet 32-Inch HD Digital Flat TV+Free Wall Hanger & HDMI Wire. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32-Inch HD Digital Flat TV+Free Wall Hanger & HDMI Wire.",
        price: 99990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/9858401/1.jpg?2326',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "75''Inches Smart UHD 4K TV Netflix, Youtube & 7 Series",
        description:
          "Meet 75''Inches Smart UHD 4K TV Netflix, Youtube & 7 Series. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 75''Inches Smart UHD 4K TV Netflix, Youtube & 7 Series.",
        price: 810500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/6768021/1.jpg?5472',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 Inch LED HD TV & Wall Bracket (1 Year Warranty)',
        description:
          "Meet 32 Inch LED HD TV & Wall Bracket (1 Year Warranty). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inch LED HD TV & Wall Bracket (1 Year Warranty).",
        price: 114000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/4468701/1.jpg?8827',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32inch FULL HD LED Energy With Free LED Strip Lights',
        description:
          "Meet 32inch FULL HD LED Energy With Free LED Strip Lights. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32inch FULL HD LED Energy With Free LED Strip Lights.",
        price: 99990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/073466/1.jpg?7571',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40-Inch  Smart Full HD LED Television (1 Years Warranty)',
        description:
          "Meet 40-Inch  Smart Full HD LED Television (1 Years Warranty). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40-Inch  Smart Full HD LED Television (1 Years Warranty).",
        price: 175500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/7403591/1.jpg?5994',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '19”INCHES FULL HD LED TV NEW 2021',
        description:
          "Meet 19”INCHES FULL HD LED TV NEW 2021. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 19”INCHES FULL HD LED TV NEW 2021.",
        price: 49000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/551285/1.jpg?5643',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50"INCHES SMART 4K TV PROMO PRICE',
        description:
          'Meet 50"INCHES SMART 4K TV PROMO PRICE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50"INCHES SMART 4K TV PROMO PRICE.',
        price: 270500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/7082261/1.jpg?5029',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43" BLUETOOTH SMART ANDROID UHD TV-FRAMELESS + WALL BRACKET',
        description:
          'Meet 43" BLUETOOTH SMART ANDROID UHD TV-FRAMELESS + WALL BRACKET. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" BLUETOOTH SMART ANDROID UHD TV-FRAMELESS + WALL BRACKET.',
        price: 177999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/1189042/1.jpg?9408',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43" 4k SMART ANDROID UHD LED TV + FREE MOUSE',
        description:
          'Meet 43" 4k SMART ANDROID UHD LED TV + FREE MOUSE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" 4k SMART ANDROID UHD LED TV + FREE MOUSE.',
        price: 165000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/8240042/1.jpg?7954',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32"INCHES AMANI FULL HD LED TV 1YEARS WARRANTY PROMO PRICE',
        description:
          'Meet 32"INCHES AMANI FULL HD LED TV 1YEARS WARRANTY PROMO PRICE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32"INCHES AMANI FULL HD LED TV 1YEARS WARRANTY PROMO PRICE.',
        price: 99890,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/910466/1.jpg?2282',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '20"INCH Amani TV FULL HD+FREE HANGER WITH 1 YEAR WARRANTY',
        description:
          'Meet 20"INCH Amani TV FULL HD+FREE HANGER WITH 1 YEAR WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 20"INCH Amani TV FULL HD+FREE HANGER WITH 1 YEAR WARRANTY.',
        price: 52990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/570328/1.jpg?1264',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40"INCHES INFINITY FULL HD LED TV  1 YR WARRANTY PROMO PRICE',
        description:
          'Meet 40"INCHES INFINITY FULL HD LED TV  1 YR WARRANTY PROMO PRICE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40"INCHES INFINITY FULL HD LED TV  1 YR WARRANTY PROMO PRICE.',
        price: 124899,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/4130681/1.jpg?1712',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "55'' 4K UHD Smart  TV+Netflix,YouTube APP & Apple Airplay",
        description:
          "Meet 55'' 4K UHD Smart  TV+Netflix,YouTube APP & Apple Airplay. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55'' 4K UHD Smart  TV+Netflix,YouTube APP & Apple Airplay.",
        price: 446000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/463356/1.jpg?7276',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43" INCH SMART FULL HD LED TV+FREE WALL HANGER',
        description:
          'Meet 43" INCH SMART FULL HD LED TV+FREE WALL HANGER. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" INCH SMART FULL HD LED TV+FREE WALL HANGER.',
        price: 187999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/3902691/1.jpg?7316',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'FULL HD 24-Inch Tv',
        description:
          "Meet FULL HD 24-Inch Tv. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the FULL HD 24-Inch Tv.",
        price: 75000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/9632601/1.jpg?9545',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" INCHES FULL HD LED TV - NEW',
        description:
          'Meet 32" INCHES FULL HD LED TV - NEW. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" INCHES FULL HD LED TV - NEW.',
        price: 85000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/0730681/1.jpg?3123',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" LETV Full HD LED TV New Arival 2022',
        description:
          'Meet 32" LETV Full HD LED TV New Arival 2022. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" LETV Full HD LED TV New Arival 2022.',
        price: 74500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/6059001/1.jpg?9728',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43”Inch LED TV- Black With Free Wall Bracket + 12 Months Warranty',
        description:
          "Meet 43”Inch LED TV- Black With Free Wall Bracket + 12 Months Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43”Inch LED TV- Black With Free Wall Bracket + 12 Months Warranty.",
        price: 157990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/968018/1.jpg?6105',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "43'' Bluetooth Smart Android  TV- Dual Screen + WALL HANGER",
        description:
          "Meet 43'' Bluetooth Smart Android  TV- Dual Screen + WALL HANGER. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43'' Bluetooth Smart Android  TV- Dual Screen + WALL HANGER.",
        price: 169900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/151389/1.jpg?8220',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" INCH SMART CURVED LED TV +fFree Wall Bracket',
        description:
          'Meet 32" INCH SMART CURVED LED TV +fFree Wall Bracket. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" INCH SMART CURVED LED TV +fFree Wall Bracket.',
        price: 113900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/4041931/1.jpg?3224',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '86" Super UHD 4K Smart Satellite AI TV + Magic Remote With 2 Years Warranty - 86UM7580',
        description:
          'Meet 86" Super UHD 4K Smart Satellite AI TV + Magic Remote With 2 Years Warranty - 86UM7580. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 86" Super UHD 4K Smart Satellite AI TV + Magic Remote With 2 Years Warranty - 86UM7580.',
        price: 1550000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/167254/2.jpg?1365',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "65''UHD AI Thinq,4 K,Smart, Built In Satellite Receiver,Magic Remote,1 AV,3HDMI.2USB.",
        description:
          "Meet 65''UHD AI Thinq,4 K,Smart, Built In Satellite Receiver,Magic Remote,1 AV,3HDMI.2USB.. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65''UHD AI Thinq,4 K,Smart, Built In Satellite Receiver,Magic Remote,1 AV,3HDMI.2USB..",
        price: 702900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/982137/1.jpg?1698',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "55'' Inch 4K UHD Smart TV ( PROMO PRICE )",
        description:
          "Meet 55'' Inch 4K UHD Smart TV ( PROMO PRICE ). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55'' Inch 4K UHD Smart TV ( PROMO PRICE ).",
        price: 299000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/6306581/1.jpg?2421',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '65 Inch UHD HDR+ Smart 4K TV',
        description:
          "Meet 65 Inch UHD HDR+ Smart 4K TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65 Inch UHD HDR+ Smart 4K TV.",
        price: 567930,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/603758/1.jpg?2609',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '19”INCHES FULL HD LED VISION TV WITH ONE YEAR WARRANTY',
        description:
          "Meet 19”INCHES FULL HD LED VISION TV WITH ONE YEAR WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 19”INCHES FULL HD LED VISION TV WITH ONE YEAR WARRANTY.",
        price: 59990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/175667/1.jpg?6142',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "43''SMART ANDRIOD FULL HD TV",
        description:
          "Meet 43''SMART ANDRIOD FULL HD TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43''SMART ANDRIOD FULL HD TV.",
        price: 249900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/011434/1.jpg?6677',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '65" 4K SMART TV',
        description:
          'Meet 65" 4K SMART TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65" 4K SMART TV.',
        price: 508160,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/484834/1.jpg?2148',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "32'' Full HD LED TV + Free Wall Bracket & HDMI Wire",
        description:
          "Meet 32'' Full HD LED TV + Free Wall Bracket & HDMI Wire. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32'' Full HD LED TV + Free Wall Bracket & HDMI Wire.",
        price: 85900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/4170121/1.jpg?4428',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43"Inch Full HD LED Television- Black-A',
        description:
          'Meet 43"Inch Full HD LED Television- Black-A. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43"Inch Full HD LED Television- Black-A.',
        price: 167490,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/968018/1.jpg?8846',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40"inches Amani FULL HD Digital LED Promo Price1YearWarranty',
        description:
          'Meet 40"inches Amani FULL HD Digital LED Promo Price1YearWarranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40"inches Amani FULL HD Digital LED Promo Price1YearWarranty.',
        price: 148990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/684436/1.jpg?6473',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "32''Smart TV + Netflix&Youtube APP 12 Months Warranty-32B6000",
        description:
          "Meet 32''Smart TV + Netflix&Youtube APP 12 Months Warranty-32B6000. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32''Smart TV + Netflix&Youtube APP 12 Months Warranty-32B6000.",
        price: 169999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/038785/1.jpg?8727',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 Inch FHD LED TV With Free Wall Bracket 2022 Model',
        description:
          "Meet 32 Inch FHD LED TV With Free Wall Bracket 2022 Model. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inch FHD LED TV With Free Wall Bracket 2022 Model.",
        price: 123500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/0625802/1.jpg?4486',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40"INCHES LED HD TV + Hanger & HDMI Wire-PROMO',
        description:
          'Meet 40"INCHES LED HD TV + Hanger & HDMI Wire-PROMO. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40"INCHES LED HD TV + Hanger & HDMI Wire-PROMO.',
        price: 145400,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/7660852/1.jpg?0356',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32-Inch HD Digital Flat TV + Free Wall Hanger & HDMI Wire',
        description:
          "Meet 32-Inch HD Digital Flat TV + Free Wall Hanger & HDMI Wire. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32-Inch HD Digital Flat TV + Free Wall Hanger & HDMI Wire.",
        price: 96990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/2952521/1.jpg?2523',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40” Smart Frameless TV+Netflix,Youtube APP',
        description:
          "Meet 40” Smart Frameless TV+Netflix,Youtube APP. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40” Smart Frameless TV+Netflix,Youtube APP.",
        price: 195000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/7049821/1.jpg?7080',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "70''Smart Ai UHD 4K Satellite TV+Netflix,Youtube,Apple Airplay,Magic Remote & 2 Years Warranty",
        description:
          "Meet 70''Smart Ai UHD 4K Satellite TV+Netflix,Youtube,Apple Airplay,Magic Remote & 2 Years Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 70''Smart Ai UHD 4K Satellite TV+Netflix,Youtube,Apple Airplay,Magic Remote & 2 Years Warranty.",
        price: 891000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/006148/1.jpg?7567',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32″ HD LED TV- BLACK WITH 12 MONTHS WARRANTY',
        description:
          "Meet 32″ HD LED TV- BLACK WITH 12 MONTHS WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32″ HD LED TV- BLACK WITH 12 MONTHS WARRANTY.",
        price: 114995,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/985936/1.jpg?5607',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32inch Super HD LED TV  Letv',
        description:
          "Meet 32inch Super HD LED TV  Letv. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32inch Super HD LED TV  Letv.",
        price: 86500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/4448601/1.jpg?4064',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55” Flat Smart 4K UHD TV.',
        description:
          "Meet 55” Flat Smart 4K UHD TV.. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55” Flat Smart 4K UHD TV..",
        price: 567000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/714966/1.jpg?4987',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32”High Quality Smart Android TV With 1year Warranty',
        description:
          "Meet 32”High Quality Smart Android TV With 1year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32”High Quality Smart Android TV With 1year Warranty.",
        price: 120990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/824858/1.jpg?7008',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "43'' Inch Smart TV With Satellite Receiver",
        description:
          "Meet 43'' Inch Smart TV With Satellite Receiver. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43'' Inch Smart TV With Satellite Receiver.",
        price: 334999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/716926/1.jpg?1880',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55"INCHES AMANI TV ANDROID-SMART 4K FULL HD TV WITH WI-FI',
        description:
          'Meet 55"INCHES AMANI TV ANDROID-SMART 4K FULL HD TV WITH WI-FI. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55"INCHES AMANI TV ANDROID-SMART 4K FULL HD TV WITH WI-FI.',
        price: 267390,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/2254011/1.jpg?3429',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32-Inches Smart Curved TV With Netflix (1year Warranty)',
        description:
          "Meet 32-Inches Smart Curved TV With Netflix (1year Warranty). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32-Inches Smart Curved TV With Netflix (1year Warranty).",
        price: 113700,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/050408/1.jpg?9289',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32-Inch HD TV- Black With 12 Months Warranty',
        description:
          "Meet 32-Inch HD TV- Black With 12 Months Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32-Inch HD TV- Black With 12 Months Warranty.",
        price: 118999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/636834/1.jpg?9228',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" Full HD LED TV',
        description:
          'Meet 32" Full HD LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Full HD LED TV.',
        price: 119500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/0120121/1.jpg?0503',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '65" Andriod Smart 4K TV + Free Wall Bracket 2022 Model',
        description:
          'Meet 65" Andriod Smart 4K TV + Free Wall Bracket 2022 Model. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65" Andriod Smart 4K TV + Free Wall Bracket 2022 Model.',
        price: 500000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/193246/1.jpg?9362',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" Inches FHD TV (MI32D02A) + 12 Months Warranty - Black',
        description:
          'Meet 32" Inches FHD TV (MI32D02A) + 12 Months Warranty - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches FHD TV (MI32D02A) + 12 Months Warranty - Black.',
        price: 88000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0838491/1.jpg?1866',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55" Inches Andriod Smart Full HD LED TV + USB + HDMI',
        description:
          'Meet 55" Inches Andriod Smart Full HD LED TV + USB + HDMI. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55" Inches Andriod Smart Full HD LED TV + USB + HDMI.',
        price: 272999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/098017/1.jpg?4323',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40 INCH SMART CURVED LED TV + Free Wall Bracket 2021 MODEL-',
        description:
          "Meet 40 INCH SMART CURVED LED TV + Free Wall Bracket 2021 MODEL-. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40 INCH SMART CURVED LED TV + Free Wall Bracket 2021 MODEL-.",
        price: 150000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/651828/1.jpg?5212',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32Inch  Andriod Certified HDR LED Smart TV',
        description:
          "Meet 32Inch  Andriod Certified HDR LED Smart TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32Inch  Andriod Certified HDR LED Smart TV.",
        price: 220000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/9434622/1.jpg?4972',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "43''UHD AI THINQ,,SMART,Television Satelite Receiver Remote,1 AV,3HDMI,DIVEX.2USB.2022 MODEL",
        description:
          "Meet 43''UHD AI THINQ,,SMART,Television Satelite Receiver Remote,1 AV,3HDMI,DIVEX.2USB.2022 MODEL. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43''UHD AI THINQ,,SMART,Television Satelite Receiver Remote,1 AV,3HDMI,DIVEX.2USB.2022 MODEL.",
        price: 330000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/9336821/1.jpg?7808',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40inch Super HD CLASSIC LED TV + Wall Bracket',
        description:
          "Meet 40inch Super HD CLASSIC LED TV + Wall Bracket. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40inch Super HD CLASSIC LED TV + Wall Bracket.",
        price: 125989,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/202118/1.jpg?3658',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43"INCHES FULL HD LED TV AMANI NEW 2022',
        description:
          'Meet 43"INCHES FULL HD LED TV AMANI NEW 2022. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43"INCHES FULL HD LED TV AMANI NEW 2022.',
        price: 140900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/5072812/1.jpg?0399',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "55'' 4K UHD Smart TV+Netflix,YouTube APP",
        description:
          "Meet 55'' 4K UHD Smart TV+Netflix,YouTube APP. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55'' 4K UHD Smart TV+Netflix,YouTube APP.",
        price: 449000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/288407/1.jpg?0670',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '65"INCHES 4k UHD ANDROID SMART LED TV 4K NEW ARRIVAL',
        description:
          'Meet 65"INCHES 4k UHD ANDROID SMART LED TV 4K NEW ARRIVAL. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65"INCHES 4k UHD ANDROID SMART LED TV 4K NEW ARRIVAL.',
        price: 561409,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/993689/1.jpg?7051',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40" Inches LED/LCD PROMO PRICE WITH TWO YEARS Warranty',
        description:
          'Meet 40" Inches LED/LCD PROMO PRICE WITH TWO YEARS Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40" Inches LED/LCD PROMO PRICE WITH TWO YEARS Warranty.',
        price: 145990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/511576/1.jpg?4395',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '65" Inch 4K UHD AI Thin Q Smart  Satellite LED TV',
        description:
          'Meet 65" Inch 4K UHD AI Thin Q Smart  Satellite LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65" Inch 4K UHD AI Thin Q Smart  Satellite LED TV.',
        price: 629000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/441855/1.jpg?4241',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 Inch HD Smart LED TV',
        description:
          "Meet 32 Inch HD Smart LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inch HD Smart LED TV.",
        price: 320000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/404154/1.jpg?6681',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "55'' 4K UHD Smart TV Netflix +Free Wall Bracket-55A6K",
        description:
          "Meet 55'' 4K UHD Smart TV Netflix +Free Wall Bracket-55A6K. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55'' 4K UHD Smart TV Netflix +Free Wall Bracket-55A6K.",
        price: 372500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/7303401/1.jpg?5907',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32”INCHE LED ENERGY TV WITH 1YEAR Warranty Promo Price',
        description:
          "Meet 32”INCHE LED ENERGY TV WITH 1YEAR Warranty Promo Price. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32”INCHE LED ENERGY TV WITH 1YEAR Warranty Promo Price.",
        price: 96890,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/064837/1.jpg?0503',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40"INCHES FULL HD LED TV WITH 1 YEAR WARRANTY AT PROMO PRICE',
        description:
          'Meet 40"INCHES FULL HD LED TV WITH 1 YEAR WARRANTY AT PROMO PRICE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40"INCHES FULL HD LED TV WITH 1 YEAR WARRANTY AT PROMO PRICE.',
        price: 145990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/2261342/1.jpg?2293',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55-Inch 4k UHD Android Smart TV',
        description:
          "Meet 55-Inch 4k UHD Android Smart TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55-Inch 4k UHD Android Smart TV.",
        price: 299990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/970328/1.jpg?1153',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43"SMART FULL HD LED TV +FREE WALL HANGER@promo Price',
        description:
          'Meet 43"SMART FULL HD LED TV +FREE WALL HANGER@promo Price. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43"SMART FULL HD LED TV +FREE WALL HANGER@promo Price.',
        price: 187900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/769759/1.jpg?4890',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50" Inches Smart UHD 4K TV + 12 Months Warranty',
        description:
          'Meet 50" Inches Smart UHD 4K TV + 12 Months Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50" Inches Smart UHD 4K TV + 12 Months Warranty.',
        price: 363000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/444834/1.jpg?1193',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55"INCHES FULL HD SMART TV AMANI NEW 2020',
        description:
          'Meet 55"INCHES FULL HD SMART TV AMANI NEW 2020. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55"INCHES FULL HD SMART TV AMANI NEW 2020.',
        price: 298809,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/340476/1.jpg?6143',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55” 4K UHD Smart Satellite TV',
        description:
          "Meet 55” 4K UHD Smart Satellite TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55” 4K UHD Smart Satellite TV.",
        price: 456000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/622026/1.jpg?8680',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55 Inch UHD 4K Ultra Slim Flat Smart TV + Wall Hanger',
        description:
          "Meet 55 Inch UHD 4K Ultra Slim Flat Smart TV + Wall Hanger. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55 Inch UHD 4K Ultra Slim Flat Smart TV + Wall Hanger.",
        price: 690000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/9628121/1.jpg?1033',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" INCH SMART CURVED LED TV',
        description:
          'Meet 32" INCH SMART CURVED LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" INCH SMART CURVED LED TV.',
        price: 115000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/668018/1.jpg?0521',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "55''Smart Crystal UHD 4K TV-Netflix,Youtube,Apple Airplay",
        description:
          "Meet 55''Smart Crystal UHD 4K TV-Netflix,Youtube,Apple Airplay. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55''Smart Crystal UHD 4K TV-Netflix,Youtube,Apple Airplay.",
        price: 590000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/982137/1.jpg?1469',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40" Inches Polystar Smart Tv (Strong And Durable)',
        description:
          'Meet 40" Inches Polystar Smart Tv (Strong And Durable). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40" Inches Polystar Smart Tv (Strong And Durable).',
        price: 180000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/696593/1.jpg?6366',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43” Smart Frameless Vision 4k Smart TV+Netflix,Youtube APP@free Gift Inside',
        description:
          "Meet 43” Smart Frameless Vision 4k Smart TV+Netflix,Youtube APP@free Gift Inside. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43” Smart Frameless Vision 4k Smart TV+Netflix,Youtube APP@free Gift Inside.",
        price: 189390,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/0304242/1.jpg?9945',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "50''Smart UHD 4K TV+Netflix,Youtube& Bluetooth",
        description:
          "Meet 50''Smart UHD 4K TV+Netflix,Youtube& Bluetooth. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50''Smart UHD 4K TV+Netflix,Youtube& Bluetooth.",
        price: 337700,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/297344/1.jpg?9766',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" Inches FULL HD TV@a Promo Price',
        description:
          'Meet 32" Inches FULL HD TV@a Promo Price. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches FULL HD TV@a Promo Price.',
        price: 69987,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/3300431/1.jpg?9429',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40 Andriod Smart  INCHES FULL HD LED TV +FREE WALL BRACKET',
        description:
          "Meet 40 Andriod Smart  INCHES FULL HD LED TV +FREE WALL BRACKET. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40 Andriod Smart  INCHES FULL HD LED TV +FREE WALL BRACKET.",
        price: 175000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/452417/1.jpg?8580',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '24 Inches Full HD LED Television',
        description:
          "Meet 24 Inches Full HD LED Television. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 24 Inches Full HD LED Television.",
        price: 75000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/2022521/1.jpg?0789',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" Inches Full HD TV With Overvoltage Protection Inside',
        description:
          'Meet 32" Inches Full HD TV With Overvoltage Protection Inside. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches Full HD TV With Overvoltage Protection Inside.',
        price: 96889,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/0162521/1.jpg?0051',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43” Bluetooth 4k UHD ANDROID Smart TV+FREE WALL BRACKET',
        description:
          "Meet 43” Bluetooth 4k UHD ANDROID Smart TV+FREE WALL BRACKET. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43” Bluetooth 4k UHD ANDROID Smart TV+FREE WALL BRACKET.",
        price: 169900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/1849611/1.jpg?2731',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" Inches Full HD Smart Android TV Energy',
        description:
          'Meet 32" Inches Full HD Smart Android TV Energy. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches Full HD Smart Android TV Energy.',
        price: 123490,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/6018052/1.jpg?8439',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '58 INCH SMART  4K UHD LED TV +Youtube+Netflix',
        description:
          "Meet 58 INCH SMART  4K UHD LED TV +Youtube+Netflix. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 58 INCH SMART  4K UHD LED TV +Youtube+Netflix.",
        price: 405500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/0633651/1.jpg?6402',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43" Google Android FHD Smart TV',
        description:
          'Meet 43" Google Android FHD Smart TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" Google Android FHD Smart TV.',
        price: 245800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/919048/1.jpg?7079',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40"Inch Full HD LED Television- Black-A',
        description:
          'Meet 40"Inch Full HD LED Television- Black-A. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40"Inch Full HD LED Television- Black-A.',
        price: 145391,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/208507/1.jpg?1407',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40 Inch LED Television + 4k Gaming',
        description:
          "Meet 40 Inch LED Television + 4k Gaming. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40 Inch LED Television + 4k Gaming.",
        price: 120000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/9115302/1.jpg?5070',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55 INCH SMART LED TV FULL HD ULTRA SLIM + FREE WALL BRACKET',
        description:
          "Meet 55 INCH SMART LED TV FULL HD ULTRA SLIM + FREE WALL BRACKET. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55 INCH SMART LED TV FULL HD ULTRA SLIM + FREE WALL BRACKET.",
        price: 299799,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/537218/1.jpg?0844',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50" UHD 4K Smart  HDR WebOS Smart AI ThinQ TV + Magic Remote',
        description:
          'Meet 50" UHD 4K Smart  HDR WebOS Smart AI ThinQ TV + Magic Remote. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50" UHD 4K Smart  HDR WebOS Smart AI ThinQ TV + Magic Remote.',
        price: 390000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/46/9605801/1.jpg?0428',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "70''Ai Smart UHD 4K Satellite TV+Netflix,Youtube,AppleAiplay",
        description:
          "Meet 70''Ai Smart UHD 4K Satellite TV+Netflix,Youtube,AppleAiplay. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 70''Ai Smart UHD 4K Satellite TV+Netflix,Youtube,AppleAiplay.",
        price: 891999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/254248/1.jpg?1215',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40 Inches Full HD LED',
        description:
          "Meet 40 Inches Full HD LED. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40 Inches Full HD LED.",
        price: 157990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/534079/1.jpg?0532',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43 Inch Smart FHD LED Television 2022 New',
        description:
          "Meet 43 Inch Smart FHD LED Television 2022 New. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43 Inch Smart FHD LED Television 2022 New.",
        price: 174990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/237665/1.jpg?6592',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55" 4k UHD ANDROID LED TV+FREE WALL BRACKET-R',
        description:
          'Meet 55" 4k UHD ANDROID LED TV+FREE WALL BRACKET-R. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55" 4k UHD ANDROID LED TV+FREE WALL BRACKET-R.',
        price: 299490,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/964507/1.jpg?5655',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43"SMART FULL UHDandroidTV+FREE Giftinside Energy@promoPrice',
        description:
          'Meet 43"SMART FULL UHDandroidTV+FREE Giftinside Energy@promoPrice. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43"SMART FULL UHDandroidTV+FREE Giftinside Energy@promoPrice.',
        price: 187378,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/5712142/1.jpg?6343',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40 Inch Full HD LED TV + Free Wall Bracket -',
        description:
          "Meet 40 Inch Full HD LED TV + Free Wall Bracket -. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40 Inch Full HD LED TV + Free Wall Bracket -.",
        price: 169850,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/297608/1.jpg?1072',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32"INCHES FULL HD LED TV SAMSONIC',
        description:
          'Meet 32"INCHES FULL HD LED TV SAMSONIC. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32"INCHES FULL HD LED TV SAMSONIC.',
        price: 85900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/6373031/1.jpg?7995',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40"INCHES AMANI TV LED FULL HD',
        description:
          'Meet 40"INCHES AMANI TV LED FULL HD. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40"INCHES AMANI TV LED FULL HD.',
        price: 145990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/445738/1.jpg?1337',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '65" Inches Smart Satellite UHD 4K TV + Wall Bracket',
        description:
          'Meet 65" Inches Smart Satellite UHD 4K TV + Wall Bracket. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65" Inches Smart Satellite UHD 4K TV + Wall Bracket.',
        price: 521900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/1305352/1.jpg?1457',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50 Inches Android Smart 4K UHD TV Wifi, Netflix / Youtube 50D2010',
        description:
          "Meet 50 Inches Android Smart 4K UHD TV Wifi, Netflix / Youtube 50D2010. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50 Inches Android Smart 4K UHD TV Wifi, Netflix / Youtube 50D2010.",
        price: 289500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/741077/1.jpg?0591',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40"INCHES FULL HD LED TV AMANI On A Promo Price',
        description:
          'Meet 40"INCHES FULL HD LED TV AMANI On A Promo Price. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40"INCHES FULL HD LED TV AMANI On A Promo Price.',
        price: 155490,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/584077/1.jpg?6209',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40"INCHES FULL HD LED TV NEW 2021 WITH 2YEAR WARRANTY',
        description:
          'Meet 40"INCHES FULL HD LED TV NEW 2021 WITH 2YEAR WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40"INCHES FULL HD LED TV NEW 2021 WITH 2YEAR WARRANTY.',
        price: 138500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/7749001/1.jpg?5155',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "24 Inches Full HD/LED TV - 24''",
        description:
          "Meet 24 Inches Full HD/LED TV - 24''. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 24 Inches Full HD/LED TV - 24''.",
        price: 75000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/367289/1.jpg?6791',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43" Smart 4K UHD TV, Built In Satellite Receiver- 43 UQ7000',
        description:
          'Meet 43" Smart 4K UHD TV, Built In Satellite Receiver- 43 UQ7000. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" Smart 4K UHD TV, Built In Satellite Receiver- 43 UQ7000.',
        price: 344999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/597667/1.jpg?9024',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50 Inch UHD Ultra Slim HDR+ Smart 4K TV',
        description:
          "Meet 50 Inch UHD Ultra Slim HDR+ Smart 4K TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50 Inch UHD Ultra Slim HDR+ Smart 4K TV.",
        price: 650000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/354858/1.jpg?8430',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "32'' LED Full HD Tv + & Dual Screen Advantage-Promo",
        description:
          "Meet 32'' LED Full HD Tv + & Dual Screen Advantage-Promo. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32'' LED Full HD Tv + & Dual Screen Advantage-Promo.",
        price: 69700,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/5136941/1.jpg?4192',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "55''Smart LED FHD TV ANDROID FHD",
        description:
          "Meet 55''Smart LED FHD TV ANDROID FHD. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55''Smart LED FHD TV ANDROID FHD.",
        price: 272999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/483585/1.jpg?2619',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "32'' Inch  Smart Android  TV",
        description:
          "Meet 32'' Inch  Smart Android  TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32'' Inch  Smart Android  TV.",
        price: 110300,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/9802691/1.jpg?5012',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "FULL HD Smart 40'' Polystar Tv +free Tv Guard",
        description:
          "Meet FULL HD Smart 40'' Polystar Tv +free Tv Guard. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the FULL HD Smart 40'' Polystar Tv +free Tv Guard.",
        price: 165000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/289382/1.jpg?3262',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "43''4K UHD Smart TV+Netflix,Youtube,Magic Remote",
        description:
          "Meet 43''4K UHD Smart TV+Netflix,Youtube,Magic Remote. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43''4K UHD Smart TV+Netflix,Youtube,Magic Remote.",
        price: 185990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/013758/1.jpg?8651',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32inch Super HD LED TV + 1 Year Warranty',
        description:
          "Meet 32inch Super HD LED TV + 1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32inch Super HD LED TV + 1 Year Warranty.",
        price: 79995,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/481938/1.jpg?3936',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32″ FULL High Definition 1080p SMART LED TV With Satellite',
        description:
          "Meet 32″ FULL High Definition 1080p SMART LED TV With Satellite. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32″ FULL High Definition 1080p SMART LED TV With Satellite.",
        price: 215850,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/066316/1.jpg?0007',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" DLED HD TV',
        description:
          'Meet 32" DLED HD TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" DLED HD TV.',
        price: 120000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/651877/1.jpg?5098',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "55''Smart UHD 4K TV+DSTV Now APP",
        description:
          "Meet 55''Smart UHD 4K TV+DSTV Now APP. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55''Smart UHD 4K TV+DSTV Now APP.",
        price: 395000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/811607/1.jpg?8386',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50"INCHE SMART ANDROID FULL HD/LED PROMO PRICE1YEAR WARRANTY',
        description:
          'Meet 50"INCHE SMART ANDROID FULL HD/LED PROMO PRICE1YEAR WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50"INCHE SMART ANDROID FULL HD/LED PROMO PRICE1YEAR WARRANTY.',
        price: 268900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/3902691/1.jpg?7337',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'Package Unit Floor Standing Air Conditioner FS 2HP',
        description:
          "Meet Package Unit Floor Standing Air Conditioner FS 2HP. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Package Unit Floor Standing Air Conditioner FS 2HP.",
        price: 659000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/841391/1.jpg?2095',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32″ HD LED TV 32BLACK WITH 12 MONTHS WARRANTY',
        description:
          "Meet 32″ HD LED TV 32BLACK WITH 12 MONTHS WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32″ HD LED TV 32BLACK WITH 12 MONTHS WARRANTY.",
        price: 115999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/636834/1.jpg?7826',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'UHD NanoTV 65" Inch, Cinema Screen Design 4K HDR WebOS Smart Satellite AI ThinQ Local Dimming, Magic Remote',
        description:
          'Meet UHD NanoTV 65" Inch, Cinema Screen Design 4K HDR WebOS Smart Satellite AI ThinQ Local Dimming, Magic Remote. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the UHD NanoTV 65" Inch, Cinema Screen Design 4K HDR WebOS Smart Satellite AI ThinQ Local Dimming, Magic Remote.',
        price: 900999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6373821/1.jpg?1847',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '24 INCH LED TELEVISION',
        description:
          "Meet 24 INCH LED TELEVISION. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 24 INCH LED TELEVISION.",
        price: 93999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/123196/1.jpg?4044',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "75'' SMART SUPER UHD 4K SATELLITE TV+Magic Remote-With 2 Years Warranty",
        description:
          "Meet 75'' SMART SUPER UHD 4K SATELLITE TV+Magic Remote-With 2 Years Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 75'' SMART SUPER UHD 4K SATELLITE TV+Magic Remote-With 2 Years Warranty.",
        price: 1116750,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/046606/1.jpg?2212',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" Inches Amani LED TV',
        description:
          'Meet 32" Inches Amani LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches Amani LED TV.',
        price: 85900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/4766031/1.jpg?7191',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40 Inch LED Full HD Ultra Slim Smart TV',
        description:
          "Meet 40 Inch LED Full HD Ultra Slim Smart TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40 Inch LED Full HD Ultra Slim Smart TV.",
        price: 400000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/462137/1.jpg?1190',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40"GAMING TV+ 2 YEARS WARRANTY AT PROMO PRICE',
        description:
          'Meet 40"GAMING TV+ 2 YEARS WARRANTY AT PROMO PRICE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40"GAMING TV+ 2 YEARS WARRANTY AT PROMO PRICE.',
        price: 120000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/9212121/1.jpg?9116',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55" Inch SMART UHD 4K TV + Free Wall Hanger',
        description:
          'Meet 55" Inch SMART UHD 4K TV + Free Wall Hanger. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55" Inch SMART UHD 4K TV + Free Wall Hanger.',
        price: 299999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/9128002/1.jpg?5481',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "40'' Inch Full HD Smart TV + 1 Year Warranty",
        description:
          "Meet 40'' Inch Full HD Smart TV + 1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40'' Inch Full HD Smart TV + 1 Year Warranty.",
        price: 201000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/202836/1.jpg?5803',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 Inch Full HD Television 2020',
        description:
          "Meet 32 Inch Full HD Television 2020. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inch Full HD Television 2020.",
        price: 85000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/083585/1.jpg?1838',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43-Inch LED HD TV + 12 Months Warranty',
        description:
          "Meet 43-Inch LED HD TV + 12 Months Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43-Inch LED HD TV + 12 Months Warranty.",
        price: 158990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/569118/1.jpg?1985',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" Full HD Frameless TV + Free Wall Hanger - 1YR WARRANTY',
        description:
          'Meet 32" Full HD Frameless TV + Free Wall Hanger - 1YR WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Full HD Frameless TV + Free Wall Hanger - 1YR WARRANTY.',
        price: 100000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/2199781/1.jpg?7748',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55" SMART UHD - With Free Wall Bracket',
        description:
          'Meet 55" SMART UHD - With Free Wall Bracket. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55" SMART UHD - With Free Wall Bracket.',
        price: 394999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/499734/1.jpg?7939',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40" INCHES FULL HD LED TV-A',
        description:
          'Meet 40" INCHES FULL HD LED TV-A. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40" INCHES FULL HD LED TV-A.',
        price: 145490,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/208507/1.jpg?1407',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43-Inch Smart TV Polystar',
        description:
          "Meet 43-Inch Smart TV Polystar. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43-Inch Smart TV Polystar.",
        price: 189999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/988127/1.jpg?3058',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 INCHES FULL HD LED TV + WALL BRACKET + SURGE',
        description:
          "Meet 32 INCHES FULL HD LED TV + WALL BRACKET + SURGE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 INCHES FULL HD LED TV + WALL BRACKET + SURGE.",
        price: 100690,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/285374/1.jpg?4138',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43”4k UHD ANDROID LED TV+FREE WALL BRACKET-R',
        description:
          "Meet 43”4k UHD ANDROID LED TV+FREE WALL BRACKET-R. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43”4k UHD ANDROID LED TV+FREE WALL BRACKET-R.",
        price: 187899,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/860098/1.jpg?8946',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43" SMART FULL HD LED TV +FREE WALL HANGER+ 1 YR WARRANTY',
        description:
          'Meet 43" SMART FULL HD LED TV +FREE WALL HANGER+ 1 YR WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" SMART FULL HD LED TV +FREE WALL HANGER+ 1 YR WARRANTY.',
        price: 177999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/253479/1.jpg?4061',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'Series 19” Inches Great Quality Amani Series  LED TV',
        description:
          "Meet Series 19” Inches Great Quality Amani Series  LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Series 19” Inches Great Quality Amani Series  LED TV.",
        price: 58678,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/960476/1.jpg?2024',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43 Inch Smart FHD LED Television@022 New',
        description:
          "Meet 43 Inch Smart FHD LED Television@022 New. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43 Inch Smart FHD LED Television@022 New.",
        price: 174900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/765244/1.jpg?6562',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 INCHES LED TV ,Free Bracket',
        description:
          "Meet 32 INCHES LED TV ,Free Bracket. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 INCHES LED TV ,Free Bracket.",
        price: 120999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/295916/1.jpg?7661',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "55'' Smart UHD 4K TV+ Bluetooth, Netflix, YouTube & DSTV Now APP",
        description:
          "Meet 55'' Smart UHD 4K TV+ Bluetooth, Netflix, YouTube & DSTV Now APP. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55'' Smart UHD 4K TV+ Bluetooth, Netflix, YouTube & DSTV Now APP.",
        price: 375000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/334077/1.jpg?0704',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43" SMART & HD TV + Free Wall Bracket',
        description:
          'Meet 43" SMART & HD TV + Free Wall Bracket. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" SMART & HD TV + Free Wall Bracket.',
        price: 226000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/956443/1.jpg?5485',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "65''Premium ULED Smart 4K TV-65U7H",
        description:
          "Meet 65''Premium ULED Smart 4K TV-65U7H. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65''Premium ULED Smart 4K TV-65U7H.",
        price: 740000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/4225142/1.jpg?7692',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '20”INCHE Energy Tv FULL HD LED/LCD,@PROMO PRICE',
        description:
          "Meet 20”INCHE Energy Tv FULL HD LED/LCD,@PROMO PRICE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 20”INCHE Energy Tv FULL HD LED/LCD,@PROMO PRICE.",
        price: 56910,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/910466/1.jpg?6375',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40inch FULL HD LED/LCD  TV',
        description:
          "Meet 40inch FULL HD LED/LCD  TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40inch FULL HD LED/LCD  TV.",
        price: 156990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/863466/1.jpg?0846',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32”INCHE LED TV Free HDMI Cable1year Warranty On Promo Price',
        description:
          "Meet 32”INCHE LED TV Free HDMI Cable1year Warranty On Promo Price. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32”INCHE LED TV Free HDMI Cable1year Warranty On Promo Price.",
        price: 99990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/284137/1.jpg?7263',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40-Inch LED TV- Black With Free Wall Bracket + 12 Months Warranty',
        description:
          "Meet 40-Inch LED TV- Black With Free Wall Bracket + 12 Months Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40-Inch LED TV- Black With Free Wall Bracket + 12 Months Warranty.",
        price: 145390,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/110407/1.jpg?4903',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43" 4k SMART UHD LED TV + FREE WALL HANGER',
        description:
          'Meet 43" 4k SMART UHD LED TV + FREE WALL HANGER. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" 4k SMART UHD LED TV + FREE WALL HANGER.',
        price: 189799,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/045719/1.jpg?3044',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55 Inch Certified Ultra Slim HDR Smart UHD 4K TV',
        description:
          "Meet 55 Inch Certified Ultra Slim HDR Smart UHD 4K TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55 Inch Certified Ultra Slim HDR Smart UHD 4K TV.",
        price: 560000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/8960601/1.jpg?3587',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "55''Smart UHD 4K TV-Black",
        description:
          "Meet 55''Smart UHD 4K TV-Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55''Smart UHD 4K TV-Black.",
        price: 375000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/824838/1.jpg?0640',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '19”INCHES FULL HD LED TV Side Speaker',
        description:
          "Meet 19”INCHES FULL HD LED TV Side Speaker. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 19”INCHES FULL HD LED TV Side Speaker.",
        price: 48000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/551285/1.jpg?3340',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32”INCHE LED HD TV',
        description:
          "Meet 32”INCHE LED HD TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32”INCHE LED HD TV.",
        price: 98490,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/360706/1.jpg?7125',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 Inches Full HD LED TV With Hanger And Surge',
        description:
          "Meet 32 Inches Full HD LED TV With Hanger And Surge. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inches Full HD LED TV With Hanger And Surge.",
        price: 83000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/2324501/1.jpg?1877',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32inch Super HD LED TV + 2 Year Warranty',
        description:
          "Meet 32inch Super HD LED TV + 2 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32inch Super HD LED TV + 2 Year Warranty.",
        price: 75900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/5137031/1.jpg?8665',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "40'' LED TV  12 Months Warranty",
        description:
          "Meet 40'' LED TV  12 Months Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40'' LED TV  12 Months Warranty.",
        price: 174400,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/833846/1.jpg?1269',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40" Smart Full HD LED TV + Wall Bracket',
        description:
          'Meet 40" Smart Full HD LED TV + Wall Bracket. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40" Smart Full HD LED TV + Wall Bracket.',
        price: 184000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/082934/1.jpg?6926',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'Black   Upper Class',
        description:
          'Embark on an epic adventure with Black   Upper Class. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Black   Upper Class pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 75000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/3000452/1.jpg?9100',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: '32 Inches Full HD LED TV  + 2 Year Warranty.',
        description:
          "Meet 32 Inches Full HD LED TV  + 2 Year Warranty.. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inches Full HD LED TV  + 2 Year Warranty..",
        price: 85990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/410689/1.jpg?4442',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" Inches FULL LED  TV SAMSONIC',
        description:
          'Meet 32" Inches FULL LED  TV SAMSONIC. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches FULL LED  TV SAMSONIC.',
        price: 84500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/4426031/1.jpg?3813',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '2020 A 5 Series 32" LED Full HD TV + Free Wall Bracket-32A5100',
        description:
          'Meet 2020 A 5 Series 32" LED Full HD TV + Free Wall Bracket-32A5100. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 2020 A 5 Series 32" LED Full HD TV + Free Wall Bracket-32A5100.',
        price: 113500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/215198/1.jpg?0206',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '65" Inch 4K UHD Android Smart Tv',
        description:
          'Meet 65" Inch 4K UHD Android Smart Tv. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65" Inch 4K UHD Android Smart Tv.',
        price: 789990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/717489/1.jpg?6669',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32inch FULL HD LED With Free LED Strip Lights',
        description:
          "Meet 32inch FULL HD LED With Free LED Strip Lights. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32inch FULL HD LED With Free LED Strip Lights.",
        price: 75500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/3704111/1.jpg?0130',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'Gas Cooker 60*90 (4 + 2 ) INOX',
        description:
          "Meet Gas Cooker 60*90 (4 + 2 ) INOX. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Gas Cooker 60*90 (4 + 2 ) INOX.",
        price: 299900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/083344/1.jpg?9489',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" DIGITAL LED TV -32LP500',
        description:
          'Meet 32" DIGITAL LED TV -32LP500. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" DIGITAL LED TV -32LP500.',
        price: 122500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/304128/1.jpg?6267',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40 Inch Smart LED TV',
        description:
          "Meet 40 Inch Smart LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40 Inch Smart LED TV.",
        price: 350000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/468077/1.jpg?5846',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32-Inch HD LED Television 2020 MODEL',
        description:
          "Meet 32-Inch HD LED Television 2020 MODEL. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32-Inch HD LED Television 2020 MODEL.",
        price: 99999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/959818/3.jpg?7157',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50 Inch UHD Ultra Slim HDR+ Smart 4K TV 2021',
        description:
          "Meet 50 Inch UHD Ultra Slim HDR+ Smart 4K TV 2021. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50 Inch UHD Ultra Slim HDR+ Smart 4K TV 2021.",
        price: 490500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/8289112/1.jpg?8730',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43" DIGITAL LED TV - 43 LP500',
        description:
          'Meet 43" DIGITAL LED TV - 43 LP500. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" DIGITAL LED TV - 43 LP500.',
        price: 239999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/0383821/1.jpg?5201',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '19 Inchs UFC FHD Tv  Black',
        description:
          "Meet 19 Inchs UFC FHD Tv  Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 19 Inchs UFC FHD Tv  Black.",
        price: 49990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/551285/1.jpg?8563',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '65-Inch UHD 4K Smart Android TV',
        description:
          "Meet 65-Inch UHD 4K Smart Android TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65-Inch UHD 4K Smart Android TV.",
        price: 768990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/510589/1.jpg?6095',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32Inch High Difinition  LED- TV Series 5',
        description:
          "Meet 32Inch High Difinition  LED- TV Series 5. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32Inch High Difinition  LED- TV Series 5.",
        price: 180000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/395264/1.jpg?1691',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32”INCH Amani LED/LCD FULL HD TV (only)',
        description:
          "Meet 32”INCH Amani LED/LCD FULL HD TV (only). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32”INCH Amani LED/LCD FULL HD TV (only).",
        price: 98990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/637356/1.jpg?7124',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55" 4K UHD TV, 3 HDMI, 2 USB DIVX,1 AV ,Black, Smart , WI FI,Free Bracket',
        description:
          'Meet 55" 4K UHD TV, 3 HDMI, 2 USB DIVX,1 AV ,Black, Smart , WI FI,Free Bracket. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55" 4K UHD TV, 3 HDMI, 2 USB DIVX,1 AV ,Black, Smart , WI FI,Free Bracket.',
        price: 394000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/305317/1.jpg?4582',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "50''Smart UHD 4K TV+DSTV Now APP",
        description:
          "Meet 50''Smart UHD 4K TV+DSTV Now APP. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50''Smart UHD 4K TV+DSTV Now APP.",
        price: 350000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/641127/1.jpg?1331',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "32'' Full HD LED TV New Arrival 2020 + Free Wall Bracket",
        description:
          "Meet 32'' Full HD LED TV New Arrival 2020 + Free Wall Bracket. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32'' Full HD LED TV New Arrival 2020 + Free Wall Bracket.",
        price: 85999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/317766/1.jpg?5721',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40"INCHES FULL HD LED TV',
        description:
          'Meet 40"INCHES FULL HD LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40"INCHES FULL HD LED TV.',
        price: 146990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/340476/1.jpg?8883',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "32''HD LED TV+Free Wall Bracket &12 Months Warranty-32A5100",
        description:
          "Meet 32''HD LED TV+Free Wall Bracket &12 Months Warranty-32A5100. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32''HD LED TV+Free Wall Bracket &12 Months Warranty-32A5100.",
        price: 120990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/1472711/1.jpg?1433',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" Super Quality LED TV',
        description:
          'Meet 32" Super Quality LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Super Quality LED TV.',
        price: 99990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/210407/1.jpg?4964',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '20”INCHE FULL HD LED TV',
        description:
          "Meet 20”INCHE FULL HD LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 20”INCHE FULL HD LED TV.",
        price: 54990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/664837/1.jpg?3743',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40 INCH SMART FULL HD LED TV',
        description:
          "Meet 40 INCH SMART FULL HD LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40 INCH SMART FULL HD LED TV.",
        price: 350000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/401137/1.jpg?0801',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43" Vision Tv LED FULL HD',
        description:
          'Meet 43" Vision Tv LED FULL HD. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" Vision Tv LED FULL HD.',
        price: 155663,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/292356/1.jpg?0769',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'Man - Standart Fit Knitted Bottom Jogger-Grey',
        description:
          'Embark on an epic adventure with Man - Standart Fit Knitted Bottom Jogger-Grey. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Man - Standart Fit Knitted Bottom Jogger-Grey pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 56049,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/6570602/1.jpg?1092',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: "32'' Smart Android TV With Netflix,Youtube,Google,PrimeVideo",
        description:
          "Meet 32'' Smart Android TV With Netflix,Youtube,Google,PrimeVideo. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32'' Smart Android TV With Netflix,Youtube,Google,PrimeVideo.",
        price: 98900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/5206202/1.jpg?3694',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "65''Smart UHD 4K+Netflix Youtube Prime Video TV-12 MONTHS WARRANTY",
        description:
          "Meet 65''Smart UHD 4K+Netflix Youtube Prime Video TV-12 MONTHS WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65''Smart UHD 4K+Netflix Youtube Prime Video TV-12 MONTHS WARRANTY.",
        price: 505499,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/8078601/1.jpg?6863',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32”INCHE Amani LED FULL  HD TV',
        description:
          "Meet 32”INCHE Amani LED FULL  HD TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32”INCHE Amani LED FULL  HD TV.",
        price: 98390,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/863466/1.jpg?7106',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '120A Mppt Solar Charge Controller 12v/24v/48v',
        description:
          "Meet 120A Mppt Solar Charge Controller 12v/24v/48v. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 120A Mppt Solar Charge Controller 12v/24v/48v.",
        price: 365000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/3048922/1.jpg?4333',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40" Smart Full HD LED TV With Wall Bracket 1 Year Warranty',
        description:
          'Meet 40" Smart Full HD LED TV With Wall Bracket 1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40" Smart Full HD LED TV With Wall Bracket 1 Year Warranty.',
        price: 185999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/663654/1.jpg?9469',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55" 4k SMART ANDROID UHD LED TV + FREE WALL BRACKET-Latest Design',
        description:
          'Meet 55" 4k SMART ANDROID UHD LED TV + FREE WALL BRACKET-Latest Design. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55" 4k SMART ANDROID UHD LED TV + FREE WALL BRACKET-Latest Design.',
        price: 276730,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/2032801/1.jpg?3667',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32"INCHES FULL HD LED TV AMANI',
        description:
          'Meet 32"INCHES FULL HD LED TV AMANI. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32"INCHES FULL HD LED TV AMANI.',
        price: 84900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/4027921/1.jpg?8687',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55Inch Certified BU8000 UHD Smart 4K TV',
        description:
          "Meet 55Inch Certified BU8000 UHD Smart 4K TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55Inch Certified BU8000 UHD Smart 4K TV.",
        price: 750000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/5012852/1.jpg?6744',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50" Andriod Smart 4K TV + Free Wall Braket. - 2021 Model',
        description:
          'Meet 50" Andriod Smart 4K TV + Free Wall Braket. - 2021 Model. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50" Andriod Smart 4K TV + Free Wall Braket. - 2021 Model.',
        price: 260000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/467289/1.jpg?7316',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "HIGH  TECK  40''  Inch FHD LED Television",
        description:
          "Meet HIGH  TECK  40''  Inch FHD LED Television. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the HIGH  TECK  40''  Inch FHD LED Television.",
        price: 147800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/8528002/1.jpg?5648',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43inch Newcastle Electronics LED/LCD  TV',
        description:
          "Meet 43inch Newcastle Electronics LED/LCD  TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43inch Newcastle Electronics LED/LCD  TV.",
        price: 125899,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/091854/1.jpg?4024',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40" Inches LED TV',
        description:
          'Meet 40" Inches LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40" Inches LED TV.',
        price: 147990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/211576/1.jpg?6990',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50Inch Class HDR 4K Crystal  UHD Smart LED TV - AU Series',
        description:
          "Meet 50Inch Class HDR 4K Crystal  UHD Smart LED TV - AU Series. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50Inch Class HDR 4K Crystal  UHD Smart LED TV - AU Series.",
        price: 650000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/067289/1.jpg?4721',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" FULL HD LED TV ON PROMO PRICE 2022',
        description:
          'Meet 32" FULL HD LED TV ON PROMO PRICE 2022. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" FULL HD LED TV ON PROMO PRICE 2022.',
        price: 100000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/285374/1.jpg?7732',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32”INCHE LED HD TV Amani',
        description:
          "Meet 32”INCHE LED HD TV Amani. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32”INCHE LED HD TV Amani.",
        price: 99290,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/461166/1.jpg?7058',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '5KVA Digital Floor Stabilizer-CVR5KVA',
        description:
          "Meet 5KVA Digital Floor Stabilizer-CVR5KVA. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 5KVA Digital Floor Stabilizer-CVR5KVA.",
        price: 87000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/491746/1.jpg?9312',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50" 4K SMART UHD TV W/ WiFi & Free Bracket-',
        description:
          'Meet 50" 4K SMART UHD TV W/ WiFi & Free Bracket-. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50" 4K SMART UHD TV W/ WiFi & Free Bracket-.',
        price: 363000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/833846/1.jpg?7237',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32”INCH LED/LCD FULL HD Energy TV Free Gift Inside',
        description:
          "Meet 32”INCH LED/LCD FULL HD Energy TV Free Gift Inside. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32”INCH LED/LCD FULL HD Energy TV Free Gift Inside.",
        price: 99990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/317364/1.jpg?7127',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32”INCHE LED TV Amani Classic  Promo Price',
        description:
          "Meet 32”INCHE LED TV Amani Classic  Promo Price. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32”INCHE LED TV Amani Classic  Promo Price.",
        price: 99970,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/064837/1.jpg?9903',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55Inch Smart UHD Flat LED Android 4K HDR TV',
        description:
          "Meet 55Inch Smart UHD Flat LED Android 4K HDR TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55Inch Smart UHD Flat LED Android 4K HDR TV.",
        price: 440500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/0961012/1.jpg?5562',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40"INCHES SMART ANDROID UHD LED TV 4K',
        description:
          'Meet 40"INCHES SMART ANDROID UHD LED TV 4K. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40"INCHES SMART ANDROID UHD LED TV 4K.',
        price: 170900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/0785151/1.jpg?5553',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "32''Smart TV + Netflix&Youtube APP",
        description:
          "Meet 32''Smart TV + Netflix&Youtube APP. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32''Smart TV + Netflix&Youtube APP.",
        price: 164000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/3740442/1.jpg?8330',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "43'' UHD BLUETOOTH Smart +Netflix Dual Screen Tv-Wall Hanger",
        description:
          "Meet 43'' UHD BLUETOOTH Smart +Netflix Dual Screen Tv-Wall Hanger. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43'' UHD BLUETOOTH Smart +Netflix Dual Screen Tv-Wall Hanger.",
        price: 169000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/7850352/1.jpg?8106',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55-Inch 4K Android TV Promo Price',
        description:
          "Meet 55-Inch 4K Android TV Promo Price. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55-Inch 4K Android TV Promo Price.",
        price: 288430,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/159759/1.jpg?0005',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50-Inch 4k UHD Android Smart TV',
        description:
          "Meet 50-Inch 4k UHD Android Smart TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50-Inch 4k UHD Android Smart TV.",
        price: 330000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/555728/1.jpg?6835',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50 Inch Certified 4K Crystal UHD Smart LED TV',
        description:
          "Meet 50 Inch Certified 4K Crystal UHD Smart LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50 Inch Certified 4K Crystal UHD Smart LED TV.",
        price: 450000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/695128/1.jpg?3841',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "55''  Smart UHD 4K TV + Netflix,Youtube + 12 Months Warranty",
        description:
          "Meet 55''  Smart UHD 4K TV + Netflix,Youtube + 12 Months Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55''  Smart UHD 4K TV + Netflix,Youtube + 12 Months Warranty.",
        price: 305900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/5761911/1.jpg?3386',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55" Inch 4K Ultra-HD Smart LED Android TV + FREE WALL HANGER',
        description:
          'Meet 55" Inch 4K Ultra-HD Smart LED Android TV + FREE WALL HANGER. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55" Inch 4K Ultra-HD Smart LED Android TV + FREE WALL HANGER.',
        price: 274999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/0265811/1.jpg?1669',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "32''INCHES LED FULL HD TV +  FREE HANGER",
        description:
          "Meet 32''INCHES LED FULL HD TV +  FREE HANGER. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32''INCHES LED FULL HD TV +  FREE HANGER.",
        price: 81700,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/9080532/1.jpg?0406',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 Inches LED TV (LP500)  - Black + 2 Years Warranty',
        description:
          "Meet 32 Inches LED TV (LP500)  - Black + 2 Years Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inches LED TV (LP500)  - Black + 2 Years Warranty.",
        price: 104800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/297287/1.jpg?2516',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "40''Smart TV + Netflix&Youtube APP 12 Months Warranty-",
        description:
          "Meet 40''Smart TV + Netflix&Youtube APP 12 Months Warranty-. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40''Smart TV + Netflix&Youtube APP 12 Months Warranty-.",
        price: 184500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/918817/1.jpg?5797',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'Premium 55inch Andriod Certified 4K UHD Smart Google TV.',
        description:
          "Meet Premium 55inch Andriod Certified 4K UHD Smart Google TV.. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Premium 55inch Andriod Certified 4K UHD Smart Google TV..",
        price: 500000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/3664522/1.jpg?1224',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "32'' Inch Full HD Smart TV + 1 Year Warranty",
        description:
          "Meet 32'' Inch Full HD Smart TV + 1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32'' Inch Full HD Smart TV + 1 Year Warranty.",
        price: 160900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/3410781/1.jpg?2215',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32-Inch FHD LED Television - Black',
        description:
          "Meet 32-Inch FHD LED Television - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32-Inch FHD LED Television - Black.",
        price: 68309,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/512353/1.jpg?7712',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50 Inch 4K Ultra HD Android Smart TV',
        description:
          "Meet 50 Inch 4K Ultra HD Android Smart TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50 Inch 4K Ultra HD Android Smart TV.",
        price: 260000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/690307/1.jpg?8676',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "32''Smart TV + Netflix&Youtube APP 12 Months Warranty",
        description:
          "Meet 32''Smart TV + Netflix&Youtube APP 12 Months Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32''Smart TV + Netflix&Youtube APP 12 Months Warranty.",
        price: 168999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/8113102/1.jpg?3323',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "32'' Inch Smart Android  TV BUC 32LK50",
        description:
          "Meet 32'' Inch Smart Android  TV BUC 32LK50. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32'' Inch Smart Android  TV BUC 32LK50.",
        price: 104999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/1900002/1.jpg?1816',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43″ Full High Definition LED SMART TV With WiFi',
        description:
          "Meet 43″ Full High Definition LED SMART TV With WiFi. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43″ Full High Definition LED SMART TV With WiFi.",
        price: 247999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/1984252/1.jpg?3074',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '3.5kva 24V Pure Sine Wave Inverter',
        description:
          "Meet 3.5kva 24V Pure Sine Wave Inverter. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 3.5kva 24V Pure Sine Wave Inverter.",
        price: 370000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/333148/1.jpg?2471',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55"INCHES TV ANDROID-SMART 4K FULL HD TV WITH WI-FI',
        description:
          'Meet 55"INCHES TV ANDROID-SMART 4K FULL HD TV WITH WI-FI. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55"INCHES TV ANDROID-SMART 4K FULL HD TV WITH WI-FI.',
        price: 279000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/6170121/1.jpg?5750',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43”Vision Classic Full HD Android Smart Tv Promo Price',
        description:
          "Meet 43”Vision Classic Full HD Android Smart Tv Promo Price. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43”Vision Classic Full HD Android Smart Tv Promo Price.",
        price: 189490,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/088528/1.jpg?0610',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "''55\" Inch 4K Ultra-HD Smart LED Android TV - Black",
        description:
          "Meet ''55\" Inch 4K Ultra-HD Smart LED Android TV - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the ''55\" Inch 4K Ultra-HD Smart LED Android TV - Black.",
        price: 272999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/486868/1.jpg?2563',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40"INCH TV FULL HD WITH ONE YEAR WARRANTY',
        description:
          'Meet 40"INCH TV FULL HD WITH ONE YEAR WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40"INCH TV FULL HD WITH ONE YEAR WARRANTY.',
        price: 140000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/505855/1.jpg?0342',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43-Inch Smart LED TV + Netflix +YouTube 2022 Model',
        description:
          "Meet 43-Inch Smart LED TV + Netflix +YouTube 2022 Model. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43-Inch Smart LED TV + Netflix +YouTube 2022 Model.",
        price: 242500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/6106232/1.jpg?8014',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'HIGH TECK  55"  INCHES 4k  UHD  ANDROID  SMART  LED TV',
        description:
          'Meet HIGH TECK  55"  INCHES 4k  UHD  ANDROID  SMART  LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the HIGH TECK  55"  INCHES 4k  UHD  ANDROID  SMART  LED TV.',
        price: 287808,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/0830671/1.jpg?4996',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '58 Inches Smart UHD 4K TV+ Netflix, YouTube -58A6K',
        description:
          "Meet 58 Inches Smart UHD 4K TV+ Netflix, YouTube -58A6K. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 58 Inches Smart UHD 4K TV+ Netflix, YouTube -58A6K.",
        price: 399500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/368077/1.jpg?0394',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55 Inch  Certified 4K Crystal UHD  Smart LED TV',
        description:
          "Meet 55 Inch  Certified 4K Crystal UHD  Smart LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55 Inch  Certified 4K Crystal UHD  Smart LED TV.",
        price: 518000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/272148/1.jpg?1402',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40 Inch Curve Smart TV + Netflix & Free Hanger',
        description:
          "Meet 40 Inch Curve Smart TV + Netflix & Free Hanger. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40 Inch Curve Smart TV + Netflix & Free Hanger.",
        price: 150000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/914177/1.jpg?4532',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" INCH  TV FULL HD WITH ONE YEAR WARRANTY',
        description:
          'Meet 32" INCH  TV FULL HD WITH ONE YEAR WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" INCH  TV FULL HD WITH ONE YEAR WARRANTY.',
        price: 80000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/427356/1.jpg?3663',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '24 INCH LED Amani Tv Promo Price-Black',
        description:
          "Meet 24 INCH LED Amani Tv Promo Price-Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 24 INCH LED Amani Tv Promo Price-Black.",
        price: 55980,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/958018/1.jpg?2052',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "58''Smart UHD 4K TV+Netflix,Youtube&DSTV Now APP",
        description:
          "Meet 58''Smart UHD 4K TV+Netflix,Youtube&DSTV Now APP. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 58''Smart UHD 4K TV+Netflix,Youtube&DSTV Now APP.",
        price: 400000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/797567/1.jpg?2505',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55-Inch Smart UHD 4K TV , With FREE Wall Bracket With One Year Warranty',
        description:
          "Meet 55-Inch Smart UHD 4K TV , With FREE Wall Bracket With One Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55-Inch Smart UHD 4K TV , With FREE Wall Bracket With One Year Warranty.",
        price: 375000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/842974/1.jpg?9546',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 LED HD TV  Black',
        description:
          "Meet 32 LED HD TV  Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 LED HD TV  Black.",
        price: 119999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/186734/1.jpg?1733',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "50'' Smart 4K UHD Frameless Smart TV,  Wifi, NETFLIX,YOUTUBE+WALL BRACKET",
        description:
          "Meet 50'' Smart 4K UHD Frameless Smart TV,  Wifi, NETFLIX,YOUTUBE+WALL BRACKET. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50'' Smart 4K UHD Frameless Smart TV,  Wifi, NETFLIX,YOUTUBE+WALL BRACKET.",
        price: 337000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/695128/1.jpg?5547',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '24 INCH LED EnergyTv Promo Price Best Choice',
        description:
          "Meet 24 INCH LED EnergyTv Promo Price Best Choice. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 24 INCH LED EnergyTv Promo Price Best Choice.",
        price: 54990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/958018/1.jpg?2051',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40 Inches Android Smart Curved TV',
        description:
          "Meet 40 Inches Android Smart Curved TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40 Inches Android Smart Curved TV.",
        price: 150000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/6732601/1.jpg?1228',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" INCH SMART CURVED TV With Netflix (1year Warranty)',
        description:
          'Meet 32" INCH SMART CURVED TV With Netflix (1year Warranty). With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" INCH SMART CURVED TV With Netflix (1year Warranty).',
        price: 113000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/668018/1.jpg?4485',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40 Inch FHD LED Television- Black',
        description:
          "Meet 40 Inch FHD LED Television- Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40 Inch FHD LED Television- Black.",
        price: 200000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/648234/1.jpg?8203',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55" INCH SMART Full HD LED 4K SCREEN TV +FREE WALL HANGER',
        description:
          'Meet 55" INCH SMART Full HD LED 4K SCREEN TV +FREE WALL HANGER. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55" INCH SMART Full HD LED 4K SCREEN TV +FREE WALL HANGER.',
        price: 272999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/585928/1.jpg?9768',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55" Inch SMART UHD 4K TV',
        description:
          'Meet 55" Inch SMART UHD 4K TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55" Inch SMART UHD 4K TV.',
        price: 446000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/554248/1.jpg?1274',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '19"INCH VISION TV FULL HD WITH ONE YEAR WARRANTY',
        description:
          'Meet 19"INCH VISION TV FULL HD WITH ONE YEAR WARRANTY. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 19"INCH VISION TV FULL HD WITH ONE YEAR WARRANTY.',
        price: 56932,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/490576/1.jpg?6744',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50 Inch Smart Crystal UHD Ultra Slim HDR+ 4K TV',
        description:
          "Meet 50 Inch Smart Crystal UHD Ultra Slim HDR+ 4K TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50 Inch Smart Crystal UHD Ultra Slim HDR+ 4K TV.",
        price: 474000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/703748/1.jpg?4545',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50 Inch Premium LED Crystal UHD Smart TV',
        description:
          "Meet 50 Inch Premium LED Crystal UHD Smart TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50 Inch Premium LED Crystal UHD Smart TV.",
        price: 490500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/8289112/1.jpg?9271',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" Smart LED HD TV, USB Divx, HDMI, Netflix & Youtube App W-Free Wall Bracket -32A4H',
        description:
          'Meet 32" Smart LED HD TV, USB Divx, HDMI, Netflix & Youtube App W-Free Wall Bracket -32A4H. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Smart LED HD TV, USB Divx, HDMI, Netflix & Youtube App W-Free Wall Bracket -32A4H.',
        price: 164500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/7816521/1.jpg?3729',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '75”Inches Android Smart 4k Amani Tv+ Free Gift Inside',
        description:
          "Meet 75”Inches Android Smart 4k Amani Tv+ Free Gift Inside. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 75”Inches Android Smart 4k Amani Tv+ Free Gift Inside.",
        price: 887520,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/6794501/1.jpg?5561',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "43''Smart TV + Netflix&Youtube APP 12 Months Warranty-43",
        description:
          "Meet 43''Smart TV + Netflix&Youtube APP 12 Months Warranty-43. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43''Smart TV + Netflix&Youtube APP 12 Months Warranty-43.",
        price: 225900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/979866/1.jpg?9589',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43" Inches Smart  HD LED TV',
        description:
          'Meet 43" Inches Smart  HD LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" Inches Smart  HD LED TV.',
        price: 195400,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/395127/1.jpg?2987',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32Inches A3240GE ICast Feature & Overvoltage Protection',
        description:
          "Meet 32Inches A3240GE ICast Feature & Overvoltage Protection. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32Inches A3240GE ICast Feature & Overvoltage Protection.",
        price: 105000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/3538881/1.jpg?4760',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50 Inchs SMART FULL HD TV + Free Wall Hanger',
        description:
          "Meet 50 Inchs SMART FULL HD TV + Free Wall Hanger. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50 Inchs SMART FULL HD TV + Free Wall Hanger.",
        price: 259990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/877244/1.jpg?6072',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '65"Inches Smart  Satellite UHD 4K TV, WIFI+ Wall Hanger,',
        description:
          'Meet 65"Inches Smart  Satellite UHD 4K TV, WIFI+ Wall Hanger,. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65"Inches Smart  Satellite UHD 4K TV, WIFI+ Wall Hanger,.',
        price: 621500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/015199/1.jpg?7647',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" INCH HD LED ENERGY TV WITH WARRANTY@ Promo Price',
        description:
          'Meet 32" INCH HD LED ENERGY TV WITH WARRANTY@ Promo Price. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" INCH HD LED ENERGY TV WITH WARRANTY@ Promo Price.',
        price: 96490,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/910466/1.jpg?6806',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "50''Inch Smart Ai UHD 4K Satellite TV+Netflix,Youtube,Apple Airplay,Magic Remote",
        description:
          "Meet 50''Inch Smart Ai UHD 4K Satellite TV+Netflix,Youtube,Apple Airplay,Magic Remote. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50''Inch Smart Ai UHD 4K Satellite TV+Netflix,Youtube,Apple Airplay,Magic Remote.",
        price: 410500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/3027032/1.jpg?1801',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55inch UHD LED Curved HDR+ Smart TV',
        description:
          "Meet 55inch UHD LED Curved HDR+ Smart TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55inch UHD LED Curved HDR+ Smart TV.",
        price: 800000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/293246/1.jpg?2281',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32-Inch HD Digital Flat TV + A Free Wall Hanger',
        description:
          "Meet 32-Inch HD Digital Flat TV + A Free Wall Hanger. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32-Inch HD Digital Flat TV + A Free Wall Hanger.",
        price: 99999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/783968/1.jpg?5037',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '65 Inch UHD Slim Flat Smart 4K LED Tv/ Black',
        description:
          "Meet 65 Inch UHD Slim Flat Smart 4K LED Tv/ Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65 Inch UHD Slim Flat Smart 4K LED Tv/ Black.",
        price: 950000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/917534/3.jpg?1836',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32” Inch Full HD Led Television PLUS Free Tv Bracket',
        description:
          "Meet 32” Inch Full HD Led Television PLUS Free Tv Bracket. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32” Inch Full HD Led Television PLUS Free Tv Bracket.",
        price: 119999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/000116/1.jpg?3536',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" Inches Quality, FULL HD LED TV',
        description:
          'Meet 32" Inches Quality, FULL HD LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches Quality, FULL HD LED TV.',
        price: 85690,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/765244/1.jpg?4332',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55 Inch UHD Flat Slim Smart LED 4k Tv- Black',
        description:
          "Meet 55 Inch UHD Flat Slim Smart LED 4k Tv- Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55 Inch UHD Flat Slim Smart LED 4k Tv- Black.",
        price: 750000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/917534/3.jpg?2268',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 Inch Class HDR HD Smart LED TV.',
        description:
          "Meet 32 Inch Class HDR HD Smart LED TV.. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inch Class HDR HD Smart LED TV..",
        price: 280000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/092853/1.jpg?7353',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 Inches Television + Free TV Wall Hanger',
        description:
          "Meet 32 Inches Television + Free TV Wall Hanger. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inches Television + Free TV Wall Hanger.",
        price: 97700,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/444652/1.jpg?8869',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '65 Inch UHD Ultra Slim Class 2020 HDR+ Smart 4K TV',
        description:
          "Meet 65 Inch UHD Ultra Slim Class 2020 HDR+ Smart 4K TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65 Inch UHD Ultra Slim Class 2020 HDR+ Smart 4K TV.",
        price: 950000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/943846/1.jpg?7130',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "50'' 4K UHD Smart Satellite AI THINQ TV + Netflix, YouTube APP & Apple Airplay",
        description:
          "Meet 50'' 4K UHD Smart Satellite AI THINQ TV + Netflix, YouTube APP & Apple Airplay. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50'' 4K UHD Smart Satellite AI THINQ TV + Netflix, YouTube APP & Apple Airplay.",
        price: 559350,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/9423401/1.jpg?7755',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55" Inch SMART UHD 4K AI THINQ STV',
        description:
          'Meet 55" Inch SMART UHD 4K AI THINQ STV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55" Inch SMART UHD 4K AI THINQ STV.',
        price: 456995,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/462317/1.jpg?2272',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32-Inch Smart TV',
        description:
          "Meet 32-Inch Smart TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32-Inch Smart TV.",
        price: 140000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/522251/1.jpg?7419',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50"UHD, 4K Smart, Satellite, AV, 3 HDMI, 2 USB, Magic Remote',
        description:
          'Meet 50"UHD, 4K Smart, Satellite, AV, 3 HDMI, 2 USB, Magic Remote. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50"UHD, 4K Smart, Satellite, AV, 3 HDMI, 2 USB, Magic Remote.',
        price: 389999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/648206/1.jpg?0534',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '50 Inch UHD 4K Smart LED Tv- Mobile/Tv Screen Mirroring',
        description:
          "Meet 50 Inch UHD 4K Smart LED Tv- Mobile/Tv Screen Mirroring. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50 Inch UHD 4K Smart LED Tv- Mobile/Tv Screen Mirroring.",
        price: 700000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/003302/1.jpg?5143',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'T60X Bluetooth Tower Speaker - Black/Formica',
        description:
          "Meet T60X Bluetooth Tower Speaker - Black/Formica. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the T60X Bluetooth Tower Speaker - Black/Formica.",
        price: 189000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/369818/1.jpg?9435',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "55'' INCH HDR Smart UHD 4K +BLUETOOTH, AND WALL BRACKET",
        description:
          "Meet 55'' INCH HDR Smart UHD 4K +BLUETOOTH, AND WALL BRACKET. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55'' INCH HDR Smart UHD 4K +BLUETOOTH, AND WALL BRACKET.",
        price: 390500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/0602121/1.jpg?4628',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32 Inch HD LED TV  - Black',
        description:
          "Meet 32 Inch HD LED TV  - Black. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32 Inch HD LED TV  - Black.",
        price: 94600,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/848714/1.jpg?4083',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "40'' FULL HD LED TV40A5100",
        description:
          "Meet 40'' FULL HD LED TV40A5100. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40'' FULL HD LED TV40A5100.",
        price: 168000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/5049821/1.jpg?6846',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32”INCHE LED FULL HD TV {ONLY}',
        description:
          "Meet 32”INCHE LED FULL HD TV {ONLY}. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32”INCHE LED FULL HD TV {ONLY}.",
        price: 99990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/360706/1.jpg?4260',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40" Smart Ultra Slim Full HD LED TV',
        description:
          'Meet 40" Smart Ultra Slim Full HD LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40" Smart Ultra Slim Full HD LED TV.',
        price: 350000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/425454/1.jpg?2550',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40 Inch FHD Ultra Slim Smart LED - TV',
        description:
          "Meet 40 Inch FHD Ultra Slim Smart LED - TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40 Inch FHD Ultra Slim Smart LED - TV.",
        price: 350000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/839643/1.jpg?5190',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40 Inch FHD LED Television',
        description:
          "Meet 40 Inch FHD LED Television. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40 Inch FHD LED Television.",
        price: 120000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/8481111/1.jpg?4053',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '40" Inches (Wisdom Share) Smart Full HD LED TV',
        description:
          'Meet 40" Inches (Wisdom Share) Smart Full HD LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 40" Inches (Wisdom Share) Smart Full HD LED TV.',
        price: 170900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/1902691/1.jpg?6435',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "32''FULL HD LED TV",
        description:
          "Meet 32''FULL HD LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32''FULL HD LED TV.",
        price: 94390,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/664837/1.jpg?7164',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'Trolley Luggage XL For Family Use',
        description:
          'Embark on an epic adventure with Trolley Luggage XL For Family Use. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Trolley Luggage XL For Family Use pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 60000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/750695/1.jpg?5392',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Series19”INCHES FULL HD LED Amani Series TV',
        description:
          "Meet Series19”INCHES FULL HD LED Amani Series TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the Series19”INCHES FULL HD LED Amani Series TV.",
        price: 54432,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/401576/1.jpg?4163',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32Inch  High Definition Smart  LED TV',
        description:
          "Meet 32Inch  High Definition Smart  LED TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32Inch  High Definition Smart  LED TV.",
        price: 280000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/645384/1.jpg?7805',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32”INCHE LED/LCD FULL HD TV',
        description:
          "Meet 32”INCHE LED/LCD FULL HD TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32”INCHE LED/LCD FULL HD TV.",
        price: 97990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/360706/1.jpg?7626',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32INCHES FULL HD LED TV + FREE WALL MOUNT + SURGE',
        description:
          "Meet 32INCHES FULL HD LED TV + FREE WALL MOUNT + SURGE. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32INCHES FULL HD LED TV + FREE WALL MOUNT + SURGE.",
        price: 100500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/955864/1.jpg?5210',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "55''Smart UHD 4K TV+DSTV Now APP-",
        description:
          "Meet 55''Smart UHD 4K TV+DSTV Now APP-. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55''Smart UHD 4K TV+DSTV Now APP-.",
        price: 372500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/2858242/1.jpg?2347',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "50'' SMART UHD 4K SATELLITE TV",
        description:
          "Meet 50'' SMART UHD 4K SATELLITE TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 50'' SMART UHD 4K SATELLITE TV.",
        price: 410499,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/6483821/1.jpg?5796',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "55'' Inches 4K UHD Smart TV+Netflix,YouTube APP+24 MONTHS WARRANTY-55UN7000",
        description:
          "Meet 55'' Inches 4K UHD Smart TV+Netflix,YouTube APP+24 MONTHS WARRANTY-55UN7000. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55'' Inches 4K UHD Smart TV+Netflix,YouTube APP+24 MONTHS WARRANTY-55UN7000.",
        price: 445899,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/372177/1.jpg?8733',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '55"INCHES SMART ANDROID TV NEW 2020',
        description:
          'Meet 55"INCHES SMART ANDROID TV NEW 2020. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 55"INCHES SMART ANDROID TV NEW 2020.',
        price: 272900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/286417/1.jpg?1590',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32"INCHES FULL HD LED TV + Free Hanger & HDMI Wire-PROMO',
        description:
          'Meet 32"INCHES FULL HD LED TV + Free Hanger & HDMI Wire-PROMO. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32"INCHES FULL HD LED TV + Free Hanger & HDMI Wire-PROMO.',
        price: 99976,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/8858401/1.jpg?1545',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" Inches LED Smart TV (A4H) + Free Wall Bracket - Black + 1 Year Warranty',
        description:
          'Meet 32" Inches LED Smart TV (A4H) + Free Wall Bracket - Black + 1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches LED Smart TV (A4H) + Free Wall Bracket - Black + 1 Year Warranty.',
        price: 124200,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/6442821/1.jpg?8701',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '47-Inch 47VLE9481SL Full HD 3D Smart LED TV - Grey',
        description:
          "Meet 47-Inch 47VLE9481SL Full HD 3D Smart LED TV - Grey. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 47-Inch 47VLE9481SL Full HD 3D Smart LED TV - Grey.",
        price: 150000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/47434/1.jpg?2598',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '43" Inches Smart OS TV (BTF-43SV) + Free Wall Bracket   - Black +1 Year Warranty',
        description:
          'Meet 43" Inches Smart OS TV (BTF-43SV) + Free Wall Bracket   - Black +1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 43" Inches Smart OS TV (BTF-43SV) + Free Wall Bracket   - Black +1 Year Warranty.',
        price: 145800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/5192502/1.jpg?3266',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32" Inches Satellite DLED TV (A5200) - Black  + 1 Year Warranty',
        description:
          'Meet 32" Inches Satellite DLED TV (A5200) - Black  + 1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there\'s no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32" Inches Satellite DLED TV (A5200) - Black  + 1 Year Warranty.',
        price: 92450,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/037857/1.jpg?8012',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: "65'' Inches UHD 4K SMART TV (65A7H)+ Free Wall Bracket - Black + 1 Year Warranty",
        description:
          "Meet 65'' Inches UHD 4K SMART TV (65A7H)+ Free Wall Bracket - Black + 1 Year Warranty. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 65'' Inches UHD 4K SMART TV (65A7H)+ Free Wall Bracket - Black + 1 Year Warranty.",
        price: 453600,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/951058/1.jpg?4130',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: '32-Inch TH-32C311M HD TV',
        description:
          "Meet 32-Inch TH-32C311M HD TV. With revolutionary features, it offers cinema-quality viewing that fits in the palm of your hand. Bezels are pushed way back, and there's no notch — just a minuscule camera hole. The HDR10+ certified Infinity-O Display offers a big, immersive screen with limited onscreen interruptions. The sharp MP camera lets you pinch in, again and again. Capture stunning images with clarity, even when you crop way into them. This iPhone redefines mobile technology with its cutting-edge features and powerful performance. It is designed to provide an unparalleled user experience, from its stunning display to its high-resolution camera. Experience the future of communication with the 32-Inch TH-32C311M HD TV.",
        price: 58490,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/03682/1.jpg?6771',
        quantity: 20,
        categoryId: 7,
      },
      {
        name: 'Sports Performance Sneakers Ultraboost 4.0 Dna',
        description:
          'Embark on an epic adventure with Sports Performance Sneakers Ultraboost 4.0 Dna. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Sports Performance Sneakers Ultraboost 4.0 Dna pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 61438,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/578768/1.jpg?5435',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'PlayStation 5 Console - Standard Edition',
        description:
          "Embark on an epic adventure with PlayStation 5 Console - Standard Edition. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PlayStation 5 Console - Standard Edition pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PlayStation 5 Console - Standard Edition to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PlayStation 5 Console - Standard Edition redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PlayStation 5 Console - Standard Edition is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PlayStation 5 Console - Standard Edition.",
        price: 580000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/5490752/1.jpg?7906',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'DSI CONSOLE',
        description:
          "Embark on an epic adventure with DSI CONSOLE. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where DSI CONSOLE pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring DSI CONSOLE to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, DSI CONSOLE redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The DSI CONSOLE is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with DSI CONSOLE.",
        price: 170999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/5113852/1.jpg?8066',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Ps4 Console 500 GB WITH 2 CONTROLLER',
        description:
          "Embark on an epic adventure with Ps4 Console 500 GB WITH 2 CONTROLLER. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Ps4 Console 500 GB WITH 2 CONTROLLER pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Ps4 Console 500 GB WITH 2 CONTROLLER to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Ps4 Console 500 GB WITH 2 CONTROLLER redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Ps4 Console 500 GB WITH 2 CONTROLLER is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Ps4 Console 500 GB WITH 2 CONTROLLER.",
        price: 157500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/2654701/1.jpg?7749',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PS4 Console 500GB Black Graded',
        description:
          "Embark on an epic adventure with PS4 Console 500GB Black Graded. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PS4 Console 500GB Black Graded pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PS4 Console 500GB Black Graded to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PS4 Console 500GB Black Graded redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PS4 Console 500GB Black Graded is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PS4 Console 500GB Black Graded.",
        price: 147500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/121064/1.jpg?1118',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PlayStation 4 Console 500gb +Extra Controller',
        description:
          "Embark on an epic adventure with PlayStation 4 Console 500gb +Extra Controller. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PlayStation 4 Console 500gb +Extra Controller pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PlayStation 4 Console 500gb +Extra Controller to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PlayStation 4 Console 500gb +Extra Controller redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PlayStation 4 Console 500gb +Extra Controller is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PlayStation 4 Console 500gb +Extra Controller.",
        price: 150000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/6993012/1.jpg?8971',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PS4 Slim 500GB Console - Black',
        description:
          "Embark on an epic adventure with PS4 Slim 500GB Console - Black. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PS4 Slim 500GB Console - Black pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PS4 Slim 500GB Console - Black to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PS4 Slim 500GB Console - Black redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PS4 Slim 500GB Console - Black is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PS4 Slim 500GB Console - Black.",
        price: 172420,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/774817/1.jpg?2013',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PS3 Super Slim - 500GB + 2 Controller With 15games',
        description:
          "Embark on an epic adventure with PS3 Super Slim - 500GB + 2 Controller With 15games. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PS3 Super Slim - 500GB + 2 Controller With 15games pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PS3 Super Slim - 500GB + 2 Controller With 15games to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PS3 Super Slim - 500GB + 2 Controller With 15games redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PS3 Super Slim - 500GB + 2 Controller With 15games is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PS3 Super Slim - 500GB + 2 Controller With 15games.",
        price: 110000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/9588302/1.jpg?3609',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Playstation 4 Slim Console 1TB + Extra Controller',
        description:
          "Embark on an epic adventure with Playstation 4 Slim Console 1TB + Extra Controller. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Playstation 4 Slim Console 1TB + Extra Controller pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Playstation 4 Slim Console 1TB + Extra Controller to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Playstation 4 Slim Console 1TB + Extra Controller redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Playstation 4 Slim Console 1TB + Extra Controller is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Playstation 4 Slim Console 1TB + Extra Controller.",
        price: 196500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/2549101/1.jpg?6013',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Sony PlayStation 4 Pro 1TB Console - Black (PS4 Pro)',
        description:
          "Embark on an epic adventure with Sony PlayStation 4 Pro 1TB Console - Black (PS4 Pro). This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Sony PlayStation 4 Pro 1TB Console - Black (PS4 Pro) pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Sony PlayStation 4 Pro 1TB Console - Black (PS4 Pro) to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Sony PlayStation 4 Pro 1TB Console - Black (PS4 Pro) redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Sony PlayStation 4 Pro 1TB Console - Black (PS4 Pro) is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Sony PlayStation 4 Pro 1TB Console - Black (PS4 Pro).",
        price: 196800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/311478/1.jpg?5026',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Playstation 4 Plus Fifa 23+ Extra Controller.',
        description:
          "Embark on an epic adventure with Playstation 4 Plus Fifa 23+ Extra Controller.. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Playstation 4 Plus Fifa 23+ Extra Controller. pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Playstation 4 Plus Fifa 23+ Extra Controller. to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Playstation 4 Plus Fifa 23+ Extra Controller. redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Playstation 4 Plus Fifa 23+ Extra Controller. is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Playstation 4 Plus Fifa 23+ Extra Controller..",
        price: 190000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/1959312/1.jpg?4612',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PS4 Slim 1TB Console Plus Extra Controller',
        description:
          "Embark on an epic adventure with PS4 Slim 1TB Console Plus Extra Controller. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PS4 Slim 1TB Console Plus Extra Controller pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PS4 Slim 1TB Console Plus Extra Controller to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PS4 Slim 1TB Console Plus Extra Controller redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PS4 Slim 1TB Console Plus Extra Controller is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PS4 Slim 1TB Console Plus Extra Controller.",
        price: 195000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/2989942/1.jpg?6133',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: "Flex Experience 10 Running Men's",
        description:
          "Embark on an epic adventure with Flex Experience 10 Running Men's. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Flex Experience 10 Running Men's pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.",
        price: 57500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/4560331/1.jpg?6939',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Man - Slim Fit Chino Trousers-Black',
        description:
          'Embark on an epic adventure with Man - Slim Fit Chino Trousers-Black. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Man - Slim Fit Chino Trousers-Black pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 56615,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/7070602/1.jpg?9948',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Playstation 4 Console 500gb',
        description:
          "Embark on an epic adventure with Playstation 4 Console 500gb. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Playstation 4 Console 500gb pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Playstation 4 Console 500gb to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Playstation 4 Console 500gb redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Playstation 4 Console 500gb is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Playstation 4 Console 500gb.",
        price: 145000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/3426131/1.jpg?4656',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'OLED NINTENDO SWITCH (WHITE)',
        description:
          "Embark on an epic adventure with OLED NINTENDO SWITCH (WHITE). This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where OLED NINTENDO SWITCH (WHITE) pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring OLED NINTENDO SWITCH (WHITE) to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, OLED NINTENDO SWITCH (WHITE) redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The OLED NINTENDO SWITCH (WHITE) is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with OLED NINTENDO SWITCH (WHITE).",
        price: 352600,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/4451311/1.jpg?9467',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Ps4 Console 500 GB.',
        description:
          "Embark on an epic adventure with Ps4 Console 500 GB.. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Ps4 Console 500 GB. pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Ps4 Console 500 GB. to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Ps4 Console 500 GB. redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Ps4 Console 500 GB. is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Ps4 Console 500 GB..",
        price: 150000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/2425042/1.jpg?9365',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PS4 Slim 1TB Console',
        description:
          "Embark on an epic adventure with PS4 Slim 1TB Console. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PS4 Slim 1TB Console pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PS4 Slim 1TB Console to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PS4 Slim 1TB Console redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PS4 Slim 1TB Console is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PS4 Slim 1TB Console.",
        price: 190000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/1625042/1.jpg?0017',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PS4 Slim 1TB Console Plus Extra Controller Plus Fifa23',
        description:
          "Embark on an epic adventure with PS4 Slim 1TB Console Plus Extra Controller Plus Fifa23. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PS4 Slim 1TB Console Plus Extra Controller Plus Fifa23 pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PS4 Slim 1TB Console Plus Extra Controller Plus Fifa23 to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PS4 Slim 1TB Console Plus Extra Controller Plus Fifa23 redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PS4 Slim 1TB Console Plus Extra Controller Plus Fifa23 is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PS4 Slim 1TB Console Plus Extra Controller Plus Fifa23.",
        price: 235000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/2725042/1.jpg?0882',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Playstation 4 Console 500gb Plus Extra Controller',
        description:
          "Embark on an epic adventure with Playstation 4 Console 500gb Plus Extra Controller. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Playstation 4 Console 500gb Plus Extra Controller pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Playstation 4 Console 500gb Plus Extra Controller to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Playstation 4 Console 500gb Plus Extra Controller redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Playstation 4 Console 500gb Plus Extra Controller is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Playstation 4 Console 500gb Plus Extra Controller.",
        price: 145000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/3756662/1.jpg?5695',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PS3 Super Slim - 500GB + Extra Controller',
        description:
          "Embark on an epic adventure with PS3 Super Slim - 500GB + Extra Controller. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PS3 Super Slim - 500GB + Extra Controller pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PS3 Super Slim - 500GB + Extra Controller to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PS3 Super Slim - 500GB + Extra Controller redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PS3 Super Slim - 500GB + Extra Controller is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PS3 Super Slim - 500GB + Extra Controller.",
        price: 105000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/338986/1.jpg?4105',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Microsoft Xbox Series X Console 1TB SSD',
        description:
          "Embark on an epic adventure with Microsoft Xbox Series X Console 1TB SSD. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Microsoft Xbox Series X Console 1TB SSD pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Microsoft Xbox Series X Console 1TB SSD to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Microsoft Xbox Series X Console 1TB SSD redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Microsoft Xbox Series X Console 1TB SSD is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Microsoft Xbox Series X Console 1TB SSD.",
        price: 624480,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/9553622/1.jpg?7089',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Playstation 4 Pro Console 1TB + Extra Controller',
        description:
          "Embark on an epic adventure with Playstation 4 Pro Console 1TB + Extra Controller. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Playstation 4 Pro Console 1TB + Extra Controller pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Playstation 4 Pro Console 1TB + Extra Controller to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Playstation 4 Pro Console 1TB + Extra Controller redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Playstation 4 Pro Console 1TB + Extra Controller is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Playstation 4 Pro Console 1TB + Extra Controller.",
        price: 205000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/8167032/1.jpg?3714',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: '(Neon Red/Neon Blue)  - Nintendo Switch',
        description:
          "Embark on an epic adventure with (Neon Red/Neon Blue)  - Nintendo Switch. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where (Neon Red/Neon Blue)  - Nintendo Switch pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring (Neon Red/Neon Blue)  - Nintendo Switch to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, (Neon Red/Neon Blue)  - Nintendo Switch redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The (Neon Red/Neon Blue)  - Nintendo Switch is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with (Neon Red/Neon Blue)  - Nintendo Switch.",
        price: 235000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/548518/1.jpg?0505',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Ps4 Console 500 GB WITH EXTRA CONTROLLER',
        description:
          "Embark on an epic adventure with Ps4 Console 500 GB WITH EXTRA CONTROLLER. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Ps4 Console 500 GB WITH EXTRA CONTROLLER pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Ps4 Console 500 GB WITH EXTRA CONTROLLER to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Ps4 Console 500 GB WITH EXTRA CONTROLLER redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Ps4 Console 500 GB WITH EXTRA CONTROLLER is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Ps4 Console 500 GB WITH EXTRA CONTROLLER.",
        price: 160000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/8425042/1.jpg?9739',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PSN Gift Card £50 For UK Accounts',
        description:
          "Embark on an epic adventure with PSN Gift Card £50 For UK Accounts. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PSN Gift Card £50 For UK Accounts pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PSN Gift Card £50 For UK Accounts to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PSN Gift Card £50 For UK Accounts redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PSN Gift Card £50 For UK Accounts is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PSN Gift Card £50 For UK Accounts.",
        price: 139500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/969218/1.jpg?3987',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Playstation 4 Console 500gb + Extra Controller',
        description:
          "Embark on an epic adventure with Playstation 4 Console 500gb + Extra Controller. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Playstation 4 Console 500gb + Extra Controller pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Playstation 4 Console 500gb + Extra Controller to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Playstation 4 Console 500gb + Extra Controller redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Playstation 4 Console 500gb + Extra Controller is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Playstation 4 Console 500gb + Extra Controller.",
        price: 150880,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/0723302/1.jpg?9490',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PlayStation 5 Console',
        description:
          "Embark on an epic adventure with PlayStation 5 Console. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PlayStation 5 Console pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PlayStation 5 Console to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PlayStation 5 Console redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PlayStation 5 Console is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PlayStation 5 Console.",
        price: 650000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/338986/1.jpg?3440',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Super Slim PS3 Game Console, 500GB With 20 Game Including PES 2022, FIFA 2022,GTA V, Mortal Kombat And 2 Wireless Pad Controller.[Black',
        description:
          "Embark on an epic adventure with Super Slim PS3 Game Console, 500GB With 20 Game Including PES 2022, FIFA 2022,GTA V, Mortal Kombat And 2 Wireless Pad Controller.[Black. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Super Slim PS3 Game Console, 500GB With 20 Game Including PES 2022, FIFA 2022,GTA V, Mortal Kombat And 2 Wireless Pad Controller.[Black pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Super Slim PS3 Game Console, 500GB With 20 Game Including PES 2022, FIFA 2022,GTA V, Mortal Kombat And 2 Wireless Pad Controller.[Black to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Super Slim PS3 Game Console, 500GB With 20 Game Including PES 2022, FIFA 2022,GTA V, Mortal Kombat And 2 Wireless Pad Controller.[Black redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Super Slim PS3 Game Console, 500GB With 20 Game Including PES 2022, FIFA 2022,GTA V, Mortal Kombat And 2 Wireless Pad Controller.[Black is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Super Slim PS3 Game Console, 500GB With 20 Game Including PES 2022, FIFA 2022,GTA V, Mortal Kombat And 2 Wireless Pad Controller.[Black.",
        price: 100000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/5625342/1.jpg?4506',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Ps4 Pro 1TB Plus Extra Controller',
        description:
          "Embark on an epic adventure with Ps4 Pro 1TB Plus Extra Controller. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Ps4 Pro 1TB Plus Extra Controller pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Ps4 Pro 1TB Plus Extra Controller to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Ps4 Pro 1TB Plus Extra Controller redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Ps4 Pro 1TB Plus Extra Controller is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Ps4 Pro 1TB Plus Extra Controller.",
        price: 216000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/4084642/1.jpg?9600',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PlayStation 4 500GB Console',
        description:
          "Embark on an epic adventure with PlayStation 4 500GB Console. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PlayStation 4 500GB Console pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PlayStation 4 500GB Console to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PlayStation 4 500GB Console redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PlayStation 4 500GB Console is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PlayStation 4 500GB Console.",
        price: 147500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/7538601/1.jpg?2219',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Encrusted Diamond Compilation Of Jagged No Fading Wrist Watch + Iced Pendant,Cuban Chain & Ring',
        description:
          'Embark on an epic adventure with Encrusted Diamond Compilation Of Jagged No Fading Wrist Watch + Iced Pendant,Cuban Chain & Ring. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Encrusted Diamond Compilation Of Jagged No Fading Wrist Watch + Iced Pendant,Cuban Chain & Ring pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 53010,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/8363612/1.jpg?5111',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Ps4 Console 500 GB WITH EXTRA CONTROLLER PLUS FIFA23',
        description:
          "Embark on an epic adventure with Ps4 Console 500 GB WITH EXTRA CONTROLLER PLUS FIFA23. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Ps4 Console 500 GB WITH EXTRA CONTROLLER PLUS FIFA23 pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Ps4 Console 500 GB WITH EXTRA CONTROLLER PLUS FIFA23 to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Ps4 Console 500 GB WITH EXTRA CONTROLLER PLUS FIFA23 redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Ps4 Console 500 GB WITH EXTRA CONTROLLER PLUS FIFA23 is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Ps4 Console 500 GB WITH EXTRA CONTROLLER PLUS FIFA23.",
        price: 195000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/2084642/1.jpg?9597',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: '1TB PlayStation 4 Pro Plus Extra Controller Plus Fifa23.',
        description:
          "Embark on an epic adventure with 1TB PlayStation 4 Pro Plus Extra Controller Plus Fifa23.. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where 1TB PlayStation 4 Pro Plus Extra Controller Plus Fifa23. pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring 1TB PlayStation 4 Pro Plus Extra Controller Plus Fifa23. to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, 1TB PlayStation 4 Pro Plus Extra Controller Plus Fifa23. redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The 1TB PlayStation 4 Pro Plus Extra Controller Plus Fifa23. is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with 1TB PlayStation 4 Pro Plus Extra Controller Plus Fifa23..",
        price: 280000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/3833302/1.jpg?2041',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Ps4 Console 500 GB WITH EXTRA CONTROLLER  Plus Fifa23',
        description:
          "Embark on an epic adventure with Ps4 Console 500 GB WITH EXTRA CONTROLLER  Plus Fifa23. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Ps4 Console 500 GB WITH EXTRA CONTROLLER  Plus Fifa23 pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Ps4 Console 500 GB WITH EXTRA CONTROLLER  Plus Fifa23 to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Ps4 Console 500 GB WITH EXTRA CONTROLLER  Plus Fifa23 redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Ps4 Console 500 GB WITH EXTRA CONTROLLER  Plus Fifa23 is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Ps4 Console 500 GB WITH EXTRA CONTROLLER  Plus Fifa23.",
        price: 190000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/7525042/1.jpg?0164',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Playstation 4 Pro Console 1TB',
        description:
          "Embark on an epic adventure with Playstation 4 Pro Console 1TB. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Playstation 4 Pro Console 1TB pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Playstation 4 Pro Console 1TB to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Playstation 4 Pro Console 1TB redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Playstation 4 Pro Console 1TB is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Playstation 4 Pro Console 1TB.",
        price: 195000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/8167032/1.jpg?3714',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: '1TB Playstation4 Pro + 1 Extra Controler + Fifa21',
        description:
          "Embark on an epic adventure with 1TB Playstation4 Pro + 1 Extra Controler + Fifa21. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where 1TB Playstation4 Pro + 1 Extra Controler + Fifa21 pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring 1TB Playstation4 Pro + 1 Extra Controler + Fifa21 to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, 1TB Playstation4 Pro + 1 Extra Controler + Fifa21 redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The 1TB Playstation4 Pro + 1 Extra Controler + Fifa21 is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with 1TB Playstation4 Pro + 1 Extra Controler + Fifa21.",
        price: 240000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/9033302/1.jpg?0251',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Travel Luggage Box With Kit Bag - 4sets',
        description:
          'Embark on an epic adventure with Travel Luggage Box With Kit Bag - 4sets. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Travel Luggage Box With Kit Bag - 4sets pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 94999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/136277/1.jpg?8629',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: '1TB PlayStation 4 Slim Plus Extra Controller Plus Fifa23.',
        description:
          "Embark on an epic adventure with 1TB PlayStation 4 Slim Plus Extra Controller Plus Fifa23.. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where 1TB PlayStation 4 Slim Plus Extra Controller Plus Fifa23. pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring 1TB PlayStation 4 Slim Plus Extra Controller Plus Fifa23. to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, 1TB PlayStation 4 Slim Plus Extra Controller Plus Fifa23. redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The 1TB PlayStation 4 Slim Plus Extra Controller Plus Fifa23. is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with 1TB PlayStation 4 Slim Plus Extra Controller Plus Fifa23..",
        price: 230000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/0933302/1.jpg?0813',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PS4 Console + 500GB + 2 CONTROLLERS',
        description:
          "Embark on an epic adventure with PS4 Console + 500GB + 2 CONTROLLERS. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PS4 Console + 500GB + 2 CONTROLLERS pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PS4 Console + 500GB + 2 CONTROLLERS to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PS4 Console + 500GB + 2 CONTROLLERS redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PS4 Console + 500GB + 2 CONTROLLERS is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PS4 Console + 500GB + 2 CONTROLLERS.",
        price: 152000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/9594112/1.jpg?7102',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PlayStation 4 1TB Slim  - Black',
        description:
          "Embark on an epic adventure with PlayStation 4 1TB Slim  - Black. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PlayStation 4 1TB Slim  - Black pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PlayStation 4 1TB Slim  - Black to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PlayStation 4 1TB Slim  - Black redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PlayStation 4 1TB Slim  - Black is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PlayStation 4 1TB Slim  - Black.",
        price: 189000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/416497/1.jpg?4721',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'V9 Adjustable Racing Wheel With Clutch Pedals And Shifter,Support Vibration And Headset Function,For Windows PC/PS3/PS4/Xbox One/Xbox Series S & X/Nintendo Switch With 270°/900° Rotation Button',
        description:
          "Embark on an epic adventure with V9 Adjustable Racing Wheel With Clutch Pedals And Shifter,Support Vibration And Headset Function,For Windows PC/PS3/PS4/Xbox One/Xbox Series S & X/Nintendo Switch With 270°/900° Rotation Button. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where V9 Adjustable Racing Wheel With Clutch Pedals And Shifter,Support Vibration And Headset Function,For Windows PC/PS3/PS4/Xbox One/Xbox Series S & X/Nintendo Switch With 270°/900° Rotation Button pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring V9 Adjustable Racing Wheel With Clutch Pedals And Shifter,Support Vibration And Headset Function,For Windows PC/PS3/PS4/Xbox One/Xbox Series S & X/Nintendo Switch With 270°/900° Rotation Button to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, V9 Adjustable Racing Wheel With Clutch Pedals And Shifter,Support Vibration And Headset Function,For Windows PC/PS3/PS4/Xbox One/Xbox Series S & X/Nintendo Switch With 270°/900° Rotation Button redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The V9 Adjustable Racing Wheel With Clutch Pedals And Shifter,Support Vibration And Headset Function,For Windows PC/PS3/PS4/Xbox One/Xbox Series S & X/Nintendo Switch With 270°/900° Rotation Button is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with V9 Adjustable Racing Wheel With Clutch Pedals And Shifter,Support Vibration And Headset Function,For Windows PC/PS3/PS4/Xbox One/Xbox Series S & X/Nintendo Switch With 270°/900° Rotation Button.",
        price: 280000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/851989/1.jpg?2854',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PlayStation VR Starter Bundle Pack / VR World Game.',
        description:
          "Embark on an epic adventure with PlayStation VR Starter Bundle Pack / VR World Game.. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PlayStation VR Starter Bundle Pack / VR World Game. pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PlayStation VR Starter Bundle Pack / VR World Game. to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PlayStation VR Starter Bundle Pack / VR World Game. redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PlayStation VR Starter Bundle Pack / VR World Game. is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PlayStation VR Starter Bundle Pack / VR World Game..",
        price: 420000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/386267/1.jpg?5778',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Cyber Play Station 4 500GB Console',
        description:
          "Embark on an epic adventure with Cyber Play Station 4 500GB Console. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Cyber Play Station 4 500GB Console pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Cyber Play Station 4 500GB Console to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Cyber Play Station 4 500GB Console redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Cyber Play Station 4 500GB Console is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Cyber Play Station 4 500GB Console.",
        price: 145500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/892597/1.jpg?2988',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PS4 PRO 1TB Plus Extra Controller Plus Fifa23',
        description:
          "Embark on an epic adventure with PS4 PRO 1TB Plus Extra Controller Plus Fifa23. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PS4 PRO 1TB Plus Extra Controller Plus Fifa23 pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PS4 PRO 1TB Plus Extra Controller Plus Fifa23 to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PS4 PRO 1TB Plus Extra Controller Plus Fifa23 redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PS4 PRO 1TB Plus Extra Controller Plus Fifa23 is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PS4 PRO 1TB Plus Extra Controller Plus Fifa23.",
        price: 255000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/8035042/1.jpg?1783',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PSN Gift Card $75 For US Accounts',
        description:
          "Embark on an epic adventure with PSN Gift Card $75 For US Accounts. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PSN Gift Card $75 For US Accounts pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PSN Gift Card $75 For US Accounts to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PSN Gift Card $75 For US Accounts redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PSN Gift Card $75 For US Accounts is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PSN Gift Card $75 For US Accounts.",
        price: 191250,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/46/798818/1.jpg?5616',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PlayStation 4 Pro 1TB',
        description:
          "Embark on an epic adventure with PlayStation 4 Pro 1TB. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PlayStation 4 Pro 1TB pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PlayStation 4 Pro 1TB to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PlayStation 4 Pro 1TB redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PlayStation 4 Pro 1TB is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PlayStation 4 Pro 1TB.",
        price: 245500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/114209/1.jpg?6884',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Sony 1TB Playstation4 Pro + 1 Extra Controler + Fifa21',
        description:
          "Embark on an epic adventure with Sony 1TB Playstation4 Pro + 1 Extra Controler + Fifa21. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Sony 1TB Playstation4 Pro + 1 Extra Controler + Fifa21 pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Sony 1TB Playstation4 Pro + 1 Extra Controler + Fifa21 to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Sony 1TB Playstation4 Pro + 1 Extra Controler + Fifa21 redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Sony 1TB Playstation4 Pro + 1 Extra Controler + Fifa21 is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Sony 1TB Playstation4 Pro + 1 Extra Controler + Fifa21.",
        price: 230000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/9889942/1.jpg?5172',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PLAYSTATION 4 PRO CONSOLE 1TB',
        description:
          "Embark on an epic adventure with PLAYSTATION 4 PRO CONSOLE 1TB. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PLAYSTATION 4 PRO CONSOLE 1TB pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PLAYSTATION 4 PRO CONSOLE 1TB to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PLAYSTATION 4 PRO CONSOLE 1TB redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PLAYSTATION 4 PRO CONSOLE 1TB is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PLAYSTATION 4 PRO CONSOLE 1TB.",
        price: 210500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/826848/1.jpg?2470',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PS4 Slim 500GB Console Plus Extra Controller',
        description:
          "Embark on an epic adventure with PS4 Slim 500GB Console Plus Extra Controller. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PS4 Slim 500GB Console Plus Extra Controller pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PS4 Slim 500GB Console Plus Extra Controller to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PS4 Slim 500GB Console Plus Extra Controller redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PS4 Slim 500GB Console Plus Extra Controller is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PS4 Slim 500GB Console Plus Extra Controller.",
        price: 180000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/3989942/1.jpg?6736',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Switch Console (OLED Model) - Neon Blue/Neon Red',
        description:
          "Embark on an epic adventure with Switch Console (OLED Model) - Neon Blue/Neon Red. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Switch Console (OLED Model) - Neon Blue/Neon Red pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Switch Console (OLED Model) - Neon Blue/Neon Red to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Switch Console (OLED Model) - Neon Blue/Neon Red redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Switch Console (OLED Model) - Neon Blue/Neon Red is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Switch Console (OLED Model) - Neon Blue/Neon Red.",
        price: 352580,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/5451311/1.jpg?3724',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PSN Gift Card $60 For US Accounts.',
        description:
          "Embark on an epic adventure with PSN Gift Card $60 For US Accounts.. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PSN Gift Card $60 For US Accounts. pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PSN Gift Card $60 For US Accounts. to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PSN Gift Card $60 For US Accounts. redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PSN Gift Card $60 For US Accounts. is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PSN Gift Card $60 For US Accounts..",
        price: 153000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/145949/1.jpg?0250',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Sony PS4 Slim 1TB Console',
        description:
          "Embark on an epic adventure with Sony PS4 Slim 1TB Console. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Sony PS4 Slim 1TB Console pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Sony PS4 Slim 1TB Console to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Sony PS4 Slim 1TB Console redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Sony PS4 Slim 1TB Console is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Sony PS4 Slim 1TB Console.",
        price: 190000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/0817162/1.jpg?0817',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PlayStation 4 Pro Console 4k',
        description:
          "Embark on an epic adventure with PlayStation 4 Pro Console 4k. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PlayStation 4 Pro Console 4k pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PlayStation 4 Pro Console 4k to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PlayStation 4 Pro Console 4k redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PlayStation 4 Pro Console 4k is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PlayStation 4 Pro Console 4k.",
        price: 195000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/4726741/1.jpg?3749',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PlayStation 4 Pro 1TB Console - Black (PS4 Pro)',
        description:
          "Embark on an epic adventure with PlayStation 4 Pro 1TB Console - Black (PS4 Pro). This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PlayStation 4 Pro 1TB Console - Black (PS4 Pro) pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PlayStation 4 Pro 1TB Console - Black (PS4 Pro) to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PlayStation 4 Pro 1TB Console - Black (PS4 Pro) redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PlayStation 4 Pro 1TB Console - Black (PS4 Pro) is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PlayStation 4 Pro 1TB Console - Black (PS4 Pro).",
        price: 250000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/302144/1.jpg?5665',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'G29 Driving Force Racing Wheel/Shifter For PS3 &PS4',
        description:
          "Embark on an epic adventure with G29 Driving Force Racing Wheel/Shifter For PS3 &PS4. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where G29 Driving Force Racing Wheel/Shifter For PS3 &PS4 pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring G29 Driving Force Racing Wheel/Shifter For PS3 &PS4 to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, G29 Driving Force Racing Wheel/Shifter For PS3 &PS4 redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The G29 Driving Force Racing Wheel/Shifter For PS3 &PS4 is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with G29 Driving Force Racing Wheel/Shifter For PS3 &PS4.",
        price: 405000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/8397531/1.jpg?5585',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'G29 Driving Force Racing Wheel/Shifter For PS3 And PS4',
        description:
          "Embark on an epic adventure with G29 Driving Force Racing Wheel/Shifter For PS3 And PS4. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where G29 Driving Force Racing Wheel/Shifter For PS3 And PS4 pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring G29 Driving Force Racing Wheel/Shifter For PS3 And PS4 to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, G29 Driving Force Racing Wheel/Shifter For PS3 And PS4 redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The G29 Driving Force Racing Wheel/Shifter For PS3 And PS4 is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with G29 Driving Force Racing Wheel/Shifter For PS3 And PS4.",
        price: 450000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/542144/1.jpg?7956',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'G29 Driving Force Racing Wheel And Floor Pedals.',
        description:
          "Embark on an epic adventure with G29 Driving Force Racing Wheel And Floor Pedals.. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where G29 Driving Force Racing Wheel And Floor Pedals. pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring G29 Driving Force Racing Wheel And Floor Pedals. to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, G29 Driving Force Racing Wheel And Floor Pedals. redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The G29 Driving Force Racing Wheel And Floor Pedals. is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with G29 Driving Force Racing Wheel And Floor Pedals..",
        price: 380000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/542144/1.jpg?5533',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PlayStation 4 Console 500gb',
        description:
          "Embark on an epic adventure with PlayStation 4 Console 500gb. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PlayStation 4 Console 500gb pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PlayStation 4 Console 500gb to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PlayStation 4 Console 500gb redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PlayStation 4 Console 500gb is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PlayStation 4 Console 500gb.",
        price: 143000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/5993012/1.jpg?8972',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'G29 Driving Force Racing Wheel (PS3 & PS4)',
        description:
          "Embark on an epic adventure with G29 Driving Force Racing Wheel (PS3 & PS4). This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where G29 Driving Force Racing Wheel (PS3 & PS4) pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring G29 Driving Force Racing Wheel (PS3 & PS4) to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, G29 Driving Force Racing Wheel (PS3 & PS4) redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The G29 Driving Force Racing Wheel (PS3 & PS4) is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with G29 Driving Force Racing Wheel (PS3 & PS4).",
        price: 420000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/563689/1.jpg?1336',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Sony PS4 Slim 1TB Console Plus Extra Controller Plus Fifa23',
        description:
          "Embark on an epic adventure with Sony PS4 Slim 1TB Console Plus Extra Controller Plus Fifa23. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Sony PS4 Slim 1TB Console Plus Extra Controller Plus Fifa23 pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Sony PS4 Slim 1TB Console Plus Extra Controller Plus Fifa23 to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Sony PS4 Slim 1TB Console Plus Extra Controller Plus Fifa23 redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Sony PS4 Slim 1TB Console Plus Extra Controller Plus Fifa23 is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Sony PS4 Slim 1TB Console Plus Extra Controller Plus Fifa23.",
        price: 248000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/5427162/1.jpg?0294',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Woman Sweatshirt Mock Neck Knitted Sweat Shirt-Blue',
        description:
          'Embark on an epic adventure with Woman Sweatshirt Mock Neck Knitted Sweat Shirt-Blue. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Woman Sweatshirt Mock Neck Knitted Sweat Shirt-Blue pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 59162,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/7535102/1.jpg?0292',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Classic Turkey Shoe',
        description:
          'Embark on an epic adventure with Classic Turkey Shoe. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Classic Turkey Shoe pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 75000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/8733691/1.jpg?1771',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Ps4 Console 500 GB WITH FIFA23',
        description:
          "Embark on an epic adventure with Ps4 Console 500 GB WITH FIFA23. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Ps4 Console 500 GB WITH FIFA23 pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Ps4 Console 500 GB WITH FIFA23 to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Ps4 Console 500 GB WITH FIFA23 redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Ps4 Console 500 GB WITH FIFA23 is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Ps4 Console 500 GB WITH FIFA23.",
        price: 185000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/2084642/1.jpg?9584',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Yeti USB Microphone – Blackout',
        description:
          "Embark on an epic adventure with Yeti USB Microphone – Blackout. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Yeti USB Microphone – Blackout pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Yeti USB Microphone – Blackout to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Yeti USB Microphone – Blackout redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Yeti USB Microphone – Blackout is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Yeti USB Microphone – Blackout.",
        price: 169900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/040786/1.jpg?9168',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PlayStation 4 Console 500gb + Extra Controller',
        description:
          "Embark on an epic adventure with PlayStation 4 Console 500gb + Extra Controller. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PlayStation 4 Console 500gb + Extra Controller pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PlayStation 4 Console 500gb + Extra Controller to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PlayStation 4 Console 500gb + Extra Controller redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PlayStation 4 Console 500gb + Extra Controller is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PlayStation 4 Console 500gb + Extra Controller.",
        price: 150000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/2800462/1.jpg?9768',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'PlayStation 4 Pro Console 1tb + Extra Controller',
        description:
          "Embark on an epic adventure with PlayStation 4 Pro Console 1tb + Extra Controller. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where PlayStation 4 Pro Console 1tb + Extra Controller pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring PlayStation 4 Pro Console 1tb + Extra Controller to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, PlayStation 4 Pro Console 1tb + Extra Controller redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The PlayStation 4 Pro Console 1tb + Extra Controller is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with PlayStation 4 Pro Console 1tb + Extra Controller.",
        price: 205000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/3800462/1.jpg?0030',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Sony Ps4 Console 500 GB WITH 2 CONTROLLER',
        description:
          "Embark on an epic adventure with Sony Ps4 Console 500 GB WITH 2 CONTROLLER. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Sony Ps4 Console 500 GB WITH 2 CONTROLLER pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Sony Ps4 Console 500 GB WITH 2 CONTROLLER to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Sony Ps4 Console 500 GB WITH 2 CONTROLLER redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Sony Ps4 Console 500 GB WITH 2 CONTROLLER is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Sony Ps4 Console 500 GB WITH 2 CONTROLLER.",
        price: 153000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/0989942/1.jpg?5592',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Yeti Game Streaming USB Microphone Kit',
        description:
          "Embark on an epic adventure with Yeti Game Streaming USB Microphone Kit. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Yeti Game Streaming USB Microphone Kit pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Yeti Game Streaming USB Microphone Kit to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Yeti Game Streaming USB Microphone Kit redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Yeti Game Streaming USB Microphone Kit is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Yeti Game Streaming USB Microphone Kit.",
        price: 179900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/7200852/1.jpg?6055',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Ps4 Pro 1TB Plus Extra Controller Plus Fifa23',
        description:
          "Embark on an epic adventure with Ps4 Pro 1TB Plus Extra Controller Plus Fifa23. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Ps4 Pro 1TB Plus Extra Controller Plus Fifa23 pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Ps4 Pro 1TB Plus Extra Controller Plus Fifa23 to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Ps4 Pro 1TB Plus Extra Controller Plus Fifa23 redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Ps4 Pro 1TB Plus Extra Controller Plus Fifa23 is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Ps4 Pro 1TB Plus Extra Controller Plus Fifa23.",
        price: 250000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/4084642/1.jpg?9608',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'SWITCH RED AND BLUE JOYCONS',
        description:
          "Embark on an epic adventure with SWITCH RED AND BLUE JOYCONS. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where SWITCH RED AND BLUE JOYCONS pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring SWITCH RED AND BLUE JOYCONS to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, SWITCH RED AND BLUE JOYCONS redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The SWITCH RED AND BLUE JOYCONS is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with SWITCH RED AND BLUE JOYCONS.",
        price: 235500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/854317/1.jpg?1248',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Nintendo Switch Lite -Gray,yellow Or Turquoise By Nintendo',
        description:
          "Embark on an epic adventure with Nintendo Switch Lite -Gray,yellow Or Turquoise By Nintendo. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Nintendo Switch Lite -Gray,yellow Or Turquoise By Nintendo pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Nintendo Switch Lite -Gray,yellow Or Turquoise By Nintendo to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Nintendo Switch Lite -Gray,yellow Or Turquoise By Nintendo redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Nintendo Switch Lite -Gray,yellow Or Turquoise By Nintendo is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Nintendo Switch Lite -Gray,yellow Or Turquoise By Nintendo.",
        price: 230000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/380144/1.jpg?8007',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Play Station 5',
        description:
          "Embark on an epic adventure with Play Station 5. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where Play Station 5 pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring Play Station 5 to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, Play Station 5 redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The Play Station 5 is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with Play Station 5.",
        price: 690000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/0309601/1.jpg?3365',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: '1TB Samsung 980 PRO Heatsink SSD M.2 NVMe PCIe 4.0 - PS5',
        description:
          "Embark on an epic adventure with 1TB Samsung 980 PRO Heatsink SSD M.2 NVMe PCIe 4.0 - PS5. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where 1TB Samsung 980 PRO Heatsink SSD M.2 NVMe PCIe 4.0 - PS5 pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring 1TB Samsung 980 PRO Heatsink SSD M.2 NVMe PCIe 4.0 - PS5 to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, 1TB Samsung 980 PRO Heatsink SSD M.2 NVMe PCIe 4.0 - PS5 redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The 1TB Samsung 980 PRO Heatsink SSD M.2 NVMe PCIe 4.0 - PS5 is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with 1TB Samsung 980 PRO Heatsink SSD M.2 NVMe PCIe 4.0 - PS5.",
        price: 140000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/8896302/1.jpg?0717',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Woman Regular Fit Crew Neck Blazer-Green',
        description:
          'Embark on an epic adventure with Woman Regular Fit Crew Neck Blazer-Green. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Woman Regular Fit Crew Neck Blazer-Green pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 59162,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/4535102/1.jpg?0325',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Original Clarks  Work- Shoe',
        description:
          'Embark on an epic adventure with Original Clarks  Work- Shoe. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Original Clarks  Work- Shoe pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 54500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/2716002/1.jpg?4417',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'For PS5 Multi Function Charging Stand Host Cooling Rack Game',
        description:
          "Embark on an epic adventure with For PS5 Multi Function Charging Stand Host Cooling Rack Game. This game sets a new standard with its innovative features and captivating gameplay. Immerse yourself in a world where For PS5 Multi Function Charging Stand Host Cooling Rack Game pushes the boundaries of gaming technology. Say farewell to traditional constraints as this game delivers a seamless, boundary-breaking experience.Experience stunning graphics and lifelike animations that bring For PS5 Multi Function Charging Stand Host Cooling Rack Game to life. The attention to detail is unparalleled, providing an immersive gaming experience that transports you to another reality.With a revolutionary storyline and dynamic gameplay, For PS5 Multi Function Charging Stand Host Cooling Rack Game redefines the gaming landscape. Engage in thrilling battles, solve challenging puzzles, and uncover mysteries that will keep you on the edge of your seat.The For PS5 Multi Function Charging Stand Host Cooling Rack Game is not just a game; it's an interactive masterpiece. Designed to deliver an unparalleled gaming experience, it combines cutting-edge technology with a compelling narrative. Dive into the future of gaming with For PS5 Multi Function Charging Stand Host Cooling Rack Game.",
        price: 105528,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/0226811/1.jpg?6404',
        quantity: 20,
        categoryId: 8,
      },
      {
        name: 'Mens Retro Wedding Party 2-Piece Set Embroidery Men Tang Suit 206 White',
        description:
          'Embark on an epic adventure with Mens Retro Wedding Party 2-Piece Set Embroidery Men Tang Suit 206 White. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Mens Retro Wedding Party 2-Piece Set Embroidery Men Tang Suit 206 White pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 101190,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/6452901/1.jpg?3059',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Bostanten Men Briefcase Business Bag Men  Leather Briefcase 16.5inch Laptop Male Shoulder Bag Crossbody Bag Tote Handbag(black Men Briefcase)',
        description:
          'Embark on an epic adventure with Bostanten Men Briefcase Business Bag Men  Leather Briefcase 16.5inch Laptop Male Shoulder Bag Crossbody Bag Tote Handbag(black Men Briefcase). This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Bostanten Men Briefcase Business Bag Men  Leather Briefcase 16.5inch Laptop Male Shoulder Bag Crossbody Bag Tote Handbag(black Men Briefcase) pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 76100,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/319423/1.jpg?9770',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Mens Retro Wedding Party 2-Piece Set Embroidery Men Tang Suit 206 Wine Red',
        description:
          'Embark on an epic adventure with Mens Retro Wedding Party 2-Piece Set Embroidery Men Tang Suit 206 Wine Red. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Mens Retro Wedding Party 2-Piece Set Embroidery Men Tang Suit 206 Wine Red pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 101190,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/1209901/1.jpg?5065',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Mens Retro Wedding Party 2-Piece Set Embroidery Men Tang Suit 206 Black',
        description:
          'Embark on an epic adventure with Mens Retro Wedding Party 2-Piece Set Embroidery Men Tang Suit 206 Black. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Mens Retro Wedding Party 2-Piece Set Embroidery Men Tang Suit 206 Black pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 101190,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/6452901/1.jpg?3060',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Gold And Silver Hand Chains For Men',
        description:
          'Embark on an epic adventure with Gold And Silver Hand Chains For Men. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Gold And Silver Hand Chains For Men pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 85500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/2376621/1.jpg?9206',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Mens Retro Wedding Party 2-Piece Set Embroidery Men Tang Suit 203 Black',
        description:
          'Embark on an epic adventure with Mens Retro Wedding Party 2-Piece Set Embroidery Men Tang Suit 203 Black. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Mens Retro Wedding Party 2-Piece Set Embroidery Men Tang Suit 203 Black pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 101190,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/6452901/1.jpg?3062',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: "Chains ( Men's Gold Cuban Link Chain )",
        description:
          "Embark on an epic adventure with Chains ( Men's Gold Cuban Link Chain ). This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Chains ( Men's Gold Cuban Link Chain ) pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.",
        price: 61750,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/344667/1.jpg?4349',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: "Costume Homme Popular Clothing Party Stage Men's Suit Groomsmen Regular Fit Tuxedo Gray",
        description:
          "Embark on an epic adventure with Costume Homme Popular Clothing Party Stage Men's Suit Groomsmen Regular Fit Tuxedo Gray. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Costume Homme Popular Clothing Party Stage Men's Suit Groomsmen Regular Fit Tuxedo Gray pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.",
        price: 96490,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/1452901/1.jpg?2931',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Original Cuban Chain Gold',
        description:
          'Embark on an epic adventure with Original Cuban Chain Gold. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Original Cuban Chain Gold pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 66500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/851167/1.jpg?1411',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Bomber Travel Luggage Box - 3sets',
        description:
          'Embark on an epic adventure with Bomber Travel Luggage Box - 3sets. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Bomber Travel Luggage Box - 3sets pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 64749,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/0301122/1.jpg?6868',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Bomber Trolley Luggage - 3 Sets',
        description:
          'Embark on an epic adventure with Bomber Trolley Luggage - 3 Sets. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Bomber Trolley Luggage - 3 Sets pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 69999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/329093/1.jpg?7884',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Woman Paperbag Denim Trousers - Anthracite',
        description:
          'Embark on an epic adventure with Woman Paperbag Denim Trousers - Anthracite. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Woman Paperbag Denim Trousers - Anthracite pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 54702,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/5735412/1.jpg?6056',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: '3 Sets Of Bomber Luggage Bag-pink',
        description:
          'Embark on an epic adventure with 3 Sets Of Bomber Luggage Bag-pink. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where 3 Sets Of Bomber Luggage Bag-pink pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 64999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/620102/1.jpg?2187',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: '5 Sets Luggage Travel Gear',
        description:
          'Embark on an epic adventure with 5 Sets Luggage Travel Gear. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where 5 Sets Luggage Travel Gear pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 139999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/656796/1.jpg?6276',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: '3 Set Of Bomber Travel Luggage Box - Blue',
        description:
          'Embark on an epic adventure with 3 Set Of Bomber Travel Luggage Box - Blue. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where 3 Set Of Bomber Travel Luggage Box - Blue pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 64749,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/709044/1.jpg?2187',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Elas  Leather  Boot',
        description:
          'Embark on an epic adventure with Elas  Leather  Boot. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Elas  Leather  Boot pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 58000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/083308/1.jpg?5085',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Mens Work Boots Leather Steel Toe Shoes Safety Shoes',
        description:
          'Embark on an epic adventure with Mens Work Boots Leather Steel Toe Shoes Safety Shoes. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Mens Work Boots Leather Steel Toe Shoes Safety Shoes pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 52000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/403576/1.jpg?0465',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Men Work Safety Shoes Work Sneakers Steel Toe Cap Puncture-Proof Shoes',
        description:
          'Embark on an epic adventure with Men Work Safety Shoes Work Sneakers Steel Toe Cap Puncture-Proof Shoes. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Men Work Safety Shoes Work Sneakers Steel Toe Cap Puncture-Proof Shoes pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 52000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/5174021/1.jpg?6677',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Traveling Luggage 2-Set',
        description:
          'Embark on an epic adventure with Traveling Luggage 2-Set. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Traveling Luggage 2-Set pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 80000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/255558/1.jpg?4362',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: "2-in-1 Men's Casual Half Shoe -Black & Brown",
        description:
          "Embark on an epic adventure with 2-in-1 Men's Casual Half Shoe -Black & Brown. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where 2-in-1 Men's Casual Half Shoe -Black & Brown pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.",
        price: 55000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/104467/1.jpg?9212',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: "2-in-1 Men's Classy Loafers  - Black & Brown + Free Polish",
        description:
          "Embark on an epic adventure with 2-in-1 Men's Classy Loafers  - Black & Brown + Free Polish. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where 2-in-1 Men's Classy Loafers  - Black & Brown + Free Polish pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.",
        price: 53000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/661417/1.jpg?8329',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: '3 Sets Of Travel Luggage Gear With A Kit',
        description:
          'Embark on an epic adventure with 3 Sets Of Travel Luggage Gear With A Kit. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where 3 Sets Of Travel Luggage Gear With A Kit pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 120000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/736277/1.jpg?9243',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Safety Shoes With Steel Toe Cap Hiking Shoes Work Shoes',
        description:
          'Embark on an epic adventure with Safety Shoes With Steel Toe Cap Hiking Shoes Work Shoes. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Safety Shoes With Steel Toe Cap Hiking Shoes Work Shoes pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 52000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/644585/1.jpg?6448',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'SAMSUNG- GALAXY WATCH 6 CLASSIC-(47mm)- 425MAH BLACK',
        description:
          'Embark on an epic adventure with SAMSUNG- GALAXY WATCH 6 CLASSIC-(47mm)- 425MAH BLACK. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where SAMSUNG- GALAXY WATCH 6 CLASSIC-(47mm)- 425MAH BLACK pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 350000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/4090952/1.jpg?1310',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Travel Luggage Box With Kit Bag',
        description:
          'Embark on an epic adventure with Travel Luggage Box With Kit Bag. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Travel Luggage Box With Kit Bag pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 94999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/1765032/1.jpg?6046',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Men Suits Slim Fit Casual Business Or Wedding Groomsmen (Blazer+Pants+Vest) Royal Blue',
        description:
          'Embark on an epic adventure with Men Suits Slim Fit Casual Business Or Wedding Groomsmen (Blazer+Pants+Vest) Royal Blue. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Men Suits Slim Fit Casual Business Or Wedding Groomsmen (Blazer+Pants+Vest) Royal Blue pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 58999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/0724431/1.jpg?7332',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Men Work Shoes Boots  Safety Shoes Boots Hiking Shoes',
        description:
          'Embark on an epic adventure with Men Work Shoes Boots  Safety Shoes Boots Hiking Shoes. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Men Work Shoes Boots  Safety Shoes Boots Hiking Shoes pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 58000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/104208/1.jpg?3458',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Luggage Classic 20 Inch',
        description:
          'Embark on an epic adventure with Luggage Classic 20 Inch. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Luggage Classic 20 Inch pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 85000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/9970781/1.jpg?4024',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Executive Pure Leather Clarks Chain Shoe',
        description:
          'Embark on an epic adventure with Executive Pure Leather Clarks Chain Shoe. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Executive Pure Leather Clarks Chain Shoe pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 54500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/6296431/1.jpg?7197',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Classic Slip On Cooperate Loafers  Shoe-Black',
        description:
          'Embark on an epic adventure with Classic Slip On Cooperate Loafers  Shoe-Black. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Classic Slip On Cooperate Loafers  Shoe-Black pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 58999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/3931331/1.jpg?4285',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Originals Sneakers Stan Smith Bold Women',
        description:
          'Embark on an epic adventure with Originals Sneakers Stan Smith Bold Women. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Originals Sneakers Stan Smith Bold Women pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 69010,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/313829/1.jpg?9965',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: ' Bumber Trolley Box- 3sets',
        description:
          'Embark on an epic adventure with  Bumber Trolley Box- 3sets. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where  Bumber Trolley Box- 3sets pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 69999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/861326/1.jpg?6416',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Man Regular Fit Polo Neck Woven Long Sleeve Shirt - Beige',
        description:
          'Embark on an epic adventure with Man Regular Fit Polo Neck Woven Long Sleeve Shirt - Beige. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Man Regular Fit Polo Neck Woven Long Sleeve Shirt - Beige pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 66429,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/9804242/1.jpg?1304',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Peoria Trolley Backpack',
        description:
          'Embark on an epic adventure with Peoria Trolley Backpack. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Peoria Trolley Backpack pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 64350,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/1500701/1.jpg?2235',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Originals Sneakers Superstar Women',
        description:
          'Embark on an epic adventure with Originals Sneakers Superstar Women. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Originals Sneakers Superstar Women pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 59340,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/313829/1.jpg?9725',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Roller Box Set Of 3 Small,medium And Large - PINK',
        description:
          'Embark on an epic adventure with Roller Box Set Of 3 Small,medium And Large - PINK. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Roller Box Set Of 3 Small,medium And Large - PINK pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 64999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/100924/1.jpg?1894',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Elegant Chelsea Boots Men Shoes Superior Quality Snakeskin Pattern Leather Boots High Top Slip-on Dress Formal Boots Luxury Male Shoes Brown',
        description:
          'Embark on an epic adventure with Elegant Chelsea Boots Men Shoes Superior Quality Snakeskin Pattern Leather Boots High Top Slip-on Dress Formal Boots Luxury Male Shoes Brown. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Elegant Chelsea Boots Men Shoes Superior Quality Snakeskin Pattern Leather Boots High Top Slip-on Dress Formal Boots Luxury Male Shoes Brown pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 54694,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/2737291/1.jpg?9304',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Aligned Luggage - 1pc',
        description:
          'Embark on an epic adventure with Aligned Luggage - 1pc. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Aligned Luggage - 1pc pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 70000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/515777/1.jpg?7075',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Safety Work Boots For Men Waterproof Steel Toe Cap Boots',
        description:
          'Embark on an epic adventure with Safety Work Boots For Men Waterproof Steel Toe Cap Boots. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Safety Work Boots For Men Waterproof Steel Toe Cap Boots pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 52000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/9790311/1.jpg?5581',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Original Clarks Coperate Shoe',
        description:
          'Embark on an epic adventure with Original Clarks Coperate Shoe. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Original Clarks Coperate Shoe pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 52000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/6717951/1.jpg?4662',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Bomber Luggage - 3 Sets',
        description:
          'Embark on an epic adventure with Bomber Luggage - 3 Sets. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Bomber Luggage - 3 Sets pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 69999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/771336/1.jpg?8285',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Signature Sneaker',
        description:
          'Embark on an epic adventure with Signature Sneaker. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Signature Sneaker pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 72000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/46/0348852/1.jpg?4952',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Trolley Luggage Box - 5 Sets',
        description:
          'Embark on an epic adventure with Trolley Luggage Box - 5 Sets. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Trolley Luggage Box - 5 Sets pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 139999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/574324/1.jpg?1266',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Originals Sneakers Superstar',
        description:
          'Embark on an epic adventure with Originals Sneakers Superstar. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Originals Sneakers Superstar pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 76740,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/959568/1.jpg?3249',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Winter Boots Men Safety Shoes Male Steel Toe Shoes',
        description:
          'Embark on an epic adventure with Winter Boots Men Safety Shoes Male Steel Toe Shoes. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Winter Boots Men Safety Shoes Male Steel Toe Shoes pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 52000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/961966/1.jpg?2070',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Black  Angelo Sneaker',
        description:
          'Embark on an epic adventure with Black  Angelo Sneaker. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Black  Angelo Sneaker pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 65000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/177497/1.jpg?6832',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Executive New Clark Lace Up Work Shoe',
        description:
          'Embark on an epic adventure with Executive New Clark Lace Up Work Shoe. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Executive New Clark Lace Up Work Shoe pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 54500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/0728712/1.jpg?1049',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Travel Bag With 4 Wheels - 3 Sets',
        description:
          'Embark on an epic adventure with Travel Bag With 4 Wheels - 3 Sets. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Travel Bag With 4 Wheels - 3 Sets pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 99999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/901464/1.jpg?6812',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Leather Strong Boot',
        description:
          'Embark on an epic adventure with Leather Strong Boot. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Leather Strong Boot pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 58000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/973308/1.jpg?8564',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Luxury Good Partner Travel Gear',
        description:
          'Embark on an epic adventure with Luxury Good Partner Travel Gear. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Luxury Good Partner Travel Gear pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 165000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/2954712/1.jpg?7951',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Luxury Quality Suit Trousers - Multi Colour',
        description:
          'Embark on an epic adventure with Luxury Quality Suit Trousers - Multi Colour. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Luxury Quality Suit Trousers - Multi Colour pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 71059,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/8837781/1.jpg?0126',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Breathable Mesh Safety Shoes Men Light  Steel Toe Work Boots',
        description:
          'Embark on an epic adventure with Breathable Mesh Safety Shoes Men Light  Steel Toe Work Boots. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Breathable Mesh Safety Shoes Men Light  Steel Toe Work Boots pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 52000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/478785/1.jpg?1486',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Mens Fashion Winter Long Puffer Down Jacket Coat Outerwear With Hood',
        description:
          'Embark on an epic adventure with Mens Fashion Winter Long Puffer Down Jacket Coat Outerwear With Hood. This collection sets a new standard with its innovative designs and captivating styles. Immerse yourself in a world where Mens Fashion Winter Long Puffer Down Jacket Coat Outerwear With Hood pushes the boundaries of fashion and style. Say farewell to traditional constraints as this collection delivers a seamless, boundary-breaking experience.',
        price: 66000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/047491/1.jpg?2055',
        quantity: 20,
        categoryId: 6,
      },
      {
        name: 'Golden Penny Soya Oil 5 Litres',
        description:
          'Embark on a captivating journey through the world of groceries with Golden Penny Soya Oil 5 Litres. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Golden Penny Soya Oil 5 Litres transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 8140,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/2865202/1.jpg?8853',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Ice Cream 80GmX1',
        description:
          'Embark on a captivating journey through the world of groceries with Ice Cream 80GmX1. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Ice Cream 80GmX1 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 805,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/6362502/1.jpg?3979',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Choco Spread 15g x10',
        description:
          'Embark on a captivating journey through the world of groceries with Choco Spread 15g x10. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Choco Spread 15g x10 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 4750,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/8617242/1.jpg?9922',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Finest Icing Sugar 500g x1',
        description:
          'Embark on a captivating journey through the world of groceries with Finest Icing Sugar 500g x1. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Finest Icing Sugar 500g x1 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 860,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/6732852/1.jpg?3617',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Soya Oil 1.4L',
        description:
          'Embark on a captivating journey through the world of groceries with Soya Oil 1.4L. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Soya Oil 1.4L transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 2473,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/9028952/1.jpg?0532',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Finest Icing Sugar 5kg x1',
        description:
          'Embark on a captivating journey through the world of groceries with Finest Icing Sugar 5kg x1. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Finest Icing Sugar 5kg x1 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 7900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/6732852/1.jpg?4167',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: "Plantain Flour 1kg (Endy'S)",
        description:
          "Embark on a captivating journey through the world of groceries with Plantain Flour 1kg (Endy'S). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Plantain Flour 1kg (Endy'S) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.",
        price: 3135,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/098228/1.jpg?5169',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Milk Custard Powder (3-In-1) 500g x1',
        description:
          'Embark on a captivating journey through the world of groceries with Milk Custard Powder (3-In-1) 500g x1. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Milk Custard Powder (3-In-1) 500g x1 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 2840,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/6732852/1.jpg?7228',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Regular Chicken Flavour 70g X 40',
        description:
          'Embark on a captivating journey through the world of groceries with Regular Chicken Flavour 70g X 40. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Regular Chicken Flavour 70g X 40 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 5300,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/885728/1.jpg?2868',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Onion Chicken 70g x 40',
        description:
          'Embark on a captivating journey through the world of groceries with Onion Chicken 70g x 40. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Onion Chicken 70g x 40 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 5700,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/885728/1.jpg?3136',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Rice 5kg',
        description:
          'Embark on a captivating journey through the world of groceries with Rice 5kg. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Rice 5kg transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 5990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/841389/1.jpg?5765',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Golden Morn Grainsmart 600g',
        description:
          'Embark on a captivating journey through the world of groceries with Golden Morn Grainsmart 600g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Golden Morn Grainsmart 600g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 1545,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/4801812/1.jpg?1197',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Regular Chicken Noodles 100g X 40',
        description:
          'Embark on a captivating journey through the world of groceries with Regular Chicken Noodles 100g X 40. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Regular Chicken Noodles 100g X 40 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 7200,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/885728/1.jpg?2613',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Rice 750g',
        description:
          'Embark on a captivating journey through the world of groceries with Rice 750g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Rice 750g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 952,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/841389/1.jpg?5049',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Crunchy Cereals 320g',
        description:
          'Embark on a captivating journey through the world of groceries with Crunchy Cereals 320g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Crunchy Cereals 320g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 1481,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/816178/1.jpg?0538',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Pop Up Strawberry X1 (Sweetco)',
        description:
          'Embark on a captivating journey through the world of groceries with Pop Up Strawberry X1 (Sweetco). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Pop Up Strawberry X1 (Sweetco) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 975,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/310928/1.jpg?7038',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Corn Flakes 300g Box',
        description:
          'Embark on a captivating journey through the world of groceries with Corn Flakes 300g Box. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Corn Flakes 300g Box transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 1400,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/095728/1.jpg?1256',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Chicken Hungryman 180g x 24',
        description:
          'Embark on a captivating journey through the world of groceries with Chicken Hungryman 180g x 24. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Chicken Hungryman 180g x 24 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 7600,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/885728/1.jpg?4223',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Go Grains Original 450g',
        description:
          'Embark on a captivating journey through the world of groceries with Go Grains Original 450g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Go Grains Original 450g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 885,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/8049932/1.jpg?6240',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Mayonnaise 29Oz (Glass) X1',
        description:
          'Embark on a captivating journey through the world of groceries with Mayonnaise 29Oz (Glass) X1. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Mayonnaise 29Oz (Glass) X1 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 2725,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/344658/1.jpg?5988',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Wafer 40g x 12 ( Vanilla )',
        description:
          'Embark on a captivating journey through the world of groceries with Wafer 40g x 12 ( Vanilla ). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Wafer 40g x 12 ( Vanilla ) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 725,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/051248/1.jpg?2624',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Rigatoni Pasta 500g',
        description:
          'Embark on a captivating journey through the world of groceries with Rigatoni Pasta 500g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Rigatoni Pasta 500g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 1250,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/2510832/1.jpg?1741',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Ragati Curve 500g x1',
        description:
          'Embark on a captivating journey through the world of groceries with Ragati Curve 500g x1. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Ragati Curve 500g x1 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 1160,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/7542032/1.jpg?3813',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Belle Full Pack 280g x 16',
        description:
          'Embark on a captivating journey through the world of groceries with Belle Full Pack 280g x 16. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Belle Full Pack 280g x 16 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 7700,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/885728/1.jpg?3887',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Sweetend Coconut Flakes 500g',
        description:
          'Embark on a captivating journey through the world of groceries with Sweetend Coconut Flakes 500g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Sweetend Coconut Flakes 500g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 2800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/553297/1.jpg?2793',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Penne Lisce Pasta 500g',
        description:
          'Embark on a captivating journey through the world of groceries with Penne Lisce Pasta 500g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Penne Lisce Pasta 500g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 1315,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/2510832/1.jpg?1593',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Zwan Chicken Luncheon Meat 340g x1',
        description:
          'Embark on a captivating journey through the world of groceries with Zwan Chicken Luncheon Meat 340g x1. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Zwan Chicken Luncheon Meat 340g x1 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 2300,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/885118/1.jpg?7416',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Wafer 80g x 12 ( Chocolate )',
        description:
          'Embark on a captivating journey through the world of groceries with Wafer 80g x 12 ( Chocolate ). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Wafer 80g x 12 ( Chocolate ) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 1750,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/051248/1.jpg?3174',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Golden Morn Grainsmart 30g x100',
        description:
          'Embark on a captivating journey through the world of groceries with Golden Morn Grainsmart 30g x100. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Golden Morn Grainsmart 30g x100 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 10155,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/4801812/1.jpg?6692',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Pasta Spaghetti',
        description:
          'Embark on a captivating journey through the world of groceries with Pasta Spaghetti. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Pasta Spaghetti transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 1500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/635035/1.jpg?9490',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Fruit & Nut Mix 500g (Reelfruit)',
        description:
          'Embark on a captivating journey through the world of groceries with Fruit & Nut Mix 500g (Reelfruit). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Fruit & Nut Mix 500g (Reelfruit) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 4630,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/553297/1.jpg?2945',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Sauce Original 60ml x1 (Tabasco)',
        description:
          'Embark on a captivating journey through the world of groceries with Sauce Original 60ml x1 (Tabasco). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Sauce Original 60ml x1 (Tabasco) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 1515,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/366128/1.jpg?4645',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: "Wheat Flour 2Kg X1 (Endy'S)",
        description:
          "Embark on a captivating journey through the world of groceries with Wheat Flour 2Kg X1 (Endy'S). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Wheat Flour 2Kg X1 (Endy'S) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.",
        price: 2690,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/098228/1.jpg?7322',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: "Ground Rice 2Kg X1 (Endy'S)",
        description:
          "Embark on a captivating journey through the world of groceries with Ground Rice 2Kg X1 (Endy'S). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Ground Rice 2Kg X1 (Endy'S) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.",
        price: 3360,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/098228/1.jpg?3575',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Dried Bitterleaf 50g Jar (Chat Foods)',
        description:
          'Embark on a captivating journey through the world of groceries with Dried Bitterleaf 50g Jar (Chat Foods). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Dried Bitterleaf 50g Jar (Chat Foods) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 850,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/906628/1.jpg?8135',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: "Ground Rice 1Kg X1 (Endy'S)",
        description:
          "Embark on a captivating journey through the world of groceries with Ground Rice 1Kg X1 (Endy'S). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Ground Rice 1Kg X1 (Endy'S) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.",
        price: 1680,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/098228/1.jpg?3547',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Super Extra Nuts Tin 300g (Castania)',
        description:
          'Embark on a captivating journey through the world of groceries with Super Extra Nuts Tin 300g (Castania). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Super Extra Nuts Tin 300g (Castania) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 5200,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/443248/1.jpg?0546',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Manuka Honey Multifloral, MGO 80+, 8.75Oz 250G',
        description:
          'Embark on a captivating journey through the world of groceries with Manuka Honey Multifloral, MGO 80+, 8.75Oz 250G. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Manuka Honey Multifloral, MGO 80+, 8.75Oz 250G transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 22999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/6649162/1.jpg?1019',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Nutritional Yeast Flakes 3.6 Oz. 102g',
        description:
          'Embark on a captivating journey through the world of groceries with Nutritional Yeast Flakes 3.6 Oz. 102g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Nutritional Yeast Flakes 3.6 Oz. 102g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 12499,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/7509162/1.jpg?2560',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Cooking Oil – 3L',
        description:
          'Embark on a captivating journey through the world of groceries with Cooking Oil – 3L. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Cooking Oil – 3L transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 9990,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/3665081/1.jpg?2664',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Spice Cameroun Pepper, 250g Jar X3',
        description:
          'Embark on a captivating journey through the world of groceries with Spice Cameroun Pepper, 250g Jar X3. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Spice Cameroun Pepper, 250g Jar X3 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 7470,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/811068/1.jpg?4403',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Pistachios 170g Tin',
        description:
          'Embark on a captivating journey through the world of groceries with Pistachios 170g Tin. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Pistachios 170g Tin transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 4625,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/443248/1.jpg?1824',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Apricot Dry 350g',
        description:
          'Embark on a captivating journey through the world of groceries with Apricot Dry 350g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Apricot Dry 350g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 5650,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/443248/1.jpg?8480',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Mixed Kernels Tin 450g',
        description:
          'Embark on a captivating journey through the world of groceries with Mixed Kernels Tin 450g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Mixed Kernels Tin 450g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 12590,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/443248/1.jpg?9174',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'LAMIS PISTACHIO 250g x1',
        description:
          'Embark on a captivating journey through the world of groceries with LAMIS PISTACHIO 250g x1. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where LAMIS PISTACHIO 250g x1 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 9010,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/443248/1.jpg?4000',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: "Moons & Star 400g (Kellogg's carton)",
        description:
          "Embark on a captivating journey through the world of groceries with Moons & Star 400g (Kellogg's carton). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Moons & Star 400g (Kellogg's carton) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.",
        price: 1640,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/095728/1.jpg?9516',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Spice Turmeric Powder 250g x5',
        description:
          'Embark on a captivating journey through the world of groceries with Spice Turmeric Powder 250g x5. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Spice Turmeric Powder 250g x5 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 5400,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/811068/1.jpg?4549',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Cabin Sweetened Biscuit × 2 Packs',
        description:
          'Embark on a captivating journey through the world of groceries with Cabin Sweetened Biscuit × 2 Packs. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Cabin Sweetened Biscuit × 2 Packs transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 6000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/3891162/1.jpg?4924',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Beloxxi LUXURY CRACKERS 300G X12PKTS',
        description:
          'Embark on a captivating journey through the world of groceries with Beloxxi LUXURY CRACKERS 300G X12PKTS. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Beloxxi LUXURY CRACKERS 300G X12PKTS transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 4190,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/325039/1.jpg?5980',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Extra Nuts Tin 450g',
        description:
          'Embark on a captivating journey through the world of groceries with Extra Nuts Tin 450g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Extra Nuts Tin 450g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 7275,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/443248/1.jpg?9211',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'CASTANIA SUPER EXTRA TIN 450G x1',
        description:
          'Embark on a captivating journey through the world of groceries with CASTANIA SUPER EXTRA TIN 450G x1. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where CASTANIA SUPER EXTRA TIN 450G x1 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 8470,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/443248/1.jpg?9192',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: "Plantain Flour 2Kg X1 (Endy'S)",
        description:
          "Embark on a captivating journey through the world of groceries with Plantain Flour 2Kg X1 (Endy'S). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Plantain Flour 2Kg X1 (Endy'S) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.",
        price: 6265,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/098228/2.jpg?7878',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Unbleached White All-Purpose Baking Flour,5LB',
        description:
          'Embark on a captivating journey through the world of groceries with Unbleached White All-Purpose Baking Flour,5LB. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Unbleached White All-Purpose Baking Flour,5LB transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 10500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/0440262/1.jpg?2413',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'MGO 80 + Manuka Honey,Certified 100% Pure New Zealand 250G',
        description:
          'Embark on a captivating journey through the world of groceries with MGO 80 + Manuka Honey,Certified 100% Pure New Zealand 250G. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where MGO 80 + Manuka Honey,Certified 100% Pure New Zealand 250G transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 22999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/0140262/1.jpg?9570',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Argan Oil (Essential Oil) 30ml',
        description:
          'Embark on a captivating journey through the world of groceries with Argan Oil (Essential Oil) 30ml. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Argan Oil (Essential Oil) 30ml transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 2200,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/845849/1.jpg?9731',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Paleo Baking Flour, 32ounce 907g',
        description:
          'Embark on a captivating journey through the world of groceries with Paleo Baking Flour, 32ounce 907g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Paleo Baking Flour, 32ounce 907g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 12500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/9660262/1.jpg?0644',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Fruit And Vegetables Capsule For Gastrointestinal Health',
        description:
          'Embark on a captivating journey through the world of groceries with Fruit And Vegetables Capsule For Gastrointestinal Health. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Fruit And Vegetables Capsule For Gastrointestinal Health transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 5900,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/6731152/1.jpg?5235',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Organic Coconut Flour, 1 Lb 453g',
        description:
          'Embark on a captivating journey through the world of groceries with Organic Coconut Flour, 1 Lb 453g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Organic Coconut Flour, 1 Lb 453g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 12499,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/4714062/1.jpg?5826',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Teff Flour 20 Ounce 567g',
        description:
          'Embark on a captivating journey through the world of groceries with Teff Flour 20 Ounce 567g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Teff Flour 20 Ounce 567g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 8500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/7660262/1.jpg?1149',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Dark Chocolate Digestives Biscuits 2pcs',
        description:
          'Embark on a captivating journey through the world of groceries with Dark Chocolate Digestives Biscuits 2pcs. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Dark Chocolate Digestives Biscuits 2pcs transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 10000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/6244621/1.jpg?6523',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Pampas Grass, Dried Flowers,Pampas Grass Velvet for Flower H',
        description:
          'Embark on a captivating journey through the world of groceries with Pampas Grass, Dried Flowers,Pampas Grass Velvet for Flower H. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Pampas Grass, Dried Flowers,Pampas Grass Velvet for Flower H transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 11362,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/7864262/1.jpg?6820',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Women Zipper Closure Small Cosmetic Case Makeup Bag -',
        description:
          'Embark on a captivating journey through the world of groceries with Women Zipper Closure Small Cosmetic Case Makeup Bag -. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Women Zipper Closure Small Cosmetic Case Makeup Bag - transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 3763,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/8706422/1.jpg?6477',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Tablets Protective Cover PU Leather Tablets Protections with BT Keyboard Replacement for Sam-sung Ga-laxy Tab A7 10.4 (T500/T505)',
        description:
          'Embark on a captivating journey through the world of groceries with Tablets Protective Cover PU Leather Tablets Protections with BT Keyboard Replacement for Sam-sung Ga-laxy Tab A7 10.4 (T500/T505). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Tablets Protective Cover PU Leather Tablets Protections with BT Keyboard Replacement for Sam-sung Ga-laxy Tab A7 10.4 (T500/T505) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 41160,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/1650562/1.jpg?2277',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '1000W Waffle Maker 5 Heart-Shaped Waffles Electric Waffler Griddle Iron',
        description:
          'Embark on a captivating journey through the world of groceries with 1000W Waffle Maker 5 Heart-Shaped Waffles Electric Waffler Griddle Iron. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 1000W Waffle Maker 5 Heart-Shaped Waffles Electric Waffler Griddle Iron transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 55860,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/8223762/1.jpg?5076',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Paleo Baking Flour, 16ounce 454g',
        description:
          'Embark on a captivating journey through the world of groceries with Paleo Baking Flour, 16ounce 454g. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Paleo Baking Flour, 16ounce 454g transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 8500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/1607262/1.jpg?9247',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Paleo Baking Flour, 16ounce 454g X 4',
        description:
          'Embark on a captivating journey through the world of groceries with Paleo Baking Flour, 16ounce 454g X 4. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Paleo Baking Flour, 16ounce 454g X 4 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 29500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/7200362/1.jpg?1944',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Raw Monofloral Manuka Honey KFactor 16, 340g Squeeze Bot',
        description:
          'Embark on a captivating journey through the world of groceries with Raw Monofloral Manuka Honey KFactor 16, 340g Squeeze Bot. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Raw Monofloral Manuka Honey KFactor 16, 340g Squeeze Bot transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 25499,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/4576032/1.jpg?8515',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Peach Measuring Lap Plastic Diameter Instrument Gauge Orange Fruit Circle Fruits Measurement',
        description:
          'Embark on a captivating journey through the world of groceries with Peach Measuring Lap Plastic Diameter Instrument Gauge Orange Fruit Circle Fruits Measurement. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Peach Measuring Lap Plastic Diameter Instrument Gauge Orange Fruit Circle Fruits Measurement transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 9800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/0671462/1.jpg?7487',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Pampas Grass, Dried Flowers,Pampas Grass Velvet for Flower',
        description:
          'Embark on a captivating journey through the world of groceries with Pampas Grass, Dried Flowers,Pampas Grass Velvet for Flower. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Pampas Grass, Dried Flowers,Pampas Grass Velvet for Flower transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 9800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/0518232/1.jpg?8327',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Pampas Grass,Pampas Grass Decoration Dried Flowers,Pampas',
        description:
          'Embark on a captivating journey through the world of groceries with Pampas Grass,Pampas Grass Decoration Dried Flowers,Pampas. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Pampas Grass,Pampas Grass Decoration Dried Flowers,Pampas transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 9829,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/3610752/1.jpg?8255',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'WitEden & Oskar Mixup 4x4x4 Magic Cube 4x4 Cubo Magico Professional Speed Neo Cube Puzzle Kostka Antistress Toys For Boy',
        description:
          'Embark on a captivating journey through the world of groceries with WitEden & Oskar Mixup 4x4x4 Magic Cube 4x4 Cubo Magico Professional Speed Neo Cube Puzzle Kostka Antistress Toys For Boy. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where WitEden & Oskar Mixup 4x4x4 Magic Cube 4x4 Cubo Magico Professional Speed Neo Cube Puzzle Kostka Antistress Toys For Boy transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 46060,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/7106762/1.jpg?3926',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Hand Fingers Hands Free  Finger  Holder - Earth',
        description:
          'Embark on a captivating journey through the world of groceries with Hand Fingers Hands Free  Finger  Holder - Earth. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Hand Fingers Hands Free  Finger  Holder - Earth transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 1819,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/2332552/1.jpg?9046',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'D7WF Cute Ladybug Wings Fairy for Kids Girls Stage-performance Halloween- Costume',
        description:
          'Embark on a captivating journey through the world of groceries with D7WF Cute Ladybug Wings Fairy for Kids Girls Stage-performance Halloween- Costume. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where D7WF Cute Ladybug Wings Fairy for Kids Girls Stage-performance Halloween- Costume transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 12740,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/1399762/1.jpg?9367',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'CAMPINGMOON Large Capacity Canvas Bag Multifunctional Picnic Tools Tableware Cups Storage Packs Outdoor Camping Handbags',
        description:
          'Embark on a captivating journey through the world of groceries with CAMPINGMOON Large Capacity Canvas Bag Multifunctional Picnic Tools Tableware Cups Storage Packs Outdoor Camping Handbags. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where CAMPINGMOON Large Capacity Canvas Bag Multifunctional Picnic Tools Tableware Cups Storage Packs Outdoor Camping Handbags transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 57820,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/2199762/1.jpg?9207',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '55 Pcs Reed Pampas Set Dried Flower for Arrangements Home',
        description:
          'Embark on a captivating journey through the world of groceries with 55 Pcs Reed Pampas Set Dried Flower for Arrangements Home. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 55 Pcs Reed Pampas Set Dried Flower for Arrangements Home transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 4949,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/8406652/1.jpg?4945',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '4X Smoking  Hand Finger Ring Smoker  Stand Rack',
        description:
          'Embark on a captivating journey through the world of groceries with 4X Smoking  Hand Finger Ring Smoker  Stand Rack. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 4X Smoking  Hand Finger Ring Smoker  Stand Rack transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 12795,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/0134042/1.jpg?4753',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'qiyi warrior s Magic Cube Colorful stickerless speed 3x3 cube antistress 3x3x3 Learning&Educational Puzzle Cubes Toys',
        description:
          'Embark on a captivating journey through the world of groceries with qiyi warrior s Magic Cube Colorful stickerless speed 3x3 cube antistress 3x3x3 Learning&Educational Puzzle Cubes Toys. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where qiyi warrior s Magic Cube Colorful stickerless speed 3x3 cube antistress 3x3x3 Learning&Educational Puzzle Cubes Toys transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 25480,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/7699762/1.jpg?9772',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Grain-Free Flour 227 G',
        description:
          'Embark on a captivating journey through the world of groceries with Grain-Free Flour 227 G. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Grain-Free Flour 227 G transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 7000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/6479262/1.jpg?9177',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '2xSmoking Cigarette Hand Finger Ring Smoker Cigarette Stand Rack',
        description:
          'Embark on a captivating journey through the world of groceries with 2xSmoking Cigarette Hand Finger Ring Smoker Cigarette Stand Rack. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 2xSmoking Cigarette Hand Finger Ring Smoker Cigarette Stand Rack transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 10801,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/5832902/1.jpg?6776',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Ashwagandha Extract 300mg, 50 Capsules',
        description:
          'Embark on a captivating journey through the world of groceries with Ashwagandha Extract 300mg, 50 Capsules. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Ashwagandha Extract 300mg, 50 Capsules transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 8500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/7699221/1.jpg?6141',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: "Large Women's Batrobe Casual Dress Long Robe 204520462048",
        description:
          "Embark on a captivating journey through the world of groceries with Large Women's Batrobe Casual Dress Long Robe 204520462048. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Large Women's Batrobe Casual Dress Long Robe 204520462048 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.",
        price: 113100,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/6619232/1.jpg?5291',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: "CURREN Karien 8225 men's large belt sports watch Europe and the United States watch large dial Blackshellbrownbelt",
        description:
          "Embark on a captivating journey through the world of groceries with CURREN Karien 8225 men's large belt sports watch Europe and the United States watch large dial Blackshellbrownbelt. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where CURREN Karien 8225 men's large belt sports watch Europe and the United States watch large dial Blackshellbrownbelt transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.",
        price: 13800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/0897752/1.jpg?7559',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Dark Chocolate Digestives Biscuits',
        description:
          'Embark on a captivating journey through the world of groceries with Dark Chocolate Digestives Biscuits. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Dark Chocolate Digestives Biscuits transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 5500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/6244621/1.jpg?5392',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: "20223 women's pure color button stitching fashion casual long-sleeved swallowtail dress",
        description:
          "Embark on a captivating journey through the world of groceries with 20223 women's pure color button stitching fashion casual long-sleeved swallowtail dress. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 20223 women's pure color button stitching fashion casual long-sleeved swallowtail dress transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.",
        price: 47920,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/4020722/1.jpg?4698',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: "3203 Muslim women's wear autumn and winter women's wear early autumn dress long-sleeved printed",
        description:
          "Embark on a captivating journey through the world of groceries with 3203 Muslim women's wear autumn and winter women's wear early autumn dress long-sleeved printed. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 3203 Muslim women's wear autumn and winter women's wear early autumn dress long-sleeved printed transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.",
        price: 71200,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/1320722/1.jpg?5224',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Raw Monofloral Manuka Honey KFactor 16,340grm Squeeze Bottle',
        description:
          'Embark on a captivating journey through the world of groceries with Raw Monofloral Manuka Honey KFactor 16,340grm Squeeze Bottle. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Raw Monofloral Manuka Honey KFactor 16,340grm Squeeze Bottle transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 24499,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/8766032/1.jpg?1081',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: "Hot Selling Office Business People Formal Long Pants Men's Pants New Three Styles Pattern Checked Pants Casual Casual Size",
        description:
          "Embark on a captivating journey through the world of groceries with Hot Selling Office Business People Formal Long Pants Men's Pants New Three Styles Pattern Checked Pants Casual Casual Size. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Hot Selling Office Business People Formal Long Pants Men's Pants New Three Styles Pattern Checked Pants Casual Casual Size transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.",
        price: 9826,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/2260162/1.jpg?1578',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '2xSmoking  Hand Finger Ring Smoker  Stand Rack Earth',
        description:
          'Embark on a captivating journey through the world of groceries with 2xSmoking  Hand Finger Ring Smoker  Stand Rack Earth. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 2xSmoking  Hand Finger Ring Smoker  Stand Rack Earth transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 6799,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/4234042/1.jpg?5590',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'QiYi NEW  Gear Sandwich Magic Cubes 3X3X3 Speed Cube Magico Puzzle Toy For Children Kid Gift Toy QiYi Gear Sandwich Magic Cubes',
        description:
          'Embark on a captivating journey through the world of groceries with QiYi NEW  Gear Sandwich Magic Cubes 3X3X3 Speed Cube Magico Puzzle Toy For Children Kid Gift Toy QiYi Gear Sandwich Magic Cubes. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where QiYi NEW  Gear Sandwich Magic Cubes 3X3X3 Speed Cube Magico Puzzle Toy For Children Kid Gift Toy QiYi Gear Sandwich Magic Cubes transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 41160,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/0995762/1.jpg?3436',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Waist Pack, Large Capacity Waterproof Motorcycle Drop Leg Bag for Men Adjustable Oxford Thigh Pack with Reflective Strips Dark Grey',
        description:
          'Embark on a captivating journey through the world of groceries with Waist Pack, Large Capacity Waterproof Motorcycle Drop Leg Bag for Men Adjustable Oxford Thigh Pack with Reflective Strips Dark Grey. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Waist Pack, Large Capacity Waterproof Motorcycle Drop Leg Bag for Men Adjustable Oxford Thigh Pack with Reflective Strips Dark Grey transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 23762,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/4473162/1.jpg?1913',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '3X Smoking  Hand Finger Ring Smoker  Stand Rack',
        description:
          'Embark on a captivating journey through the world of groceries with 3X Smoking  Hand Finger Ring Smoker  Stand Rack. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 3X Smoking  Hand Finger Ring Smoker  Stand Rack transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 9797,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/2234042/1.jpg?5639',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Nuobixing S17 small bee loudspeaker teacher outdoor publicity tour guide lectures sell teaching special small speakers Wireless S17 Rose Gold',
        description:
          'Embark on a captivating journey through the world of groceries with Nuobixing S17 small bee loudspeaker teacher outdoor publicity tour guide lectures sell teaching special small speakers Wireless S17 Rose Gold. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Nuobixing S17 small bee loudspeaker teacher outdoor publicity tour guide lectures sell teaching special small speakers Wireless S17 Rose Gold transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 13800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/2897752/1.jpg?7923',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '2Pcs Elegant Smoker  Finger Holder Free Hand 16mm 17mm Ring',
        description:
          'Embark on a captivating journey through the world of groceries with 2Pcs Elegant Smoker  Finger Holder Free Hand 16mm 17mm Ring. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 2Pcs Elegant Smoker  Finger Holder Free Hand 16mm 17mm Ring transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 9198,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/7499352/1.jpg?9553',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Holders',
        description:
          'Embark on a captivating journey through the world of groceries with Holders. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Holders transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 5001,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/6134042/1.jpg?5041',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '3x3x3 Mahjong Speed Magic Cubes 5.5cm Puzzle Educational White Cube Puzzle early Educational Toys For Kids Adult Digital Cube',
        description:
          'Embark on a captivating journey through the world of groceries with 3x3x3 Mahjong Speed Magic Cubes 5.5cm Puzzle Educational White Cube Puzzle early Educational Toys For Kids Adult Digital Cube. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 3x3x3 Mahjong Speed Magic Cubes 5.5cm Puzzle Educational White Cube Puzzle early Educational Toys For Kids Adult Digital Cube transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 7840,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/2696762/1.jpg?6484',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: "2023 Solid color long lace up muslim women's gown dress",
        description:
          "Embark on a captivating journey through the world of groceries with 2023 Solid color long lace up muslim women's gown dress. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 2023 Solid color long lace up muslim women's gown dress transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.",
        price: 63200,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/7020722/1.jpg?4753',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'YongJun 3x3 Fisher Magic Cube Professional Speed Educational Cubes YJ Puzzle Cubo Magico Toys Birthday Christmas Gifts For Kids',
        description:
          'Embark on a captivating journey through the world of groceries with YongJun 3x3 Fisher Magic Cube Professional Speed Educational Cubes YJ Puzzle Cubo Magico Toys Birthday Christmas Gifts For Kids. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where YongJun 3x3 Fisher Magic Cube Professional Speed Educational Cubes YJ Puzzle Cubo Magico Toys Birthday Christmas Gifts For Kids transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 35280,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9099762/1.jpg?9190',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '3 Pack 16mm  Holder Small Finger Ring Somking Clip For Woman',
        description:
          'Embark on a captivating journey through the world of groceries with 3 Pack 16mm  Holder Small Finger Ring Somking Clip For Woman. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 3 Pack 16mm  Holder Small Finger Ring Somking Clip For Woman transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 10592,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/4578352/1.jpg?9887',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Paleo Baking Flour, 16ounce 454g X 2',
        description:
          'Embark on a captivating journey through the world of groceries with Paleo Baking Flour, 16ounce 454g X 2. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Paleo Baking Flour, 16ounce 454g X 2 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 15500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/1871862/1.jpg?4325',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Zcube 3x3 Rainbow Cube Four Colors 3x3x3 Magic Cube Education Learnning Cubo Magico Toys For Children',
        description:
          'Embark on a captivating journey through the world of groceries with Zcube 3x3 Rainbow Cube Four Colors 3x3x3 Magic Cube Education Learnning Cubo Magico Toys For Children. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Zcube 3x3 Rainbow Cube Four Colors 3x3x3 Magic Cube Education Learnning Cubo Magico Toys For Children transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 32340,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/8495762/1.jpg?1690',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Shifa Organic Massage Oil',
        description:
          'Embark on a captivating journey through the world of groceries with Shifa Organic Massage Oil. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Shifa Organic Massage Oil transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 5000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/2332201/1.jpg?8142',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Teff Flour 20 Ounce 567g X 2',
        description:
          'Embark on a captivating journey through the world of groceries with Teff Flour 20 Ounce 567g X 2. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Teff Flour 20 Ounce 567g X 2 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 16000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/2613262/1.jpg?1144',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Shengshou Frosted surface 2x2 magic cube 2x2x2 cubes professional competition puzzle cubo magico Cubes for kids',
        description:
          'Embark on a captivating journey through the world of groceries with Shengshou Frosted surface 2x2 magic cube 2x2x2 cubes professional competition puzzle cubo magico Cubes for kids. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Shengshou Frosted surface 2x2 magic cube 2x2x2 cubes professional competition puzzle cubo magico Cubes for kids transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 25480,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/4399762/1.jpg?9406',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '2xSmoking  Hand Finger Ring Smoker  Stand Rack',
        description:
          'Embark on a captivating journey through the world of groceries with 2xSmoking  Hand Finger Ring Smoker  Stand Rack. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 2xSmoking  Hand Finger Ring Smoker  Stand Rack transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 10397,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/4234042/1.jpg?5575',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'INDOMITABLE INDOMIE PACK- 70g (1carton)',
        description:
          'Embark on a captivating journey through the world of groceries with INDOMITABLE INDOMIE PACK- 70g (1carton). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where INDOMITABLE INDOMIE PACK- 70g (1carton) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 10200,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/789886/1.jpg?4702',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: "Metal Ring Finger Hand Rack  Holder For Man's Regular Smoking",
        description:
          "Embark on a captivating journey through the world of groceries with Metal Ring Finger Hand Rack  Holder For Man's Regular Smoking. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Metal Ring Finger Hand Rack  Holder For Man's Regular Smoking transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.",
        price: 1331,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/4694652/1.jpg?3375',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Wooden Tobacco  Smoking Holder With Box',
        description:
          'Embark on a captivating journey through the world of groceries with Wooden Tobacco  Smoking Holder With Box. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Wooden Tobacco  Smoking Holder With Box transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 10206,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/7351042/1.jpg?1380',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '3x   Hand Finger  Smoker  Stand Rack',
        description:
          'Embark on a captivating journey through the world of groceries with 3x   Hand Finger  Smoker  Stand Rack. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 3x   Hand Finger  Smoker  Stand Rack transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 7099,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/4134042/1.jpg?5075',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'MoYu Meilong SQ1 Magic Cubes Cube Educational Puzzle Toys Magic Cubes For Children Birthday Christmas Gifts',
        description:
          'Embark on a captivating journey through the world of groceries with MoYu Meilong SQ1 Magic Cubes Cube Educational Puzzle Toys Magic Cubes For Children Birthday Christmas Gifts. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where MoYu Meilong SQ1 Magic Cubes Cube Educational Puzzle Toys Magic Cubes For Children Birthday Christmas Gifts transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 34300,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/0499762/1.jpg?9475',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '55 Pcs Reed Pampas Set Dried Flower for Arrangements Home De',
        description:
          'Embark on a captivating journey through the world of groceries with 55 Pcs Reed Pampas Set Dried Flower for Arrangements Home De. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 55 Pcs Reed Pampas Set Dried Flower for Arrangements Home De transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 4675,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/5087262/1.jpg?2999',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Pure Vegetable Cooking Oil - 5Litres',
        description:
          'Embark on a captivating journey through the world of groceries with Pure Vegetable Cooking Oil - 5Litres. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Pure Vegetable Cooking Oil - 5Litres transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 15000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/0182231/1.jpg?7608',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Pasta Spaghetti - 3pcs',
        description:
          'Embark on a captivating journey through the world of groceries with Pasta Spaghetti - 3pcs. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Pasta Spaghetti - 3pcs transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 4699,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/381667/1.jpg?1258',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Pure Vegetable Cooking Oil - 5L',
        description:
          'Embark on a captivating journey through the world of groceries with Pure Vegetable Cooking Oil - 5L. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Pure Vegetable Cooking Oil - 5L transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 13500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/0010501/1.jpg?0542',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Vegetable Cooking Oil 4.6 Litres',
        description:
          'Embark on a captivating journey through the world of groceries with Vegetable Cooking Oil 4.6 Litres. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Vegetable Cooking Oil 4.6 Litres transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 14499,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/2794801/1.jpg?1006',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Vegetable Cooking Oil - 10 Litres At A Promo Price Now',
        description:
          'Embark on a captivating journey through the world of groceries with Vegetable Cooking Oil - 10 Litres At A Promo Price Now. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Vegetable Cooking Oil - 10 Litres At A Promo Price Now transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 25800,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/6711532/1.jpg?2272',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Vegetable Oil 5 Litres X 4',
        description:
          'Embark on a captivating journey through the world of groceries with Vegetable Oil 5 Litres X 4. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Vegetable Oil 5 Litres X 4 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 50000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/8794722/1.jpg?8765',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Pure Vegetable Cooking Oil - 3.5 Litres',
        description:
          'Embark on a captivating journey through the world of groceries with Pure Vegetable Cooking Oil - 3.5 Litres. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Pure Vegetable Cooking Oil - 3.5 Litres transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 12300,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/7405722/1.jpg?2104',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Pure Vegetable Cooking Oil - 1.5 Litres (x 6)',
        description:
          'Embark on a captivating journey through the world of groceries with Pure Vegetable Cooking Oil - 1.5 Litres (x 6). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Pure Vegetable Cooking Oil - 1.5 Litres (x 6) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 34500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/6305722/1.jpg?1322',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Pasta Spaghetti - 500g X 3pcs',
        description:
          'Embark on a captivating journey through the world of groceries with Pasta Spaghetti - 500g X 3pcs. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Pasta Spaghetti - 500g X 3pcs transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 4000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/286665/1.jpg?2465',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'MILK CHOCOLATE COOKIES (8Pcs,)',
        description:
          'Embark on a captivating journey through the world of groceries with MILK CHOCOLATE COOKIES (8Pcs,). This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where MILK CHOCOLATE COOKIES (8Pcs,) transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 25000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/822909/1.jpg?4437',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Marcaroni Twist',
        description:
          'Embark on a captivating journey through the world of groceries with Marcaroni Twist. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Marcaroni Twist transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 25000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/921216/1.jpg?2119',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Vegetable Cooking Oil - 5 Litres - 1 Carton  (4).',
        description:
          'Embark on a captivating journey through the world of groceries with Vegetable Cooking Oil - 5 Litres - 1 Carton  (4).. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Vegetable Cooking Oil - 5 Litres - 1 Carton  (4). transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 70000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/879119/1.jpg?9605',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Pure Vegetable Oil - 5 Litres',
        description:
          'Embark on a captivating journey through the world of groceries with Pure Vegetable Oil - 5 Litres. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Pure Vegetable Oil - 5 Litres transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 13500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/0809622/1.jpg?9466',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Raw Monofloral Manuka Honey, KFactor 16,340grm',
        description:
          'Embark on a captivating journey through the world of groceries with Raw Monofloral Manuka Honey, KFactor 16,340grm. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Raw Monofloral Manuka Honey, KFactor 16,340grm transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 25499,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/8766032/1.jpg?1081',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '2 In 1 Hot Pepper Oil Spray',
        description:
          'Embark on a captivating journey through the world of groceries with 2 In 1 Hot Pepper Oil Spray. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 2 In 1 Hot Pepper Oil Spray transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 6999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/8240221/1.jpg?5110',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Pure Vegetable Cooking Oil 1.4litre X 2',
        description:
          'Embark on a captivating journey through the world of groceries with Pure Vegetable Cooking Oil 1.4litre X 2. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Pure Vegetable Cooking Oil 1.4litre X 2 transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 15000,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/146735/1.jpg?0453',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '9X Smoker  Holder Ring For   Free Hands',
        description:
          'Embark on a captivating journey through the world of groceries with 9X Smoker  Holder Ring For   Free Hands. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 9X Smoker  Holder Ring For   Free Hands transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 19312,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/5162042/1.jpg?2176',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: '12pcs/set International Chess King Queen Knight Rook Pawn Bishop Double-Sided Fondant Cake Chocolate Molds Kitchen Baking  Clay',
        description:
          'Embark on a captivating journey through the world of groceries with 12pcs/set International Chess King Queen Knight Rook Pawn Bishop Double-Sided Fondant Cake Chocolate Molds Kitchen Baking  Clay. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where 12pcs/set International Chess King Queen Knight Rook Pawn Bishop Double-Sided Fondant Cake Chocolate Molds Kitchen Baking  Clay transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 28420,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/7667362/1.jpg?2911',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Anti Attack Spray',
        description:
          'Embark on a captivating journey through the world of groceries with Anti Attack Spray. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Anti Attack Spray transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 5999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/8864962/1.jpg?4919',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Dark Soy Sauce.',
        description:
          'Embark on a captivating journey through the world of groceries with Dark Soy Sauce.. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Dark Soy Sauce. transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 6500,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/2866962/1.jpg?5318',
        quantity: 20,
        categoryId: 5,
      },
      {
        name: 'Dark Soy Sauce   2bottle',
        description:
          'Embark on a captivating journey through the world of groceries with Dark Soy Sauce   2bottle. This extraordinary grocery collection not only sets a new standard but also redefines the very essence of culinary exploration. Immerse yourself in a rich tapestry of innovative products, each telling its own story and pushing the boundaries of flavor and quality. Step into a world where Dark Soy Sauce   2bottle transcends the ordinary, introducing you to a realm of culinary possibilities previously unexplored. Bid farewell to conventional grocery experiences as this collection weaves together a seamless and boundary-breaking shopping adventure, promising to elevate your every meal and delight your taste buds in ways you never thought possible.',
        price: 7999,
        image:
          'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/3866962/1.jpg?5317',
        quantity: 20,
        categoryId: 5,
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
