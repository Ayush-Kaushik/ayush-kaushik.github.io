import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const SidebarToggle = ({ onClick }) => {
  return (
    <button 
      className="menu-toggle-button"
      onClick={onClick}
      aria-label="Open menu"
    >
      <FontAwesomeIcon icon={faRocket} /><br/> {`Ask AI`}
    </button>
  );
};

export default SidebarToggle;