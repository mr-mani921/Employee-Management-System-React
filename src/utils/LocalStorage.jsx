const admin = {
  id: "admin-001",
  email: "admin@company.com",
  password: "admin123",
};

const employees = [
  {
    id: "emp-001",
    email: "john.doe@company.com",
    password: "password123",
    tasks: [
      {
        title: "Prepare Budget Report",
        description: "Compile and analyze financial data for the Q3 report.",
        date: "2024-11-01",
        category: "Finance",
        active: true,
        new: false,
        completed: false,
        failed: false,
      },
      {
        title: "Attend Client Meeting",
        description: "Discuss project timeline and requirements.",
        date: "2024-11-05",
        category: "Meetings",
        active: true,
        new: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: "emp-002",
    email: "jane.smith@company.com",
    password: "password123",
    tasks: [
      {
        title: "Update Website Content",
        description: "Revise homepage text and update images.",
        date: "2024-10-30",
        category: "Marketing",
        active: true,
        new: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Server Issue",
        description: "Resolve downtime issue reported by users.",
        date: "2024-11-02",
        category: "IT",
        active: true,
        new: true,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare Marketing Plan",
        description: "Develop strategies for the holiday season.",
        date: "2024-11-10",
        category: "Marketing",
        active: false,
        new: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: "emp-003",
    email: "mike.jones@company.com",
    password: "password123",
    tasks: [
      {
        title: "Inventory Audit",
        description: "Verify stock levels and update system.",
        date: "2024-10-29",
        category: "Inventory",
        active: false,
        new: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: "emp-004",
    email: "susan.lee@company.com",
    password: "password123",
    tasks: [
      {
        title: "Product Launch",
        description: "Organize event for the new product release.",
        date: "2024-11-15",
        category: "Marketing",
        active: true,
        new: true,
        completed: false,
        failed: false,
      },
      {
        title: "Email Campaign",
        description: "Draft emails for Black Friday promotions.",
        date: "2024-10-31",
        category: "Marketing",
        active: false,
        new: false,
        completed: true,
        failed: false,
      },
      {
        title: "System Update",
        description: "Upgrade server software.",
        date: "2024-11-07",
        category: "IT",
        active: true,
        new: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: "emp-005",
    email: "alex.taylor@company.com",
    password: "password123",
    tasks: [
      {
        title: "Customer Support",
        description: "Handle tickets and assist customers.",
        date: "2024-10-29",
        category: "Support",
        active: true,
        new: false,
        completed: false,
        failed: false,
      },
      {
        title: "Project Planning",
        description: "Draft timelines for new project.",
        date: "2024-11-12",
        category: "Management",
        active: false,
        new: true,
        completed: false,
        failed: true,
      },
      {
        title: "Team Meeting",
        description: "Weekly sync-up with the team.",
        date: "2024-10-30",
        category: "Meetings",
        active: false,
        new: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

export const setLocalStorage = ()=> {
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}
export const getLocalStorage = ()=> {
    const empData = JSON.parse(localStorage.getItem('employees'))
    const adminData = JSON.parse(localStorage.getItem('admin'))
    return {empData,adminData};
}