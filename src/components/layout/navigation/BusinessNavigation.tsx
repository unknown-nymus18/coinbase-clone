import NavigationSection from "./NavigationSection";
import type { NavigationVariant } from "./navigationData";

interface Props {
  variant?: NavigationVariant;
  onNavigate?: () => void;
}

function BusinessNavigation({ variant, onNavigate }: Props) {
  return (
    <NavigationSection
      section="businesses"
      variant={variant}
      onNavigate={onNavigate}
    />
  );
}

export default BusinessNavigation;
