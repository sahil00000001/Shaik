import ServicePage from "@/app/components/ServicePage"

export default function SecurityConsulting() {
  return (
    <ServicePage
      title="Security Consulting Services"
      description="Our expert security consulting services help organizations identify, assess, and mitigate cybersecurity risks. We provide comprehensive solutions to protect your digital assets and ensure compliance with industry standards."
      services={[
        "Cybersecurity Assessment",
        "Cybersecurity Strategy",
        "Cybersecurity Governance",
        "Audit and Reporting",
        "Azure Sentinel Consulting",
      ]}
    />
  )
}

