// https://www.csshero.org/mesher/

type MeshProps = { children?: React.ReactNode };

export function Mesh({ children }: MeshProps) {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 h-full bg-gradient-radial blur" />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
