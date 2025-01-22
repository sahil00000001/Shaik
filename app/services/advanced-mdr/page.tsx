import ServicePage from "@/app/components/ServicePage"

export default function AdvancedMDR() {
  return (
    <ServicePage
      title="Advanced MDR (Managed Detection and Response)"
      description="Our Advanced MDR services provide comprehensive threat detection, investigation, and response capabilities. We leverage cutting-edge technologies and expert analysts to protect your organization 24/7."
      services={[
        "Endpoint Security",
        "Incident Management",
        "Threat Hunting",
        "Threat Intelligence",
        "Database Activity Monitoring",
        "Data Forensics",
        "DNS Security",
        "Zero Day Attacks",
        "MITRE ATT&CK",
        "Managed SOC",
      ]}
    />
  )
}

