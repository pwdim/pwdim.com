import styled, { keyframes } from 'styled-components';

// Keep your animation if you like it
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const breathe = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); } // Reduced scale for subtlety
  100% { transform: scale(1); }
`;

// --- Main Navbar Container ---
export const NavbarContainer = styled.nav`
  color: #a0a0a0;
  width: 100%;
  background: #121314; // Use a dark background like the example
  /* box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); */ // Optional shadow
  position: relative; // Needed for absolute positioning of mobile menu
  z-index: 100; // Ensure navbar stays on top
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; // Key for spacing elements
  padding: 10px 20px; // Adjust padding as needed
  gap: 15px; // Add some gap between main sections

  @media (min-width: 1024px) { // Match FlameMC's lg breakpoint
    padding: 10px 48px; // lg:px-12 equivalent
  }
  @media (min-width: 1280px) { // Match FlameMC's desktop breakpoint
    padding: 10px 96px; // desktop:px-24 equivalent
  }
`;

export const LogoLink = styled.div`
  display: inline-block; /* Keeps it from expanding unnecessarily */
  line-height: 0; /* Helps remove extra space below the image if it's display: block */
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
  display: block; /* Good practice for images to avoid extra bottom space */
  transition: transform 0.3s ease;

  /* Applying hover directly to Logo now might be simpler */
  /* &:hover {
    transform: scale(1.1);
  } */

  @media (max-width: 768px) {
    height: 40px;
  }
`;

// --- Desktop Navigation Links ---
// This container is hidden on mobile
export const NavLinksContainerDesktop = styled.div`
  display: none; // Hidden by default

  @media (min-width: 769px) { // Show only on larger screens (adjust breakpoint if needed)
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1; // Allow links to take up space but centered
  }
`;

// --- Right Section (Search, Hamburger, etc.) ---
export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; // Space between items in the right section
  flex-shrink: 0; // Prevent this section from shrinking too much
`;

// --- Navigation Links List (Used in both Desktop and Mobile) ---
export const NavLinksList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  gap: 20px; // Space between desktop links

  // Styles specific to when inside the Desktop container
  ${NavLinksContainerDesktop} & {
     // Desktop specific styles for UL if needed
     justify-content: center; // Center links within the desktop container
  }

  // Styles specific to when inside the Mobile container
  ${'' /* This will be styled within MobileMenuContainer */}
  flex-direction: column; // Default stack vertically for mobile
  width: 100%;
  padding: 20px 0; // Padding inside mobile menu

  @media (min-width: 769px) {
    flex-direction: row; // Row layout on desktop
    padding: 0;
    width: auto;
  }
`;

export const NavItem = styled.li`
  // Styles for individual list items
  width: 100%; // Take full width in mobile menu column layout

  @media (min-width: 769px) {
    width: auto; // Auto width on desktop
  }
`;

export const NavLinkStyled = styled.div` // Using div as it's wrapped by Link or <a>
  color: #a0a0a0; // Default color
  text-decoration: none;
  font-size: 1rem; // text-base equivalent
  font-weight: bold; // font-bold
  transition: color 0.2s ease-in-out; // duration-200 ease-in-out
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px; // Padding for clickable area
  justify-content: center; // Center text/icon within the link

  &:hover {
    color: #0ff; // hover:text-primary (adjust #0ff if your primary is different)
  }

  svg {
    font-size: 1.1rem; // Adjust icon size if needed
  }

  @media (min-width: 769px) {
    padding: 5px 0; // Less vertical padding on desktop
    justify-content: flex-start; // Align left on desktop
  }
`;

// --- Hamburger Button ---
// Displayed only on mobile
export const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: #a0a0a0; // Icon color
  font-size: 1.8rem; // Adjust size
  cursor: pointer;
  display: block; // Visible by default (for mobile-first approach)
  padding: 5px;
  z-index: 101; // Ensure it's above NavContent if needed

  &:hover {
    color: #0ff; // Hover color
  }

  @media (min-width: 769px) {
    display: none; // Hide on desktop
  }
`;

// --- Mobile Menu Container ---
// Appears when hamburger is clicked
export const MobileMenuContainer = styled.div`
  position: absolute;
  top: 100%; // Position below the navbar
  left: 0;
  width: 100%;
  background-color: #18191b; // Slightly different dark background
  border-top: 1px solid #333; // Separator line
  display: flex; // Use flex for the list inside
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 99; // Below navbar but above page content

  // Hide by default, shown by JS state, but keep structure for clarity
  // Actual visibility is controlled by conditional rendering in the component

   /* Add animations for appearing/disappearing */
   animation: slideDown 0.3s ease-out;

   @keyframes slideDown {
     from {
       opacity: 0;
       transform: translateY(-10px);
     }
     to {
       opacity: 1;
       transform: translateY(0);
     }
   }

   ${NavLinksList} { // Target the UL inside the mobile menu
     flex-direction: column; // Ensure column layout
     gap: 5px; // Adjust gap for mobile links
   }

   ${NavLinkStyled} {
     justify-content: center; // Center mobile links
     font-size: 1.1rem;
     padding: 12px 20px; // Larger clickable area for mobile
     width: 100%; // Make link take full width of NavItem
     text-align: center;
   }
`;


// --- Search ---
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  position: relative; // For potential message positioning
  background-color: #25262a; // bg-secondary-black
  border: 1px solid #444; // border-primary-gray (adjust color)
  border-radius: 6px; // rounded-md
  padding-left: 10px; // To make space for icon inside if needed
`;

export const SearchInput = styled.input`
  padding: 8px 12px 8px 8px; // py-2 pl-4 pr-5/12 (adjust pr as needed)
  border: none; // Remove default border
  background-color: transparent; // Use parent background
  color: #fff; // text-white
  font-size: 0.8rem; // text-xs
  width: 150px; // Adjust width as needed
  outline: none;

  &::placeholder {
    color: #888; // placeholder:text-secondary-gray
    font-size: 0.8rem; // placeholder:text-xs
  }

  @media (max-width: 480px) {
     width: 100px; // Shorter on very small screens
  }
`;

export const SearchButton = styled.button`
  padding: 8px 10px; // Match input vertical padding
  border: none;
  background-color: transparent; // Transparent background
  color: #888; // text-secondary-gray
  cursor: pointer;
  display: flex; // Align icon properly
  align-items: center;
  justify-content: center;

  &:hover {
    color: #ccc; // Slight hover effect
  }

  svg {
    font-size: 1rem;
  }
`;

// --- Empty Search Message ---
// Position adjusted slightly
export const EmptySearchMessage = styled.div`
  position: absolute;
  top: calc(100% + 5px); // Position below the navbar
  right: 20px; // Align near the search input area
  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 10; // Ensure visibility

  @media (max-width: 768px) {
    // Keep similar positioning or adjust as needed for mobile
     right: 10px;
     width: auto; // Don't force width
  }
`;