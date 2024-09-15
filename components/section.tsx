import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
};

function Section({ children, fullScreen, className }: Props) {
  return (
    <section
      className={clsx(
        className,

        'section'
      )}>
      {children}
    </section>
  );
}

function Center({ children, className }: Props) {
  return <div className={clsx('flex justify-center items-center relative w-full p-8', className)}>{children}</div>;
}

export { Center };

export default Section;
