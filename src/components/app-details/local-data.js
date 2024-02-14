import {
  FaNpm,
  FaReact,
} from "react-icons/fa";
const icon_size = 50;
const localData = {
  // 1 - ACCORDION
  accordion: {
    id: "accordion",
    title: "Accordion",
    description: "Learn to create interactive collapsible content panels",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=482s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/accordian",
    },
    packages: {
      react: {
        link: "https://react.dev/",
        icon: <FaReact size={icon_size} />,
        title: "React",
      },
      other_packages: {
        active: false,
        link: "",
        icon: "",
        title: "",
      },
      other_packages2: {
        active: false,
        link: "",
        icon: "",
        title: "",
      },
    },
  },
  // 2 - Random Color Generator
  color_generator: {
    id: "color_generator",
    title: "Random Color Generator",
    description:
      "Dive into generating dynamic colors and learn about state management",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=1882s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/random-color",
    },
    packages: {
      react: {
        link: "https://react.dev/",
        icon: <FaReact size={icon_size} />,
        title: "React",
      },
      other_packages: {
        active: false,
        link: "",
        icon: "",
        title: "",
      },
      other_packages2: {
        active: false,
        link: "",
        icon: "",
        title: "",
      },
    },
  },
  // 3 - Star Rating
  star_rating: {
    id: "star_rating",
    title: "Star Rating",
    description:
      "Implement a user-friendly rating system",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=2722s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/star-rating",
    },
    packages: {
      react: {
        link: "https://react.dev/",
        icon: <FaReact size={icon_size} />,
        title: "React",
      },
      other_packages: {
        active: true,
        link: "https://www.npmjs.com/package/react-icons",
        icon: <img src="https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg" alt="react-icons" height={icon_size} />,
        title: "react-icons",
      },
      other_packages2: {
        active: false,
        link: "",
        icon: "",
        title: "",
      },
    },
  },
  // 4 - Image Slider
  image_slider: {
    id: "image_slider",
    title: "Image Slider",
    description:
      "Create a visually appealing way to browse images",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=3442s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/image-slider",
    },
    packages: {
      react: {
        link: "https://react.dev/",
        icon: <FaReact size={icon_size} />,
        title: "React",
      },
      other_packages: {
        active: true,
        link: "https://www.npmjs.com/package/react-icons",
        icon: <img src="https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg" alt="react-icons" height={icon_size} />,
        title: "react-icons",
      },
      other_packages2: {
        active: false,
        link: "",
        icon: "",
        title: "",
      },
    },
  },
  // 5 - Load More Button
  load_more_button: {
    id: "load_more_button",
    title: "Load More Button",
    description:
      "Enhance user experience by progressively loading content",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=4870s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/load-more-data",
    },
    packages: {
      react: {
        link: "https://react.dev/",
        icon: <FaReact size={icon_size} />,
        title: "React",
      },
      other_packages: {
        active: false,
        link: "",
        icon: "",
        title: "",
      },
      other_packages2: {
        active: false,
        link: "",
        icon: "",
        title: "",
      },
    },
  },
  // 6 - Tree View / Menu UI / Recursive Navigation
  tree_view: {
    id: "tree_view",
    title: "Tree View / Menu UI / Recursive Navigation",
    description:
      "Master recursive components for nested menus",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=5910s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/tree-view",
    },
    packages: {
      react: {
        link: "https://react.dev/",
        icon: <FaReact size={icon_size} />,
        title: "React",
      },
      other_packages: {
        active: true,
        link: "https://www.npmjs.com/package/react-icons",
        icon: <img src="https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg" alt="react-icons" height={icon_size} />,
        title: "react-icons",
      },
      other_packages2: {
        active: false,
        link: "",
        icon: "",
        title: "",
      },
    },
  },
  // 7 - QR Code Generator
  qrcode: {
    id: "qrcode",
    title: "QR Code Generator",
    description: "Delve into generating QR codes for quick information sharing",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=7312s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/qr-code-generator",
    },
    packages: {
      react: {
        link: "https://react.dev/",
        icon: <FaReact size={icon_size} />,
        title: "React",
      },
      other_packages: {
        active: true,
        link: "https://www.npmjs.com/package/react-qr-code",
        icon: <FaNpm size={icon_size} />,
        title: "react-qr-code",
      },
      other_packages2: {
        active: false,
        link: "",
        icon: "",
        title: "",
      },
    },
  },
};
export default localData;