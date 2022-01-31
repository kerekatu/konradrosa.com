import Tooltip from '@/components/Tooltip'

export default function interpolateTooltip(str: string) {
  if (!str) return
  const pattern = new RegExp(/(\[.*?\]\(.*?\))/g)
  const parts = str.split(pattern)

  return parts.map((part, index) =>
    part.match(pattern) ? (
      <Tooltip tip={part.replace(/(\[.*?\]\(|\))/g, '')} key={index}>
        <u>{part.replace(/(\[|\]\(.*?\))/g, '')}</u>
      </Tooltip>
    ) : (
      part
    )
  )
}
