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
    slug: "sales-dashboard",
    title: "Automated Sales Dashboard Script",
    category: "Automation",
    summary: "Automated sales reporting from raw files to KPI dashboard outputs.",
    problem: "Manual weekly reporting was slow, repetitive, and error-prone.",
    solution:
      "Built a Python workflow to clean data, compute KPIs, and generate dashboard-ready outputs.",
    impact: [
      "Reporting time reduced by up to 80%",
      "Improved report consistency and accuracy",
      "Faster decision-making for business teams"
    ],
    stack: ["Python", "Pandas", "OpenPyXL", "Excel"]
  },
  {
    slug: "data-cleaning",
    title: "Data Cleaning Automation Script",
    category: "Automation",
    summary: "Cleaned messy datasets with automated validation and standardization.",
    problem: "Data quality issues delayed analysis and caused reporting mistakes.",
    solution:
      "Created repeatable cleanup rules for missing values, duplicates, and format normalization.",
    impact: [
      "Higher quality datasets for analytics",
      "Reduced manual cleanup effort",
      "Reliable and repeatable data processing"
    ],
    stack: ["Python", "Pandas", "NumPy"]
  },
  {
    slug: "inventory-management",
    title: "Inventory Management Script",
    category: "Automation",
    summary: "Tracked stock levels, low-stock alerts, and reorder visibility.",
    problem: "Manual stock tracking caused delays and stock-out risk.",
    solution:
      "Automated inventory calculations and built clear status summaries for operators.",
    impact: [
      "Improved stock monitoring",
      "Reduced stock-out incidents",
      "Faster inventory reporting"
    ],
    stack: ["Python", "Excel", "CSV Automation"]
  },
  {
    slug: "payroll-automation",
    title: "Payroll Automation Script",
    category: "Automation",
    summary: "Automated payroll calculations and generated payslip PDFs.",
    problem: "Payroll preparation required repetitive manual calculations.",
    solution:
      "Built salary processing logic and PDF generation pipeline from source spreadsheets.",
    impact: [
      "Faster payroll cycles",
      "Lower manual errors",
      "Consistent payslip formatting"
    ],
    stack: ["Python", "OpenPyXL", "FPDF"]
  },
  {
    slug: "file-organizer",
    title: "Advanced File Organizer",
    category: "Desktop App",
    summary: "Desktop utility for sorting and cleaning files in bulk.",
    problem: "Unstructured folders wasted team time and increased clutter.",
    solution: "Created a configurable app for sorting files by type, name, and date.",
    impact: ["Faster file management", "Cleaner folder structure", "Less manual sorting work"],
    stack: ["Python", "Tkinter", "OS/File APIs"]
  },
  {
    slug: "inventory-billing",
    title: "Inventory + Billing Software",
    category: "Desktop App",
    summary: "Combined billing and inventory workflows in one desktop tool.",
    problem: "Separate systems made operations fragmented and slow.",
    solution:
      "Built integrated stock + billing modules with reporting and product management.",
    impact: ["Unified workflow", "Faster checkout operations", "Better stock visibility"],
    stack: ["Python", "SQLite", "Tkinter"]
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    category: "Desktop App",
    summary: "Generated secure passwords with rule-based customization.",
    problem: "Weak or repeated passwords created security risks.",
    solution: "Built a desktop tool for secure password generation and storage helpers.",
    impact: ["Stronger password hygiene", "Faster secure password creation"],
    stack: ["Python", "Tkinter"]
  },
  {
    slug: "payroll-system",
    title: "Payroll Management System + Payslip Generator",
    category: "Desktop App",
    summary: "Managed employee payroll records with payslip exports.",
    problem: "Growing payroll data needed a structured internal system.",
    solution: "Created payroll modules for employee records, payroll runs, and exports.",
    impact: ["Centralized payroll records", "Improved payroll transparency"],
    stack: ["Python", "Tkinter", "SQLite"]
  },
  {
    slug: "calculator",
    title: "Simple Calculator",
    category: "Desktop App",
    summary: "Lightweight desktop calculator for daily operations.",
    problem: "Need for a quick utility app in internal workflows.",
    solution: "Built a clean calculator interface focused on speed and usability.",
    impact: ["Quick day-to-day calculations", "Simple and reliable experience"],
    stack: ["Python", "Tkinter"]
  },
  {
    slug: "unit-converter",
    title: "Unit Converter",
    category: "Desktop App",
    summary: "Fast unit conversions across categories in one tool.",
    problem: "Frequent manual conversions slowed operational tasks.",
    solution: "Developed a converter with category-based units and quick results.",
    impact: ["Faster conversion workflows", "Reduced conversion mistakes"],
    stack: ["Python", "Tkinter"]
  }
];
