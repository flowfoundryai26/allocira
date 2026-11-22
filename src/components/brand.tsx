export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand">
      <span className="brand-glyph" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>
        <strong>
          Allo<span>cira</span>
        </strong>
        {!compact && <small>by FlowFoundry AI Solutions</small>}
      </span>
    </span>
  );
}
