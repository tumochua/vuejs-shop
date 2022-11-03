// import { reactive } from "vue";
const todaysSales = {
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};
const topProduction = {
  data: {
    labels: [
      "Tokyo",
      "Mumbai",
      "Mexico City",
      "Shanghai",
      "Sao Paulo",
      "New York",
      "Karachi",
    ],
    datasets: [
      {
        label: "Series 1", // Name the series
        data: [500, 50, 2424, 14040, 14141, 4111, 4544], // Specify the data values array
        fill: true,
        borderColor: "#2196f3", // Add custom color border (Line)
        backgroundColor: "#2196f3", // Add custom color background (Points and Fill)
        borderWidth: 1, // Specify bar border width
      },
      {
        label: "Series 2", // Name the series
        data: [1288, 88942, 44545, 7588, 99, 242, 1417], // Specify the data values array
        fill: true,
        borderColor: "#4CAF50", // Add custom color border (Line)
        backgroundColor: "#4CAF50", // Add custom color background (Points and Fill)
        borderWidth: 1, // Specify bar border width
      },
    ],
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
  },
};

const earningsAndvisitorInsights = {
  earnings: {
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          // hoverOffset: 4,
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  },
  visitorInsights: {
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "violet"],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          borderColor: ["rgba(19, 247, 228,1)"],
          // backgroundColor: ["#28AEF3"],
          backgroundColor: (ctx) => {
            const canvas = ctx.chart.ctx;
            const gradient = canvas.createLinearGradient(0, 0, 0, 350);

            // gradient.addColorStop(0, "hsla(167,72%,60%,0)");
            // gradient.addColorStop(0, "hsla(160,72%,60%,0.7)");
            // gradient.addColorStop(1, "hsla(150,60%,60%,0.1)");
            gradient.addColorStop(0, "rgba(0, 231, 255, 0.9)");
            gradient.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
            gradient.addColorStop(1, "rgba(0, 231, 255, 0)");
            // gradient.addColorStop(1, "rgba(169, 223, 216, 0.01)");

            return gradient;
          },
          // fillColor:
          //   "linear-gradient(181.45deg, #A9DFD8 -6.54%, rgba(169, 223, 216, 0.01) 96.44%)",
          hoverBorderWidth: 5,
          borderWidth: 3,
          tension: 0.1,
        },
      ],
    },
    option: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  },
};
const sideBarUiAdmin = [
  {
    id: 1,
    name: "Dashboard",
    icon: require("@/assets/admin/sidebar/dashboard.png"),
    routerLinks: {
      name: "ProfileUser",
      params: { id: 1 },
    },
  },
  {
    id: 2,
    name: "Users",
    icon: require("@/assets/admin/sidebar/profile.png"),
    routerLinks: {
      name: "MyUsers",
      params: { id: 1 },
    },
  },
  {
    id: 3,
    name: "Leaderboard",
    icon: require("@/assets/admin/sidebar/leaderboard.png"),
    routerLinks: {
      name: "MyLeaderboard",
      params: { id: 1 },
    },
  },
  {
    id: 4,
    name: "Order",
    icon: require("@/assets/admin/sidebar/order.png"),
    routerLinks: {
      name: "MyOrders",
      params: { id: 1 },
    },
  },
  {
    id: 5,
    name: "Product",
    icon: require("@/assets/admin/sidebar/product.png"),
    routerLinks: {
      name: "MyProducts",
      params: { id: 1 },
    },
  },
  {
    id: 6,
    name: "Sales Report",
    icon: require("@/assets/admin/sidebar/sales-report.png"),
    routerLinks: {
      name: "MySalesReport",
      params: { id: 1 },
    },
  },
  {
    id: 7,
    name: "Message",
    icon: require("@/assets/admin/sidebar/message.png"),
    routerLinks: {
      name: "MyMessage",
      params: { id: 1 },
    },
  },
  {
    id: 8,
    name: "Settings",
    icon: require("@/assets/admin/sidebar/settings.png"),
    routerLinks: {
      name: "MySettings",
      params: { id: 1 },
    },
  },
  {
    id: 9,
    name: "Favourite",
    icon: require("@/assets/admin/sidebar/favourite.png"),
    routerLinks: {
      name: "MyFavourite",
      params: { id: 1 },
    },
  },
  {
    id: 10,
    name: "History",
    icon: require("@/assets/admin/sidebar/history.png"),
    routerLinks: {
      name: "MyHistory",
      params: { id: 1 },
    },
  },
  {
    id: 11,
    name: "Signout",
    icon: require("@/assets/admin/sidebar/logout.png"),
    routerLinks: {
      name: "MySignout",
      params: { id: 1 },
    },
  },
];
const salesSummarys = [
  {
    id: 1,
    icon: require("@/assets/admin/admin-content/icon-sales.png"),
    turnover: "$5k",
    title: "Total Sales",
    description: "+10% from yesterday",
  },
  {
    id: 2,
    icon: require("@/assets/admin/admin-content/icon-order.png"),
    turnover: "500",
    title: "Total Order",
    description: "+8% from yesterday",
  },
  {
    id: 1,
    icon: require("@/assets/admin/admin-content/icon-production.png"),
    turnover: "9",
    title: "Product Sold",
    description: "+2% from yesterday",
  },
  {
    id: 1,
    icon: require("@/assets/admin/admin-content/icon-customer.png"),
    turnover: "12",
    title: "New Customer",
    description: "+3% from yesterday",
  },
];

export {
  todaysSales,
  topProduction,
  earningsAndvisitorInsights,
  sideBarUiAdmin,
  salesSummarys,
};
