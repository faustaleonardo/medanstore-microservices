'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Items',
      [
        {
          name: 'Samsung Galaxy S10 Plus',
          price: 9000000,
          description:
            '1 New Samsung S10 Plus 128 GB / 256 GB / 1 TB. Phone comes in box Charging Adapter, headphones and charging cable. Also included is remaining warranty from Samsung.',
          stock: 50,
          condition: 'New',
          cpu:
            'Exynos: Octa-core (2x2.73 GHz Mongoose-M4, 2x2.31 GHz Cortex-A75 and 4x1.95 GHz Cortex-A55)',
          display:
            '3040×1440 (2280×1080 for S10e) 1440p Dynamic AMOLED capacitive touchscreen Gorilla Glass 6',
          ram: '8GB',
          storage: '128GB',
          battery: '4100 mAh',
          rearCamera:
            '12MP Telephoto Camera OIS + 12MP Wide-angle Camera OIS + 16MP Ultra Wide Camera',
          frontCamera: '10MP Front + 8MP Depth Camera',
          os: 'Android 10.0 with One UI 2',
          network: '2G, 3G, 4G, 4G LTE, 5G',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Samsung Galaxy Note 10',
          price: 10500000,
          description:
            'The Note 10+ is one of the best phone Samsung has to offer in 2020, only being outdone by the Galaxy S20. Some of its highlights include an incredible AMOLED display, outstanding hardware, consistently good camera performance, and excellent battery life.',
          stock: 100,
          condition: 'New',
          cpu:
            'Octa-core Exynos: 2*2.73 GHz Mongoose M4 2*2.4 GHz Cortex-A75 4*1.9 GHz Cortex-A55',
          display: '3040×1440 (2280×1080 for Note 10)',
          ram: '8GB',
          storage: '256GB',
          battery: 'Non-removable Li-Ion 3500 mAh battery',
          rearCamera:
            '12MP Telephoto Camera OIS + 12MP Wide-angle Camera OIS + 16MP Ultra Wide Camera + VGA DepthVision (Note 10+ & Note 10+ 5G)',
          frontCamera: '10MP Front',
          os: 'Android 10.0 with One UI 2',
          network: '2G 3G 4G',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Samsung Galaxy S20 Plus',
          price: 15000000,
          description:
            'According to Geekbench 5, the S20 Plus is one of the most powerful smartphones on the market, with a multi-core CPU score of 3,034 with the Snapdragon 865 (2774 with Exynos 990) that beats most other phones while, not surprisingly, coming up short of the S20 Ultra, which scored 3,286, and also trailing the iPhone 11 Pro Max, which scored 3,424. ',
          stock: 100,
          condition: 'Used',
          cpu:
            'Exynos: Octa-core (2x2.73 GHz Mongoose M5, 2x2.60 GHz Cortex-A76 and 4x2.0 GHz Cortex-A55)',
          display:
            '3200×1440 1440p Dynamic AMOLED 2X Infinity-O capacitive touchscreen, Gorilla Glass 6, HDR10+, 120 Hz Refresh Rate',
          ram: '8GB',
          storage: '128GB',
          battery: '4500 mAh',
          rearCamera:
            '2 MP, f/1.8, 26mm (wide), Dual Pixel PDAF, OIS + 64 MP, f/2.0 (telephoto), PDAF, OIS, 3x hybrid optical zoom + 12 MP, f/2.2, 13mm (ultrawide), AF, Super Steady Video 0.3 MP ToF 3D (depth)',
          frontCamera: '10 MP, f/2.2, 26mm, 1/3.2", 1.22µm, Dual Pixel PDAF',
          os: 'Android 10.0 with One UI 2',
          network: '2G, 3G, 4G, 4G LTE, 5G',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Huawei P30 Pro',
          price: 11000000,
          description:
            'The design of P30 Pro is top drawer stuff, the display is outstanding and the cameras are truly some of the best ever seen on a phone.',
          stock: 10,
          condition: 'New',
          cpu:
            'Octa-core (2x 2.6 GHz Cortex A76, 2x 1.92 GHz Cortex A76, 4x 1.8 GHz Cortex A55)',
          display: '6.47 in (164 mm) 1080x2340 OLED, (398 ppi)',
          ram: '8 GB LPDDR4X RAM',
          storage: '128GB',
          battery: '4200 mAh',
          rearCamera:
            '40 MP IMX650 Wide (f/1.6, 1/1.7", 27mm, OIS) + 20 MP Ultrawide (f/2.2, 1/2.7", 16mm) + 8 MP Telephoto (f/3.4, 1/4", 125mm, OIS) + time-of-flight sensor, Leica optics, 5x optical zoom, phase detection and laser AF, dual-LED dual-tone flash',
          frontCamera: '32 MP, autofocus, f/2.0, 1080p video',
          os: 'Android 9.0 "Pie"',
          network: '2G 3G 4G',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Huawei Nova 5T',
          price: 6000000,
          description:
            "The new Leica Triple Camera powered by AI reveals life's drama, texture, colour and beauty in every photograph that will take your breath away. Designed for different scenarios, the 40 MP main RGB lens captures great details in everyday photos, while the 8 MP telephoto lens will focus on your distant shots and the whole new 20 MP Leica Ultra Wide Angle Lens is perfect for the landscape photos and macro shots. Life is about exploring. Take your HUAWEI Mate 20 Pro for fun to the beach or through the rain. The IP68 rated water and dust resistance1 means no worry of taking spills, splashes, and dunks.",
          stock: 100,
          condition: 'New',
          cpu:
            'Octa-core (2x 2.6 GHz Cortex A76, 2x 1.92 GHz Cortex A76, 4x 1.8 GHz Cortex A55)',
          display: '6.1 in (150 mm) 1080x2244 AMOLED, 408ppi pixel densit',
          ram: '6 GB LPDDR4X RAM',
          storage: '128GB',
          battery: '4000 mAh',
          rearCamera:
            'Triple: 40 MP IMX600 RGB (f/1.8, 1/1.7", OIS) + 20 MP Monochrome (f/1.6) + 8 MP RGB Telephoto (f/2.4), Leica optics, 3x optical zoom, phase detection and laser AF, dual-LED dual-tone flash',
          frontCamera: '24 MP, fixed-focus, f/2.0, 1080p video',
          os: 'Android 10.0',
          network: '2G 3G 4G',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Huawei Mate 20X',
          price: 12000000,
          description:
            'A visual art that embraces technology and craftsmanship. The HUAWEI Mate 20 X is built with a full vibrant display to accentuate its pure beauty. The immensely powerful engine inside unlocks future possibilities and creates a new path for intelligence.',
          stock: 10,
          condition: 'Used',
          cpu:
            'Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76 & 4x1.8 GHz Cortex-A55)',
          display: 'OLED capacitive touchscreen, 16M colors',
          ram: '6GB',
          storage: '128GB',
          battery: 'Non-removable Li-Po 5000 mAh battery',
          rearCamera:
            '40 MP, f/1.8, 27mm (wide), 1/1.7", PDAF, Laser AF8 MP, f/2.4, 80mm (telephoto), 1/4.0", PDAF, Laser AF, OIS, 3x optical zoom20 MP, f/2.2, 16mm (ultrawide), 1/2.7", PDAF, Laser AF',
          frontCamera: '24 MP, f/2.0, 26mm (wide), 1/2.8", 0.9µm',
          os: 'Android 9.0 (Pie); EMUI 9.1',
          network: 'GSM / HSPA / LTE',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Apple Iphone 7 Plus',
          price: 5550000,
          description:
            'This iPhone 7 Plus is a factory unlocked Apple smartphone with black finish and iOS for effortless usage. With its entire casing re-engineered, it is water resistant thus protected against spills and splashes, the oleophobic coating keeps off fingerprints. The highly responsive Home button is pressure sensitive with a built-in fingerprint sensor. It works with Taptic Engine for precise tactile feedback as you press. The built-in rechargeable lithium-ion battery provides enough power to last throughout the day, supporting up to 21 hours of talk time or 15 hours on a mobile data connection. The Retina display with 1920 x 1080-pixel resolution at 401 ppi delivers crisp and sharp images. A 12 MP iSight camera captures your precious moments brighter and more detailed with auto image stabilisation and HDR. The phone measures 158.2 x 77.9 x 7.3 mm, weighs 188 g and has a memory capacity of 32 GB. This device is compatible with Vodafone, EE, O2, Three, Tesco Mobile, Virgin Mobile Carriers.',
          stock: 100,
          condition: 'New',
          cpu: 'Quad-core 2.34 GHz (2x Hurricane + 2x Zephyr)',
          display: 'Type Retina IPS LCD capacitive touchscreen, 16M colors',
          ram: '3GB LPDDR4',
          storage: '32GB',
          battery: 'Non-removable Li-Ion 2900 mAh battery (11.1 Wh)',
          rearCamera: '12-megapixel',
          frontCamera: '7-megapixel',
          os: 'iOS 13.3.1',
          network: 'GSM / Edge / UMTS / HSPA+ / Dc-HSDPA / Fdd-LTE / TD-LTE',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Apple Iphone 8 Plus',
          price: 8490000,
          description:
            'This is a AAA+ Stock item, meaning unit is in good cosmetic condition and NO minor scrapes or scratches, just like a 100% new one! This item that has been professionally restored to working order. We know that you will be delighted by the phone we send you and we back that with a 30-Day satisfaction guarantee. If you aren’t 100% happy with your phone just return it to us in the same condition for a full refund.',
          stock: 100,
          condition: 'New',
          cpu: '2x Monsoon, 4x MMistral, 2100 MHz',
          display: '5.5 in, IPS, 1080 x 1920 pixels, 24 bit',
          ram: '3GB',
          storage: '64GB',
          battery: '2691mAh, Li-Ion',
          rearCamera: 'Dual 12MP',
          frontCamera: '7MP',
          os: 'iOS 13.3.1',
          network: 'GSM, CDMA2000, EV-DO, HSPA+, LTE, LTE Advanced',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Apple Iphone X',
          price: 6650000,
          description:
            'Depending on the condition item may have some marks or scratches, without any visible dents, comes with seller 12 Months warranty, comes with cable and adapter, 100% Tested, 100% working condition Condition: Excellent: No scratches or may have faint scratches on the frame seller would rate it 9.5 out of 10.Good: may have some marks or scratches, without any visible dents seller would rate it 9 out of 10 Fair: May have some marks and some scratches, seller would rate it 8.5 out of 10',
          stock: 10,
          condition: 'Used',
          cpu:
            'Hexa-core 64-bit (2x high power Monsoon cores at 2.39GHz + 4x low power Mistral cores at 1.42GHz)',
          display:
            '5.85 in (149 mm) Super Retina HD: AMOLED, 2436×1125 px resolution, (458 ppi) 625 cd/m2 max. brightness (typical), with dual-ion exchange-strengthened glass and 3D Touch',
          ram: '3 GB LPDDR4X RAM',
          storage: '64GB',
          battery: 'Battery	3.81 V 10.35 W·h (2716 mA·h) Li-ion',
          rearCamera: '12 MP with six-element lens, quad-LED',
          frontCamera: '7MP',
          os: 'iOS 13.3.1',
          network: 'GSM, CDMA2000, EV-DO, HSPA+, LTE, LTE Advanced',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Xiaomi Mi 9T Pro',
          price: 8400000,
          description:
            "Xiaomi Mi 9T Pro sports a six point three nine inch Super AMOLED display with felicity plus resolution with the new nineteen point five eastern aspect ratio. it has six hundreds of brightness. and four not three PPI. it's also protected by a two point five the curved Corning Gorilla Glass 5 for additional protection.",
          stock: 20,
          condition: 'New',
          cpu:
            'Octa-core (1x2.84 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485)',
          display: 'Super AMOLED capacitive touchscreen, 16M colors',
          ram: '6GB',
          storage: '128GB',
          battery: 'Battery	3.81 V 10.35 W·h (2716 mA·h) Li-ion',
          rearCamera:
            '48 MP, f/1.8, 26mm (wide), 1/2.0", 0.8µm, PDAF, Laser AF8 MP, f/2.4, 53mm (telephoto), 1/4.0", 1.12µm, PDAF, Laser AF, 2x optical zoom13 MP, f/2.4, 12mm (ultrawide), 1/3.1", 1.12µm',
          frontCamera: 'Motorized pop-up 20 MP, f/2.2, (wide), 1/3.4", 0.8µm',
          os: 'Android 9.0 (Pie); MIUI 10',
          network: 'GSM / HSPA / LTE',
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Xiaomi Pocophone F1',
          price: 6000000,
          description:
            'Xiaomi Pocophone comes with the protection of Corning Gorilla Glass 5 along with HDR10, 500 nits typ. brightness, and 120Hz. The dimension of the smartphone is 165.3 x 76.6 x 8.8 mm and it weighs 208 grams. The device supports Hybrid Dual SIM and runs on the Android 10.0 + MIUI 11 operating system.',
          stock: 10,
          condition: 'Used',
          cpu:
            'Octa-core (2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver)',
          display: 'IPS LCD capacitive touchscreen, 16M colors',
          ram: '6GB',
          storage: '128GB',
          battery: 'Non-removable Li-Po 4500 mAh battery',
          rearCamera:
            '64 MP, f/1.9, 26mm (wide), 1/1.72", 0.8µm, PDAF8 MP, f/2.2, 13mm (ultrawide), 1/4.0", 1.12µm2 MP, f/2.4, (macro), 1/5.0", 1.75µm2 MP, f/2.4, (depth)',
          frontCamera: '20 MP, f/2.2, 27mm (wide), 1/3.4", 0.8µm',
          os: 'Android 10.0; MIUI 11',
          network: 'GSM / HSPA / LTE',
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Oppo Reno 2 Z',
          price: 4000000,
          description:
            "The Oppo Reno 2 Z emphasizes camera performance over gaming performance, which is good for those who aren't into mobile gaming and instead like to capture and share life's precious moments using their smartphone.",
          stock: 100,
          condition: 'New',
          cpu:
            'Octa-core (1x2.4 GHz Kryo 475 Prime & 1x2.2 GHz Kryo 475 Gold & 6x1.8 GHz Kryo 475 Silver)',
          display:
            'AMOLED capacitive touchscreen, 16M colors. 6.5 inches, 103.5 cm2 (~89.7% screen-to-body ratio). 1080 x 2400 pixels, 20:9 ratio (~402 ppi density)',
          ram: '8GB',
          storage: '128GB',
          battery: 'Non-removable Li-Po 4025 mAh battery',
          rearCamera:
            '48 MP, f/1.7, 26mm (wide), 1/2.0", 0.8µm, PDAF, OIS13 MP, f/2.4, 53mm (telephoto), 1/3.4", 1.0µm, PDAF, 2x optical zoom8 MP, f/2.2, 13mm (ultrawide), 1/3.2", 1.4µm2 MP B/W, f/2.4, 1/5.0", 1.75µm',
          frontCamera: '32 MP, f/2.4, 26mm (wide), 1/2.8", 0.8µm',
          os: 'Android 10.0; MIUI 11',
          network: 'GSM / CDMA / HSPA / EVDO / LTE / 5G',
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Oppo A5',
          price: 1800000,
          description:
            'Oppo A5 smartphone was launched on 6th March 2020. The phone comes with a 6.70-inch touchscreen display with a resolution of 1440x3168 pixels. Oppo Find X2 is powered by a 2.84GHz octa-core Qualcomm Snapdragon 865 processor. The Oppo Find X2 supports Super VOOC fast charging.',
          stock: 10,
          condition: 'New',
          cpu:
            'Octa-core (1x2.84 GHz Kryo 585 & 3x2.42 GHz Kryo 585 & 4x1.8 GHz Kryo 585)',
          display:
            'AMOLED capacitive touchscreen, 1.07B colors. Size	6.7 inches, 111.7 cm2 (~90.9% screen-to-body ratio). Resolution 1440 x 3168 pixels (~513 ppi density). Protection Corning Gorilla Glass 6 HDR10 DCI-P3 100% 120Hz 240Hz touch-sensing 800 nits max brightness (advertised)',
          ram: '8GB',
          storage: '128GB',
          battery: 'Non-removable Li-Po 4200 mAh battery',
          rearCamera:
            '48 MP, f/1.7, 26mm (wide), 1/2.0", 0.8µm, PDAF, Laser AF, OIS13 MP, f/2.4, 52mm (telephoto), optical zoom, PDAF, Laser AF, OIS12 MP, f/2.2, 16mm (ultrawide), 1/2.4"',
          frontCamera: '32 MP, f/2.4, (wide), 1/2.8", 0.8µm',
          os: 'Android 10.0; ColorOS 7.1',
          network: 'GSM / HSPA / LTE / 5G',
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  },
};
