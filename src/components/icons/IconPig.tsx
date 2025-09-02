type Props = {
  className?: string;
};

const Icon = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M18 17.9c1.8-.9 3-2.5 3-5.1c0-1.8-.5-3.4-1.5-4.9c1.5-.3 2.5-1.5 2.5-3V3h-3c-1.3 0-2.4.8-2.8 2a10 10 0 0 0-8.4 0C7.4 3.8 6.3 3 5 3H2v2a3 3 0 0 0 2.5 2.9C3.5 9.3 3 11 3 12.8c0 2.6 1.2 4.2 3 5.1m4-3.9v-2m4 2v-2" />
      <path d="M14 22a4 4 0 1 0-2-7.45A4 4 0 1 0 10 22Zm-4-4h.01M14 18h.01" />
    </g>
  </svg>
);

export default Icon;
