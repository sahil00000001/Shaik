import ServicePage from "@/app/components/ServicePage"

export default function StandardSOC() {
  return (
    <ServicePage
      title="Standard Managed SOC"
      description="Our Standard Managed SOC provides comprehensive security monitoring and management services. We help organizations maintain robust security posture through continuous monitoring, threat detection, and incident response."
      services={[
        "Managed SOC",
        "Data Security",
        "Network Security Services",
        "Application Security",
        "SIEM Services",
        "SOAR",
        "Host Data Loss Prevention",
      ]}
    />
  )
}

