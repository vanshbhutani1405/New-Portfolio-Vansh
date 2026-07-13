import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import CertificationsSection from './sections/CertificationsSection'
import LeadershipSection from './sections/LeadershipSection'
import ContactFooterSection from './sections/ContactFooterSection'

export default function App() {
  return (
    <div className="overflow-x-clip bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <LeadershipSection />
      <ContactFooterSection />
    </div>
  )
}
