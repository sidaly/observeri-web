import {
  CalendarRange,
  ClipboardCheck,
  FileBarChart,
  ListChecks,
  ScrollText,
  ShieldAlert,
  Users,
  type LucideIcon,
} from "lucide-react";

export const auditManagementIcon = ClipboardCheck;

export type AuditLifecycle = {
  id: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

export const auditLifecycle: AuditLifecycle[] = [
  {
    id: "charter",
    label: "Audit charter",
    title: "A charter the engagement actually uses",
    description:
      "Purpose, authority, independence, and scope stay on the function, and every engagement inherits that mandate instead of restating it in a PDF.",
    points: ["Purpose and authority", "Independence", "Scope of the function", "Inherited by each engagement"],
    icon: ScrollText,
  },
  {
    id: "planning",
    label: "Planning and resourcing",
    title: "One plan for engagements, people, and hours",
    description:
      "Build the annual plan from the audit risk register, then see planned hours, hours used, and budget utilization before an engagement slips past its end date.",
    points: ["Annual plan", "Engagements from the risk register", "Planned hours and hours used", "Budget utilization"],
    icon: CalendarRange,
  },
  {
    id: "fieldwork",
    label: "Audit fieldwork",
    title: "Fieldwork on the same record as the plan",
    description:
      "Open the engagement and move it from planned through fieldwork, reporting, and completion without a second spreadsheet for status.",
    points: ["Engagement status", "Fieldwork", "End date", "Link back to the risk"],
    icon: ShieldAlert,
  },
  {
    id: "controls",
    label: "Control testing",
    title: "Tests that stay next to the finding",
    description:
      "Assess design and operating effectiveness inside the engagement, record exceptions, and rate the control without leaving the audit.",
    points: ["Design effectiveness", "Operating effectiveness", "Exceptions", "Effectiveness rating"],
    icon: ClipboardCheck,
  },
  {
    id: "issues",
    label: "Issues and actions",
    title: "A finding stays open until the action closes",
    description:
      "The follow-up tracker keeps the owner, the due date, overdue actions, and the evidence that the finding is done.",
    points: ["Owner", "Due date", "Overdue actions", "Closure evidence"],
    icon: ListChecks,
  },
  {
    id: "reporting",
    label: "Audit reporting",
    title: "A report the audit committee can use",
    description:
      "Issue findings with a risk level and an owner, and assemble the report management and the committee receive from the same engagement.",
    points: ["Finding", "Risk level", "Owner", "Committee report"],
    icon: FileBarChart,
  },
];

export const auditPillars = [
  {
    title: "Charter and risk register",
    description: "The mandate and the risks that justify the year sit under the plan, so scope is not a document nobody opens.",
    icon: ScrollText,
  },
  {
    title: "Plan, staff, and test",
    description: "Engagements, hours, budget, and control tests share one record from planning through fieldwork.",
    icon: Users,
  },
  {
    title: "Report and follow up",
    description: "The report and the action plan are the same work. A critical finding stays visible until it closes.",
    icon: FileBarChart,
  },
];

export const auditComparison = [
  {
    capability: "Audit charter",
    traditional: "A PDF that is restated, or ignored, when an engagement is scoped.",
    observeri: "Purpose, authority, independence, and scope are inherited by every engagement.",
  },
  {
    capability: "Audit planning",
    traditional: "An annual plan in a spreadsheet, detached from the risks that justified it.",
    observeri: "The annual plan and each engagement are built from the audit risk register.",
  },
  {
    capability: "Resourcing",
    traditional: "Hours are guessed, then discovered when the engagement is already late.",
    observeri: "Planned hours, hours used, and budget utilization sit on the plan.",
  },
  {
    capability: "Control testing",
    traditional: "Tests, exceptions, and findings live in different files.",
    observeri: "Design and operating effectiveness, exceptions, and the rating stay on the engagement.",
  },
  {
    capability: "Issues and actions",
    traditional: "The finding is issued, then the follow-up moves to email.",
    observeri: "The follow-up tracker holds owner, due date, overdue status, and closure evidence.",
  },
  {
    capability: "Audit reporting",
    traditional: "The report is compiled after the work, then the record stops.",
    observeri: "Findings, risk level, owners, and the committee report stay tied to the open actions.",
  },
];
