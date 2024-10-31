const admin = {
  id: "admin-001",
  name: "Admin",
  email: "admin@dev.com",
  password: "123",
};

const employees = [
  {
    id: "emp-001",
    name: "John",
    email: "john@dev.com",
    password: "123",
    tasks: [
      {
        id: "task-001",
        title: "Prepare Budget Report",
        description: "Compile and analyze financial data for the Q3 report.",
        date: "2024-11-01",
        category: "Finance",
        active: true,
        new: false,
        completed: false,
        failed: false,
        style: "bg-blue-500"
      },
      {
        id: "task-002",
        title: "Attend Client Meeting",
        description: "Discuss project timeline and requirements.",
        date: "2024-11-05",
        category: "Meetings",
        active: true,
        new: true,
        completed: false,
        failed: false,
        style: "bg-yellow-500"
      },
    ],
    taskCounts: {
      completed: 0,
      active: 2,
      failed: 0,
      new: 1,
    },
  },
  {
    id: "emp-002",
    name: "Jane",
    email: "jane@dev.com",
    password: "123",
    tasks: [
      {
        id: "task-001",
        title: "Update Website Content",
        description: "Revise homepage text and update images.",
        date: "2024-10-30",
        category: "Marketing",
        active: true,
        new: false,
        completed: false,
        failed: false,
        style: "bg-pink-500"
      },
      {
        id: "task-002",
        title: "Fix Server Issue",
        description: "Resolve downtime issue reported by users.",
        date: "2024-11-02",
        category: "IT",
        active: true,
        new: true,
        completed: false,
        failed: false,
        style: "bg-red-500"
      },
      {
        id: "task-003",
        title: "Prepare Marketing Plan",
        description: "Develop strategies for the holiday season.",
        date: "2024-11-10",
        category: "Marketing",
        active: false,
        new: true,
        completed: false,
        failed: false,
        style: "bg-green-500"
      },
    ],
    taskCounts: {
      completed: 0,
      active: 2,
      failed: 0,
      new: 2,
    },
  },
  {
    id: "emp-003",
    name: "Mike",
    email: "mike@dev.com",
    password: "123",
    tasks: [
      {
        id: "task-001",
        title: "Inventory Audit",
        description: "Verify stock levels and update system.",
        date: "2024-10-29",
        category: "Inventory",
        active: false,
        new: false,
        completed: true,
        failed: false,
        style: "bg-indigo-500"
      },
    ],
    taskCounts: {
      completed: 1,
      active: 0,
      failed: 0,
      new: 0,
    },
  },
  {
    id: "emp-004",
    name: "Susan",
    email: "susan@dev.com",
    password: "123",
    tasks: [
      {
        id: "task-001",
        title: "Product Launch",
        description: "Organize event for the new product release.",
        date: "2024-11-15",
        category: "Marketing",
        active: true,
        new: true,
        completed: false,
        failed: false,
        style: "bg-purple-500"
      },
      {
        id: "task-002",
        title: "Email Campaign",
        description: "Draft emails for Black Friday promotions.",
        date: "2024-10-31",
        category: "Marketing",
        active: false,
        new: false,
        completed: true,
        failed: false,
        style: "bg-teal-500"
      },
      {
        id: "task-003",
        title: "System Update",
        description: "Upgrade server software.",
        date: "2024-11-07",
        category: "IT",
        active: true,
        new: true,
        completed: false,
        failed: false,
        style: "bg-gray-500"
      },
    ],
    taskCounts: {
      completed: 1,
      active: 2,
      failed: 0,
      new: 2,
    },
  },
  {
    id: "emp-005",
    name: "Alex",
    email: "alex@dev.com",
    password: "123",
    tasks: [
      {
        id: "task-001",
        title: "Customer Support",
        description: "Handle tickets and assist customers.",
        date: "2024-10-29",
        category: "Support",
        active: true,
        new: false,
        completed: false,
        failed: false,
        style: "bg-orange-500"
      },
      {
        id: "task-002",
        title: "Project Planning",
        description: "Draft timelines for new project.",
        date: "2024-11-12",
        category: "Management",
        active: false,
        new: true,
        completed: false,
        failed: true,
        style: "bg-red-500"
      },
      {
        id: "task-003",
        title: "Team Meeting",
        description: "Weekly sync-up with the team.",
        date: "2024-10-30",
        category: "Meetings",
        active: false,
        new: false,
        completed: true,
        failed: false,
        style: "bg-blue-500"
      },
    ],
    taskCounts: {
      completed: 1,
      active: 1,
      failed: 1,
      new: 1,
    },
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
