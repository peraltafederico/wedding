import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
  fullWide?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function Section({ children, className }: Props) {
  return <section className={clsx(className, 'section')}>{children}</section>;
}

function Center({ children, className, fullWide, ...props }: Props) {
  return (
    <div
      className={clsx(
        'flex overflow-x-hidden justify-center items-center relative w-full px-4 flex-col md:px-20 h-svh',
        className,
        {
          '!px-0': fullWide,
        }
      )}
      {...props}>
      {children}
    </div>
  );
}

export { Center };

export default Section;
