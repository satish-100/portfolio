const data = [
  {
    id: '1',
    title: ' TATA JLR (APPLICATION) ',
    description:
      '(React based TCS internal Project) Jaguar Land Rover, part of Tata Motors since 2008, is Britains largest automotive manufacturer which designs, manufactures and sells some of the world best-known premium cars.',
    image: {
      src: 'https://gcdnb.pbrd.co/images/QEzOtHEjVJIG.png?o=1',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://apps.apple.com/us/app/syntho/id1615419392',
    },
    technologies: [
      '#typescript',
      '#react-native',
      '#react-native-web',
      '#mobx-state-tree',
      '#expo',
      '#i18next',
      '#react-navigation',
      '#sentry',
    ],
  },
  {
    id: '2',
    title: 'BAYER',
    description:
      '(React based application) Bayer AG is a German multinational pharmaceutical and biotechnology company and one of the largest pharmaceutical companies in the world.',
    image: {
      src: 'data:image/png;base64,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',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://apps.apple.com/us/app/minfin-currency-rates/id1574863878',
    },
    technologies: [
      '#typescript',
      '#react-native',
      '#mobx-keystone',
      '#i18next',
      '#firebase-analytics',
      '#google-maps',
    ],
  },
  {
    id: '3',
    title: 'TATA AIA',
    description:
      '(React based Application) Tata AIA life insurance, a leading life insurance company in India, offer various types of life insurance policy such as term, pension, ULIP and more.',
    image: {
      src: 'data:image/jpeg;base64,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',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://expo.dev/@v_snaichuk/rn-fashion?serviceType=classic&distribution=expo-go',
      repo: 'https://github.com/vsnaichuk/fashion-app',
    },
    technologies: [
      '#typescript',
      '#react-native',
      '#expo',
      '#react-native-reanimated',
      '#react-navigation',
    ],
  },
  {
    id: '4',
    title: 'BestPeers',
    description:
      'BestPeers Infosystem Private Limited .I have worked in this company as a front-end developer',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348072/portfolio/projects/react-marketplace/apiko-marketplace-lg_xppe9n.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://apiko-marketplace-app-snaichuk.herokuapp.com/',
      repo: 'https://github.com/vsnaichuk/apiko-marketplace-app-snaichuk',
    },
    technologies: [
      '#react',
      '#redux',
      '#socket.io',
      '#scss',
      '#formik',
      '#react-window',
      '#restapi',
    ],
  },
  {
    id: '5',
    title: ' Personal Project (Weather App)',
    description:
      '(React based Project)A weather app that pulls from the OpenWeatherMap API to allow users to search for and view the forecast in cities worldwide.',
    image: {
      src: 'data:image/png;base64,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',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://yourplaces-sv.netlify.app/',
      repo: 'https://github.com/vsnaichuk/MERN-places',
    },
    technologies: [
      '#react',
      '#nodejs',
      '#express',
      '#mongodb',
      '#react-query',
      '#react-transition-group',
      '#mongoose',
      '#jwt',
      '#aws',
    ],
  },
  // {
  //   id: '6',
  //   title: 'eCommerce Mobile App',
  //   description:
  //     'A Mobile eCommerce application built with React Native that includes cart functionality, push notifications, user authentication and user orders',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-shop/rn-shop-lg_fofglf.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://expo.dev/@v_snaichuk/online-shop-app',
  //     repo: 'https://github.com/vsnaichuk/RN-shop',
  //   },
  //   technologies: [
  //     '#react-native',
  //     'expo',
  //     '#redux',
  //     '#redux-toolkit',
  //     '#react-navigation',
  //     '#nodejs',
  //     '#express',
  //     '#mongodb',
  //   ],
  // },
  // {
  //   id: '7',
  //   title: 'Places Mobile App',
  //   description:
  //     'A Mobile application for sharing places that people visit from all over the world. Uses React Native, TypeScript, MobX and Native Device Features',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-places/rn-places-lg_ljyikm.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://expo.dev/@v_snaichuk/rn-places',
  //     repo: 'https://github.com/vsnaichuk/RN-places',
  //   },
  //   technologies: [
  //     '#react-native',
  //     '#typescript',
  //     '#expo',
  //     '#mobx',
  //     '#sqlite',
  //     '#react-native-maps',
  //     '#expo-location',
  //   ],
  // },
  // {
  //   id: '8',
  //   title: 'Shopping Cart',
  //   description:
  //     'Simple eCommerce cart application built with React and TypeScript. Uses SWR hook to fetch the data from the API and Styled Components',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/react-shop-cart/rn-shop-cart-lg_w3qxn6.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://shopping-cart-sv.netlify.app/',
  //     repo: 'https://github.com/vsnaichuk/React-ShoppingCart',
  //   },
  //   technologies: [
  //     '#react',
  //     '#typescript',
  //     '#material-ui',
  //     '#styled-components',
  //     '#swr',
  //     '#fakestoreapi',
  //   ],
  // },
];

export default data;
