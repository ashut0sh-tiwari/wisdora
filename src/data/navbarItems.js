export const dropdownData = [
  {
    label: "What we do?",
    nestedItems: [
      {
        label: "Our Capabilities",
        description:
          "Wisdora delivers an agile, on-demand, and flexible resource solution that enables your learning and development initiatives to scale and provide measurable results.",
        link: "/our-capabilities",
      },
      {
        label: "Custom Solutions",
        description:
          "We specialize in designing and deploying custom learning solutions that incorporate innovative learning strategies and leading-edge technologies.",
        link: "/custom-solutions/learning-strategy",
        nestedItems: [
          {
            label: "Learning Strategy",
            link: "/products/mobile-phones",
            nestedItems: [
              {
                label: "Learning experience design",
              },
              {
                label: "Learning transformation",
              },
              {
                label: "Training need analysis",
              },
            ],
          },
          {
            label: "Learning Solutions",
            link: "/custom-solutions/learning-solutions",
          },
          {
            label: "Televisions",
            link: "/products/televisions",
          },
        ],
      },
      {
        label: "Clothing",
        nestedItems: [
          {
            label: "Men's Clothing",
            link: "/products/mens-clothing",
          },
          {
            label: "Women's Clothing",
            link: "/products/womens-clothing",
          },
        ],
      },
    ],
  },
  {
    label: "Who we are",
    nestedItems: [
      {
        label: "About Us",
        link: "/about",
      },
    ],
  },
];

export const menuItems = [
  {
    title: "What we do?",
    url: "/what-we-do",
    submenu: [
      {
        title: "Our capabilities",
        description:
          "Wisdora delivers an agile, on-demand, and flexible resource solution that enables your learning and development initiatives to scale and provide measurable results.",
        url: "/our-capabilities",
      },
      {
        title: "Custom Solutions",
        description:
          "We specialize in designing and deploying custom learning solutions that incorporate innovative learning strategies and leading-edge technologies.",
        url: "/custom-solutions/learning-strategy",
        submenu: [
          {
            title: "Learning Strategy",
            url: "/learning-strategy",
            submenu: [
              {
                title: "Learning experience design",
                url: "/learning-experience-design",
              },
              {
                title: "Learning transformation",
                url: "/learning-tranformation",
              },
              {
                title: "Training need analysis",
                url: "/training-need-analysis",
              },
            ],
          },
          {
            title: "Learning Solution",
            url: "/learning-solution",
            submenu: [
              {
                title: "experience design",
                url: "/learning-experience-design",
              },
              {
                title: "transformation",
                url: "/learning-tranformation",
              },
              {
                title: "Analysis",
                url: "/training-need-analysis",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Who we are",
    url: "/about",
    submenu: [
      {
        title: "About Us",
        url: "/about",
      },
    ],
  },
];
