import NavigationSection from "./NavigationSection";
import type { NavigationVariant } from "./navigationData";

interface Props {
  variant?: NavigationVariant;
  onNavigate?: () => void;
}

function DevelopersNavigation({ variant, onNavigate }: Props) {
  return (
    <NavigationSection
      section="developers"
      variant={variant}
      onNavigate={onNavigate}
    />
  );
}

export default DevelopersNavigation;
