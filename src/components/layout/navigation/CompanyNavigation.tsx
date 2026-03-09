import NavigationSection from "./NavigationSection";
import type { NavigationVariant } from "./navigationData";

interface Props {
  variant?: NavigationVariant;
  onNavigate?: () => void;
}

function CompanyNavigation({ variant, onNavigate }: Props) {
  return (
    <NavigationSection
      section="company"
      variant={variant}
      onNavigate={onNavigate}
    />
  );
}

export default CompanyNavigation;
