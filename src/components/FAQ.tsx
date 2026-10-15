import auditSeo from "@/data/auditSeo.json";
import { PageFaq } from "./AuditContent";

export const faqData = auditSeo["/"].faqs;
export const FAQ = () => <PageFaq path="/" />;
