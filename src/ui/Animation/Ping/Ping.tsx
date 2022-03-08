export type PingProps = {};

export const Ping = ({}: PingProps) => {
  return (
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
      <span className="relative inline-flex h-3 w-3 rounded-full bg-primary-500" />
    </span>
  );
};
