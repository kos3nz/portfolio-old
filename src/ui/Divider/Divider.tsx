export type DividerProps = {
  text?: string;
};

export const Divider = ({ text }: DividerProps) => {
  return (
    <div className="my-6 flex items-center space-x-2">
      <span className="h-[1px] w-full bg-dark/20 dark:bg-light/40" />
      {text && (
        <>
          <p className="min-w-max text-sm text-dark/20 dark:text-light/40">
            {text}
          </p>
          <span className="h-[1px] w-full bg-dark/20 dark:bg-light/40" />
        </>
      )}
    </div>
  );
};
