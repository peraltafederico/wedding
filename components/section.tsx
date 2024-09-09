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
        {
          'p-8': !fullScreen,
          'w-screen h-screen': fullScreen,
        },
        'overflow-hidden',
        'relative'
      )}>
      {children}
    </section>
  );
}

export default Section;
