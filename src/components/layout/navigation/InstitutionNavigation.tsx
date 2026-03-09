import NavigationSection from "./NavigationSection";
import type { NavigationVariant } from "./navigationData";

interface Props {
  variant?: NavigationVariant;
  onNavigate?: () => void;
}

function InstitutionNavigation({ variant, onNavigate }: Props) {
  return (
    <NavigationSection
      section="institutions"
      variant={variant}
      onNavigate={onNavigate}
    />
  );
}

export default InstitutionNavigation;
