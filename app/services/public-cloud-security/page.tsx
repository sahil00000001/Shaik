import ServicePage from "@/app/components/ServicePage"

export default function PublicCloudSecurity() {
  return (
    <ServicePage
      title="Public Cloud Managed Security"
      description="Secure your cloud infrastructure with our comprehensive managed security services. We provide end-to-end protection for your public cloud environments, ensuring robust security and compliance."
      services={[
        "Hybrid Multicloud Security",
        "Public Cloud Security Solutions",
        "Dark Web Protection",
        "Advanced MDR",
      ]}
    />
  )
}

