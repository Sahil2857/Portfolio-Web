export type Project = {
  slug: string;
  title: string;
  category: "Automation" | "Desktop App";
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
};

export const services = [
  {
    title: "Excel Workflow Automation",
    badge: "Reporting",
    points: [
      "Automate recurring report generation",
      "Clean and transform spreadsheet data",
      "Generate formatted business outputs"
    ]
  },
  {
    title: "Desktop Utility Tools",
    badge: "Productivity",
    points: [
      "Build custom internal automation apps",
      "Create file and document processors",
      "Reduce manual repetitive actions"
    ]
  },
  {
    title: "Custom Telegram Bot",
    badge: "Messaging",
    points: [
      "Automate team alerts and notifications",
      "Create command-driven support workflows",
      "Connect bot actions to business processes"
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "retail-desk-pro",
    title: "Retail Desk Pro",
    category: "Desktop App",
    summary: "Combined billing and inventory workflows in one desktop tool.",
    problem: "Separate systems made operations fragmented and slow.",
    solution:
      "Built integrated stock + billing modules with reporting and product management.",
    impact: ["Unified workflow", "Faster checkout operations", "Better stock visibility"],
    stack: ["Python", "SQLite", "Tkinter"]
  },
  {
    slug: "automation-scripts",
    title: "Data Automation & Dashboarding Scripts",
    category: "Automation",
    summary: "Comprehensive data workflows and dashboards to streamline reporting processes.",
    problem: "Manual data processing and dashboard generation were slow and error-prone.",
    solution: "Developed automated data extraction, cleaning, and visualization pipelines built with Python.",
    impact: ["Significantly reduced reporting time", "Increased data accuracy", "Visualized key metrics"],
    stack: ["Python", "Pandas", "Automation"]
  },
  {
    slug: "payroll-plus",
    title: "Payroll Plus",
    category: "Desktop App",
    summary: "Managed employee payroll records with automated payslip exports.",
    problem: "Growing payroll data needed a structured internal system.",
    solution: "Created payroll modules for employee records, payroll runs, and exports.",
    impact: ["Centralized payroll records", "Improved payroll transparency", "Faster processing"],
    stack: ["Python", "CustomTkinter", "SQLite"]
  }
];
