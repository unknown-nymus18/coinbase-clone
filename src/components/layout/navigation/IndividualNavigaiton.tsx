import NavigationSection from "./NavigationSection";
import type { NavigationVariant } from "./navigationData";

interface Props {
  variant?: NavigationVariant;
  onNavigate?: () => void;
}

function IndividualNavigation({ variant, onNavigate }: Props) {
  return (
    <NavigationSection
      section="individuals"
      variant={variant}
      onNavigate={onNavigate}
    />
  );
}

export default IndividualNavigation;
