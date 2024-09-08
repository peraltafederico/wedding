type Props = {
  children: React.ReactNode;
};

function Section({ children }: Props) {
  return <section className='p-8'>{children}</section>;
}

export default Section;
