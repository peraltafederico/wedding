import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Section({ children, className }: Props) {
  return <section className={clsx('p-8', className)}>{children}</section>;
}

export default Section;
