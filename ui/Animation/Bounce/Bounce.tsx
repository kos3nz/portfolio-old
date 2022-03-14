export type BounceProps = {};

export const Bounce = ({}: BounceProps) => {
  return (
    <span className="flex h-3 w-3 animate-bounce items-center justify-center">
      <span className="inline-flex h-3 w-3 rounded-full bg-primary-500" />
    </span>
  );
};
