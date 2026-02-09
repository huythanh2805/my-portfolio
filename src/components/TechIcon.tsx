export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component

  return (
    <>
      <Component className="size-12 fill-[url(#tech-icon-gradient)]" />

      <svg className="absolute size-0" aria-hidden>
        <defs>
          <linearGradient id="tech-icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(110 231 183)" />
            <stop offset="100%" stopColor="rgb(56 189 248)" />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}
