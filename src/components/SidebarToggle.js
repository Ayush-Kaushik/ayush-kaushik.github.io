import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const SidebarToggle = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Open chat menu"
      className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-1 px-4 py-3 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 active:bg-blue-800 dark:active:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl dark:shadow-lg dark:hover:shadow-xl transition-all duration-200 sm:px-5 sm:py-4"
    >
      <FontAwesomeIcon icon={faRocket} className="text-lg sm:text-xl" />
      <span className="text-xs sm:text-sm mt-0.5">Ask AI</span>
    </button>
  );
};

export default SidebarToggle;