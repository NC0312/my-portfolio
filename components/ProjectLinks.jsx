import { ArrowUpRight } from "./Icon";

export default function ProjectLinks({ project }) {
  if (!project.live && !project.github) {
    return (
      <p className="t-small text-muted">Internal platform, not publicly accessible.</p>
    );
  }
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-1 t-small">
      {project.live && (
        <li>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex min-h-11 items-center gap-1"
          >
            Live site <ArrowUpRight width={14} height={14} />
            <span className="sr-only"> for {project.title} (opens in a new tab)</span>
          </a>
        </li>
      )}
      {project.github && (
        <li>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex min-h-11 items-center gap-1"
          >
            Source <ArrowUpRight width={14} height={14} />
            <span className="sr-only"> code for {project.title} (opens in a new tab)</span>
          </a>
        </li>
      )}
    </ul>
  );
}
