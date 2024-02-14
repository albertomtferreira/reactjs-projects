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
  // 8 - Light and Dark Mode / Theme Switch
  light_dark_mode: {
    id: "light_dark_mode",
    title: "Light and Dark Mode / Theme Switch",
    description: "Implement theme customization for user preference",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=7752s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/light-dark-mode",
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
  // 9 - Scroll Indicator
  scroll_indicator: {
    id: "scroll_indicator",
    title: "Scroll Indicator",
    description: "Add visual cues for scrolling progress on web pages",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=8771s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/scroll-indicator",
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
  // 10 - Tabs
  custom_tabs: {
    id: "custom_tabs",
    title: "Tabs",
    description: "Learn to create tabbed interfaces for better content organization",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=9810s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/custom-tabs",
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
  // 11 - Modal Popup
  modal_popup: {
    id: "modal_popup",
    title: "Modal Popup",
    description: "Design engaging pop-up dialogs",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=10622s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/custom-modal-popup",
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
  // 12 - GitHub Profile Finder
  github_profile_finder: {
    id: "github_profile_finder",
    title: "GitHub Profile Finder",
    description: "Integrate GitHub's API to search and display user profiles",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=11597s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/github-profile-finder",
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
  // 13 - Search Autocomplete with API Implementation
  search_autocomplete: {
    id: "search_autocomplete",
    title: "Search Autocomplete with API Implementation",
    description: "Enhance search functionality with autocomplete suggestions",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=12978s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/search-autocomplete-with-api",
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
  // 14 - Tic Tac Toe
  tic_tac_toe: {
    id: "stic_tac_toe",
    title: "Tic Tac Toe",
    description: "Build the classic game with a React twist",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=14022s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/tic-tact-toe",
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
  // 15 - Feature Flag Implementation
  feature_flag: {
    id: "feature_flag",
    title: "Feature Flag Implementation",
    description: "Learn to use feature flags for controlling feature rollout",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=15405s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/feature-flag",
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
  // 16 - useFetch Custom Hook
  use_fetch: {
    id: "use_fetch",
    title: "useFetch Custom Hook",
    description: "Simplify data fetching with a custom React hook",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=16522s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/use-fetch",
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
  // 17 - useOnclickOutside Custom Hook
  use_outside_click: {
    id: "use_outside_click",
    title: "useOnclickOutside Custom Hook",
    description: "Detect and respond to clicks outside a specified element",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=17235s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/use-outside-click",
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
  // 18 - useWindowResize / useResponsive Custom Hook
  use_window_resize: {
    id: "use_window_resize",
    title: "useWindowResize / useResponsive Custom Hook",
    description: "Create responsive designs with custom hooks",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=17802s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/use-window-resize",
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
  // 19 - Scroll to Top and Bottom
  scroll_top_bottom: {
    id: "scroll_top_bottom",
    title: "Scroll to Top and Bottom",
    description: "Improve navigation with scroll buttons",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=18157s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/scroll-to-top-and-bottom",
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
};
export default localData;